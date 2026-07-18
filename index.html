<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Karjat 400/220/33 kV S/S — Maintenance Portal</title>
<link rel="stylesheet" href="styles.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.6.1/cropper.min.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.6.1/cropper.min.js"></script>
</head>
<body>

  <!-- Bhima riverside backdrop at Siddhatek, Karjat (Ahmednagar) — stylised,
       not a photo: distant hills, a temple-spire silhouette (nod to
       Siddhatek Ganpati Mandir), the river band, and a sun disc that's only
       shown in sunny mode. Recolored per weather by weather-* body classes. -->
  <div id="hillscape">
    <div id="sunDisc"></div>
    <div class="ridge r3">
      <svg viewBox="0 0 1440 300" preserveAspectRatio="none">
        <polygon points="0,300 0,180 120,140 260,190 400,110 560,170 720,100 900,175 1080,120 1240,180 1440,140 1440,300" fill="#152420"/>
      </svg>
    </div>
    <div class="ridge r2">
      <svg viewBox="0 0 1440 260" preserveAspectRatio="none">
        <polygon points="0,260 0,150 150,190 300,120 460,175 620,100 800,165 980,110 1160,170 1320,130 1440,160 1440,260" fill="#101F1A"/>
        <!-- temple spire silhouette, small, non-literal -->
        <polygon points="1010,120 1018,80 1026,120" fill="#101F1A"/>
        <rect x="1012" y="118" width="12" height="10" fill="#101F1A"/>
      </svg>
    </div>
    <div class="ridge r1">
      <svg viewBox="0 0 1440 220" preserveAspectRatio="none">
        <polygon points="0,220 0,170 140,200 320,150 500,195 680,140 860,190 1040,150 1220,195 1440,160 1440,220" fill="#0B1613"/>
      </svg>
    </div>
    <div id="riverBand">
      <svg viewBox="0 0 1440 160" preserveAspectRatio="none">
        <rect x="0" y="0" width="1440" height="160" fill="url(#riverGrad)"/>
        <path d="M0,40 Q 200,20 400,40 T 800,40 T 1200,40 T 1440,40" stroke="rgba(255,255,255,0.18)" stroke-width="2" fill="none"/>
        <path d="M0,80 Q 200,60 400,80 T 800,80 T 1200,80 T 1440,80" stroke="rgba(255,255,255,0.12)" stroke-width="2" fill="none"/>
        <path d="M0,120 Q 200,100 400,120 T 800,120 T 1200,120 T 1440,120" stroke="rgba(255,255,255,0.10)" stroke-width="2" fill="none"/>
        <defs>
          <linearGradient id="riverGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--river-top)"/>
            <stop offset="100%" stop-color="var(--river-bottom)"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
  <div id="cloudLayer"></div>

  <canvas id="weatherCanvas"></canvas>
  <div id="weatherBadge" onclick="toggleWeatherMenu()">
    <span class="dot"></span><span id="weatherBadgeText">Loading weather…</span>
  </div>
  <div id="weatherMenu"></div>

  <div id="app">
    <div id="topbar">
      <div class="topbar-inner">
        <div class="brand" onclick="setView({k:'home'})">
          <div class="brand-mark">J</div>
          <div>
            <div class="brand-title">KARJAT 400/220/33 kV S/S</div>
            <div class="brand-sub">S/S CODE: J966 · MAHATRANSCO</div>
          </div>
        </div>
        <nav class="mainnav" id="mainnav"></nav>
        <div class="admin-toggle">
          <input class="status-select mono" id="userNameInput" placeholder="Your name" style="width:110px" value="Guest User"/>
          <span style="font-family:var(--mono);font-size:10.5px;color:var(--dim)">ROLE</span>
          <select class="status-select" id="roleSelect">
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="MU">MU Unit</option>
            <option value="TU">TU Unit</option>
          </select>
        </div>
      </div>
    </div>
    <main id="mainContent">
      <div id="appRoot"></div>
    </main>
  </div>

  <div id="modalRoot"></div>
  <div id="lightboxRoot"></div>
  <script>
/* =============================================================================
   CHECKLIST LIBRARY — extracted directly from your legacy CB/CT/89x/CRP/LA
   Monthly/Quarterly/Annual sheets. Structure: sections (Google-Forms-like,
   each with a title and checkpoints), per equipment TYPE and CATEGORY.
   [CONFIRMED] everywhere below — read straight off your workbooks.

   Equipment types that only have Quarterly+Annual (no Monthly): ISOLATOR, LA
   Equipment types with all three: CB, CT, CRP
   CVT / WAVETRAP / REACTOR / 33kV components: no legacy proforma was in your
   sample files — [PLACEHOLDER] generic sections, flagged for you to replace
   once you send the real sheet (exactly as you said you would).
   ========================================================================== */

