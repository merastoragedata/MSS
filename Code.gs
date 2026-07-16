/**
 * KARJAT 400/220/33 kV SUBSTATION - MAINTENANCE PORTAL
 * Google Apps Script backend. Deploy as Web App:
 *   Deploy > New deployment > type: Web app
 *   Execute as: Me
 *   Who has access: Anyone
 * Then copy the /exec URL and give it to me - I hardcode it into app.js
 * as API_URL and the portal goes live against your Sheet.
 *
 * Bind this script to a Google Sheet (Extensions > Apps Script from within
 * the Sheet) so SpreadsheetApp.getActiveSpreadsheet() resolves correctly.
 * On first run, call setupSheets() once from the Apps Script editor
 * (Run > setupSheets) to create all required tabs with headers.
 */

const SHEET_BAYS = "Bays";
const SHEET_LOG = "MaintenanceLog";
const SHEET_PREFILL = "PrefillUsers";
const SHEET_SLD = "SLDDrawings";
const SHEET_CONFIG = "Config";
const SHEET_CHECKLIST = "ChecklistState";       // per bay+equipment+category sections/checkpoints
const SHEET_EQUIPINFO = "EquipmentInfo";        // per bay+equipment info panel (make/sr/etc)
const SHEET_MU = "MU_Remarks";                  // station-wide feed, bay-level only
const SHEET_TU = "TU_Remarks";                  // station-wide feed, bay-level only
const SHEET_EQUIP_MU = "Equipment_MU_Remarks";  // equipment-level ad hoc, NOT mirrored to feed
const SHEET_EQUIP_TU = "Equipment_TU_Remarks";  // equipment-level ad hoc, NOT mirrored to feed
const SHEET_CUSTOM_EQUIP = "CustomEquipment";   // user-added equipment beyond the auto-template

// ---------------------------------------------------------------------------
// ONE-TIME SETUP - run this manually once from the Apps Script editor.
// ---------------------------------------------------------------------------
function setupSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const defs = {
    [SHEET_BAYS]: ["BayID", "Name", "VoltageLevel", "Type", "ICTGroup", "Status", "UpdatedBy", "UpdatedAt"],
    [SHEET_LOG]: ["ID", "BayID", "EquipCode", "Category", "Date", "LoggedBy", "RemarksJSON", "MURemark", "TURemark", "GroupID", "CreatedAt"],
    [SHEET_PREFILL]: ["UserName"],
    [SHEET_SLD]: ["BayID", "DrawingJSON", "UpdatedBy", "UpdatedAt"],
    [SHEET_CONFIG]: ["Key", "Value"],
    [SHEET_CHECKLIST]: ["BayID", "EquipCode", "Category", "SectionsJSON", "UpdatedBy", "UpdatedAt"],
    [SHEET_EQUIPINFO]: ["BayID", "EquipCode", "InfoJSON", "UpdatedBy", "UpdatedAt"],
    [SHEET_MU]: ["ID", "BayID", "Category", "Date", "Remark", "LoggedBy", "CreatedAt"],
    [SHEET_TU]: ["ID", "BayID", "Category", "Date", "Remark", "LoggedBy", "CreatedAt"],
    [SHEET_EQUIP_MU]: ["ID", "BayID", "EquipCode", "Date", "Remark", "LoggedBy", "CreatedAt"],
    [SHEET_EQUIP_TU]: ["ID", "BayID", "EquipCode", "Date", "Remark", "LoggedBy", "CreatedAt"],
    [SHEET_CUSTOM_EQUIP]: ["BayID", "Code", "Label", "EquipType", "PerPhase", "AddedBy", "AddedAt"],
  };

  Object.keys(defs).forEach((name) => {
    let sh = ss.getSheetByName(name);
    if (!sh) sh = ss.insertSheet(name);
    if (sh.getLastRow() === 0) {
      sh.getRange(1, 1, 1, defs[name].length).setValues([defs[name]]);
      sh.setFrozenRows(1);
    }
  });

  seedBaysIfEmpty();
}

// Seeds the Bays sheet with the full bay master list, only if empty.
function seedBaysIfEmpty() {
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_BAYS);
  if (sh.getLastRow() > 1) return; // already seeded

  const rows = [
    // 400 kV
    ["400", "400/220 kV 167 MVA SPARE ICT", "400", "ICT-HV", "ICT-SPARE", "Active"],
    ["401", "400 kV 125 MVAr BUS REACTOR", "400", "Reactor", "", "Active"],
    ["402", "400 kV Tie Bay 1 (Bus Reactor - ICT 1)", "400", "Tie", "", "Active"],
    ["403", "400/220 kV 501 MVA ICT 1 HV", "400", "ICT-HV", "ICT1", "Active"],
    ["404", "400 kV KARJAT - GIRAWALI CKT 1", "400", "Line", "", "Active"],
    ["405", "400 kV TIE BAY 2 (GIRAWALI 1 - ICT 2)", "400", "Tie", "", "Active"],
    ["406", "400/220 kV 501 MVA ICT 2 HV", "400", "ICT-HV", "ICT2", "Active"],
    ["407", "400 kV KARJAT - GIRAWALI CKT 2", "400", "Line", "", "Active"],
    ["408", "400 kV TIE BAY 3 (GIRAWALI 2 - FUT BAY 1)", "400", "Tie", "", "Active"],
    ["409", "400/220 kV 501 MVA ICT 3 HV", "400", "ICT-HV", "ICT3", "Active"],
    ["410", "400 kV KARJAT - LONIKAND CKT 1", "400", "Line", "", "Active"],
    ["411", "400 kV TIE BAY 4 (LONIKAND 1 - FUT BAY 2)", "400", "Tie", "", "Active"],
    ["412", "400 kV FUTURE BAY 2", "400", "Future", "", "Future"],
    ["413", "400 kV KARJAT - LONIKAND CKT 2", "400", "Line", "", "Active"],
    ["414", "400 kV TIE BAY 5 (LONIKAND 2 - FUT BAY 3)", "400", "Tie", "", "Active"],
    ["415", "400 kV FUTURE BAY 3", "400", "Future", "", "Future"],
    // 220 kV
    ["202", "220 kV ICT 3 IV", "220", "ICT-IV", "ICT3", "Active"],
    ["203", "220 kV ICT 2 IV", "220", "ICT-IV", "ICT2", "Active"],
    ["204", "220 kV ICT 1 IV", "220", "ICT-IV", "ICT1", "Active"],
    ["205", "220 kV KARJAT - AHILYANAGAR CKT", "220", "Line", "", "Active"],
    ["206", "220 kV KARJAT - BHOSE CKT", "220", "Line", "", "Active"],
    ["207", "220 kV BUS COUPLER", "220", "BC", "", "Active"],
    ["208", "220 kV TBC", "220", "TBC", "", "Active"],
    ["209", "220 kV KARJAT - SHIRSUPHAL CKT", "220", "Line", "", "Active"],
    ["210", "220 kV KARJAT - BHIGWAN CKT", "220", "Line", "", "Active"],
    ["211", "220 kV KARJAT - JEUR CKT 1", "220", "Line", "", "Active"],
    ["212", "220 kV KARJAT - JEUR CKT 2", "220", "Line", "", "Active"],
    // 33 kV
    ["33-L1", "33 kV Line Bay", "33", "Line33", "", "Active"],
    ["33-BS1", "33 kV Bus Sectionaliser Bay", "33", "BS33", "", "Active"],
    ["33-T1", "33 kV Station Transformer Bay 1", "33", "StnTfr33", "", "Active"],
    ["33-T2", "33 kV Station Transformer Bay 2", "33", "StnTfr33", "", "Active"],
  ];

  const now = new Date().toISOString();
  const withMeta = rows.map((r) => [...r, "system-seed", now]);
  sh.getRange(2, 1, withMeta.length, withMeta[0].length).setValues(withMeta);
}