function sec(title, items, description = "") {
  return { id: crypto.randomUUID ? crypto.randomUUID() : String(Math.random()), title, description, items: items.map((t, i) => ({ id: (crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}_${i}`), text: t })) };
}

const CHECKLIST_LIBRARY = {
  CB: {
    Monthly: [
      sec("General", [
        "Check any Air/Oil leakage from any place (R ph)",
        "Check any Air/Oil leakage from any place (Y ph)",
        "Check any Air/Oil leakage from any place (B ph)",
        "Check the Air/Oil Pressure and SF6 Pressure (R ph)",
        "Check the Air/Oil Pressure and SF6 Pressure (Y ph)",
        "Check the Air/Oil Pressure and SF6 Pressure (B ph)",
        "Check the nitrogen pressure if provided (R ph)",
        "Check the nitrogen pressure if provided (Y ph)",
        "Check the nitrogen pressure if provided (B ph)",
        "Check HV connections by thermovision camera (R ph)",
        "Check HV connections by thermovision camera (Y ph)",
        "Check HV connections by thermovision camera (B ph)",
      ]),
    ],
    Quarterly: [
      sec("PORCELAIN", ["Clean all porcelain thoroughly", "Check for cracks", "Check for Flashover marks"]),
      sec("OPERATING MECHANISM BOX", [
        "Check connections for tightness", "Check and clean for auxiliary contacts", "Check for oil/air leak",
        "Check for SF6 leakages", "Check the SF6 Gas pressure", "Check the air/oil pressure",
        "Check for auto operation of compressor", "Check cubicle heater",
      ]),
      sec("MARSHALLING BOX", [
        "Clean the connection by CTC/equivalent", "Check connection for tightness", "Check LT plug point",
        "Clean switch contacts", "Check the contactors", "Check the fuses", "Clean the M.B.",
        "Check the M.B. Box for verming and proofing",
      ]),
      sec("RESISTANCE MEASUREMENT", [
        "Closing Coil (R ph)", "Closing Coil (Y ph)", "Closing Coil (B ph)",
        "Tripping Coil - I (R ph)", "Tripping Coil - I (Y ph)", "Tripping Coil - I (B ph)",
        "Tripping Coil - II (R ph)", "Tripping Coil - II (Y ph)", "Tripping Coil - II (B ph)",
      ]),
      sec("LOCAL/REMOTE ELECTRICAL BREAKER OPERATIONS", [
        "Closing operation", "Tripping operations through TC-I and TC-II", "Trip trial of breaker through protection",
      ]),
    ],
    Annual: [
      sec("Breaker Timing", ["Closing Time (R/Y/B/Overall)", "Tripping Time (R/Y/B/Overall)", "Check operation of pre-insertion resistor if provided"]),
      sec("General", [
        "Check operation of operation counter", "Check pole discrepancy", "Check of interlocks",
        "Static contact resistance", "Checking of tightness of all terminations in the MB",
        "Checking of door sealing gaskets, replace if necessary", "General cleaning of MB and repainting of metallic surface if required",
        "Check functioning of space heater/illumination",
      ]),
    ],
  },

  CT: {
    Monthly: [
      sec("General", [
        "Check oil level from gauge glass (R ph)", "Check oil level from gauge glass (Y ph)", "Check oil level from gauge glass (B ph)",
        "Check for any crack in insulator (R ph)", "Check for any crack in insulator (Y ph)", "Check for any crack in insulator (B ph)",
        "Check for any visible oil leakage (R ph)", "Check for any visible oil leakage (Y ph)", "Check for any visible oil leakage (B ph)",
        "Check for any visible deterioration of primary connections (R ph)", "Check for any visible deterioration of primary connections (Y ph)", "Check for any visible deterioration of primary connections (B ph)",
        "HV connection/joints checking by thermovision camera (R ph)", "HV connection/joints checking by thermovision camera (Y ph)", "HV connection/joints checking by thermovision camera (B ph)",
      ]),
    ],
    Quarterly: [
      sec("General", [
        "Clean thoroughly all parts including porcelain bushing (R/Y/B)",
        "Check bushing for cracks/chipping; repair chipped spots (R/Y/B)",
        "Check HV connections and ratio link for tightness (R/Y/B)",
        "Check secondary terminal connections & junction box for tightness/insulation/healthiness (R/Y/B)",
        "Check earthing continuity of CT secondary star point (R/Y/B)",
        "Check earthing of the framework (R/Y/B)",
        "Check silica gel, replace if provided and necessary (R/Y/B)",
        "N2 pressure checking if provided (R/Y/B)",
        "Check Tan-delta point for tightness and proper earthing (R/Y/B)",
      ]),
    ],
    Annual: [
      sec("Oil & Insulation Tests", [
        "Test oil for dielectric strength (R/Y/B)", "Test oil for deposits, colour and acidity (R/Y/B)",
        "Megger windings — primary to tan-delta point (or primary to earth) (R/Y/B)",
        "Checking tightness of all electrical connections (R/Y/B)", "Measurement of capacitance and tan-delta (R/Y/B)",
        "Checking of N2 pressure if provided (R/Y/B)", "Checking of bellow expansion if provided (R/Y/B)",
      ]),
      sec("Other Tests As & When Required", [
        "Measurement of CT secondary resistance (R/Y/B)", "Magnetisation characteristic (R/Y/B)", "CT Ratio test (R/Y/B)",
        "DGA and other test of oil", "Measurement of IR values — primary/secondary/earth (corewise) (R/Y/B)",
      ]),
      sec("CT Marshalling Box", [
        "Checking healthiness of gasket", "Checking space heater prior to monsoon",
        "Checking all connections including earthing", "Cleaning of marshalling box", "Check the box for verming proofing",
      ]),
    ],
  },

  ISOLATOR: {
    Quarterly: [
      sec("INSULATORS", ["Clean all insulators; use solvent (CTC etc.) if stains/deposits won't remove", "Report on condition of insulators if coated with silicon compound"]),
      sec("SWITCH", [
        "Check contacts/clips and blades; clean contact surfaces with fine emery paper",
        "Smear 'no oxide' grease/white vaseline on contact surface, wipe excess",
        "Lubricate bearings, joints, contact springs", "Clean ground contact clips and blades if provided",
        "Tighten group connections", "Check adjustment of arc horns on horn gap switch",
        "Check condition of flexible bonds of connectors / G.O.D. jumpers",
        "Lubricate bearings, pin joints of inter-phase cranks and couplings",
        "Check for split pins", "Clean and lubricate interlock keys",
      ]),
      sec("AUXILIARY SWITCHES", [
        "Check and clean auxiliary contacts in isolators; smear with petroleum jelly where provided",
        "Check that wiring is not loose and has no deteriorated insulation",
        "Check for correct remote semaphore/lamp indications",
        "Clean and check operation of the interlocking coil push button",
        "Check condition of interlocking coil",
      ]),
      sec("HAND OPERATED MECHANISM", [
        "Clean and check the heaters", "Check connections for tightness", "Clean switch contacts",
        "Check the fuses", "Clean the cubicle",
      ]),
      sec("TESTS", [
        "Close and open several times to make the mechanism free", "Check hand operation of isolators for smoothness",
        "Check that proper contacts are made", "Check that all phases close together",
        "Test the mechanical interlocks", "Test the electrical interlocks",
      ]),
    ],
    Annual: [
      sec("SWITCH", ["Examine contact alignment — blade parallel with box when fully closed"]),
      sec("OPERATING MECHANISM", ["Tighten all bolts of inter-phase pipe connections", "Clean bearings of rotating bushings/insulators and lubricate with grease"]),
      sec("MOTOR OPERATED MECHANISM", ["Check operation of motor brakes", "Lubricate gear, shaft, bearings etc.", "Check contacts, contact springs, operating levers and auxiliary contacts"]),
      sec("TESTS", [
        "Check contact resistances with AVO/ducter after closing disconnect",
        "For isolators with spark tips: check tips touch before main contacts close and separate after they open; clean if damaged",
        "Check ground connections of structures", "Check supporting structures for loose bolts", "Clean rusty parts/points",
      ]),
    ],
  },

  CRP: {
    Monthly: [
      sec("General", [
        "Clean all the panels from outside", "Replace fused bulbs if any", "Check healthy trip circuit lamps",
        "Check the annunciation and fault indicating lamp by the test push button",
        "Check the DC tripping voltage available in control & relay panel (measure by AVO)",
      ]),
    ],
    Quarterly: [
      sec("General", ["Check the semaphore indication", "Check overheating of relays if any", "Check the flags of the relays if any", "Check the space heaters if provided"]),
    ],
    Annual: [
      sec("General", [
        "Clean with vacuum cleaner; ensure panels are verming proof",
        "Check all connections for tightness — terminal strips, instruments & switches",
        "Check electrical connections on terminal board for tightness/deteriorated insulation",
        "Clean and check all the switches", "Clean and check all the contactors", "Check the semaphore indications",
        "Polish panel surface with wax polish", "Check for rusting and repaint if necessary",
        "Get all meters/instruments calibrated",
        "Get all relays tested by Testing Division — verify correct visual/audible indication on annunciator panel",
        "Check the earthing of panel", "Check the thermostat for space heaters if provided",
      ]),
    ],
  },

  LA: {
    Quarterly: [
      sec("General", ["Clean porcelain of the arrestor", "Check and tighten main and earth connections", "Record surge counter"]),
    ],
    Annual: [
      sec("General", ["Check LA counter", "Clean porcelain of the arrestor", "Check tightness of connections"]),
    ],
  },

  // ---- [PLACEHOLDER] — no legacy proforma sample provided yet ----
  CVT: {
    Quarterly: [sec("General", ["Clean porcelain thoroughly", "Check for cracks/oil leakage", "Check secondary terminal box connections"])],
    Annual: [sec("General", ["Measure capacitance and tan-delta", "Check IR value", "Check earthing continuity"])],
  },
  WAVETRAP: {
    Quarterly: [sec("General", ["Check for physical damage/corrosion", "Check tightness of connections"])],
    Annual: [sec("General", ["Check tuning device", "Check earthing of base"])],
  },
  REACTOR: {
    Monthly: [sec("General", ["Check oil level", "Check for oil leakage", "Check silica gel condition", "Check for abnormal noise/vibration"])],
    Quarterly: [sec("General", ["Check winding temperature indicator", "Check Buchholz relay", "Check all connections for tightness"])],
    Annual: [sec("General", ["Oil DGA test", "Megger test of winding", "Check earthing continuity", "Check bushings for cracks"])],
  },
  GENERIC33: {
    Quarterly: [sec("General", ["Clean thoroughly", "Check connections for tightness", "Check for physical damage"])],
    Annual: [sec("General", ["Megger test", "Check earthing continuity", "Check for corrosion/repaint if required"])],
  },

  // ---- [PLACEHOLDER] ICT phase unit / tertiary delta / RRS — no legacy
  // proforma sample provided; standard EHV transformer practice used as a
  // starting point. Replace via Excel whenever you're ready. ----
  ICT_PHASE: {
    Monthly: [sec("General", ["Check oil level in main tank / conservator", "Check for oil leakage from any joint", "Check silica gel breather colour", "Check winding/oil temperature indicator reading", "Check cooling fans/pumps for abnormal noise"])],
    Quarterly: [
      sec("Oil & Bushings", ["Clean bushings thoroughly", "Check bushings for cracks/oil leakage", "Check oil level in bushings"]),
      sec("Cooling & Protection", ["Check Buchholz relay for gas accumulation", "Check operation of cooling fans/pumps", "Check PRV (pressure relief valve) for leakage"]),
      sec("Marshalling Box", ["Check all connections for tightness", "Check space heater operation", "Clean marshalling box"]),
    ],
    Annual: [
      sec("Oil Tests", ["Oil DGA (Dissolved Gas Analysis)", "Oil BDV (Breakdown Voltage) test", "Oil moisture content test"]),
      sec("Electrical Tests", ["Megger test of winding (IR/PI values)", "Winding resistance measurement", "Magnetic balance / ratio test", "Tan-delta & capacitance of bushings"]),
      sec("OLTC", ["Check OLTC oil level & condition", "Check OLTC operation counter", "Check OLTC contacts (as per manufacturer schedule)"]),
      sec("General", ["Check earthing continuity — tank & neutral", "Check core earthing (if brought out)", "Torque-check all HV/LV terminal connections"]),
    ],
  },
  TERTIARY: {
    Quarterly: [sec("General", ["Check tertiary CT connections for tightness", "Check tertiary isolator for correct operation", "Check delta-closing links for tightness"])],
    Annual: [sec("General", ["Megger test of tertiary winding", "Check neutral/delta earthing continuity", "Check tertiary CRP connections"])],
  },
  RRS_GENERIC: {
    Quarterly: [sec("General", ["Check all connections for tightness", "Check for physical damage/corrosion", "Record readings as applicable"])],
    Annual: [sec("General", ["Detailed inspection as per site practice", "Megger/continuity checks as applicable"])],
  },
};

function equipTypeFromCode(code) {
  const c = code.toUpperCase();
  if (c.includes("CVT")) return "CVT";
  if (c.includes("WT")) return "WAVETRAP";
  if (c.includes("B/R")) return "REACTOR";
  if (c.includes("CT")) return "CT";
  if (c.includes("52") || c.endsWith("-CB")) return "CB";
  if (c.includes("89") || c.includes("HGF")) return "ISOLATOR";
  if (c.includes("LA")) return "LA";
  if (c.includes("CRP")) return "CRP";
  if (c.includes("MCT") || c.includes("MPT")) return "GENERIC33";
  return "GENERIC33";
}

// deep-clones the library's default sections for a given type/category so
// each bay's equipment gets its OWN editable copy (adding a section on one
// bay's isolator never mutates another bay's checklist unless the user
// explicitly chooses to propagate it — see propagateSectionChange()).
function defaultSectionsFor(equipType, category) {
  const lib = CHECKLIST_LIBRARY[equipType] || CHECKLIST_LIBRARY.GENERIC33;
  const sections = lib[category] || [];
  return JSON.parse(JSON.stringify(sections)).map((s) => ({ ...s, id: crypto.randomUUID(), items: s.items.map((it) => ({ ...it, id: crypto.randomUUID() })) }));
}

function applicableCategories(equipType) {
  return Object.keys(CHECKLIST_LIBRARY[equipType] || CHECKLIST_LIBRARY.GENERIC33);
}

  </script>
  <script>
/**
 * EQUIPMENT NOMENCLATURE — derived from SLD_400_kV_Karjat_SS.pdf (see prior
 * notes for [CONFIRMED]/[PATTERN]/[EXTENDED] confidence levels; unchanged
 * from before). Every bay also gets a synthetic "<bay>-CRP" entry — every
 * bay has a Control & Relay Panel even though it isn't drawn on the SLD.
 * `perPhase: true` means the equipment info panel shows separate
 * Make/Sr.No/Type/DOC columns for R/Y/B (matches your legacy CT & LA sheets).
 */

function eq(code, label, perPhase = false) { return { code, label, perPhase }; }

const TPL_400_LINE = (b) => [
  eq(`${b}-LA`, "Lightning Arrester", true),
  eq(`${b}-CVT`, "Capacitive Voltage Transformer", true),
  eq(`${b}-WT`, "Wave Trap (Y & B phase)"),
  eq(`${b}-89L`, "Line Isolator"),
  eq(`${b}-89A`, "Isolator A (Bus side)"),
  eq(`${b}-52`, "Circuit Breaker"),
  eq(`${b}-CT`, "Current Transformer", true),
  eq(`${b}-89B`, "Isolator B (Diameter side)"),
  eq(`${b}-CRP`, "Control & Relay Panel"),
];
const TPL_400_TIE = (b) => [
  eq(`${b}-89A`, "Isolator A"),
  eq(`${b}-52`, "Circuit Breaker"),
  eq(`${b}-CT`, "Current Transformer", true),
  eq(`${b}-89B`, "Isolator B"),
  eq(`${b}-CRP`, "Control & Relay Panel"),
];
const TPL_400_REACTOR = (b) => [
  eq(`${b}-LA1`, "Lightning Arrester 1"),
  eq(`${b}-LA2`, "Lightning Arrester 2"),
  eq(`${b}-B/R`, "125 MVAr Bus Reactor"),
  eq(`${b}-89R`, "Reactor Isolator"),
  eq(`${b}-89A`, "Isolator A"),
  eq(`${b}-52`, "Circuit Breaker"),
  eq(`${b}-CT`, "Current Transformer", true),
  eq(`${b}-89B`, "Isolator B"),
  eq(`${b}-CRP`, "Control & Relay Panel"),
];
const TPL_400_ICT_HV = (b) => [
  eq(`${b}-CVT`, "CVT (Y phase)", true),
  eq(`${b}-89B`, "Isolator B (ICT side)"),
  eq(`${b}-CT`, "Current Transformer", true),
  eq(`${b}-52`, "Circuit Breaker"),
  eq(`${b}-89A`, "Isolator A (Bus side)"),
  eq(`${b}-CRP`, "Control & Relay Panel"),
];
const TPL_400_FUTURE = (b) => [
  eq(`${b}-89A`, "Isolator A (provisioned)"),
  eq(`${b}-52`, "Circuit Breaker (provisioned)"),
  eq(`${b}-CT`, "Current Transformer (provisioned)", true),
  eq(`${b}-89B`, "Isolator B (provisioned)"),
];
const TPL_220_LINE = (b) => [
  eq(`${b}-LA`, "Lightning Arrester", true),
  eq(`${b}-CVT`, "Capacitive Voltage Transformer", true),
  eq(`${b}-89L`, "Line Isolator"),
  eq(`${b}-89-1`, "Isolator — Main Bus I"),
  eq(`${b}-89-2`, "Isolator — Main Bus II"),
  eq(`${b}-89TR`, "Isolator — Transfer Bus"),
  eq(`${b}-52`, "Circuit Breaker"),
  eq(`${b}-CT`, "Current Transformer", true),
  eq(`${b}-CRP`, "Control & Relay Panel"),
];
const TPL_220_ICT_IV = (b) => [
  eq(`${b}-89A`, "Isolator A (ICT side)"),
  eq(`${b}-89-1`, "Isolator — Main Bus I"),
  eq(`${b}-89-2`, "Isolator — Main Bus II"),
  eq(`${b}-52`, "Circuit Breaker"),
  eq(`${b}-CT`, "Current Transformer", true),
  eq(`${b}-CRP`, "Control & Relay Panel"),
];
const TPL_220_BC = (b) => [eq(`${b}-89-1`, "Isolator — Main Bus I"), eq(`${b}-89-2`, "Isolator — Main Bus II"), eq(`${b}-52`, "Circuit Breaker"), eq(`${b}-CT`, "Current Transformer", true), eq(`${b}-CRP`, "Control & Relay Panel")];
const TPL_220_TBC = (b) => [eq(`${b}-89-1`, "Isolator — Main Bus"), eq(`${b}-89TR`, "Isolator — Transfer Bus"), eq(`${b}-52`, "Circuit Breaker"), eq(`${b}-CT`, "Current Transformer", true), eq(`${b}-CRP`, "Control & Relay Panel")];
const TPL_33_STNTFR = (b, prefix) => [eq(`${prefix}HGF`, "HG Fuse"), eq(`${prefix}89T1`, "Isolator T1"), eq(`${prefix}89T2`, "Isolator T2"), eq(`${prefix}MCT1`, "Metering CT"), eq(`${prefix}MPT1`, "Metering PT"), eq(`${prefix}LA`, "Lightning Arrester")];
const TPL_33_LINE = (b) => [eq(`${b}-LA`, "Lightning Arrester"), eq(`${b}-89L`, "Line Isolator"), eq(`${b}-52`, "Circuit Breaker"), eq(`${b}-CT`, "Current Transformer")];
const TPL_33_BS = (b) => [eq(`${b}-89-1`, "Isolator — Section 1"), eq(`${b}-89-2`, "Isolator — Section 2"), eq(`${b}-52`, "Circuit Breaker")];

function equipmentForBay(bay) {
  switch (bay.type) {
    case "Line": return bay.voltage === "220" ? TPL_220_LINE(bay.id) : TPL_400_LINE(bay.id);
    case "Tie": return TPL_400_TIE(bay.id);
    case "Reactor": return TPL_400_REACTOR(bay.id);
    case "ICT-HV": return TPL_400_ICT_HV(bay.id);
    case "ICT-IV": return TPL_220_ICT_IV(bay.id);
    case "Future": return TPL_400_FUTURE(bay.id);
    case "BC": return TPL_220_BC(bay.id);
    case "TBC": return TPL_220_TBC(bay.id);
    case "StnTfr33": return TPL_33_STNTFR(bay.id, bay.id === "33-T1" ? "31" : "32");
    case "Line33": return TPL_33_LINE(bay.id);
    case "BS33": return TPL_33_BS(bay.id);
    default: return [];
  }
}

  </script>
  <script>
/* =============================================================================
   WEATHER + THEME SYSTEM
   Fetches live conditions for Karjat/Siddhatek (Open-Meteo, no API key) and
   drives the whole site's palette from it: sunny (bright yellow, black
   text), cloudy (dims with real cloud-cover %, black text), rainy (grey,
   light text, rain streaks on #weatherCanvas — the effect from before, kept
   as-is). A manual per-browser override is available from the weather
   badge; admin can disable effects site-wide from the Admin page (falls
   back to "sunny, very light cloud").
   ========================================================================== */

const WeatherFX = { canvas: null, ctx: null, w: 0, h: 0, mode: "sunny", intensity: 0, drops: [], raf: null };
const WeatherState = { effectsEnabled: true, manualMode: "auto", liveMode: "sunny", liveCloudPct: 10, liveTemp: null };

const MODE_LABELS = { auto: "Auto (live)", sunny: "Sunny", cloudy: "Cloudy", rainy: "Rainy" };

function classifyWeatherCode(code, cloudPct) {
  if ([61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99].includes(code)) return { mode: "rainy" };
  if ([51, 53, 55, 56, 57].includes(code)) return { mode: "rainy" }; // drizzle still reads as "rainy" theme-wise
  if (cloudPct >= 35 || [2, 3, 45, 48].includes(code)) return { mode: "cloudy" };
  return { mode: "sunny" };
}

async function fetchKarjatWeather() {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${CONFIG.LAT}&longitude=${CONFIG.LON}&current=temperature_2m,precipitation,weather_code,cloud_cover&timezone=auto`;
    const res = await fetch(url);
    const data = await res.json();
    const code = data.current.weather_code;
    const cloudPct = data.current.cloud_cover ?? 10;
    const temp = data.current.temperature_2m;
    const { mode } = classifyWeatherCode(code, cloudPct);
    return { mode, cloudPct, temp, ok: true };
  } catch (e) {
    return { mode: "sunny", cloudPct: 10, temp: null, ok: false };
  }
}

async function initWeather() {
  const canvas = document.getElementById("weatherCanvas");
  WeatherFX.canvas = canvas;
  WeatherFX.ctx = canvas.getContext("2d");
  resizeWeatherCanvas();
  window.addEventListener("resize", resizeWeatherCanvas);

  WeatherState.manualMode = localStorage.getItem("karjat_weather_override") || "auto";

  const { config } = await apiGet("getConfig");
  WeatherState.effectsEnabled = config && config.WEATHER_EFFECTS_ENABLED === "false" ? false : true;

  const w = await fetchKarjatWeather();
  WeatherState.liveMode = w.mode;
  WeatherState.liveCloudPct = w.cloudPct;
  WeatherState.liveTemp = w.temp;

  applyEffectiveWeather();
  loopWeather();

  setInterval(async () => {
    const w2 = await fetchKarjatWeather();
    WeatherState.liveMode = w2.mode;
    WeatherState.liveCloudPct = w2.cloudPct;
    WeatherState.liveTemp = w2.temp;
    applyEffectiveWeather();
  }, 15 * 60 * 1000);
}

// Resolves manual override + admin enable/disable + live conditions into
// one effective mode/cloudFactor, then applies it.
function applyEffectiveWeather() {
  let mode, cloudPct;
  if (!WeatherState.effectsEnabled) {
    mode = "sunny"; cloudPct = 8; // "sunny with clouds very less"
  } else if (WeatherState.manualMode !== "auto") {
    mode = WeatherState.manualMode;
    cloudPct = mode === "cloudy" ? Math.max(WeatherState.liveCloudPct, 45) : mode === "sunny" ? 10 : 70;
  } else {
    mode = WeatherState.liveMode;
    cloudPct = WeatherState.liveCloudPct;
  }
  applyWeatherTheme(mode, cloudPct);
  updateWeatherBadge(mode, cloudPct);
  renderClouds(mode === "sunny" ? cloudPct * 0.4 : cloudPct);
  seedRainParticles(mode);
  renderWeatherMenu();
}

function hexLerp(a, b, t) {
  const pa = [1, 3, 5].map((i) => parseInt(a.slice(i, i + 2), 16));
  const pb = [1, 3, 5].map((i) => parseInt(b.slice(i, i + 2), 16));
  const c = pa.map((v, i) => Math.round(v + (pb[i] - v) * t));
  return `#${c.map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}

function applyWeatherTheme(mode, cloudPct) {
  const body = document.body;
  body.classList.remove("weather-sunny", "weather-cloudy", "weather-rainy", "weather-off");
  if (!WeatherState.effectsEnabled) { body.classList.add("weather-off"); WeatherFX.mode = "sunny"; WeatherFX.intensity = 0; return; }
  body.classList.add(`weather-${mode}`);

  if (mode === "cloudy") {
    // Interpolate bg/river between light-overcast and heavy-overcast based on real cloud %
    const t = Math.min(1, Math.max(0, (cloudPct - 35) / 65));
    document.documentElement.style.setProperty("--bg", hexLerp("#CBD5DB", "#6E7882", t));
    document.documentElement.style.setProperty("--bg2", hexLerp("#DCE3E7", "#828C96", t));
    document.documentElement.style.setProperty("--river-top", hexLerp("#A8BAC3", "#6B7D87", t));
    document.documentElement.style.setProperty("--river-bottom", hexLerp("#63808A", "#3E4E56", t));
  } else {
    // sunny/rainy/off use their fixed body-class palette from styles.css —
    // clear any inline overrides left over from a previous cloudy state
    ["--bg", "--bg2", "--river-top", "--river-bottom"].forEach((v) => document.documentElement.style.removeProperty(v));
  }

  WeatherFX.mode = mode;
  WeatherFX.intensity = mode === "rainy" ? 0.75 : 0;
}

function updateWeatherBadge(mode, cloudPct) {
  const el = document.getElementById("weatherBadgeText");
  if (!el) return;
  const labels = { sunny: "Sunny", cloudy: "Cloudy", rainy: "Rain" };
  const src = WeatherState.manualMode !== "auto" ? " (manual)" : "";
  el.textContent = `Siddhatek · ${labels[mode] || "—"}${WeatherState.liveTemp != null && WeatherState.manualMode === "auto" ? ` · ${Math.round(WeatherState.liveTemp)}°C` : ""}${src}`;
}

function resizeWeatherCanvas() {
  const c = WeatherFX.canvas; if (!c) return;
  WeatherFX.w = c.width = window.innerWidth;
  WeatherFX.h = c.height = window.innerHeight;
}

function seedRainParticles(mode) {
  const count = mode === "rainy" ? 160 : 0;
  WeatherFX.drops = Array.from({ length: count }, () => ({
    x: Math.random() * WeatherFX.w,
    y: Math.random() * WeatherFX.h,
    len: 10 + Math.random() * 18,
    speed: 8 + Math.random() * 5,
    drift: 1.6,
  }));
}

function loopWeather() {
  const { ctx, w, h, mode } = WeatherFX;
  ctx.clearRect(0, 0, w, h);
  if (WeatherFX.drops.length) {
    ctx.strokeStyle = "rgba(200,225,235,0.5)";
    ctx.lineWidth = 1.3;
    WeatherFX.drops.forEach((d) => {
      ctx.beginPath();
      ctx.moveTo(d.x, d.y);
      ctx.lineTo(d.x - d.drift, d.y + d.len);
      ctx.stroke();
      d.y += d.speed; d.x -= d.drift * 0.4;
      if (d.y > h) { d.y = -d.len; d.x = Math.random() * w; }
    });
  }
  WeatherFX.raf = requestAnimationFrame(loopWeather);
}

// ---------------------------------------------------------------------------
// CLOUDS — decorative drifting shapes, count/opacity from cloud %
// ---------------------------------------------------------------------------
function renderClouds(cloudPct) {
  const layer = document.getElementById("cloudLayer");
  if (!layer) return;
  const count = cloudPct < 15 ? 0 : cloudPct < 35 ? 2 : cloudPct < 60 ? 4 : cloudPct < 80 ? 6 : 8;
  layer.innerHTML = Array.from({ length: count }, (_, i) => {
    const cw = 160 + Math.random() * 200;
    const cy = 4 + Math.random() * 30;
    const co = 0.35 + Math.random() * 0.35;
    const cd = 70 + Math.random() * 60;
    const cdelay = -Math.random() * cd;
    return `<div class="cloud-shape" style="--cw:${cw.toFixed(0)}px;--cy:${cy.toFixed(0)}%;--co:${co.toFixed(2)};--cd:${cd.toFixed(0)}s;--cdelay:${cdelay.toFixed(0)}s"></div>`;
  }).join("");
}

// ---------------------------------------------------------------------------
// MANUAL OVERRIDE MENU (per-browser, localStorage — not site-wide)
// ---------------------------------------------------------------------------
function toggleWeatherMenu() {
  const menu = document.getElementById("weatherMenu");
  menu.classList.toggle("open");
}
function setManualWeather(mode) {
  WeatherState.manualMode = mode;
  localStorage.setItem("karjat_weather_override", mode);
  applyEffectiveWeather();
  document.getElementById("weatherMenu").classList.remove("open");
}
function renderWeatherMenu() {
  const menu = document.getElementById("weatherMenu");
  if (!menu) return;
  const opts = ["auto", "sunny", "cloudy", "rainy"];
  menu.innerHTML = `
    <div class="menu-label">Weather (this device)</div>
    ${opts.map((o) => `<button class="${WeatherState.manualMode === o ? "active" : ""}" onclick="setManualWeather('${o}')">${MODE_LABELS[o]}</button>`).join("")}
    ${!WeatherState.effectsEnabled ? `<div class="menu-label" style="color:var(--red)">Effects disabled site-wide by admin</div>` : ""}
  `;
}

// Called from the Admin page toggle
async function setWeatherEffectsEnabled(enabled) {
  WeatherState.effectsEnabled = enabled;
  await apiPost("setConfig", { config: { WEATHER_EFFECTS_ENABLED: String(enabled) } });
  applyEffectiveWeather();
}

  </script>
  <script>
/* =============================================================================
   PHOTO MODULE — a staged picker (attach to a log entry before saving) and a
   Google-Photos-style lightbox for viewing already-saved images: zoom
   (scroll/pinch/drag-pan), download, and crop/rotate edit via Cropper.js.

   Note on editing already-uploaded images: Drive-hosted images are
   cross-origin, so the edit canvas can be tainted and re-upload may be
   blocked by the browser — if that happens we tell the user plainly rather
   than fail silently. Editing LOCAL staged photos (before upload) always
   works since there's no cross-origin restriction yet.
   ========================================================================== */

// ---- Staged picker (used inside modals: cascade logger, MU/TU add-remark) ----
// Keeps File objects + local object-URLs in memory until the form is saved,
// at which point each gets uploaded and swapped for its Drive URL.
const PhotoStage = { files: [] }; // [{ id, file, localUrl }]

function renderPhotoPicker(inputElId) {
  return `
    <div class="fld">
      <span>Photos</span>
      <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:8px" id="photoStageGrid"></div>
      <input type="file" id="${inputElId}" accept="image/*" multiple style="display:none" onchange="onPhotoFilesPicked(this.files)"/>
      <button type="button" class="btn ghost sm" onclick="document.getElementById('${inputElId}').click()">+ Add Photos</button>
    </div>
  `;
}
function resetPhotoStage() { PhotoStage.files.forEach((f) => URL.revokeObjectURL(f.localUrl)); PhotoStage.files = []; }
function onPhotoFilesPicked(fileList) {
  Array.from(fileList).forEach((file) => {
    PhotoStage.files.push({ id: uid(), file, localUrl: URL.createObjectURL(file) });
  });
  renderPhotoStageGrid();
}
function renderPhotoStageGrid() {
  const grid = document.getElementById("photoStageGrid");
  if (!grid) return;
  grid.innerHTML = PhotoStage.files.map((f) => `
    <div style="position:relative;width:64px;height:64px">
      <img src="${f.localUrl}" style="width:100%;height:100%;object-fit:cover;border-radius:6px;border:1px solid var(--border);cursor:pointer" onclick="openLightbox(${JSON.stringify(PhotoStage.files.map(x=>x.localUrl))}, ${PhotoStage.files.findIndex(x=>x.id===f.id)})"/>
      <button type="button" onclick="removeStagedPhoto('${f.id}')" style="position:absolute;top:-6px;right:-6px;width:18px;height:18px;border-radius:50%;background:var(--red);color:#fff;border:none;font-size:11px;cursor:pointer;line-height:1">✕</button>
    </div>
  `).join("");
}
function removeStagedPhoto(id) {
  const f = PhotoStage.files.find((x) => x.id === id);
  if (f) URL.revokeObjectURL(f.localUrl);
  PhotoStage.files = PhotoStage.files.filter((x) => x.id !== id);
  renderPhotoStageGrid();
}
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result.split(",")[1]);
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}
// Uploads every staged file, returns the resulting URL array, then clears the stage.
async function commitStagedPhotos() {
  const urls = [];
  for (const f of PhotoStage.files) {
    const base64 = await fileToBase64(f.file);
    const res = await apiPost("uploadImage", { filename: f.file.name, mimeType: f.file.type, base64 });
    if (res.imageUrl) urls.push(res.imageUrl);
  }
  resetPhotoStage();
  return urls;
}

// ---- Saved-image grid (for history rows / remark lists) ----
function renderSavedPhotoGrid(images) {
  if (!images || !images.length) return "";
  return `<div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:8px">
    ${images.map((url, i) => `<img src="${url}" style="width:56px;height:56px;object-fit:cover;border-radius:6px;border:1px solid var(--border);cursor:pointer" onclick='openLightbox(${JSON.stringify(images)}, ${i})'/>`).join("")}
  </div>`;
}

// ---- Lightbox (Google-Photos-style viewer) ----
const Lightbox = { images: [], index: 0, scale: 1, cropper: null };

function openLightbox(images, index) {
  Lightbox.images = images;
  Lightbox.index = index || 0;
  Lightbox.scale = 1;
  renderLightbox();
}
function closeLightbox() {
  destroyCropperIfAny();
  document.getElementById("lightboxRoot").innerHTML = "";
}
function lightboxNav(delta) {
  destroyCropperIfAny();
  Lightbox.index = (Lightbox.index + delta + Lightbox.images.length) % Lightbox.images.length;
  Lightbox.scale = 1;
  renderLightbox();
}
function renderLightbox() {
  const url = Lightbox.images[Lightbox.index];
  document.getElementById("lightboxRoot").innerHTML = `
    <div class="lightbox-overlay" onclick="if(event.target===this)closeLightbox()">
      <div class="lightbox-topbar">
        <span style="font-family:var(--mono);font-size:12px;color:var(--dim)">${Lightbox.index + 1} / ${Lightbox.images.length}</span>
        <div style="display:flex;gap:8px">
          <button class="btn ghost sm" onclick="lightboxZoom(0.2)">+ Zoom</button>
          <button class="btn ghost sm" onclick="lightboxZoom(-0.2)">− Zoom</button>
          <a class="btn ghost sm" href="${url}" download target="_blank" rel="noopener">Download</a>
          <button class="btn ghost sm" onclick="openEditor()">Edit (crop/rotate)</button>
          <button class="btn danger sm" onclick="closeLightbox()">Close ✕</button>
        </div>
      </div>
      <div class="lightbox-stage" id="lightboxStage" onwheel="lightboxWheel(event)">
        ${Lightbox.images.length > 1 ? `<button class="lightbox-arrow left" onclick="lightboxNav(-1)">‹</button>` : ""}
        <img id="lightboxImg" src="${url}" style="transform:scale(${Lightbox.scale});max-width:100%;max-height:78vh;object-fit:contain;transition:transform .1s"/>
        ${Lightbox.images.length > 1 ? `<button class="lightbox-arrow right" onclick="lightboxNav(1)">›</button>` : ""}
      </div>
      ${Lightbox.images.length > 1 ? `
        <div class="lightbox-thumbstrip">
          ${Lightbox.images.map((u, i) => `<img src="${u}" class="${i===Lightbox.index?'active':''}" onclick="event.stopPropagation();destroyCropperIfAny();Lightbox.index=${i};Lightbox.scale=1;renderLightbox()"/>`).join("")}
        </div>` : ""}
      <div id="editorRoot"></div>
    </div>
  `;
}
function lightboxZoom(delta) {
  Lightbox.scale = Math.max(0.5, Math.min(4, Lightbox.scale + delta));
  const img = document.getElementById("lightboxImg");
  if (img) img.style.transform = `scale(${Lightbox.scale})`;
}
function lightboxWheel(e) {
  e.preventDefault();
  lightboxZoom(e.deltaY < 0 ? 0.15 : -0.15);
}

function openEditor() {
  const url = Lightbox.images[Lightbox.index];
  document.getElementById("editorRoot").innerHTML = `
    <div class="lightbox-editor">
      <img id="cropperImg" src="${url}" style="max-width:100%;display:block"/>
      <div style="display:flex;justify-content:space-between;margin-top:10px;flex-wrap:wrap;gap:8px">
        <div style="display:flex;gap:6px">
          <button class="btn ghost sm" onclick="cropperRotate(-90)">⟲ Rotate</button>
          <button class="btn ghost sm" onclick="cropperRotate(90)">⟳ Rotate</button>
        </div>
        <div style="display:flex;gap:6px">
          <button class="btn ghost sm" onclick="destroyCropperIfAny();document.getElementById('editorRoot').innerHTML=''">Cancel</button>
          <button class="btn sm" onclick="saveCroppedImage()">Save as new photo</button>
        </div>
      </div>
      <div id="editorMsg" style="font-size:11.5px;color:var(--dim);margin-top:6px"></div>
    </div>
  `;
  const imgEl = document.getElementById("cropperImg");
  Lightbox.cropper = new Cropper(imgEl, { viewMode: 1, background: false, autoCropArea: 1 });
}
function destroyCropperIfAny() {
  if (Lightbox.cropper) { Lightbox.cropper.destroy(); Lightbox.cropper = null; }
}
function cropperRotate(deg) { if (Lightbox.cropper) Lightbox.cropper.rotate(deg); }

// Saves the crop as a NEW image (uploaded fresh) rather than overwriting the
// original record in place — keeps the maintenance history immutable.
async function saveCroppedImage() {
  const msg = document.getElementById("editorMsg");
  if (!Lightbox.cropper) return;
  try {
    const canvas = Lightbox.cropper.getCroppedCanvas();
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.92));
    if (!blob) throw new Error("toBlob returned null");
    const base64 = await new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => resolve(r.result.split(",")[1]);
      r.onerror = reject;
      r.readAsDataURL(blob);
    });
    const res = await apiPost("uploadImage", { filename: `edited_${Date.now()}.jpg`, mimeType: "image/jpeg", base64 });
    if (res.imageUrl) {
      msg.textContent = "Saved as a new photo. Reopen the record to see it in its gallery (edits don't overwrite originals).";
      msg.style.color = "var(--green)";
    } else {
      throw new Error("upload failed");
    }
  } catch (err) {
    msg.textContent = "Couldn't save this edit — the browser blocked reading the image back out (cross-origin restriction on the hosted photo). Download it instead and re-upload the edited version as a new photo.";
    msg.style.color = "var(--red)";
  }
}

  </script>
  <script>
/* =============================================================================
   KARJAT 400/220/33 kV SUBSTATION PORTAL — APP LOGIC
   Vanilla JS SPA. Talks to Google Apps Script (code.gs) backed by a Google
   Sheet. Until API_URL is set it runs in DEMO MODE against localStorage.
   ========================================================================== */

// ---------------------------------------------------------------------------
// 1) CONFIG
// ---------------------------------------------------------------------------
const CONFIG = {
  API_URL: "https://script.google.com/macros/s/AKfycbzBcjIU0LxzQUA96XOLGSx3ThxNrfb_qw1W0lSidJPSkmGAeG7EwbzXr66mUwlyuo4D/exec",
  SUBSTATION_NAME: "KARJAT 400/220/33 kV S/S",
  SS_CODE: "J966",
  // Karjat Taluka, Ahmednagar district — near Siddhatek (Ganpati Mandir) &
  // Deulwadi, on the banks of the Bhima river. NOT the Karjat near Mumbai.
  LAT: 18.4559,
  LON: 74.7273,
  // Once you merge this portal with your SLD/equipment-list site, set these
  // and the "Draw/View SLD" button + Station SLD page will fetch from there
  // instead of the local freehand fallback.
  SLD_API_URL: "",   // e.g. an endpoint returning {imageUrl} or {svg} for a given bayId
  SLD_EMBED_URL: "", // e.g. a full master-SLD page/image to embed on the Station SLD page
};
const DEMO_MODE = !CONFIG.API_URL;

// ---------------------------------------------------------------------------
// 2) BAY MASTER
// ---------------------------------------------------------------------------
const BAY_MASTER = [
  { id: "400", name: "400/220 kV 167 MVA SPARE ICT", voltage: "400", type: "ICT-HV", ictGroup: "ICT-SPARE", status: "Active" },
  { id: "401", name: "400 kV 125 MVAr BUS REACTOR", voltage: "400", type: "Reactor", status: "Active" },
  { id: "402", name: "400 kV Tie Bay 1 (Bus Reactor - ICT 1)", voltage: "400", type: "Tie", status: "Active" },
  { id: "403", name: "400/220 kV 501 MVA ICT 1 HV", voltage: "400", type: "ICT-HV", ictGroup: "ICT1", status: "Active" },
  { id: "404", name: "400 kV KARJAT - GIRAWALI CKT 1", voltage: "400", type: "Line", status: "Active" },
  { id: "405", name: "400 kV TIE BAY 2 (GIRAWALI 1 - ICT 2)", voltage: "400", type: "Tie", status: "Active" },
  { id: "406", name: "400/220 kV 501 MVA ICT 2 HV", voltage: "400", type: "ICT-HV", ictGroup: "ICT2", status: "Active" },
  { id: "407", name: "400 kV KARJAT - GIRAWALI CKT 2", voltage: "400", type: "Line", status: "Active" },
  { id: "408", name: "400 kV TIE BAY 3 (GIRAWALI 2 - FUT BAY 1)", voltage: "400", type: "Tie", status: "Active" },
  { id: "409", name: "400/220 kV 501 MVA ICT 3 HV", voltage: "400", type: "ICT-HV", ictGroup: "ICT3", status: "Active" },
  { id: "410", name: "400 kV KARJAT - LONIKAND CKT 1", voltage: "400", type: "Line", status: "Active" },
  { id: "411", name: "400 kV TIE BAY 4 (LONIKAND 1 - FUT BAY 2)", voltage: "400", type: "Tie", status: "Active" },
  { id: "412", name: "400 kV FUTURE BAY 2", voltage: "400", type: "Future", status: "Future" },
  { id: "413", name: "400 kV KARJAT - LONIKAND CKT 2", voltage: "400", type: "Line", status: "Active" },
  { id: "414", name: "400 kV TIE BAY 5 (LONIKAND 2 - FUT BAY 3)", voltage: "400", type: "Tie", status: "Active" },
  { id: "415", name: "400 kV FUTURE BAY 3", voltage: "400", type: "Future", status: "Future" },
  { id: "202", name: "220 kV ICT 3 IV", voltage: "220", type: "ICT-IV", ictGroup: "ICT3", status: "Active" },
  { id: "203", name: "220 kV ICT 2 IV", voltage: "220", type: "ICT-IV", ictGroup: "ICT2", status: "Active" },
  { id: "204", name: "220 kV ICT 1 IV", voltage: "220", type: "ICT-IV", ictGroup: "ICT1", status: "Active" },
  { id: "205", name: "220 kV KARJAT - AHILYANAGAR CKT", voltage: "220", type: "Line", status: "Active" },
  { id: "206", name: "220 kV KARJAT - BHOSE CKT", voltage: "220", type: "Line", status: "Active" },
  { id: "207", name: "220 kV BUS COUPLER", voltage: "220", type: "BC", status: "Active" },
  { id: "208", name: "220 kV TBC", voltage: "220", type: "TBC", status: "Active" },
  { id: "209", name: "220 kV KARJAT - SHIRSUPHAL CKT", voltage: "220", type: "Line", status: "Active" },
  { id: "210", name: "220 kV KARJAT - BHIGWAN CKT", voltage: "220", type: "Line", status: "Active" },
  { id: "211", name: "220 kV KARJAT - JEUR CKT 1", voltage: "220", type: "Line", status: "Active" },
  { id: "212", name: "220 kV KARJAT - JEUR CKT 2", voltage: "220", type: "Line", status: "Active" },
  { id: "33-L1", name: "33 kV Line Bay", voltage: "33", type: "Line33", status: "Active" },
  { id: "33-BS1", name: "33 kV Bus Sectionaliser Bay", voltage: "33", type: "BS33", status: "Active" },
  { id: "33-T1", name: "33 kV Station Transformer Bay 1", voltage: "33", type: "StnTfr33", status: "Active" },
  { id: "33-T2", name: "33 kV Station Transformer Bay 2", voltage: "33", type: "StnTfr33", status: "Active" },
];

const ICT_GROUPS = [
  { id: "ICT1", label: "ICT 1 — 501 MVA", hv: "403", iv: "204" },
  { id: "ICT2", label: "ICT 2 — 501 MVA", hv: "406", iv: "203" },
  { id: "ICT3", label: "ICT 3 — 501 MVA", hv: "409", iv: "202" },
  { id: "ICT-SPARE", label: "Spare ICT — 167 MVA", hv: "400", iv: null },
];

const STATUS_OPTIONS = ["Active", "Commissioning Soon", "Future", "Under Maintenance", "Out of Service"];

const REMARK_POOLS = {
  general: [
    "Found OK. Checked and recorded in register.",
    "Checked — no abnormality observed.",
    "Inspected. Parameters within normal range.",
    "Physically verified — in order.",
    "Routine check carried out — satisfactory.",
    "Observed healthy during inspection.",
    "No defect noticed during checking.",
    "Verified as per schedule — normal condition.",
    "Examined thoroughly — nothing abnormal found.",
    "Condition found satisfactory on inspection.",
  ],
  cleaning: [
    "Cleaned thoroughly.",
    "Cleaning done.",
    "Cleaned — OK.",
    "Dust/dirt removed, cleaned.",
    "Cleaned with dry cloth — surface free of deposits.",
    "Cleaning carried out as per schedule.",
    "Accumulated dust removed and wiped clean.",
    "Cleaned and wiped down — no residue left.",
    "Surface cleaned; no contamination noticed after.",
    "Cleaning completed satisfactorily.",
  ],
  tightness: [
    "Checked for tightness — OK.",
    "Tightening done.",
    "Connections tightened & verified.",
    "Checked, tight.",
    "All terminal connections re-tightened.",
    "Bolted joints checked and tightened where required.",
    "Tightness verified with spanner — no looseness found.",
    "Loose connection (if any) tightened and re-checked.",
    "Terminal tightness confirmed satisfactory.",
    "Nut-bolts checked; tightened wherever necessary.",
  ],
  leakage: [
    "No leakage found.",
    "No leakage observed on inspection.",
    "Checked — leak-free.",
    "No leakage on bushings/joints.",
    "Visual check confirms no oil/gas leakage.",
    "No seepage noticed at gasket/joint.",
    "Checked all joints — leak-free condition confirmed.",
    "No trace of leakage found during inspection.",
    "Sealing intact; no leakage detected.",
    "Gaskets and joints checked — no leakage.",
  ],
  pressure: [
    "Pressure found OK / as per norms.",
    "Gas/oil pressure in order.",
    "Pressure verified within limits.",
    "Checked — normal pressure.",
    "Gauge reading within specified range.",
    "SF6/oil pressure recorded — normal.",
    "Pressure checked against nameplate value — satisfactory.",
    "No abnormal pressure drop observed.",
    "Pressure gauge reading confirmed healthy.",
    "Pressure within acceptable operating band.",
  ],
  meggering: [
    "Insulation resistance within limits.",
    "IR value healthy — logged in register.",
    "Megger test OK.",
    "IR test satisfactory.",
    "Megger reading within prescribed limits.",
    "Insulation test carried out — result normal.",
    "IR values recorded — no deterioration noted.",
    "Megger test conducted; readings satisfactory.",
    "Insulation resistance test passed.",
    "IR test result within healthy range as per norms.",
  ],
};
function poolForText(text) {
  const t = text.toLowerCase();
  if (t.includes("clean")) return "cleaning";
  if (t.includes("tight") || t.includes("connection")) return "tightness";
  if (t.includes("leak") || t.includes("pressure")) return "pressure";
  if (t.includes("megger") || t.includes("ir ") || t.includes("insulation")) return "meggering";
  return "general";
}
function pickRemark(checkpointText) {
  const arr = REMARK_POOLS[poolForText(checkpointText)];
  return arr[Math.floor(Math.random() * arr.length)];
}

// ---------------------------------------------------------------------------
// 3) API CLIENT (real or demo/localStorage)
// ---------------------------------------------------------------------------
const DemoDB = {
  key: "karjat_portal_demo_v3",
  read() {
    const blank = { bays: {}, customBays: [], records: [], prefillUsers: [], sld: {}, checklist: {}, equipInfo: {}, muFeed: [], tuFeed: [], equipMu: {}, equipTu: {}, customEquip: {}, hiddenEquip: {}, rolePerms: {}, config: {} };
    try { return { ...blank, ...(JSON.parse(localStorage.getItem(this.key)) || {}) }; }
    catch { return blank; }
  },
  write(db) { localStorage.setItem(this.key, JSON.stringify(db)); },
};
function uid() { return crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random()); }

async function apiGet(action, params = {}) {
  if (DEMO_MODE) return demoGet(action, params);
  try {
    const qs = new URLSearchParams({ action, ...params }).toString();
    const res = await fetch(`${CONFIG.API_URL}?${qs}`);
    if (!res.ok) return { __error: `HTTP ${res.status} from API (action=${action})` };
    const text = await res.text();
    try {
      return JSON.parse(text);
    } catch {
      return { __error: `API did not return valid JSON for action=${action}. First 200 chars: ${text.slice(0, 200)}` };
    }
  } catch (e) {
    return { __error: `Network/fetch error for action=${action}: ${e.message || e}` };
  }
}
async function apiPost(action, body = {}) {
  if (DEMO_MODE) return demoPost(action, body);
  try {
    const res = await fetch(CONFIG.API_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ action, ...body }),
    });
    if (!res.ok) return { __error: `HTTP ${res.status} from API (action=${action})` };
    const text = await res.text();
    try {
      return JSON.parse(text);
    } catch {
      return { __error: `API did not return valid JSON for action=${action}. First 200 chars: ${text.slice(0, 200)}` };
    }
  } catch (e) {
    return { __error: `Network/fetch error for action=${action}: ${e.message || e}` };
  }
}

function demoGet(action, params) {
  const db = DemoDB.read();
  if (action === "getBays") return { bays: [...BAY_MASTER, ...db.customBays].map((b) => ({ ...b, ...(db.bays[b.id] || {}) })) };
  if (action === "getMaintenance") return { records: db.records.filter((r) => r.BayID === params.bayId && (!params.equipCode || r.EquipCode === params.equipCode)) };
  if (action === "getPrefillUsers") return { users: db.prefillUsers };
  if (action === "getSLD") return { drawing: db.sld[params.bayId] || null };
  if (action === "getChecklistState") return { state: db.checklist[`${params.bayId}::${params.equipCode}::${params.category}`] || null };
  if (action === "getEquipmentInfo") return { info: db.equipInfo[`${params.bayId}::${params.equipCode}`] || null };
  if (action === "getGlobalRemarks") return { records: params.kind === "TU" ? db.tuFeed : db.muFeed };
  if (action === "getEquipmentRemarks") {
    const store = params.kind === "TU" ? db.equipTu : db.equipMu;
    return { records: store[`${params.bayId}::${params.equipCode}`] || [] };
  }
  if (action === "getCustomEquipment") return { items: db.customEquip[params.bayId] || [] };
  if (action === "getHiddenEquipment") return { codes: db.hiddenEquip[params.bayId] || [] };
  if (action === "getRolePermissions") return { perms: db.rolePerms || {} };
  if (action === "getConfig") return { config: db.config || {} };
  return {};
}
function demoPost(action, body) {
  const db = DemoDB.read();
  if (action === "updateBayStatus") db.bays[body.bayId] = { ...(db.bays[body.bayId] || {}), status: body.status };
  else if (action === "renameBay") db.bays[body.bayId] = { ...(db.bays[body.bayId] || {}), name: body.name };
  else if (action === "logMaintenance") db.records.push({ ...body.entries, BayID: body.bayId, GroupID: body.groupId, CreatedAt: new Date().toISOString() });
  else if (action === "setPrefillUsers") db.prefillUsers = body.users;
  else if (action === "saveSLD") db.sld[body.bayId] = body.drawing;
  else if (action === "saveChecklistState") {
    (body.targets || []).forEach((t) => { db.checklist[`${t.bayId}::${t.equipCode}::${body.category}`] = body.sections; });
  } else if (action === "saveEquipmentInfo") {
    db.equipInfo[`${body.bayId}::${body.equipCode}`] = body.info;
  } else if (action === "logEquipmentMaintenance") {
    ["Monthly", "Quarterly", "Annual"].forEach((cat) => {
      const entry = body.entries[cat];
      if (!entry) return;
      const rec = { ID: uid(), BayID: body.bayId, EquipCode: body.equipCode, Category: cat, Date: entry.date, PermitNo: entry.permitNo || "", LoggedBy: entry.loggedBy || body.user, Remarks: entry.remarks, Images: entry.images || [], GroupID: body.groupId, CreatedAt: new Date().toISOString() };
      db.records.push(rec);
      if (entry.muRemark) db.muFeed.unshift({ ID: uid(), BayID: body.bayId, Category: cat, Date: entry.date, PermitNo: entry.permitNo || "", Remark: entry.muRemark, Selected: "FALSE", LoggedBy: entry.loggedBy || body.user });
      if (entry.tuRemark) db.tuFeed.unshift({ ID: uid(), BayID: body.bayId, Category: cat, Date: entry.date, PermitNo: entry.permitNo || "", Remark: entry.tuRemark, Selected: "FALSE", LoggedBy: entry.loggedBy || body.user });
    });
  } else if (action === "addEquipmentRemark") {
    const store = body.kind === "TU" ? db.equipTu : db.equipMu;
    const key = `${body.bayId}::${body.equipCode}`;
    store[key] = store[key] || [];
    store[key].unshift({ ID: uid(), Date: body.date, Remark: body.remark, Images: body.images || [], LoggedBy: body.user });
  } else if (action === "addBay") {
    if (![...BAY_MASTER, ...db.customBays].some((b) => b.id === body.bay.id)) db.customBays.push(body.bay);
  } else if (action === "updateBayType") {
    db.bays[body.bayId] = { ...(db.bays[body.bayId] || {}), type: body.type };
  } else if (action === "addCustomEquipment") {
    db.customEquip[body.bayId] = db.customEquip[body.bayId] || [];
    db.customEquip[body.bayId].push(body.item);
  } else if (action === "deleteBay") {
    db.customBays = db.customBays.filter((b) => b.id !== body.bayId);
    delete db.bays[body.bayId];
  } else if (action === "hideEquipment") {
    db.hiddenEquip[body.bayId] = db.hiddenEquip[body.bayId] || [];
    db.hiddenEquip[body.bayId].push(body.equipCode);
  } else if (action === "unhideEquipment") {
    db.hiddenEquip[body.bayId] = (db.hiddenEquip[body.bayId] || []).filter((c) => c !== body.equipCode);
  } else if (action === "deleteCustomEquipment") {
    db.customEquip[body.bayId] = (db.customEquip[body.bayId] || []).filter((c) => c.code !== body.equipCode);
  } else if (action === "setRolePermissions") {
    db.rolePerms = body.perms;
  } else if (action === "setConfig") {
    db.config = { ...(db.config || {}), ...(body.config || {}) };
  } else if (action === "toggleRemarkSelected") {
    const feed = body.kind === "TU" ? db.tuFeed : db.muFeed;
    const rec = feed.find((r) => r.ID === body.id);
    if (rec) rec.Selected = body.selected ? "TRUE" : "FALSE";
  } else if (action === "editGlobalRemark") {
    const feed = body.kind === "TU" ? db.tuFeed : db.muFeed;
    const rec = feed.find((r) => r.ID === body.id);
    if (rec) rec.Remark = body.remark;
  } else if (action === "deleteGlobalRemark") {
    if (body.kind === "TU") db.tuFeed = db.tuFeed.filter((r) => r.ID !== body.id);
    else db.muFeed = db.muFeed.filter((r) => r.ID !== body.id);
  } else if (action === "editEquipmentRemark") {
    const store = body.kind === "TU" ? db.equipTu : db.equipMu;
    Object.values(store).forEach((list) => { const rec = list.find((r) => r.ID === body.id); if (rec) rec.Remark = body.remark; });
  } else if (action === "deleteEquipmentRemark") {
    const store = body.kind === "TU" ? db.equipTu : db.equipMu;
    Object.keys(store).forEach((k) => { store[k] = store[k].filter((r) => r.ID !== body.id); });
  } else if (action === "editCustomEquipment") {
    (db.customEquip[body.bayId] || []).forEach((c) => { if (c.code === body.equipCode) c.label = body.label; });
  } else if (action === "deleteLogEntry") {
    db.records = db.records.filter((r) => r.ID !== body.id);
  } else if (action === "uploadImage") {
    // demo mode: keep the data URL itself as the "uploaded" image
    return { ok: true, imageUrl: `data:${body.mimeType};base64,${body.base64}` };
  }
  DemoDB.write(db);
  return { ok: true };
}

// ---------------------------------------------------------------------------
// 4) DATE / DUE HELPERS
// ---------------------------------------------------------------------------
function currentFY(d = new Date()) {
  const y = d.getFullYear(), m = d.getMonth() + 1;
  return m >= 4 ? `FY ${y}-${String(y + 1).slice(2)}` : `FY ${y - 1}-${String(y).slice(2)}`;
}
function addMonths(date, n) { const d = new Date(date); d.setMonth(d.getMonth() + n); return d; }
function daysBetween(a, b) { return Math.round((b - a) / 86400000); }
const CYCLE_MONTHS = { Monthly: 1, Quarterly: 3, Annual: 12 };
function dueStatus(category, records) {
  const list = records.filter((r) => r.Category === category).sort((a, b) => new Date(b.Date) - new Date(a.Date));
  const last = list[0];
  if (!last) return { lastDate: null, nextDue: null, tone: "overdue" };
  const nextDue = addMonths(last.Date, CYCLE_MONTHS[category]);
  const daysLeft = daysBetween(new Date(), nextDue);
  let tone;
  if (category === "Monthly") tone = daysLeft < 0 ? "overdue" : daysLeft <= 14 ? "warn" : "ok";
  else tone = daysLeft < 0 ? "overdue" : daysLeft <= 60 ? "warn" : "ok";
  return { lastDate: last.Date, nextDue: nextDue.toISOString().slice(0, 10), tone };
}
function duePillHTML(status) {
  const label = status.lastDate ? `Last: ${status.lastDate} · Next due: ${status.nextDue}` : "Never logged — due now";
  return `<span class="due-pill ${status.tone}"><span class="dot"></span>${label}</span>`;
}

// ---------------------------------------------------------------------------
// 5) STATE
// ---------------------------------------------------------------------------
const State = {
  view: { k: "home" },
  bays: [],
  currentRole: "Admin", // Admin | Editor | MU | TU — client-side role for now; real per-user auth needs backend deployment
  muFullAccess: false,  // admin-grantable: lets MU-role users use the full cascade logger (not just MU remarks)
  tuFullAccess: false,  // same, for TU-role users
  prefillUsers: [],
  currentUser: "Guest User",
  _equipTab: {},   // bayId -> selected equipCode
  _catTab: {},     // equipCode -> selected category
};
function normalizeBayRow(r) {
  const s = (v) => (v === undefined || v === null ? "" : String(v).trim());
  return {
    id: s(r.id || r.BayID),
    name: s(r.name || r.Name),
    voltage: s(r.voltage || r.VoltageLevel),
    type: s(r.type || r.Type),
    ictGroup: s(r.ictGroup || r.ICTGroup),
    status: s(r.status || r.Status),
  };
}
async function loadAll() {
  State.bootError = null;
  const baysRes = await apiGet("getBays");
  if (baysRes.__error) { State.bootError = baysRes.__error; State.bays = []; return; }
  State.bays = (baysRes.bays || []).map(normalizeBayRow);
  const usersRes = await apiGet("getPrefillUsers");
  State.prefillUsers = usersRes.__error ? [] : (usersRes.users || []);
}
function findBay(id) { return State.bays.find((b) => b.id === id); }
function isAdmin() { return State.currentRole === "Admin"; }
// Can run the full M/Q/A checklist cascade logger
function canFullLog() { return isAdmin() || State.currentRole === "Editor" || (State.currentRole === "MU" && State.muFullAccess) || (State.currentRole === "TU" && State.tuFullAccess); }
// Can add equipment-level ad hoc MU / TU remarks and the MU/TU fields in the cascade logger
function canEnterMU() { return isAdmin() || State.currentRole === "MU" || canFullLog(); }
function canEnterTU() { return isAdmin() || State.currentRole === "TU" || canFullLog(); }
// Structural changes: add/delete bay, add/delete equipment, broaden checklist scope beyond "this bay"
function canManageStructure() { return isAdmin(); }
const canPrefill = () => isAdmin() || State.prefillUsers.includes(State.currentUser);

// ICT groups aren't in the Bays sheet — synthesize a bay-shaped entity so
// the same equipment-panel/checklist/MU-TU machinery works for them too.
function ictTabsFor(g) {
  return [
    { code: `${g.id}-R`, label: "ICT — R Phase", perPhase: false, equipType: "ICT_PHASE" },
    { code: `${g.id}-Y`, label: "ICT — Y Phase", perPhase: false, equipType: "ICT_PHASE" },
    { code: `${g.id}-B`, label: "ICT — B Phase", perPhase: false, equipType: "ICT_PHASE" },
    { code: `${g.id}-TD`, label: "Tertiary Delta Bay", perPhase: false, equipType: "TERTIARY" },
    { code: `${g.id}-RRS`, label: "RRS Region", perPhase: false, equipType: "RRS_GENERIC" },
  ];
}
function getEntityBay(id) {
  const bay = findBay(id);
  if (bay) return bay;
  const g = ICT_GROUPS.find((x) => x.id === id);
  if (g) return { id: g.id, name: g.label, voltage: "400", type: "ICT-GROUP", status: "Active", isICT: true };
  return null;
}

// ---------------------------------------------------------------------------
// 6) ROUTER
// ---------------------------------------------------------------------------
const app = document.getElementById("appRoot");
function setView(v) { State.view = v; render(); window.scrollTo({ top: 0, behavior: "smooth" }); }

async function render() {
  renderTopbar();
  const v = State.view;
  if (v.k === "home") return renderHome();
  if (v.k === "400") return renderBayGrid("400", "400 kV Bays — 1½ Circuit Breaker Scheme (each bay = one CB)");
  if (v.k === "220") return renderBayGrid("220", "220 kV Bays — Double Main + Transfer Bus");
  if (v.k === "33") return renderBayGrid("33", "33 kV Yard");
  if (v.k === "ict") return renderICTList();
  if (v.k === "ictDetail") return renderICTDetail(v.id);
  if (v.k === "bay") return renderBayDetail(v.id);
  if (v.k === "admin") return renderAdmin();
  if (v.k === "mu") return renderGlobalRemarks("MU");
  if (v.k === "tu") return renderGlobalRemarks("TU");
  if (v.k === "sld") return renderStationSLD();
  if (["gallery", "battery", "dg", "other"].includes(v.k)) return renderStub(v.k);
  return renderHome();
}

function renderTopbar() {
  const nav = [
    ["home", "Home"], ["400", "400 kV Bays"], ["220", "220 kV Bays"], ["ict", "ICTs"], ["33", "33 kV Yard"],
    ["sld", "Station SLD"], ["mu", "MU Remarks"], ["tu", "TU Remarks"], ["gallery", "Photo Gallery"], ["admin", "Admin"],
  ];
  document.getElementById("mainnav").innerHTML = nav.map(([k, label]) =>
    `<button class="${State.view.k === k ? "active" : ""}" onclick="setView({k:'${k}'})">${label}</button>`
  ).join("");
  const sel = document.getElementById("roleSelect");
  if (sel) sel.value = State.currentRole;
}

function busbarSVG() {
  return `<svg class="busbar" viewBox="0 0 400 10" preserveAspectRatio="none">
    <line x1="0" y1="5" x2="400" y2="5" stroke="var(--border)" stroke-width="1"/>
    <line x1="0" y1="5" x2="400" y2="5" stroke="var(--accent)" stroke-width="1" stroke-dasharray="2 6" opacity=".55"/>
    ${[40,120,200,280,360].map(x => `<rect x="${x-3}" y="2" width="6" height="6" fill="var(--bg)" stroke="var(--amber)" stroke-width="1"/>`).join("")}
  </svg>`;
}
function statusEditor(bay) {
  return `<select class="status-select" onclick="event.stopPropagation()" onchange="updateStatus('${bay.id}', this.value)">
    ${STATUS_OPTIONS.map((s) => `<option value="${s}" ${s === bay.status ? "selected" : ""}>${s}</option>`).join("")}
  </select>`;
}
function typeEditor(bay) {
  const types = TYPES_FOR_VOLTAGE[bay.voltage] || [bay.type];
  const opts = types.includes(bay.type) ? types : [bay.type, ...types];
  return `<select class="status-select" onclick="event.stopPropagation()" onchange="updateType('${bay.id}', this.value)">
    ${opts.map((t) => `<option value="${t}" ${t === bay.type ? "selected" : ""}>${t}</option>`).join("")}
  </select>`;
}
async function updateStatus(bayId, status) {
  const b = findBay(bayId);
  const wasFuture = b && b.type === "Future";
  await apiPost("updateBayStatus", { bayId, status, user: State.currentUser });
  if (b) b.status = status;
  if (wasFuture && (status === "Active" || status === "Commissioning Soon")) {
    alert("This bay is still typed as 'Future' — use the Type dropdown on the bay page to set its real bay type (Line/Tie/etc.) so the correct equipment list is generated.");
  }
  render();
}
async function updateType(bayId, type) {
  await apiPost("updateBayType", { bayId, type, user: State.currentUser });
  const b = findBay(bayId); if (b) b.type = type;
  render();
}

// ---------------------------------------------------------------------------
// HOME
// ---------------------------------------------------------------------------
async function renderHome() {
  const cats = [
    { k: "400", title: "400 kV Lines & Bays", sub: "1½ CB scheme", count: State.bays.filter(b=>b.voltage==="400").length },
    { k: "220", title: "220 kV Lines & Bays", sub: "Double Main + Transfer", count: State.bays.filter(b=>b.voltage==="220").length },
    { k: "ict", title: "ICTs", sub: "501/167 MVA, phase-wise", count: ICT_GROUPS.length },
    { k: "33", title: "33 kV Yard", sub: "Line, BS, Stn. Transformers", count: State.bays.filter(b=>b.voltage==="33").length },
    { k: "battery", title: "Battery Set", sub: "Charger & bank", count: 1 },
    { k: "dg", title: "DG Set", sub: "Proforma pending", count: 1 },
    { k: "other", title: "Other Maintenance", sub: "Civil / misc.", count: "—" },
    { k: "gallery", title: "Photo Gallery", sub: "Site & equipment photos", count: "—" },
  ];
  app.innerHTML = `
    <div class="eyebrow">${currentFY()}</div>
    <h1 class="page-title">Substation overview</h1>
    <div class="page-sub">Recent activity by element type. Tap a category to open its bay list.</div>
    ${busbarSVG()}
    <div class="grid">
      ${cats.map(c => `
        <div class="card clickable" onclick="setView({k:'${c.k}'})">
          <div style="display:flex;justify-content:space-between;align-items:flex-start">
            <div>
              <div style="font-family:var(--display);font-weight:700;font-size:15px">${c.title}</div>
              <div style="font-size:12px;color:var(--dim);margin-top:2px">${c.sub}</div>
            </div>
            <div style="font-family:var(--mono);font-size:20px;color:var(--accent)">${c.count}</div>
          </div>
          <div class="dashed-divider" style="font-size:11.5px;color:var(--dim);margin-top:10px">Tap to open</div>
        </div>
      `).join("")}
    </div>

    <div class="section-block" style="margin-top:28px">
      <div class="type-label">MU / TU — featured recent remarks (not bays; separate feeds)</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px" id="muTuHomeGrid"></div>
    </div>
  `;
  renderMuTuHomeWidget();
}

async function renderMuTuHomeWidget() {
  const [muRes, tuRes] = await Promise.all([apiGet("getGlobalRemarks", { kind: "MU" }), apiGet("getGlobalRemarks", { kind: "TU" })]);
  const topN = (records) => (records || [])
    .filter((r) => r.Selected === true || r.Selected === "TRUE")
    .sort((a, b) => new Date(b.Date) - new Date(a.Date))
    .slice(0, 10);
  const muTop = topN(muRes.records);
  const tuTop = topN(tuRes.records);
  const col = (title, kind, list) => `
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
        <div style="font-family:var(--display);font-weight:700;font-size:14.5px">${title}</div>
        <button class="btn ghost sm" onclick="setView({k:'${kind.toLowerCase()}'})">Open feed</button>
      </div>
      ${list.length === 0
        ? `<div class="empty-note">No entries featured yet — star entries on the ${title} page to show them here.</div>`
        : list.map((r) => `
          <div class="hist-row">
            <div class="hist-top"><span class="hist-date">${r.Date} · Bay ${r.BayID} · ${r.Category}</span><span style="color:var(--dim)">${r.LoggedBy || "—"}</span></div>
            <div style="font-size:12px;margin-top:6px">${r.Remark}</div>
          </div>`).join("")}
    </div>`;
  document.getElementById("muTuHomeGrid").innerHTML =
    col("Maintenance Unit Remarks", "MU", muTop) + col("Testing Unit Remarks", "TU", tuTop);
}

// ---------------------------------------------------------------------------
// BAY GRID
// ---------------------------------------------------------------------------
const TYPES_FOR_VOLTAGE = {
  "400": ["Line", "Tie", "Reactor", "ICT-HV", "Future"],
  "220": ["Line", "ICT-IV", "BC", "TBC"],
  "33": ["Line33", "BS33", "StnTfr33"],
};

function renderBayGrid(voltage, title) {
  const bays = State.bays.filter((b) => b.voltage === voltage);
  const groups = {};
  bays.forEach((b) => { (groups[b.type] = groups[b.type] || []).push(b); });
  app.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px">
      <h1 class="page-title">${title}</h1>
      ${canManageStructure() ? `<button class="btn" onclick="openAddBayModal('${voltage}')">+ Add Bay</button>` : ""}
    </div>
    ${busbarSVG()}
    ${State.bays.length === 0 ? `
      <div class="card" style="border-color:var(--red)">
        <div style="font-weight:700;color:var(--red);margin-bottom:6px">No bays loaded at all (across every voltage)</div>
        <div style="font-size:12px;color:var(--dim)">The API call succeeded but returned zero bays. Check that <code>initialize()</code> was run in Apps Script and the Bays tab in your Sheet actually has rows — Extensions → Apps Script → run <code>initialize</code> again if unsure (it's safe to re-run; it only seeds if the tab is empty).</div>
      </div>
    ` : bays.length === 0 ? `
      <div class="empty-note">No ${voltage} kV bays found. If you expect some here, check the VoltageLevel column for these rows in the Sheet matches "${voltage}" exactly.</div>
    ` : ""}
    ${Object.entries(groups).map(([type, list]) => `
      <div class="section-block">
        <div class="type-label">${type} · ${list.length}</div>
        <div class="grid">
          ${list.map((b) => `
            <div class="card clickable" onclick="setView({k:'bay',id:'${b.id}'})">
              <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px">
                <div style="font-family:var(--mono);font-size:11px;color:var(--copper)">BAY ${b.id}</div>
                ${statusEditor(b)}
              </div>
              <div style="font-size:13.5px;margin-top:8px;font-weight:600;line-height:1.35">${b.name}</div>
            </div>
          `).join("")}
        </div>
      </div>
    `).join("")}
  `;
}

function openAddBayModal(voltage) {
  const types = TYPES_FOR_VOLTAGE[voltage] || [];
  const root = document.getElementById("modalRoot");
  root.innerHTML = modalWrap(`
    <div style="font-family:var(--display);font-weight:700;font-size:16px;margin-bottom:12px">Add ${voltage} kV Bay</div>
    <label class="fld"><span>Bay ID (as per SLD, e.g. 416)</span><input class="in mono" id="ab_id"/></label>
    <label class="fld"><span>Bay Name</span><input class="in" id="ab_name"/></label>
    <label class="fld"><span>Bay Type</span>
      <select class="in" id="ab_type">${types.map(t => `<option value="${t}">${t}</option>`).join("")}</select>
    </label>
    <label class="fld"><span>Status</span>
      <select class="in" id="ab_status">${STATUS_OPTIONS.map(s => `<option value="${s}">${s}</option>`).join("")}</select>
    </label>
    <div style="color:var(--dim);font-size:11.5px;margin-bottom:10px">Equipment (isolators, CB, CT, LA etc.) is auto-generated from the bay type the moment you save — same template engine used for the seeded bays.</div>
    <div style="display:flex;justify-content:flex-end;gap:8px">
      <button class="btn ghost" onclick="closeModal()">Cancel</button>
      <button class="btn" onclick="submitAddBay('${voltage}')">Add Bay</button>
    </div>
  `);
}
async function submitAddBay(voltage) {
  const id = document.getElementById("ab_id").value.trim();
  const name = document.getElementById("ab_name").value.trim();
  const type = document.getElementById("ab_type").value;
  const status = document.getElementById("ab_status").value;
  if (!id || !name) { alert("Bay ID and Name are required."); return; }
  if (findBay(id)) { alert("A bay with this ID already exists."); return; }
  const bay = { id, name, voltage, type, ictGroup: "", status };
  const res = await apiPost("addBay", { bay, user: State.currentUser });
  if (res.error) { alert(res.error); return; }
  State.bays.push(bay);
  closeModal();
  setView({ k: voltage });
}

// ---------------------------------------------------------------------------
// ICT LIST / DETAIL (unchanged structurally)
// ---------------------------------------------------------------------------
function renderICTList() {
  app.innerHTML = `
    <h1 class="page-title">ICTs</h1>
    <div class="page-sub">Phase-wise units (R / Y / B), each with a tertiary delta bay. Tap a group to open its 5 tabs.</div>
    ${busbarSVG()}
    <div class="grid">
      ${ICT_GROUPS.map((g) => `
        <div class="card clickable" onclick="setView({k:'ictDetail',id:'${g.id}'})">
          <div style="font-family:var(--mono);font-size:11px;color:var(--copper)">${g.id}</div>
          <div style="font-size:14px;font-weight:600;margin-top:8px">${g.label}</div>
          <div style="font-size:11.5px;color:var(--dim);margin-top:4px">HV: Bay ${g.hv} ${g.iv ? `· IV: Bay ${g.iv}` : "· No IV pairing (spare)"}</div>
        </div>
      `).join("")}
    </div>
  `;
}
function renderICTDetail(groupId) {
  const g = ICT_GROUPS.find((x) => x.id === groupId);
  if (!g) { app.innerHTML = `<div class="empty-note">ICT group not found</div>`; return; }
  const bay = getEntityBay(g.id);
  const tabs = ictTabsFor(g);
  const activeCode = State._equipTab[g.id] || tabs[0].code;
  State._currentBay = bay;
  State._currentEquipList = tabs;

  app.innerHTML = `
    <button class="btn ghost sm" onclick="setView({k:'ict'})">← All ICTs</button>
    <h1 class="page-title" style="margin-top:10px">${g.label}</h1>
    <div class="page-sub">HV Bay ${g.hv} ${g.iv ? `· IV Bay ${g.iv}` : "· No IV pairing (spare)"} — "RRS Region" label kept exactly as specified; flag if it should read differently. ICT phase / tertiary / RRS checklists are placeholders pending your real proforma.</div>
    ${busbarSVG()}
    <div class="tabs" id="equipTabs">${tabs.map(t => `<button class="tab ${activeCode===t.code?"active":""}" data-code="${t.code}" onclick="selectEquip('${g.id}','${t.code}')">${t.label}</button>`).join("")}</div>
    <div id="equipPanel"></div>
  `;
  const activeItem = tabs.find(t => t.code === activeCode);
  if (activeItem) renderEquipPanel(bay, activeItem);
}

// ---------------------------------------------------------------------------
// BAY DETAIL — bay info panel + equipment tabs
// ---------------------------------------------------------------------------
async function renderBayDetail(bayId) {
  const bay = findBay(bayId);
  if (!bay) { app.innerHTML = `<div class="empty-note">Bay not found</div>`; return; }
  const templateEquipment = equipmentForBay(bay);
  const { items: customItems } = await apiGet("getCustomEquipment", { bayId });
  const { codes: hiddenCodes } = await apiGet("getHiddenEquipment", { bayId });
  const customEquipment = (customItems || []).map((c) => ({ code: c.code, label: c.label, perPhase: c.perPhase === true || c.perPhase === "TRUE", equipType: c.equipType, custom: true }));
  const hidden = new Set(hiddenCodes || []);
  const equipment = [...templateEquipment, ...customEquipment].filter((e) => !hidden.has(e.code));
  const activeEquip = State._equipTab[bayId] || equipment[0]?.code;
  State._currentBay = bay;
  State._currentEquipList = equipment;

  app.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px">
      <div>
        <div style="font-family:var(--mono);font-size:12px;color:var(--copper)">BAY ${bay.id}</div>
        <div style="display:flex;align-items:center;gap:10px;margin-top:4px">
          <h1 class="page-title" style="margin:0">${bay.name}</h1>
          <button class="btn ghost sm" onclick="editBayName('${bay.id}')">edit name</button>
        </div>
      </div>
      <div style="display:flex;gap:8px">
        <button class="btn ghost" onclick="openSLDEditor('${bay.id}')">🗺 Draw / View SLD</button>
        ${canManageStructure() ? `<button class="btn danger" onclick="confirmDeleteBay('${bay.id}')">Delete Bay</button>` : ""}
      </div>
    </div>

    <!-- BAY INFORMATION PANEL -->
    <div class="card" style="margin-top:14px;display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:14px;align-items:center">
      <div><div style="font-size:10.5px;color:var(--dim);text-transform:uppercase;letter-spacing:.5px">Voltage</div><div style="font-size:13px;margin-top:2px">${bay.voltage} kV</div></div>
      <div><div style="font-size:10.5px;color:var(--dim);text-transform:uppercase;letter-spacing:.5px">Type</div><div style="margin-top:4px">${typeEditor(bay)}</div></div>
      <div><div style="font-size:10.5px;color:var(--dim);text-transform:uppercase;letter-spacing:.5px">ICT Group</div><div style="font-size:13px;margin-top:2px">${bay.ictGroup || "—"}</div></div>
      <div><div style="font-size:10.5px;color:var(--dim);text-transform:uppercase;letter-spacing:.5px">Status</div><div style="margin-top:4px">${statusEditor(bay)}</div></div>
    </div>

    ${busbarSVG()}

    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">
      <div class="type-label" style="margin:0">Equipment on this bay (${equipment.length}) — tap to open</div>
      ${canManageStructure() ? `<button class="btn ghost sm" onclick="openAddEquipmentModal('${bay.id}')">+ Add Equipment</button>` : ""}
    </div>
    <div class="tabs" id="equipTabs">
      ${equipment.map(e => `<button class="tab ${activeEquip===e.code?"active":""}" data-code="${e.code}" onclick="selectEquip('${bay.id}','${e.code}')">${e.code}${e.custom?" ✦":""}</button>`).join("")}
    </div>

    <div id="equipPanel"></div>
  `;
  if (activeEquip) await renderEquipPanel(bay, equipment.find(e => e.code === activeEquip));
}

function editCustomEquipmentPrompt(bayId, equipCode, currentLabel) {
  const root = document.getElementById("modalRoot");
  root.innerHTML = modalWrap(`
    <div style="font-family:var(--display);font-weight:700;font-size:16px;margin-bottom:12px">Edit Equipment Label — ${equipCode}</div>
    <label class="fld"><span>Label</span><input class="in" id="ece_label" value="${currentLabel.replace(/"/g,'&quot;')}"/></label>
    <div style="display:flex;justify-content:flex-end;gap:8px">
      <button class="btn ghost" onclick="closeModal()">Cancel</button>
      <button class="btn" onclick="saveCustomEquipmentLabel('${bayId}','${equipCode}')">Save</button>
    </div>
  `);
}
async function saveCustomEquipmentLabel(bayId, equipCode) {
  const label = document.getElementById("ece_label").value.trim();
  if (!label) return;
  await apiPost("editCustomEquipment", { bayId, equipCode, label });
  closeModal();
  renderBayDetail(bayId);
}

function confirmDeleteEquipment(bayId, equipCode, isCustom) {
  const root = document.getElementById("modalRoot");
  root.innerHTML = modalWrap(`
    <div style="font-family:var(--display);font-weight:700;font-size:16px;margin-bottom:8px">Delete ${equipCode}?</div>
    <div style="color:var(--dim);font-size:12.5px;margin-bottom:16px">
      ${isCustom ? "This removes the custom equipment entry entirely." : "This is SLD-derived equipment — it will be hidden from the bay (reversible by an admin later), not deleted from the diagram."}
    </div>
    <div style="display:flex;justify-content:flex-end;gap:8px">
      <button class="btn ghost" onclick="closeModal()">Cancel</button>
      <button class="btn danger" onclick="doDeleteEquipment('${bayId}','${equipCode}', ${isCustom})">Delete</button>
    </div>
  `);
}
async function doDeleteEquipment(bayId, equipCode, isCustom) {
  if (isCustom) await apiPost("deleteCustomEquipment", { bayId, equipCode });
  else await apiPost("hideEquipment", { bayId, equipCode, user: State.currentUser });
  delete State._equipTab[bayId];
  closeModal();
  renderBayDetail(bayId);
}

function confirmDeleteBay(bayId) {
  const root = document.getElementById("modalRoot");
  root.innerHTML = modalWrap(`
    <div style="font-family:var(--display);font-weight:700;font-size:16px;margin-bottom:8px">Delete Bay ${bayId}?</div>
    <div style="color:var(--dim);font-size:12.5px;margin-bottom:16px">This removes the bay from the directory. Its logged history stays in the Sheet (nothing is bulk-deleted there) but won't be reachable from the UI anymore.</div>
    <div style="display:flex;justify-content:flex-end;gap:8px">
      <button class="btn ghost" onclick="closeModal()">Cancel</button>
      <button class="btn danger" onclick="doDeleteBay('${bayId}')">Delete permanently</button>
    </div>
  `);
}
async function doDeleteBay(bayId) {
  await apiPost("deleteBay", { bayId, user: State.currentUser });
  State.bays = State.bays.filter((b) => b.id !== bayId);
  closeModal();
  const voltage = bayId.startsWith("33") ? "33" : bayId.startsWith("2") ? "220" : "400";
  setView({ k: voltage });
}

function selectEquip(bayId, code) {
  State._equipTab[bayId] = code;
  const tabsEl = document.getElementById("equipTabs");
  if (tabsEl) {
    tabsEl.querySelectorAll("button.tab").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.code === code);
    });
  }
  renderEquipPanel(getEntityBay(bayId), State._currentEquipList.find(e => e.code === code));
}

function openAddEquipmentModal(bayId) {
  const categories = Object.keys(CHECKLIST_LIBRARY);
  const root = document.getElementById("modalRoot");
  root.innerHTML = modalWrap(`
    <div style="font-family:var(--display);font-weight:700;font-size:16px;margin-bottom:12px">Add Equipment — Bay ${bayId}</div>
    <label class="fld"><span>Code suffix (final code will be ${bayId}-&lt;suffix&gt;)</span><input class="in mono" id="ae_code" placeholder="e.g. 89X"/></label>
    <label class="fld"><span>Label</span><input class="in" id="ae_label" placeholder="e.g. Additional Bypass Isolator"/></label>
    <label class="fld"><span>Equipment Category (determines checklist template)</span>
      <select class="in" id="ae_category">${categories.map(c => `<option value="${c}">${c}</option>`).join("")}</select>
    </label>
    <label style="display:flex;align-items:center;gap:8px;font-size:12.5px;margin-bottom:14px">
      <input type="checkbox" id="ae_perphase"/> Per-phase info panel (R/Y/B — use for CT/LA-type units)
    </label>
    <div style="display:flex;justify-content:flex-end;gap:8px">
      <button class="btn ghost" onclick="closeModal()">Cancel</button>
      <button class="btn" onclick="submitAddEquipment('${bayId}')">Add Equipment</button>
    </div>
  `);
}
async function submitAddEquipment(bayId) {
  const suffix = document.getElementById("ae_code").value.trim();
  const label = document.getElementById("ae_label").value.trim();
  const equipType = document.getElementById("ae_category").value;
  const perPhase = document.getElementById("ae_perphase").checked;
  if (!suffix || !label) { alert("Code and label are required."); return; }
  const code = `${bayId}-${suffix}`;
  const item = { code, label, equipType, perPhase };
  await apiPost("addCustomEquipment", { bayId, item, user: State.currentUser });
  closeModal();
  renderBayDetail(bayId);
}

function editBayName(bayId) {
  const bay = findBay(bayId);
  const root = document.getElementById("modalRoot");
  root.innerHTML = modalWrap(`
    <div style="font-family:var(--display);font-weight:700;font-size:16px;margin-bottom:12px">Edit Bay Name</div>
    <label class="fld"><span>Bay Name</span><input class="in" id="ebn_name" value="${bay.name.replace(/"/g,'&quot;')}"/></label>
    <div style="display:flex;justify-content:flex-end;gap:8px">
      <button class="btn ghost" onclick="closeModal()">Cancel</button>
      <button class="btn" onclick="saveBayName('${bayId}')">Save</button>
    </div>
  `);
}
async function saveBayName(bayId) {
  const name = document.getElementById("ebn_name").value.trim();
  if (!name) return;
  await apiPost("renameBay", { bayId, name, user: State.currentUser });
  const bay = findBay(bayId); bay.name = name;
  closeModal();
  render();
}

// ---------------------------------------------------------------------------
// EQUIPMENT PANEL — info panel + M/Q/A tabs + sectioned checklist + MU/TU
// ---------------------------------------------------------------------------
async function renderEquipPanel(bay, equipItem) {
  if (!equipItem) { document.getElementById("equipPanel").innerHTML = `<div class="empty-note">No equipment defined.</div>`; return; }
  const code = equipItem.code;
  const equipType = equipItem.equipType || equipTypeFromCode(code);
  const categories = applicableCategories(equipType);
  const cat = State._catTab[code] || categories[0];

  const { info } = await apiGet("getEquipmentInfo", { bayId: bay.id, equipCode: code });
  const maintRes = await apiGet("getMaintenance", { bayId: bay.id, equipCode: code });
  // filter client-side too, defensively (demo mode may return bay-wide records)
  const equipRecords = (maintRes.records || []).filter((r) => !r.EquipCode || r.EquipCode === code);

  let stateSections = await apiGet("getChecklistState", { bayId: bay.id, equipCode: code, category: cat });
  let sections = stateSections.state || defaultSectionsFor(equipType, cat);
  State._currentSections = sections;
  State._currentEquip = { bay, equipItem, equipType, cat };

  const muRes = await apiGet("getEquipmentRemarks", { kind: "MU", bayId: bay.id, equipCode: code });
  const tuRes = await apiGet("getEquipmentRemarks", { kind: "TU", bayId: bay.id, equipCode: code });

  document.getElementById("equipPanel").innerHTML = `
    <div class="card" style="margin-bottom:16px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
        <div style="font-family:var(--display);font-weight:700;font-size:15px">${code} — ${equipItem.label}</div>
        <div style="display:flex;gap:6px">
          <button class="btn ghost sm" onclick="editEquipInfo('${bay.id}','${code}', ${equipItem.perPhase})">edit info</button>
          ${canManageStructure() && !bay.isICT && equipItem.custom ? `<button class="btn ghost sm" onclick="editCustomEquipmentPrompt('${bay.id}','${code}','${(equipItem.label||"").replace(/'/g,"\\'")}')">edit label</button>` : ""}
          ${canManageStructure() && !bay.isICT ? `<button class="btn danger sm" onclick="confirmDeleteEquipment('${bay.id}','${code}', ${!!equipItem.custom})">delete</button>` : ""}
        </div>
      </div>
      <div id="equipInfoDisplay">${renderEquipInfoDisplay(info, equipItem.perPhase)}</div>
    </div>

    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px">
      <div class="tabs" style="margin-bottom:0">
        ${categories.map(c => `<button class="tab ${cat===c?"active":""}" onclick="switchCategory('${c}')">${c}</button>`).join("")}
      </div>
      ${canFullLog() ? `<button class="btn" onclick="openCascadeLogger('${bay.id}','${code}','${equipType}')">+ Log Maintenance Entry</button>` : ""}
    </div>
    <div style="margin:14px 0">${duePillHTML(dueStatus(cat, equipRecords))}</div>

    <div class="type-label" style="display:flex;justify-content:space-between;align-items:center">
      <span>${cat} Checklist</span>
      ${isAdmin() ? `<button class="btn ghost sm" onclick="openChecklistManager()">⚙ Add / Edit Checkpoints</button>` : ""}
    </div>
    <div id="sectionsRoot">${renderSectionsReadOnly(sections)}</div>

    <div class="section-block" style="margin-top:26px">
      <div class="type-label">Recent ${cat} entries</div>
      <div id="equipHistory">${renderEquipHistory(equipRecords, cat, bay.id, code)}</div>
    </div>

    <div class="section-block" style="margin-top:26px;display:grid;grid-template-columns:1fr 1fr;gap:20px">
      <div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
          <div class="type-label" style="margin:0">Maintenance Unit Remarks</div>
          ${canEnterMU() ? `<button class="btn ghost sm" onclick="addEquipRemarkPrompt('MU','${bay.id}','${code}')">+ Add</button>` : ""}
        </div>
        <div id="muList">${renderRemarkList(muRes.records || [], "MU", bay.id, code)}</div>
      </div>
      <div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
          <div class="type-label" style="margin:0">Testing Unit Remarks</div>
          ${canEnterTU() ? `<button class="btn ghost sm" onclick="addEquipRemarkPrompt('TU','${bay.id}','${code}')">+ Add</button>` : ""}
        </div>
        <div id="tuList">${renderRemarkList(tuRes.records || [], "TU", bay.id, code)}</div>
      </div>
    </div>
  `;
}

function renderEquipInfoDisplay(info, perPhase) {
  if (perPhase) {
    const phases = ["R", "Y", "B"];
    const d = info || {};
    return `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">
      ${phases.map(p => `
        <div style="border:1px solid var(--border);border-radius:8px;padding:8px">
          <div style="font-family:var(--mono);font-size:11px;color:var(--copper);margin-bottom:4px">${p} phase</div>
          <div style="font-size:11.5px;color:var(--dim)">Make: <span style="color:var(--text)">${(d[p]&&d[p].make)||"—"}</span></div>
          <div style="font-size:11.5px;color:var(--dim)">Sr.No: <span style="color:var(--text)">${(d[p]&&d[p].srNo)||"—"}</span></div>
          <div style="font-size:11.5px;color:var(--dim)">DOC: <span style="color:var(--text)">${(d[p]&&d[p].doc)||"—"}</span></div>
        </div>
      `).join("")}
    </div>`;
  }
  const d = info || {};
  const rows = [["Make", d.make], ["Sr. No.", d.srNo], ["Type", d.type], ["Rated Voltage", d.ratedVoltage], ["Rated Amps", d.ratedAmps], ["DOC", d.doc]];
  return `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px">
    ${rows.map(([k,v]) => `<div><div style="font-size:10.5px;color:var(--dim);text-transform:uppercase">${k}</div><div style="font-size:12.5px;margin-top:2px">${v||"—"}</div></div>`).join("")}
  </div>`;
}

async function editEquipInfo(bayId, code, perPhase) {
  const { info } = await apiGet("getEquipmentInfo", { bayId, equipCode: code });
  const d = info || {};
  const root = document.getElementById("modalRoot");
  if (perPhase) {
    const phases = ["R", "Y", "B"];
    root.innerHTML = modalWrap(`
      <div style="font-family:var(--display);font-weight:700;font-size:16px;margin-bottom:12px">Edit Equipment Info — ${code}</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px">
        ${phases.map(p => `
          <div>
            <div style="font-family:var(--mono);font-size:11px;color:var(--copper);margin-bottom:6px">${p} phase</div>
            <label class="fld"><span>Make</span><input class="in" id="ei_${p}_make" value="${((d[p]&&d[p].make)||"").replace(/"/g,'&quot;')}"/></label>
            <label class="fld"><span>Sr. No.</span><input class="in" id="ei_${p}_srNo" value="${((d[p]&&d[p].srNo)||"").replace(/"/g,'&quot;')}"/></label>
            <label class="fld"><span>DOC</span><input class="in" id="ei_${p}_doc" value="${((d[p]&&d[p].doc)||"").replace(/"/g,'&quot;')}"/></label>
          </div>
        `).join("")}
      </div>
      <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:12px">
        <button class="btn ghost" onclick="closeModal()">Cancel</button>
        <button class="btn" onclick="saveEquipInfoPerPhase('${bayId}','${code}')">Save</button>
      </div>
    `);
  } else {
    root.innerHTML = modalWrap(`
      <div style="font-family:var(--display);font-weight:700;font-size:16px;margin-bottom:12px">Edit Equipment Info — ${code}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <label class="fld"><span>Make</span><input class="in" id="ei_make" value="${(d.make||"").replace(/"/g,'&quot;')}"/></label>
        <label class="fld"><span>Sr. No.</span><input class="in" id="ei_srNo" value="${(d.srNo||"").replace(/"/g,'&quot;')}"/></label>
        <label class="fld"><span>Type</span><input class="in" id="ei_type" value="${(d.type||"").replace(/"/g,'&quot;')}"/></label>
        <label class="fld"><span>Rated Voltage</span><input class="in" id="ei_ratedVoltage" value="${(d.ratedVoltage||"").replace(/"/g,'&quot;')}"/></label>
        <label class="fld"><span>Rated Amps</span><input class="in" id="ei_ratedAmps" value="${(d.ratedAmps||"").replace(/"/g,'&quot;')}"/></label>
        <label class="fld"><span>DOC</span><input class="in" id="ei_doc" value="${(d.doc||"").replace(/"/g,'&quot;')}"/></label>
      </div>
      <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:12px">
        <button class="btn ghost" onclick="closeModal()">Cancel</button>
        <button class="btn" onclick="saveEquipInfoFlat('${bayId}','${code}')">Save</button>
      </div>
    `);
  }
}
async function saveEquipInfoPerPhase(bayId, code) {
  const newInfo = {};
  ["R", "Y", "B"].forEach((p) => {
    newInfo[p] = {
      make: document.getElementById(`ei_${p}_make`).value,
      srNo: document.getElementById(`ei_${p}_srNo`).value,
      doc: document.getElementById(`ei_${p}_doc`).value,
    };
  });
  await apiPost("saveEquipmentInfo", { bayId, equipCode: code, info: newInfo, user: State.currentUser });
  closeModal();
  renderEquipPanel(getEntityBay(bayId), State._currentEquipList.find(e => e.code === code));
}
async function saveEquipInfoFlat(bayId, code) {
  const newInfo = {
    make: document.getElementById("ei_make").value,
    srNo: document.getElementById("ei_srNo").value,
    type: document.getElementById("ei_type").value,
    ratedVoltage: document.getElementById("ei_ratedVoltage").value,
    ratedAmps: document.getElementById("ei_ratedAmps").value,
    doc: document.getElementById("ei_doc").value,
  };
  await apiPost("saveEquipmentInfo", { bayId, equipCode: code, info: newInfo, user: State.currentUser });
  closeModal();
  renderEquipPanel(getEntityBay(bayId), State._currentEquipList.find(e => e.code === code));
}

function switchCategory(cat) {
  State._catTab[State._currentEquip.equipItem.code] = cat;
  renderEquipPanel(State._currentEquip.bay, State._currentEquip.equipItem);
}

// ---------------------------------------------------------------------------
// SECTIONS / CHECKPOINTS — render, drag-reorder, add, remarks
// ---------------------------------------------------------------------------
let dragCtx = null;

// Read-only preview shown on the equipment panel — just informs what the
// checklist covers. All structural editing lives in openChecklistManager().
function renderSectionsReadOnly(sections) {
  if (!sections.length) return `<div class="empty-note">No checklist sections yet.</div>`;
  return sections.map((s) => `
    <div class="card" style="margin-bottom:10px">
      <div style="font-family:var(--display);font-weight:700;font-size:13.5px">${s.title}</div>
      ${s.description ? `<div style="font-size:11.5px;color:var(--dim);margin-top:3px">${s.description}</div>` : ""}
      <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:8px">
        ${s.items.map((it) => `<span class="badge dim">${it.text}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

// ---------------------------------------------------------------------------
// CHECKLIST MANAGER — single consolidated Add/Edit/Delete/Reorder editor for
// sections & checkpoints. Admin-only. Opens as a big modal, edits happen on
// a working copy, and nothing is persisted until "Save" — which then runs
// the scope popup (this bay / selected bays / all bays of this type).
// ---------------------------------------------------------------------------
let ChecklistManagerDraft = null;

function openChecklistManager() {
  ChecklistManagerDraft = JSON.parse(JSON.stringify(State._currentSections));
  renderChecklistManager();
}
function renderChecklistManager() {
  const { equipItem, cat } = State._currentEquip;
  const root = document.getElementById("modalRoot");
  root.innerHTML = `
    <div class="modal-backdrop">
      <div class="modal" style="max-width:760px">
        <div style="font-family:var(--display);font-weight:700;font-size:17px;margin-bottom:4px">Add / Edit Checkpoints — ${equipItem.code} (${cat})</div>
        <div style="color:var(--dim);font-size:12px;margin-bottom:14px">Admin only. Edit section titles, descriptions, and checkpoint text directly below; drag ⠿ handles to reorder. Nothing saves until you click Save.</div>
        <div id="cmSectionsRoot">${renderManagerSections()}</div>
        <button class="btn ghost sm" style="margin-top:6px" onclick="managerAddSection()">+ Add Section</button>
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:18px;border-top:1px solid var(--border);padding-top:14px">
          <button class="btn ghost" onclick="closeModal()">Cancel</button>
          <button class="btn" onclick="managerSave()">Save…</button>
        </div>
      </div>
    </div>
  `;
}
function renderManagerSections() {
  return ChecklistManagerDraft.map((s, si) => `
    <div class="card" style="margin-bottom:12px" draggable="true"
         ondragstart="dragCtx={type:'section',index:${si}}"
         ondragover="event.preventDefault()"
         ondrop="managerDropSection(${si})">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:8px">
        <div style="flex:1">
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:6px;cursor:grab">
            <span style="color:var(--dim)">⠿</span>
            <input class="in" value="${(s.title||"").replace(/"/g,'&quot;')}" oninput="managerUpdateSectionTitle(${si}, this.value)" placeholder="Section title"/>
          </div>
          <textarea class="in" rows="1" placeholder="Description (optional)" oninput="managerUpdateSectionDesc(${si}, this.value)">${s.description||""}</textarea>
        </div>
        <button class="btn danger sm" onclick="managerDeleteSection(${si})">delete section</button>
      </div>
      <div>
        ${s.items.map((it, ii) => `
          <div class="checklist-item" draggable="true"
               ondragstart="event.stopPropagation();dragCtx={type:'item',sectionIndex:${si},index:${ii}}"
               ondragover="event.preventDefault()"
               ondrop="event.stopPropagation();managerDropItem(${si},${ii})">
            <div class="row">
              <span style="color:var(--dim);cursor:grab;padding-top:8px">⠿</span>
              <input class="in" value="${(it.text||"").replace(/"/g,'&quot;')}" oninput="managerUpdateItemText(${si},${ii}, this.value)" placeholder="Checkpoint text"/>
              <button class="btn danger sm" onclick="managerDeleteItem(${si},${ii})">✕</button>
            </div>
          </div>
        `).join("")}
      </div>
      <button class="btn ghost sm" style="margin-top:8px" onclick="managerAddItem(${si})">+ Add checkpoint</button>
    </div>
  `).join("");
}
function refreshManager() { document.getElementById("cmSectionsRoot").innerHTML = renderManagerSections(); }
function managerUpdateSectionTitle(si, v) { ChecklistManagerDraft[si].title = v; }
function managerUpdateSectionDesc(si, v) { ChecklistManagerDraft[si].description = v; }
function managerUpdateItemText(si, ii, v) { ChecklistManagerDraft[si].items[ii].text = v; }
function managerAddSection() { ChecklistManagerDraft.push({ id: uid(), title: "New section", description: "", items: [] }); refreshManager(); }
function managerDeleteSection(si) { ChecklistManagerDraft.splice(si, 1); refreshManager(); }
function managerAddItem(si) { ChecklistManagerDraft[si].items.push({ id: uid(), text: "New checkpoint" }); refreshManager(); }
function managerDeleteItem(si, ii) { ChecklistManagerDraft[si].items.splice(ii, 1); refreshManager(); }
function managerDropSection(targetIndex) {
  if (!dragCtx || dragCtx.type !== "section") return;
  const [moved] = ChecklistManagerDraft.splice(dragCtx.index, 1);
  ChecklistManagerDraft.splice(targetIndex, 0, moved);
  dragCtx = null; refreshManager();
}
function managerDropItem(sectionIndex, targetIndex) {
  if (!dragCtx || dragCtx.type !== "item") return;
  const items = ChecklistManagerDraft[dragCtx.sectionIndex].items;
  const [moved] = items.splice(dragCtx.index, 1);
  ChecklistManagerDraft[sectionIndex].items.splice(targetIndex, 0, moved);
  dragCtx = null; refreshManager();
}
function managerSave() {
  State._currentSections = ChecklistManagerDraft;
  promptScopeAndSave(() => document.getElementById("sectionsRoot").innerHTML = renderSectionsReadOnly(State._currentSections));
}

// Finds every {bayId, equipCode} across BOTH real bays and ICT pseudo-bays
// that has equipment of the given type — used to resolve "select bays" /
// "all bays of this type" scope choices.
function entitiesWithEquipType(equipType) {
  const out = []; // { entityId, entityLabel, codes: [...] }
  State.bays.forEach((b) => {
    const codes = equipmentForBay(b).filter((e) => equipTypeFromCode(e.code) === equipType).map((e) => e.code);
    if (codes.length) out.push({ entityId: b.id, entityLabel: `${b.id} — ${b.name}`, codes });
  });
  if (["ICT_PHASE", "TERTIARY", "RRS_GENERIC"].includes(equipType)) {
    ICT_GROUPS.forEach((g) => {
      const codes = ictTabsFor(g).filter((e) => e.equipType === equipType).map((e) => e.code);
      if (codes.length) out.push({ entityId: g.id, entityLabel: `${g.id} — ${g.label}`, codes });
    });
  }
  return out;
}

// Scope popup: this bay only / selected bays / all bays of same equipment type
function promptScopeAndSave(afterLocalRender) {
  afterLocalRender();
  const root = document.getElementById("modalRoot");
  const { bay, equipItem, equipType, cat } = State._currentEquip;
  const sameTypeEntities = entitiesWithEquipType(equipType);
  root.innerHTML = modalWrap(`
    <div style="font-family:var(--display);font-weight:700;font-size:16px;margin-bottom:6px">Apply this change to…</div>
    <div style="color:var(--dim);font-size:12.5px;margin-bottom:14px">New section/checkpoint on <b>${equipItem.code}</b> (${equipType}, ${cat}). Choose scope:</div>
    <div style="display:flex;flex-direction:column;gap:8px">
      <button class="btn" onclick="applyScope('this')">This bay only (${bay.id})</button>
      ${canManageStructure() ? `
        <button class="btn ghost" onclick="showBaySelector()">Select specific bays…</button>
        <button class="btn ghost" onclick="applyScope('all')">All bays/ICTs with ${equipType} equipment (${sameTypeEntities.length})</button>
      ` : `<div style="font-size:11.5px;color:var(--dim)">Broadening to other bays requires Admin role.</div>`}
    </div>
    <div id="baySelectorRoot" style="margin-top:14px"></div>
    <div style="display:flex;justify-content:flex-end;margin-top:16px">
      <button class="btn ghost sm" onclick="closeModal()">Cancel (keep local only)</button>
    </div>
  `);
}
function showBaySelector() {
  const { equipType } = State._currentEquip;
  const entities = entitiesWithEquipType(equipType);
  document.getElementById("baySelectorRoot").innerHTML = `
    <div style="max-height:220px;overflow-y:auto;border:1px solid var(--border);border-radius:8px;padding:10px">
      ${entities.map((en) => `
        <label style="display:flex;align-items:center;gap:8px;font-size:12.5px;padding:4px 0">
          <input type="checkbox" class="bay-select-cb" value="${en.entityId}"/> ${en.entityLabel}
        </label>
      `).join("")}
    </div>
    <button class="btn sm" style="margin-top:10px" onclick="applyScope('selected')">Apply to checked bays</button>
  `;
}
function applyScope(mode) {
  const { bay, equipItem, equipType, cat } = State._currentEquip;
  let targets = [];
  const entities = entitiesWithEquipType(equipType);
  if (mode === "this") {
    targets = [{ bayId: bay.id, equipCode: equipItem.code }];
  } else if (mode === "all") {
    entities.forEach((en) => en.codes.forEach((code) => targets.push({ bayId: en.entityId, equipCode: code })));
  } else if (mode === "selected") {
    const ids = Array.from(document.querySelectorAll(".bay-select-cb:checked")).map((cb) => cb.value);
    entities.filter((en) => ids.includes(en.entityId)).forEach((en) => en.codes.forEach((code) => targets.push({ bayId: en.entityId, equipCode: code })));
  }
  apiPost("saveChecklistState", { targets, category: cat, sections: State._currentSections, user: State.currentUser }).then(() => {
    closeModal();
  });
}

function renderEquipHistory(records, category, bayId, equipCode) {
  const list = records.filter((r) => r.Category === category).sort((a,b) => new Date(b.Date) - new Date(a.Date));
  if (!list.length) return `<div class="empty-note">No entries yet.</div>`;
  return list.map((r) => {
    const remarks = r.Remarks || (r.RemarksJSON ? JSON.parse(r.RemarksJSON) : {});
    const images = r.Images || [];
    return `<div class="hist-row">
      <div class="hist-top">
        <span class="hist-date">${r.Date}${r.PermitNo ? ` · Permit ${r.PermitNo}` : ""}</span>
        <div style="display:flex;align-items:center;gap:8px">
          <span style="color:var(--dim)">${r.LoggedBy || "—"}</span>
          ${isAdmin() ? `<button class="btn danger sm" onclick="confirmDeleteLogEntry('${r.ID}','${bayId}','${equipCode}')">delete</button>` : ""}
        </div>
      </div>
      <div class="hist-remarks">${Object.entries(remarks).filter(([,v])=>v).map(([k,v]) => `<div class="hist-remark"><b>${k}:</b> ${v}</div>`).join("")}</div>
      ${renderSavedPhotoGrid(images)}
    </div>`;
  }).join("");
}
function confirmDeleteLogEntry(id, bayId, equipCode) {
  const root = document.getElementById("modalRoot");
  root.innerHTML = modalWrap(`
    <div style="font-family:var(--display);font-weight:700;font-size:16px;margin-bottom:8px">Delete this log entry?</div>
    <div style="color:var(--dim);font-size:12.5px;margin-bottom:16px">This permanently removes it from the maintenance history — there's no undo.</div>
    <div style="display:flex;justify-content:flex-end;gap:8px">
      <button class="btn ghost" onclick="closeModal()">Cancel</button>
      <button class="btn danger" onclick="doDeleteLogEntry('${id}','${bayId}','${equipCode}')">Delete permanently</button>
    </div>
  `);
}
async function doDeleteLogEntry(id, bayId, equipCode) {
  await apiPost("deleteLogEntry", { id });
  closeModal();
  renderEquipPanel(getEntityBay(bayId), State._currentEquipList.find(e => e.code === equipCode));
}
function renderRemarkList(records, kind, bayId, equipCode) {
  const list = [...records].sort((a,b) => new Date(b.Date) - new Date(a.Date));
  if (!list.length) return `<div class="empty-note">No remarks yet.</div>`;
  return list.map((r) => `<div class="hist-row">
    <div class="hist-top">
      <span class="hist-date">${r.Date}</span>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="color:var(--dim)">${r.LoggedBy||"—"}</span>
        ${isAdmin() ? `
          <button class="btn ghost sm" onclick="editEquipRemarkPrompt('${kind}','${r.ID}','${bayId}','${equipCode}')">edit</button>
          <button class="btn danger sm" onclick="confirmDeleteEquipRemark('${kind}','${r.ID}','${bayId}','${equipCode}')">delete</button>
        ` : ""}
      </div>
    </div>
    <div style="font-size:12.5px;margin-top:6px">${r.Remark}</div>
    ${renderSavedPhotoGrid(r.Images || [])}
  </div>`).join("");
}
function editEquipRemarkPrompt(kind, id, bayId, equipCode) {
  const root = document.getElementById("modalRoot");
  root.innerHTML = modalWrap(`
    <div style="font-family:var(--display);font-weight:700;font-size:16px;margin-bottom:12px">Edit ${kind} Remark</div>
    <label class="fld"><span>Remark</span><textarea class="in" id="eer_text" rows="3"></textarea></label>
    <div style="display:flex;justify-content:flex-end;gap:8px">
      <button class="btn ghost" onclick="closeModal()">Cancel</button>
      <button class="btn" onclick="saveEquipRemarkEdit('${kind}','${id}','${bayId}','${equipCode}')">Save</button>
    </div>
  `);
  apiGet("getEquipmentRemarks", { kind, bayId, equipCode }).then(({ records }) => {
    const rec = (records || []).find((r) => r.ID === id);
    if (rec) document.getElementById("eer_text").value = rec.Remark;
  });
}
async function saveEquipRemarkEdit(kind, id, bayId, equipCode) {
  const remark = document.getElementById("eer_text").value.trim();
  if (!remark) return;
  await apiPost("editEquipmentRemark", { kind, id, remark });
  closeModal();
  renderEquipPanel(getEntityBay(bayId), State._currentEquipList.find(e => e.code === equipCode));
}
function confirmDeleteEquipRemark(kind, id, bayId, equipCode) {
  const root = document.getElementById("modalRoot");
  root.innerHTML = modalWrap(`
    <div style="font-family:var(--display);font-weight:700;font-size:16px;margin-bottom:8px">Delete this remark?</div>
    <div style="display:flex;justify-content:flex-end;gap:8px">
      <button class="btn ghost" onclick="closeModal()">Cancel</button>
      <button class="btn danger" onclick="doDeleteEquipRemark('${kind}','${id}','${bayId}','${equipCode}')">Delete</button>
    </div>
  `);
}
async function doDeleteEquipRemark(kind, id, bayId, equipCode) {
  await apiPost("deleteEquipmentRemark", { kind, id });
  closeModal();
  renderEquipPanel(getEntityBay(bayId), State._currentEquipList.find(e => e.code === equipCode));
}
function addEquipRemarkPrompt(kind, bayId, equipCode) {
  resetPhotoStage();
  const root = document.getElementById("modalRoot");
  root.innerHTML = modalWrap(`
    <div style="font-family:var(--display);font-weight:700;font-size:16px;margin-bottom:12px">Add ${kind === "MU" ? "Maintenance Unit" : "Testing Unit"} Remark</div>
    <label class="fld"><span>Date</span><input class="in mono" id="er_date" value="${new Date().toISOString().slice(0,10)}"/></label>
    <label class="fld"><span>Remark</span><textarea class="in" id="er_remark" rows="3" placeholder="Describe the work done…"></textarea></label>
    ${renderPhotoPicker("er_photos_input")}
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:10px">
      <button class="btn ghost" onclick="closeModal()">Cancel</button>
      <button class="btn" id="er_saveBtn" onclick="submitEquipRemark('${kind}','${bayId}','${equipCode}')">Save</button>
    </div>
  `);
  renderPhotoStageGrid();
}
async function submitEquipRemark(kind, bayId, equipCode) {
  const remark = document.getElementById("er_remark").value.trim();
  if (!remark) return;
  const btn = document.getElementById("er_saveBtn");
  btn.disabled = true; btn.textContent = "Saving…";
  const date = document.getElementById("er_date").value;
  const images = await commitStagedPhotos();
  await apiPost("addEquipmentRemark", { kind, bayId, equipCode, date, remark, images, user: State.currentUser });
  closeModal();
  renderEquipPanel(getEntityBay(bayId), State._currentEquipList.find(e => e.code === equipCode));
}

// ---------------------------------------------------------------------------
// CASCADE LOGGER — per equipment, categories filtered to what's applicable
// ---------------------------------------------------------------------------
function emptyEntry(seed) { return { date: new Date().toISOString().slice(0,10), permitNo: "", loggedBy: "", remarks: { ...(seed||{}) }, images: [], muRemark: "", tuRemark: "" }; }
const Cascade = { bay: null, equipCode: null, sections: null, cats: [], idx: 0, stageEntries: {}, groupId: null };

function openCascadeLogger(bayId, equipCode, equipType) {
  const bay = getEntityBay(bayId);
  Cascade.bay = bay;
  Cascade.equipCode = equipCode;
  Cascade.equipType = equipType || equipTypeFromCode(equipCode);
  Cascade.cats = applicableCategories(Cascade.equipType); // e.g. ["Quarterly","Annual"] or ["Monthly","Quarterly","Annual"]
  Cascade.idx = 0;
  Cascade.stageEntries = {};
  Cascade.groupId = uid();
  resetPhotoStage();
  renderCascadeStage();
}
async function renderCascadeStage() {
  const cat = Cascade.cats[Cascade.idx];
  const equipType = Cascade.equipType;
  const stateRes = await apiGet("getChecklistState", { bayId: Cascade.bay.id, equipCode: Cascade.equipCode, category: cat });
  const sections = stateRes.state || defaultSectionsFor(equipType, cat);
  const seed = Cascade.idx > 0 ? Cascade.stageEntries[Cascade.cats[Cascade.idx - 1]].remarks : {};
  const entry = emptyEntry(seed);
  Cascade.stageEntries[cat] = entry;
  const prefill = canPrefill();

  const root = document.getElementById("modalRoot");
  root.innerHTML = modalWrap(`
    <div style="font-family:var(--display);font-weight:700;font-size:16px;margin-bottom:4px">${cat} Maintenance — ${Cascade.equipCode}</div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin:10px 0 14px">
      <label class="fld"><span>Date</span><input class="in mono" id="ce_date" value="${entry.date}"/></label>
      <label class="fld"><span>Permit No.</span><input class="in mono" id="ce_permit" placeholder="e.g. PTW/2026/0142"/></label>
      <label class="fld"><span>Logged by</span><input class="in" id="ce_loggedBy" placeholder="Name / designation"/></label>
    </div>
    <div id="ce_sections">
      ${sections.map((s) => `
        <div style="margin-bottom:10px">
          <div style="font-size:11.5px;color:var(--dim);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px">${s.title}</div>
          ${s.description ? `<div style="font-size:11px;color:var(--dim);margin-bottom:6px;opacity:.8">${s.description}</div>` : ""}
          ${s.items.map((it) => `
            <div class="checklist-item">
              <div style="font-size:12.5px;margin-bottom:6px">${it.text}</div>
              <div class="row">
                <textarea class="in" rows="1" data-cp="${it.id}" placeholder="Remark…">${prefill ? pickRemark(it.text) : ""}</textarea>
                ${prefill ? `<button class="btn ghost sm" onclick="prefillCascadeCP('${it.id}', ${JSON.stringify(it.text).replace(/"/g,'&quot;')})">↻</button>` : ""}
              </div>
            </div>
          `).join("")}
        </div>
      `).join("")}
    </div>
    ${renderPhotoPicker("ce_photos_input")}
    ${canEnterMU() ? `<label class="fld"><span>Maintenance Unit remarks (optional — punched to station MU feed)</span><textarea class="in" id="ce_mu" rows="2"></textarea></label>` : ""}
    ${canEnterTU() ? `<label class="fld"><span>Testing Unit remarks (optional — punched to station TU feed)</span><textarea class="in" id="ce_tu" rows="2"></textarea></label>` : ""}
    <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:10px">
      <button class="btn ghost" onclick="closeModal()">Cancel</button>
      <button class="btn" id="ce_saveBtn" onclick="advanceCascade()">${Cascade.idx < Cascade.cats.length - 1 ? "Save & continue" : "Save all & finish"}</button>
    </div>
  `);
  renderPhotoStageGrid();
}
function prefillCascadeCP(id, text) {
  const el = document.querySelector(`textarea[data-cp="${CSS.escape(id)}"]`);
  if (el) el.value = pickRemark(text);
}
async function collectCascadeForm() {
  const remarks = {};
  document.querySelectorAll("#ce_sections textarea[data-cp]").forEach((t) => { remarks[t.dataset.cp] = t.value; });
  const images = await commitStagedPhotos();
  return {
    date: document.getElementById("ce_date").value,
    permitNo: document.getElementById("ce_permit").value,
    loggedBy: document.getElementById("ce_loggedBy").value,
    remarks,
    images,
    muRemark: document.getElementById("ce_mu") ? document.getElementById("ce_mu").value : "",
    tuRemark: document.getElementById("ce_tu") ? document.getElementById("ce_tu").value : "",
  };
}
async function advanceCascade() {
  const saveBtn = document.getElementById("ce_saveBtn");
  saveBtn.disabled = true; saveBtn.textContent = "Saving…";
  const cat = Cascade.cats[Cascade.idx];
  Cascade.stageEntries[cat] = await collectCascadeForm();
  if (Cascade.idx < Cascade.cats.length - 1) {
    promptContinueCascade();
  } else {
    finishCascade();
  }
}
function promptContinueCascade() {
  const nextCat = Cascade.cats[Cascade.idx + 1];
  const root = document.getElementById("modalRoot");
  root.innerHTML = modalWrap(`
    <div style="font-family:var(--display);font-weight:700;font-size:16px;margin-bottom:8px">Also cover ${nextCat} maintenance in this outage?</div>
    <div style="color:var(--dim);font-size:12.5px;margin-bottom:16px">If yes, the ${nextCat} form opens prefilled from what you just entered.</div>
    <div style="display:flex;justify-content:flex-end;gap:8px">
      <button class="btn ghost" onclick="finishCascade()">No — save & finish</button>
      <button class="btn" onclick="Cascade.idx++;renderCascadeStage()">Yes — continue to ${nextCat}</button>
    </div>
  `);
}
async function finishCascade() {
  const entries = {};
  Cascade.cats.forEach((c) => { if (Cascade.stageEntries[c]) entries[c] = Cascade.stageEntries[c]; });
  await apiPost("logEquipmentMaintenance", { bayId: Cascade.bay.id, equipCode: Cascade.equipCode, groupId: Cascade.groupId, entries, user: State.currentUser });
  closeModal();
  renderEquipPanel(Cascade.bay, State._currentEquipList.find(e => e.code === Cascade.equipCode));
}

function modalWrap(inner) { return `<div class="modal-backdrop" onclick="if(event.target===this)closeModal()"><div class="modal">${inner}</div></div>`; }
function closeModal() { document.getElementById("modalRoot").innerHTML = ""; }

// ---------------------------------------------------------------------------
// GLOBAL MU / TU REMARK PAGES (station-wide feed, bay-level only)
// ---------------------------------------------------------------------------
async function renderGlobalRemarks(kind) {
  const { records } = await apiGet("getGlobalRemarks", { kind });
  const list = (records || []).slice().sort((a,b) => new Date(b.Date) - new Date(a.Date));
  app.innerHTML = `
    <h1 class="page-title">${kind === "MU" ? "Maintenance Unit Remarks" : "Testing Unit Remarks"}</h1>
    <div class="page-sub">Station-wide feed — auto-punched from bay-level Monthly/Quarterly/Annual logging when a ${kind} remark is entered. Equipment-level ad hoc ${kind} notes live on each equipment's own tab and aren't duplicated here. Star an entry to feature it in the Home page ${kind} widget (top 10 most recent starred entries).</div>
    ${busbarSVG()}
    ${list.length === 0 ? `<div class="empty-note">No ${kind} remarks logged yet.</div>` : list.map((r) => {
      const selected = r.Selected === true || r.Selected === "TRUE";
      return `
      <div class="hist-row">
        <div class="hist-top">
          <span class="hist-date">${r.Date} · Bay ${r.BayID} · ${r.Category}${r.PermitNo ? ` · Permit ${r.PermitNo}` : ""}</span>
          <div style="display:flex;align-items:center;gap:10px">
            <span style="color:var(--dim)">${r.LoggedBy || "—"}</span>
            <button class="btn ${selected ? "" : "ghost"} sm" onclick="toggleRemarkStar('${kind}','${r.ID}', ${!selected})">${selected ? "★ Featured" : "☆ Feature on Home"}</button>
            ${isAdmin() ? `
              <button class="btn ghost sm" onclick="editGlobalRemarkPrompt('${kind}','${r.ID}')">edit</button>
              <button class="btn danger sm" onclick="confirmDeleteGlobalRemark('${kind}','${r.ID}')">delete</button>
            ` : ""}
          </div>
        </div>
        <div style="font-size:12.5px;margin-top:6px">${r.Remark}</div>
      </div>
    `;
    }).join("")}
  `;
}
function editGlobalRemarkPrompt(kind, id) {
  const root = document.getElementById("modalRoot");
  root.innerHTML = modalWrap(`
    <div style="font-family:var(--display);font-weight:700;font-size:16px;margin-bottom:12px">Edit Remark</div>
    <label class="fld"><span>Remark</span><textarea class="in" id="egr_text" rows="3"></textarea></label>
    <div style="display:flex;justify-content:flex-end;gap:8px">
      <button class="btn ghost" onclick="closeModal()">Cancel</button>
      <button class="btn" onclick="saveGlobalRemarkEdit('${kind}','${id}')">Save</button>
    </div>
  `);
  apiGet("getGlobalRemarks", { kind }).then(({ records }) => {
    const rec = (records || []).find((r) => r.ID === id);
    if (rec) document.getElementById("egr_text").value = rec.Remark;
  });
}
async function saveGlobalRemarkEdit(kind, id) {
  const remark = document.getElementById("egr_text").value.trim();
  if (!remark) return;
  await apiPost("editGlobalRemark", { kind, id, remark });
  closeModal();
  renderGlobalRemarks(kind);
}
function confirmDeleteGlobalRemark(kind, id) {
  const root = document.getElementById("modalRoot");
  root.innerHTML = modalWrap(`
    <div style="font-family:var(--display);font-weight:700;font-size:16px;margin-bottom:8px">Delete this remark?</div>
    <div style="display:flex;justify-content:flex-end;gap:8px">
      <button class="btn ghost" onclick="closeModal()">Cancel</button>
      <button class="btn danger" onclick="doDeleteGlobalRemark('${kind}','${id}')">Delete</button>
    </div>
  `);
}
async function doDeleteGlobalRemark(kind, id) {
  await apiPost("deleteGlobalRemark", { kind, id });
  closeModal();
  renderGlobalRemarks(kind);
}
async function toggleRemarkStar(kind, id, selected) {
  await apiPost("toggleRemarkSelected", { kind, id, selected });
  renderGlobalRemarks(kind);
}

// ---------------------------------------------------------------------------
// STATION SLD — embeds the master SLD once you point CONFIG.SLD_EMBED_URL
// at your merged SLD/equipment-list site; clicking a bay in the directory
// below opens THIS portal's bay page (not the other site's). Once that site
// exposes per-bay coordinates we can turn the embed into a real clickable
// hotspot overlay — for now the directory list is the click-through.
// ---------------------------------------------------------------------------
async function fetchExternalBaySLD(bayId) {
  if (!CONFIG.SLD_API_URL) return null;
  try {
    const res = await fetch(`${CONFIG.SLD_API_URL}?action=getBaySLD&bayId=${encodeURIComponent(bayId)}`);
    const data = await res.json();
    return data.imageUrl || data.svg ? data : null;
  } catch { return null; }
}

function renderStationSLD() {
  const groups = [["400", "400 kV"], ["220", "220 kV"], ["33", "33 kV"]];
  app.innerHTML = `
    <h1 class="page-title">Station SLD</h1>
    <div class="page-sub">Master single-line diagram. Once this portal is merged with your SLD/equipment-list site, set CONFIG.SLD_EMBED_URL and CONFIG.SLD_API_URL in app.js and the real diagram (with clickable bay hotspots) will render here — clicking a bay opens its data on THIS portal.</div>
    ${busbarSVG()}
    ${CONFIG.SLD_EMBED_URL
      ? `<div class="sld-frame" style="min-height:420px"><iframe src="${CONFIG.SLD_EMBED_URL}" style="width:100%;height:420px;border:0"></iframe></div>`
      : `<div class="sld-frame"><div class="sld-empty">No SLD source configured yet. In the meantime, use the bay directory below — it opens the same bay data this portal already has.</div></div>`
    }
    <div class="section-block" style="margin-top:24px">
      ${groups.map(([v, label]) => `
        <div class="type-label">${label} Bays</div>
        <div class="grid" style="margin-bottom:20px">
          ${State.bays.filter(b => b.voltage === v).map(b => `
            <div class="card clickable" onclick="setView({k:'bay',id:'${b.id}'})">
              <div style="font-family:var(--mono);font-size:11px;color:var(--copper)">BAY ${b.id}</div>
              <div style="font-size:13px;margin-top:6px;font-weight:600">${b.name}</div>
            </div>
          `).join("")}
        </div>
      `).join("")}
    </div>
  `;
}

// ---------------------------------------------------------------------------
// SLD DRAWING SLOT — prefers the external site's SLD once configured,
// falls back to the local freehand editor otherwise.
// ---------------------------------------------------------------------------
async function openSLDEditor(bayId) {
  const root = document.getElementById("modalRoot");
  const external = await fetchExternalBaySLD(bayId);
  if (external) {
    root.innerHTML = modalWrap(`
      <div style="font-family:var(--display);font-weight:700;font-size:16px;margin-bottom:10px">SLD — Bay ${bayId} (from SLD site)</div>
      <div class="sld-frame">${external.imageUrl ? `<img src="${external.imageUrl}" alt="Bay SLD"/>` : external.svg}</div>
      <div style="display:flex;justify-content:flex-end;margin-top:12px"><button class="btn ghost" onclick="closeModal()">Close</button></div>
    `);
    return;
  }
  root.innerHTML = modalWrap(`
    <div style="font-family:var(--display);font-weight:700;font-size:16px;margin-bottom:10px">SLD — Bay ${bayId}</div>
    <div style="color:var(--dim);font-size:12.5px;margin-bottom:10px">No external SLD source configured yet — freehand editor for now (draw, save; persists via API).</div>
    <canvas id="sldCanvas" width="600" height="380" style="background:#0e1a15;border:1px solid var(--border);border-radius:8px;width:100%;touch-action:none;cursor:crosshair"></canvas>
    <div style="display:flex;justify-content:space-between;margin-top:12px">
      <button class="btn ghost sm" onclick="clearSLDCanvas()">Clear</button>
      <div style="display:flex;gap:8px">
        <button class="btn ghost" onclick="closeModal()">Cancel</button>
        <button class="btn" onclick="saveSLDCanvas('${bayId}')">Save drawing</button>
      </div>
    </div>
  `);
  setupSLDCanvas();
}
function setupSLDCanvas() {
  const canvas = document.getElementById("sldCanvas");
  const ctx = canvas.getContext("2d");
  ctx.strokeStyle = "#3FBFA6"; ctx.lineWidth = 2; ctx.lineCap = "round";
  let drawing = false, last = null;
  function pos(e) { const r = canvas.getBoundingClientRect(); const p = e.touches ? e.touches[0] : e; return { x: (p.clientX - r.left) * (canvas.width / r.width), y: (p.clientY - r.top) * (canvas.height / r.height) }; }
  function start(e) { drawing = true; last = pos(e); }
  function move(e) { if (!drawing) return; const p = pos(e); ctx.beginPath(); ctx.moveTo(last.x, last.y); ctx.lineTo(p.x, p.y); ctx.stroke(); last = p; e.preventDefault(); }
  function end() { drawing = false; }
  canvas.addEventListener("mousedown", start); canvas.addEventListener("mousemove", move); window.addEventListener("mouseup", end);
  canvas.addEventListener("touchstart", start); canvas.addEventListener("touchmove", move); canvas.addEventListener("touchend", end);
}
function clearSLDCanvas() { const c = document.getElementById("sldCanvas"); c.getContext("2d").clearRect(0,0,c.width,c.height); }
async function saveSLDCanvas(bayId) {
  const canvas = document.getElementById("sldCanvas");
  await apiPost("saveSLD", { bayId, drawing: { dataUrl: canvas.toDataURL("image/png") }, user: State.currentUser });
  closeModal();
  renderBayDetail(bayId);
}

// ---------------------------------------------------------------------------
// ADMIN
// ---------------------------------------------------------------------------
function renderAdmin() {
  if (!isAdmin()) {
    app.innerHTML = `<h1 class="page-title">Admin</h1>${busbarSVG()}<div class="card"><div class="empty-note">Admin role required. Switch roles in the top bar (demo-mode role switch) to view this page.</div></div>`;
    return;
  }
  app.innerHTML = `
    <h1 class="page-title">Admin</h1>
    <div class="page-sub">Role-based access control. The topbar ROLE selector simulates login for now — real per-user auth needs backend deployment.</div>
    ${busbarSVG()}
    <div class="card" style="max-width:520px;margin-bottom:16px">
      <div style="font-size:13px;font-weight:600;margin-bottom:6px">Weather &amp; theme</div>
      <div style="font-size:11.5px;color:var(--dim);margin-bottom:10px">Site theme follows live weather at Siddhatek by default. Individual users can override it for their own browser from the weather badge (bottom-right). This switch controls the effect site-wide.</div>
      <label style="display:flex;align-items:center;gap:8px;font-size:12.5px;cursor:pointer">
        <input type="checkbox" id="weatherEffectsToggle" ${WeatherState.effectsEnabled ? "checked" : ""} onchange="setWeatherEffectsEnabled(this.checked)"/> Enable weather effects site-wide (off = sunny, very light cloud, no rain)
      </label>
    </div>
    <div class="card" style="max-width:520px;margin-bottom:16px">
      <div style="font-size:13px;font-weight:600;margin-bottom:6px">Role permissions</div>
      <div style="font-size:11.5px;color:var(--dim);margin-bottom:12px">Admin and Editor always have full logging access. MU/TU roles are normally limited to their own remarks — grant "full data" to let them use the complete M/Q/A checklist logger too (i.e. enter each other's data).</div>
      <label style="display:flex;align-items:center;gap:8px;font-size:12.5px;margin-bottom:8px;cursor:pointer">
        <input type="checkbox" id="muFullAccess" ${State.muFullAccess ? "checked" : ""} onchange="toggleRolePerm('MU_FULL_ACCESS', this.checked)"/> MU role can enter full maintenance data (not just MU remarks)
      </label>
      <label style="display:flex;align-items:center;gap:8px;font-size:12.5px;cursor:pointer">
        <input type="checkbox" id="tuFullAccess" ${State.tuFullAccess ? "checked" : ""} onchange="toggleRolePerm('TU_FULL_ACCESS', this.checked)"/> TU role can enter full maintenance data (not just TU remarks)
      </label>
    </div>
    <div class="card" style="max-width:460px">
      <div style="font-size:13px;font-weight:600;margin-bottom:10px">Users allowed to use prefill</div>
      <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:12px">
        ${State.prefillUsers.length===0 ? `<div style="color:var(--dim);font-size:12px">No users added yet.</div>` :
          State.prefillUsers.map(u => `<div style="display:flex;justify-content:space-between;align-items:center;background:var(--panel2);border:1px solid var(--border);border-radius:6px;padding:6px 10px"><span style="font-size:12.5px">${u}</span><button class="btn danger sm" onclick="removePrefillUser('${u}')">remove</button></div>`).join("")}
      </div>
      <div style="display:flex;gap:6px">
        <input class="in" id="newPrefillUser" placeholder="User name / ID"/>
        <button class="btn" onclick="addPrefillUser()">Add</button>
      </div>
    </div>
  `;
}
async function toggleRolePerm(key, checked) {
  if (key === "MU_FULL_ACCESS") State.muFullAccess = checked; else State.tuFullAccess = checked;
  await apiPost("setRolePermissions", { perms: { MU_FULL_ACCESS: String(State.muFullAccess), TU_FULL_ACCESS: String(State.tuFullAccess) } });
}
async function addPrefillUser() {
  const v = document.getElementById("newPrefillUser").value.trim();
  if (!v) return;
  State.prefillUsers.push(v);
  await apiPost("setPrefillUsers", { users: State.prefillUsers });
  renderAdmin();
}
async function removePrefillUser(u) {
  State.prefillUsers = State.prefillUsers.filter((x) => x !== u);
  await apiPost("setPrefillUsers", { users: State.prefillUsers });
  renderAdmin();
}
function renderStub(k) {
  const titles = { gallery: "Photo Gallery", battery: "Battery Set", dg: "DG Set", other: "Other Maintenance" };
  app.innerHTML = `<h1 class="page-title">${titles[k]}</h1>${busbarSVG()}<div class="card"><div class="empty-note">Coming in a later phase.</div></div>`;
}

// ---------------------------------------------------------------------------
// BOOT
// ---------------------------------------------------------------------------
document.getElementById("roleSelect").addEventListener("change", (e) => { State.currentRole = e.target.value; render(); });
document.getElementById("userNameInput").addEventListener("change", (e) => { State.currentUser = e.target.value.trim() || "Guest User"; });
(async function boot() {
  try {
    await loadAll();
    if (State.bootError) { renderBootError(State.bootError); return; }
    const permsRes = await apiGet("getRolePermissions");
    const perms = permsRes.__error ? {} : (permsRes.perms || {});
    State.muFullAccess = perms.MU_FULL_ACCESS === "true";
    State.tuFullAccess = perms.TU_FULL_ACCESS === "true";
    render();
    initWeather();
  } catch (e) {
    renderBootError(`Unexpected error during startup: ${e.message || e}`);
  }
})();

function renderBootError(message) {
  document.getElementById("mainnav").innerHTML = "";
  app.innerHTML = `
    <div class="card" style="max-width:640px;margin:40px auto;border-color:var(--red)">
      <div style="font-family:var(--display);font-weight:700;font-size:16px;color:var(--red);margin-bottom:8px">Couldn't load data from the Sheet</div>
      <div style="font-size:12.5px;color:var(--dim);margin-bottom:14px">This shows exactly what failed, so it can actually be fixed instead of just guessing:</div>
      <div style="font-family:var(--mono);font-size:11.5px;background:var(--panel2);border:1px solid var(--border);border-radius:8px;padding:10px;word-break:break-word;margin-bottom:14px">${message}</div>
      <div style="font-size:12px;color:var(--dim);margin-bottom:14px">
        Common causes: the Apps Script deployment wasn't redeployed as a "New version" after the last code.gs update · the deployment's access isn't set to "Anyone" · CONFIG.API_URL in this file doesn't match the current /exec URL.
      </div>
      <button class="btn" onclick="location.reload()">Retry</button>
    </div>
  `;
}

  </script>
</body>
</html>