// ---------------------------------------------------------------------------
// HTTP entry points
// ---------------------------------------------------------------------------
function doGet(e) {
  try {
    const action = e.parameter.action || "ping";
    let result;
    switch (action) {
      case "ping":
        result = { ok: true, message: "Karjat portal API alive" };
        break;
      case "getBays":
        result = { bays: getAllRows(SHEET_BAYS) };
        break;
      case "getMaintenance":
        result = { records: getMaintenanceForBay(e.parameter.bayId, e.parameter.equipCode) };
        break;
      case "getPrefillUsers":
        result = { users: getAllRows(SHEET_PREFILL).map((r) => r.UserName) };
        break;
      case "getSLD":
        result = { drawing: getSLDForBay(e.parameter.bayId) };
        break;
      case "getConfig":
        result = { config: getConfigMap() };
        break;
      case "getChecklistState":
        result = { state: getChecklistState(e.parameter.bayId, e.parameter.equipCode, e.parameter.category) };
        break;
      case "getEquipmentInfo":
        result = { info: getEquipmentInfo(e.parameter.bayId, e.parameter.equipCode) };
        break;
      case "getGlobalRemarks":
        result = { records: getAllRows(e.parameter.kind === "TU" ? SHEET_TU : SHEET_MU) };
        break;
      case "getEquipmentRemarks":
        result = { records: getEquipmentRemarks(e.parameter.kind, e.parameter.bayId, e.parameter.equipCode) };
        break;
      case "getCustomEquipment":
        result = { items: getAllRows(SHEET_CUSTOM_EQUIP).filter((r) => String(r.BayID) === String(e.parameter.bayId)) };
        break;
      default:
        result = { error: "Unknown action: " + action };
    }
    return jsonOut(result);
  } catch (err) {
    return jsonOut({ error: String(err) });
  }
}

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents || "{}");
    const action = body.action;
    let result;
    switch (action) {
      case "updateBayStatus":
        result = updateBayField(body.bayId, "Status", body.status, body.user);
        break;
      case "renameBay":
        result = updateBayField(body.bayId, "Name", body.name, body.user);
        break;
      case "logMaintenance":
        result = logMaintenance(body.bayId, body.groupId, body.entries, body.user);
        break;
      case "setPrefillUsers":
        result = setPrefillUsers(body.users);
        break;
      case "saveSLD":
        result = saveSLDForBay(body.bayId, body.drawing, body.user);
        break;
      case "saveChecklistState":
        // body.targets: [{bayId, equipCode}] - same sections applied to every target (scope resolution done client-side)
        result = saveChecklistStateBulk(body.targets, body.category, body.sections, body.user);
        break;
      case "saveEquipmentInfo":
        result = saveEquipmentInfo(body.bayId, body.equipCode, body.info, body.user);
        break;
      case "logEquipmentMaintenance":
        result = logEquipmentMaintenance(body.bayId, body.equipCode, body.groupId, body.entries, body.user);
        break;
      case "addEquipmentRemark":
        result = addEquipmentRemark(body.kind, body.bayId, body.equipCode, body.date, body.remark, body.user);
        break;
      case "addBay":
        result = addBay(body.bay, body.user);
        break;
      case "updateBayType":
        result = updateBayField(body.bayId, "Type", body.type, body.user);
        break;
      case "addCustomEquipment":
        result = addCustomEquipment(body.bayId, body.item, body.user);
        break;
      default:
        result = { error: "Unknown action: " + action };
    }
    return jsonOut(result);
  } catch (err) {
    return jsonOut({ error: String(err) });
  }
}

function jsonOut(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

// ---------------------------------------------------------------------------
// Sheet helpers
// ---------------------------------------------------------------------------
function getSheet(name) {
  return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name);
}

function getAllRows(sheetName) {
  const sh = getSheet(sheetName);
  const values = sh.getDataRange().getValues();
  const headers = values.shift();
  return values
    .filter((row) => row.some((c) => c !== ""))
    .map((row) => {
      const obj = {};
      headers.forEach((h, i) => (obj[h] = row[i]));
      return obj;
    });
}

function updateBayField(bayId, field, value, user) {
  const sh = getSheet(SHEET_BAYS);
  const values = sh.getDataRange().getValues();
  const headers = values[0];
  const colIdx = headers.indexOf(field);
  const idIdx = headers.indexOf("BayID");
  const userIdx = headers.indexOf("UpdatedBy");
  const atIdx = headers.indexOf("UpdatedAt");
  for (let r = 1; r < values.length; r++) {
    if (String(values[r][idIdx]) === String(bayId)) {
      sh.getRange(r + 1, colIdx + 1).setValue(value);
      sh.getRange(r + 1, userIdx + 1).setValue(user || "unknown");
      sh.getRange(r + 1, atIdx + 1).setValue(new Date().toISOString());
      return { ok: true };
    }
  }
  return { ok: false, error: "Bay not found: " + bayId };
}

function getMaintenanceForBay(bayId, equipCode) {
  let rows = getAllRows(SHEET_LOG).filter((r) => String(r.BayID) === String(bayId));
  if (equipCode) rows = rows.filter((r) => String(r.EquipCode) === String(equipCode));
  return rows.map((r) => ({ ...r, Remarks: safeParse(r.RemarksJSON) }));
}

function logMaintenance(bayId, groupId, entries, user) {
  // entries: { monthly: {...}|null, quarterly: {...}|null, annual: {...}|null }
  const sh = getSheet(SHEET_LOG);
  const now = new Date().toISOString();
  const gid = groupId || Utilities.getUuid();
  const rowsToAdd = [];
  ["monthly", "quarterly", "annual"].forEach((cat) => {
    const entry = entries[cat];
    if (!entry) return;
    rowsToAdd.push([
      Utilities.getUuid(),
      bayId,
      cat.charAt(0).toUpperCase() + cat.slice(1),
      entry.date,
      entry.loggedBy || user || "unknown",
      JSON.stringify(entry.remarks || {}),
      gid,
      now,
    ]);
  });
  if (rowsToAdd.length) {
    sh.getRange(sh.getLastRow() + 1, 1, rowsToAdd.length, rowsToAdd[0].length).setValues(rowsToAdd);
  }
  return { ok: true, groupId: gid, saved: rowsToAdd.length };
}

function setPrefillUsers(users) {
  const sh = getSheet(SHEET_PREFILL);
  sh.getRange(2, 1, Math.max(sh.getLastRow() - 1, 0), 1).clearContent();
  if (users && users.length) {
    sh.getRange(2, 1, users.length, 1).setValues(users.map((u) => [u]));
  }
  return { ok: true };
}

function getSLDForBay(bayId) {
  const rows = getAllRows(SHEET_SLD).filter((r) => String(r.BayID) === String(bayId));
  if (!rows.length) return null;
  return { drawing: safeParse(rows[rows.length - 1].DrawingJSON), updatedBy: rows[rows.length - 1].UpdatedBy, updatedAt: rows[rows.length - 1].UpdatedAt };
}

function saveSLDForBay(bayId, drawing, user) {
  const sh = getSheet(SHEET_SLD);
  const values = sh.getDataRange().getValues();
  const headers = values[0];
  const idIdx = headers.indexOf("BayID");
  for (let r = 1; r < values.length; r++) {
    if (String(values[r][idIdx]) === String(bayId)) {
      sh.getRange(r + 1, 2).setValue(JSON.stringify(drawing));
      sh.getRange(r + 1, 3).setValue(user || "unknown");
      sh.getRange(r + 1, 4).setValue(new Date().toISOString());
      return { ok: true };
    }
  }
  sh.appendRow([bayId, JSON.stringify(drawing), user || "unknown", new Date().toISOString()]);
  return { ok: true, created: true };
}

function getConfigMap() {
  const rows = getAllRows(SHEET_CONFIG);
  const map = {};
  rows.forEach((r) => (map[r.Key] = r.Value));
  return map;
}

function safeParse(str) {
  try {
    return JSON.parse(str);
  } catch {
    return {};
  }
}

// ---------------------------------------------------------------------------
// CHECKLIST STATE (sections/checkpoints) - per bay + equipment + category.
// Absence of a row means "use the built-in library default" (resolved
// client-side); this sheet only holds rows once someone has customized them.
// ---------------------------------------------------------------------------
function getChecklistState(bayId, equipCode, category) {
  const rows = getAllRows(SHEET_CHECKLIST).filter(
    (r) => String(r.BayID) === String(bayId) && String(r.EquipCode) === String(equipCode) && String(r.Category) === String(category)
  );
  if (!rows.length) return null;
  return safeParse(rows[rows.length - 1].SectionsJSON);
}

// Applies the same section list to every {bayId, equipCode} target - this is
// how "this bay only" / "selected bays" / "all bays of this type" scope
// choices are materialized (the app resolves which targets to pass in).
function saveChecklistStateBulk(targets, category, sections, user) {
  const sh = getSheet(SHEET_CHECKLIST);
  const values = sh.getDataRange().getValues();
  const headers = values[0];
  const bIdx = headers.indexOf("BayID"), eIdx = headers.indexOf("EquipCode"), cIdx = headers.indexOf("Category");
  const now = new Date().toISOString();
  const sectionsJSON = JSON.stringify(sections);

  targets.forEach((t) => {
    let found = false;
    for (let r = 1; r < values.length; r++) {
      if (String(values[r][bIdx]) === String(t.bayId) && String(values[r][eIdx]) === String(t.equipCode) && String(values[r][cIdx]) === String(category)) {
        sh.getRange(r + 1, headers.indexOf("SectionsJSON") + 1).setValue(sectionsJSON);
        sh.getRange(r + 1, headers.indexOf("UpdatedBy") + 1).setValue(user || "unknown");
        sh.getRange(r + 1, headers.indexOf("UpdatedAt") + 1).setValue(now);
        found = true;
        break;
      }
    }
    if (!found) {
      sh.appendRow([t.bayId, t.equipCode, category, sectionsJSON, user || "unknown", now]);
    }
  });
  return { ok: true, count: targets.length };
}

// ---------------------------------------------------------------------------
// EQUIPMENT INFO PANEL (make / sr no / type / rated V / rated A / DOC, or
// per-phase R/Y/B variants for CT & LA)
// ---------------------------------------------------------------------------
function getEquipmentInfo(bayId, equipCode) {
  const rows = getAllRows(SHEET_EQUIPINFO).filter((r) => String(r.BayID) === String(bayId) && String(r.EquipCode) === String(equipCode));
  if (!rows.length) return null;
  return safeParse(rows[rows.length - 1].InfoJSON);
}
function saveEquipmentInfo(bayId, equipCode, info, user) {
  const sh = getSheet(SHEET_EQUIPINFO);
  const values = sh.getDataRange().getValues();
  const headers = values[0];
  const bIdx = headers.indexOf("BayID"), eIdx = headers.indexOf("EquipCode");
  const now = new Date().toISOString();
  for (let r = 1; r < values.length; r++) {
    if (String(values[r][bIdx]) === String(bayId) && String(values[r][eIdx]) === String(equipCode)) {
      sh.getRange(r + 1, headers.indexOf("InfoJSON") + 1).setValue(JSON.stringify(info));
      sh.getRange(r + 1, headers.indexOf("UpdatedBy") + 1).setValue(user || "unknown");
      sh.getRange(r + 1, headers.indexOf("UpdatedAt") + 1).setValue(now);
      return { ok: true };
    }
  }
  sh.appendRow([bayId, equipCode, JSON.stringify(info), user || "unknown", now]);
  return { ok: true, created: true };
}

// ---------------------------------------------------------------------------
// EQUIPMENT-LEVEL MAINTENANCE LOGGING (cascade M->Q->A, per equipment)
// Optional MU/TU remarks entered during this flow ALSO get mirrored to the
// station-wide MU_Remarks / TU_Remarks feed (bay-level only, per your spec -
// equipment already shows its own MSS history so the feed doesn't need it).
// ---------------------------------------------------------------------------
function logEquipmentMaintenance(bayId, equipCode, groupId, entries, user) {
  const sh = getSheet(SHEET_LOG);
  const now = new Date().toISOString();
  const gid = groupId || Utilities.getUuid();
  const rowsToAdd = [];
  ["Monthly", "Quarterly", "Annual"].forEach((cat) => {
    const entry = entries[cat];
    if (!entry) return;
    rowsToAdd.push([
      Utilities.getUuid(), bayId, equipCode, cat, entry.date, entry.loggedBy || user || "unknown",
      JSON.stringify(entry.remarks || {}), entry.muRemark || "", entry.tuRemark || "", gid, now,
    ]);
    if (entry.muRemark) appendGlobalRemark(SHEET_MU, bayId, cat, entry.date, entry.muRemark, entry.loggedBy || user);
    if (entry.tuRemark) appendGlobalRemark(SHEET_TU, bayId, cat, entry.date, entry.tuRemark, entry.loggedBy || user);
  });
  if (rowsToAdd.length) {
    sh.getRange(sh.getLastRow() + 1, 1, rowsToAdd.length, rowsToAdd[0].length).setValues(rowsToAdd);
  }
  return { ok: true, groupId: gid, saved: rowsToAdd.length };
}

function appendGlobalRemark(sheetName, bayId, category, date, remark, loggedBy) {
  getSheet(sheetName).appendRow([Utilities.getUuid(), bayId, category, date, remark, loggedBy || "unknown", new Date().toISOString()]);
}

// ---------------------------------------------------------------------------
// EQUIPMENT-LEVEL AD HOC MU/TU REMARKS (not tied to the M/Q/A checklist
// cycle; local to the equipment, NOT mirrored to the station-wide feed)
// ---------------------------------------------------------------------------
function getEquipmentRemarks(kind, bayId, equipCode) {
  const sheetName = kind === "TU" ? SHEET_EQUIP_TU : SHEET_EQUIP_MU;
  return getAllRows(sheetName).filter((r) => String(r.BayID) === String(bayId) && String(r.EquipCode) === String(equipCode));
}
function addEquipmentRemark(kind, bayId, equipCode, date, remark, user) {
  const sheetName = kind === "TU" ? SHEET_EQUIP_TU : SHEET_EQUIP_MU;
  getSheet(sheetName).appendRow([Utilities.getUuid(), bayId, equipCode, date, remark, user || "unknown", new Date().toISOString()]);
  return { ok: true };
}

// ---------------------------------------------------------------------------
// ADD BAY - new bay row; equipment list is derived client-side from
// {voltage, type} via the same template engine used for the seeded bays,
// so nothing extra needs to be stored here.
// ---------------------------------------------------------------------------
function addBay(bay, user) {
  const sh = getSheet(SHEET_BAYS);
  const existing = getAllRows(SHEET_BAYS).some((r) => String(r.BayID) === String(bay.id));
  if (existing) return { ok: false, error: "Bay ID already exists: " + bay.id };
  const now = new Date().toISOString();
  sh.appendRow([bay.id, bay.name, bay.voltage, bay.type, bay.ictGroup || "", bay.status || "Active", user || "unknown", now]);
  return { ok: true };
}

// ---------------------------------------------------------------------------
// CUSTOM EQUIPMENT - user-added equipment on top of the auto-template
// ---------------------------------------------------------------------------
function addCustomEquipment(bayId, item, user) {
  const sh = getSheet(SHEET_CUSTOM_EQUIP);
  const now = new Date().toISOString();
  sh.appendRow([bayId, item.code, item.label, item.equipType, item.perPhase ? "TRUE" : "FALSE", user || "unknown", now]);
  return { ok: true };
}
