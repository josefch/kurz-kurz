/* ==========================================================================
   UI_TEXT — all user-visible strings in one place.
   Change them here; the rest of the app reads from this object.
   ========================================================================== */
const UI = {
  // --- Geolocation ---
  locating: "Standort wird ermittelt …",
  useLocation:   "Ort verwenden",
  locationDenied: "Standortberechtigung abgelehnt.",
  locationError:   "Standort konnte nicht ermittelt werden.",

  // --- Fallback screen (shown when geolocation fails/is denied) ---
  fallbackStatus:  "Ort nicht gefunden",
  fallbackHeadline: "Suche deine Stadt!",
  inputPlaceholder: "z.B. Guntramsdorf, Berlin, Tokyo",
  ctaSearch:       "Suchen",

  // --- Search UI overlay ---
  searchUIHeadline: "Such deine Stadt!",
  ctaChange:        "Ändern",

  // --- Imprint ---
  imprintLink:     "Impressum",
  imprintHeadline: "Impressum",
  /* Imprint + privacy policy. One entry per block:
     string = paragraph (inline HTML allowed), {h2}/{h3} = headings, {ul: [...]} = bullet list */
  imprintText: [
    "Besonderer Dank gilt Ulf Harr für Design und Umsetzung sowie <a href='https://josefchladek.com/' target='_blank' rel='noopener'>https://josefchladek.com/</a> fürs hosting. Die Wetterdaten stammen von <a href='https://open-meteo.com/' target='_blank' rel='noopener'>Open-Meteo.com</a> (CC BY 4.0) die Ortsdaten von der <a href='https://www.openstreetmap.org/' target='_blank' rel='noopener'>OpenStreetMap</a>",
    "Dies ist eine nicht-kommerzielle Website.",
    "Diese Website wird entwickelt und betrieben von<br>1020 Racing Radrennsportverein<br>ZVR-Zahl: 1466121211<br>GISA-Zahl: 39503312,<br>c/o Pepelnik &amp; Karl Rechtsanwälte<br>Czerninplatz 4<br>1020 Wien, Österreich,<br>Kontakt gerne per E-Mail: <a href='mailto:enquiries@1020racing.cc'>enquiries@1020racing.cc</a>",
    "<span class='imprint-label'>Aufsichtsbehörde:</span> Landespolizeidirektion Wien, Referat für Vereins-, Versammlungs- und Medienrechtsangelegenheiten. Der Verein ist Mitglied des Österreichischen Radsport-Verbandes (ÖRV).",
    { h2: "Haftungsausschluss:" },
    "1020 Racing Radrennsportverein haftet nicht für die richtige Vorhersage des Wetters, die auf dieser Website verbreitet werden, noch für Schäden, die aus einer allenfalls falschen Kleidung entstehen. Das gilt für alle Arten von Schäden, insbesondere Schäden, die durch Fehler, Verzögerungen oder Unterbrechungen in der Übermittlung, unrichtige Inhalte, Verlust oder Löschung von Daten, Viren oder in sonstiger Weise bei der Nutzung des Online-Dienstes entstehen können. Eine Haftung von <a href='http://kurzkurz.cc' target='_blank' rel='noopener'>http://kurzkurz.cc</a> aus welchem Grund auch immer ist ausgeschlossen.",
    { h2: "Datenschutzerklärung" },
    { h3: "1. Datenschutz auf einen Blick" },
    "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.",
    { h3: "2. Verantwortliche Stelle" },
    "Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br>1020 Racing e.V.<br>c/o Pepelnik &amp; Karl<br>Czerninplatz 4<br>1020 Wien<br>Österreich<br>E-Mail: <a href='mailto:enquiries@1020racing.cc'>enquiries@1020racing.cc</a>",
    { h3: "3. Datenerfassung auf dieser Website" },
    "<span class='imprint-label'>Cookies</span> Diese Website verwendet technisch notwendige Cookies, um die Funktionalität des Shops zu gewährleisten (z. B. Warenkorb, Kasse). Darüber hinaus verwenden wir Analyse-Cookies wie unten beschrieben, jedoch nur, nachdem Sie über unseren Cookie-Banner Ihre ausdrückliche Einwilligung erteilt haben. Sie können Ihre Einwilligung jederzeit über den Link „Cookie-Einstellungen“ im Footer widerrufen.",
    "<span class='imprint-label'>Server-Log-Dateien</span> Der Hosting-Anbieter erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:",
    { ul: ["Browsertyp und Browserversion", "Verwendetes Betriebssystem", "Referrer URL", "Hostname des zugreifenden Rechners", "Uhrzeit der Serveranfrage", "IP-Adresse"] },
    "Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.",
    { h3: "4. Webanalyse und Tag-Management" },
    "Diese Website nutzt Google Analytics 4, einen Webanalysedienst der Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland. Google Analytics verwendet Cookies und ähnliche Technologien, die uns helfen zu analysieren, wie Besucher unsere Website nutzen. Die website kann auch einen anderen Analysedienst verwenden.",
    "Folgende Daten können verarbeitet werden:",
    { ul: ["Gekürzte / anonymisierte IP-Adresse", "Geräte-, Browser- und Betriebssysteminformationen", "Ungefährer Standort (Land / Stadt)", "Besuchte Seiten, Referrer-URL, Verweildauer, Interaktionen und Ereignisse", "Eine pseudonyme Nutzer- / Sitzungs-ID"] },
    "Google Analytics wird nur dann mit aktivem Tracking geladen, wenn Sie über unseren Cookie-Banner einwilligen. Die Rechtsgrundlage ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO und § 165 Abs. 3 TKG 2021 (Österreich). Wir haben den Google Consent Mode v2 implementiert, sodass keine Analyse- oder Werbe-Cookies gesetzt werden, bevor Sie zustimmen. Daten können an Server von Google übertragen werden, auch in die Vereinigten Staaten; Google stützt sich dabei auf die EU-Standardvertragsklauseln als Übertragungsmechanismus. Sie können Ihre Einwilligung jederzeit über die „Cookie-Einstellungen“ im Footer widerrufen.",
    "<span class='imprint-label'>Google Tag Manager</span> Wir verwenden den Google Tag Manager, ebenfalls betrieben von Google Ireland Limited, um die Tracking-Tags auf dieser Website zu verwalten. Der Google Tag Manager selbst erstellt keine Nutzerprofile, speichert keine Cookies und führt keine eigenständigen Analysen durch. Er lädt lediglich andere Tags (wie Google Analytics 4), die ihrerseits Daten erfassen können. Wenn Sie im Cookie-Banner die Einwilligung verweigert haben, bleiben alle über den Google Tag Manager geladenen Tags, die eine Einwilligung erfordern, deaktiviert. Die Rechtsgrundlage für das Laden des Google Tag Managers ist unser berechtigtes Interesse an einer sicheren und effizienten Verwaltung von Tracking-Tags gemäß Art. 6 Abs. 1 lit. f DSGVO; das Laden einwilligungspflichtiger Tags basiert auf Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.",
    "<span class='imprint-label'>Weitere Informationen:</span> Datenschutzerklärung von Google unter <a href='https://policies.google.com/privacy' target='_blank' rel='noopener'>policies.google.com/privacy</a>.",
    { h3: "5. Hosting" },
    "Diese Website wird extern von <a href='https://josefchladek.com/i' target='_blank' rel='noopener'>https://josefchladek.com/i</a> gehostet. Die auf dieser Website erfassten personenbezogenen Daten werden auf den Servern des Hosting-Anbieters gespeichert. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.",
  ],

  // --- Weather result ---
  cityPreposition: "in",

  // --- Temperature thresholds & day-length messages ---
  warmThreshold: 22,
  mediumThreshold: 12,
  msgWarm: "Heute geht kurz-kurz.",
  msgMedium: "Heute geht lang-kurz.",
  msgCold: "Heute nur lang-lang.",

  // --- Errors (unused — exclamation-wrapper is the error feedback) ---
  // errorCityNotFound: city => `Keine Ergebnisse für „${city}". Versuch einen anderen Stadtnamen.`,
  // errorGeneric:      "Wetterdaten konnten nicht geladen werden. Bitte versuch es erneut.",
};

/* ==========================================================================
   WMO weather code → emoji
   ========================================================================== */
const WMO_CODES = {
  0:  '☀️', 1:  '🌤️', 2:  '⛅', 3:  '☁️',
  45: '🌫️', 48: '🌫️',
  51: '🌦️', 53: '🌦️', 55: '🌦️',
  56: '🌧️', 57: '🌧️',
  61: '🌧️', 63: '🌧️', 65: '🌧️',
  66: '🌧️', 67: '🌧️',
  71: '❄️', 73: '❄️', 75: '❄️', 77: '❄️',
  80: '🌦️', 81: '🌦️', 82: '🌦️',
  85: '🌨️', 86: '🌨️',
  95: '⛈️', 96: '⛈️', 99: '⛈️',
};
const emoji = code => WMO_CODES[code] || '🌍';

/* ==========================================================================
   Background colours per temperature tier
   ========================================================================== */
const BG = { warm: '#FFAA00', neutral: '#C8CDD6', medium: '#8BD2EC', cold: '#8FA0B5' };
function tierForTemp(temp) {
  if (temp > UI.warmThreshold) return 'warm';
  if (temp > UI.mediumThreshold) return 'medium';
  return 'cold';
}
function bgForTemp(temp) { return BG[tierForTemp(temp)]; }

/* ==========================================================================
   Weather colours per WMO code — from the Wetterfarben editor (export 2026-10-21)
   bg:    background colour per temperature tier
   start: gradient start colour (top, 0 %), fades to transparent at 70 %
   alpha: opacity of the gradient start per tier, in %
   loop:  duration of one tilt direction in ms (155° ↔ 205°, ease-in-out, alternate)
   ========================================================================== */
const WEATHER_COLORS = {
   0: { bg: { warm: '#FFA600', medium: '#52D2F8', cold: '#19ACE5' }, start: '#FFF2B2', alpha: { warm: 60, medium: 50, cold: 45 }, loop: 8000 },
   1: { bg: { warm: '#E6B248', medium: '#7CCAE0', cold: '#70AFDB' }, start: '#FFE9BA', alpha: { warm: 50, medium: 50, cold: 45 }, loop: 6000 },
   2: { bg: { warm: '#8DD5FF', medium: '#8DCEE4', cold: '#869FB0' }, start: '#F8E3B4', alpha: { warm: 55, medium: 50, cold: 50 }, loop: 6000 },
   3: { bg: { warm: '#A9CEEB', medium: '#89BACC', cold: '#8995A4' }, start: '#EBF9FF', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 6000 },
  45: { bg: { warm: '#B8D1E6', medium: '#ABC4CC', cold: '#878E96' }, start: '#FFFFFF', alpha: { warm: 55, medium: 50, cold: 70 }, loop: 10000 },
  48: { bg: { warm: '#C8CDD6', medium: '#C8CDD6', cold: '#83909C' }, start: '#FFFFFF', alpha: { warm: 55, medium: 50, cold: 80 }, loop: 6000 },
  51: { bg: { warm: '#8DD5FF', medium: '#94D3EB', cold: '#7995B9' }, start: '#2F3F4B', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 6000 },
  53: { bg: { warm: '#8DD5FF', medium: '#94D3EB', cold: '#7995B9' }, start: '#1F2D38', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 6000 },
  55: { bg: { warm: '#8DD5FF', medium: '#94D3EB', cold: '#7995B9' }, start: '#12181C', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 8000 },
  56: { bg: { warm: '#8DD5FF', medium: '#94D3EB', cold: '#8FAED6' }, start: '#12181C', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 8000 },
  57: { bg: { warm: '#C8CDD6', medium: '#C8CDD6', cold: '#8E9AA4' }, start: '#E6F5FB', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 6000 },  /* nicht gespeichert: Ausgangswert */
  61: { bg: { warm: '#C2E9FF', medium: '#97C1D1', cold: '#8993A0' }, start: '#598EA1', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 6000 },
  63: { bg: { warm: '#C2E9FF', medium: '#97C1D1', cold: '#8993A0' }, start: '#385D6B', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 6000 },
  65: { bg: { warm: '#C2E9FF', medium: '#97C1D1', cold: '#8993A0' }, start: '#27444F', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 6000 },
  66: { bg: { warm: '#D9F1FF', medium: '#ABC7D1', cold: '#9097A0' }, start: '#27444F', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 6000 },
  67: { bg: { warm: '#C3D9E6', medium: '#ABC7D1', cold: '#9097A0' }, start: '#273C45', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 6000 },
  71: { bg: { warm: '#C8CDD6', medium: '#C8CDD6', cold: '#AFC3D1' }, start: '#E2F6FF', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 6000 },  /* nicht gespeichert: Ausgangswert */
  73: { bg: { warm: '#C8CDD6', medium: '#C8CDD6', cold: '#B8C4CC' }, start: '#F5F8FA', alpha: { warm: 55, medium: 50, cold: 60 }, loop: 6000 },
  75: { bg: { warm: '#C8CDD6', medium: '#C8CDD6', cold: '#ACB8BF' }, start: '#FFFFFF', alpha: { warm: 55, medium: 50, cold: 60 }, loop: 3000 },
  77: { bg: { warm: '#C8CDD6', medium: '#C8CDD6', cold: '#ACB8BF' }, start: '#FFFFFF', alpha: { warm: 55, medium: 50, cold: 60 }, loop: 6000 },
  80: { bg: { warm: '#8DD5FF', medium: '#95C5D6', cold: '#76A3C2' }, start: '#667F7A', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 7000 },
  81: { bg: { warm: '#8DD5FF', medium: '#95C5D6', cold: '#76A3C2' }, start: '#455955', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 4500 },
  82: { bg: { warm: '#8DD5FF', medium: '#95C5D6', cold: '#76A3C2' }, start: '#122622', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 3000 },
  85: { bg: { warm: '#C8CDD6', medium: '#C8CDD6', cold: '#B5C7D5' }, start: '#E3F5FE', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 6000 },  /* nicht gespeichert: Ausgangswert */
  86: { bg: { warm: '#C8CDD6', medium: '#C8CDD6', cold: '#BDD0DD' }, start: '#E5F5FC', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 6000 },  /* nicht gespeichert: Ausgangswert */
  95: { bg: { warm: '#D99E45', medium: '#86AAB9', cold: '#747E89' }, start: '#00202E', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 6000 },
  96: { bg: { warm: '#D99E45', medium: '#86AAB9', cold: '#747E89' }, start: '#2A6883', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 4000 },
  99: { bg: { warm: '#D6A35C', medium: '#86AAB9', cold: '#747E89' }, start: '#000000', alpha: { warm: 55, medium: 50, cold: 45 }, loop: 2000 },
};

function hexToRgba(hex, alphaPct) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${n >> 16 & 255}, ${n >> 8 & 255}, ${n & 255}, ${alphaPct / 100})`;
}
/* Background + gradient for a WMO code and tier. Unknown code → tier colour, no gradient. */
function styleForWeather(code, tier) {
  const c = WEATHER_COLORS[code];
  if (!c) return { bg: BG[tier], gradient: null };
  return { bg: c.bg[tier], gradient: { start: hexToRgba(c.start, c.alpha[tier]), loop: c.loop } };
}
const cyclistSrc = tier => `assets/cyclist-${tier}.svg`;
function dayMessage(temp) {
  if (temp > UI.warmThreshold) return UI.msgWarm;
  if (temp > UI.mediumThreshold) return UI.msgMedium;
  return UI.msgCold;
}

/* ==========================================================================
   Extended temperature — shifts the tier with sun, rain, fog and wind.
   A design rule, not a physical model: each signal is 0…1 and moves the
   temperature used for the tier by at most its weight (in °C).
   FEEL.enabled = false → the tier is decided by air temperature alone.
   ========================================================================== */
const FEEL = {
  enabled: true,
  weights: { sun: 4, wet: -4, fog: -2, wind: -3 },
  sunFull:  800,  /* W/m² shortwave radiation → sun = 1 */
  wetFull:  1,    /* mm/h precipitation       → wet = 1 */
  windFrom: 10,   /* km/h: below this, wind = 0 */
  windFull: 40,   /* km/h: from this on, wind = 1 */
  fogCodes: [45, 48],
};
const clamp01 = x => Math.min(1, Math.max(0, x));

function weatherSignals(c) {
  return {
    sun:  clamp01(c.shortwave_radiation / FEEL.sunFull),
    wet:  clamp01(c.precipitation / FEEL.wetFull),
    fog:  FEEL.fogCodes.includes(c.weather_code) ? 1 : 0,
    wind: clamp01((c.wind_speed_10m - FEEL.windFrom) / (FEEL.windFull - FEEL.windFrom)),
  };
}

function feltTemperature(temp, signals) {
  if (!FEEL.enabled) return temp;
  return Object.entries(FEEL.weights).reduce((t, [k, w]) => t + w * signals[k], temp);
}

/* ==========================================================================
   API helpers
   ========================================================================== */
async function fetchJSON(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
async function geocodeCity(query) {
  const data = await fetchJSON(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=5&language=de&format=json`
  );
  if (!data.results || data.results.length === 0) throw new Error('CITY_NOT_FOUND');
  const r = data.results[0];
  return { name: r.name, lat: r.latitude, lon: r.longitude };
}
async function getWeather(lat, lon) {
  const data = await fetchJSON(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
    `&current=temperature_2m,weather_code,shortwave_radiation,precipitation,wind_speed_10m` +
    `&wind_speed_unit=kmh&timezone=auto&forecast_days=1`
  );
  const c = data.current;
  const temp = Math.round(c.temperature_2m);
  const signals = weatherSignals(c);
  return {
    temp,                                /* shown on screen: air temperature */
    code: c.weather_code,
    signals,                             /* 0…1 each — also meant for later visual indicators */
    feel: feltTemperature(temp, signals),  /* decides tier, colour, message, rider */
  };
}

async function reverseGeocode(lat, lon) {
  const data = await fetchJSON(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1&accept-language=de`
  );
  const addr = data.address || {};
  return addr.city || addr.town || addr.village || addr.county || data.name || 'unbekannt';
}

/* ==========================================================================
   Screen state
   ========================================================================== */
const SCREEN = { FALLBACK: 'fallback', WEATHER: 'weather', SEARCH_UI: 'search-ui', LOCATING: 'locating', IMPRINT: 'imprint' };
let currentScreen = SCREEN.FALLBACK;
let lastWeatherData = null;

/* ==========================================================================
   DOM helpers
   ========================================================================== */
const $content = () => document.getElementById('content');
function html(...parts) { return parts.join(''); }
/* The imprint link is only shown on the weather screen */
function render(inner) {
  $content().innerHTML = inner;
  document.getElementById('imprint-link').hidden = currentScreen !== SCREEN.WEATHER;
}

let currentBg = BG.neutral;  /* last-applied body background colour (hex string) */
let currentGradient = null;  /* last-applied weather gradient { start, loop } or null */

/* gradient: { start, loop } → animated weather gradient;
   omitted/null → the static default gradient of the neutral screens */
function setBodyBackground(colour, gradient = null) {
  currentBg = colour;
  currentGradient = gradient;
  const b = document.body;
  b.style.setProperty('--bg-colour', colour || '');
  b.classList.toggle('weather-gradient', !!gradient);
  if (gradient) {
    b.style.setProperty('--grad-start', gradient.start);
    b.style.setProperty('--grad-loop', gradient.loop + 'ms');
  } else {
    b.style.removeProperty('--grad-start');
    b.style.removeProperty('--grad-loop');
  }
}

/* ==========================================================================
   LOCATING SCREEN (shown while geolocation is in progress)
   ========================================================================== */
function renderLocating() {
  currentScreen = SCREEN.LOCATING;
  setBodyBackground(BG.neutral);
  render(html(
    `<div class="card u-w-full">`,
    `  <div class="locating-row u-row u-text-24 u-mb-24">`,
    `    <div class="spinner u-size-28 u-mr-4 u-rounded-full u-spin"></div>`,
    `    <span class="status locating-status u-text-24">${UI.locating}</span>`,
    `  </div>`,
    `</div>`
  ));
}

/* ==========================================================================
   FALLBACK SCREEN (mockup-fallback-no-location)
   Exclamation-wrapper + "Ort nicht gefunden" is the error feedback.
   No inline .screen-error div needed.
   ========================================================================== */
function renderFallback() {
  currentScreen = SCREEN.FALLBACK;
  setBodyBackground(BG.neutral);

  render(html(
    `<div class="card u-w-full">`,
    `  <div class="exclamation-wrapper u-row u-text-24 u-mb-24">`,
    `    <div class="exclamation-icon u-size-28 u-mr-4 u-rounded-full u-shrink-0 u-center u-text-24 u-text-white">!</div>`,
    `    <span class="status u-text-24">${UI.fallbackStatus}</span>`,
    `  </div>`,
    `  <div class="headline u-text-62 u-text-light u-mb-24 u-fade-in">${UI.fallbackHeadline}</div>`,
    `  <form id="city-form" autocomplete="off">`,
    `    <input type="text"`,
    `           id="city-input"`,
    `           placeholder="${UI.inputPlaceholder}"`,
    `           autofocus`,
    `           class="input-field u-w-full u-h-56 u-text-16 u-radius-12"`,
    `    />`,
    `    <button type="submit" class="cta-btn u-w-full u-h-56 u-text-16 u-radius-12 u-text-white u-cursor-pointer u-p-0">${UI.ctaSearch}</button>`,
    `  </form>`,
    `</div>`
  ));

  const input = document.getElementById('city-input');
  input.addEventListener('focus', () => input.classList.add('focused'));
  input.addEventListener('blur', () => input.classList.remove('focused'));
  input.focus();

  document.getElementById('city-form').addEventListener('submit', onFallbackSearch);
}

/* ==========================================================================
   WEATHER RESULT SCREEN
   ========================================================================== */
/* cause: 'cityChange' | 'searchClose' | 'imprintClose' — the very first display is always
   'firstLoad'. CONVOY[cause] decides whether the convoy rides through. */
function renderWeather(weather, loc, cause = 'cityChange') {
  const convoy = CONVOY[lastWeatherData ? cause : 'firstLoad'];
  currentScreen = SCREEN.WEATHER;
  lastWeatherData = { weather, loc };
  const look = styleForWeather(weather.code, tierForTemp(weather.feel));
  setBodyBackground(look.bg, look.gradient);

  render(html(
    `<div class="card u-w-full">`,
    `  <div class="row-header u-row u-text-24 u-mb-24">`,
    `    <span class="weather-icon u-mr-4 u-shrink-0">${emoji(weather.code)}</span>`,
    `    <span class="weather-temp u-text-24">${weather.temp}<span class="deg">°</span></span>`,
    `    <span class="weather-pre u-text-24">${UI.cityPreposition}</span>`,
    `    <span class="weather-city u-text-24 u-cursor-pointer" data-action="open-search" tabindex="0" role="link">`,
    `      <em>${escapeHTML(loc)}</em>`,
    `    </span>`,
    `  </div>`,
    `  <div class="day-msg u-text-62 u-text-light u-mb-24 u-fade-in">${escapeHTML(dayMessage(weather.feel))}</div>`,
    `</div>`,
    `<div class="cyclist" aria-hidden="true"></div>`
  ));

  playCyclistIntro(document.querySelector('.cyclist'), tierForTemp(weather.feel), convoy);

  const cityEl = document.querySelector('[data-action="open-search"]');
  cityEl.addEventListener('click', () => showSearchUI());
  cityEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showSearchUI(); }
  });
}

/* ==========================================================================
   Cyclist intro — the three tiers ride through as a convoy at constant
   speed (gap ≈ 15 % of the viewport). The matching one follows at the same
   speed and eases into the centre position.
   ========================================================================== */
const CYCLIST_TIERS = ['cold', 'medium', 'warm'];
const CONVOY = {       /* when the convoy rides through before the final entry */
  firstLoad:   true,   /* first weather display after opening the app */
  cityChange:  false,  /* after searching a new city */
  searchClose: false,  /* after closing the search without a change */
  imprintClose: false, /* after closing the imprint */
};
const OFF_RIGHT = 'translateX(calc(50vw + 50%))';
const ON_STAGE  = 'translateX(0)';
const PASS_MS    = 1000;  /* time for one rider to cross the viewport — sets the speed */
const CONVOY_GAP = 0.15;  /* gap between riders, fraction of viewport width */
const ARRIVE_EASE_SHARE = 0.5;  /* share of the entry distance used for braking */
const LEAVE_MS  = 500;
const IDLE_SWAY       = true;  /* false = rider stands still in the final position */
const IDLE_SWAY_MIN   = 0.015; /* per swing: random distance from centre, fraction of viewport width … */
const IDLE_SWAY_MAX   = 0.04;  /* … between MIN and MAX, alternating sides */
const IDLE_SWAY_MS    = 6000;  /* one full back-and-forth cycle */
const EASE_OUT_CUBIC = 'cubic-bezier(0.33, 1, 0.68, 1)';  /* starts at 3× average speed */
const EASE_IN   = 'cubic-bezier(0.32, 0, 0.67, 0)';
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const tx = px => `translateX(${px}px)`;

async function playCyclistIntro(img, tier, convoy = true) {
  await mountCyclist(img, tier);
  if (!img.isConnected || img.dataset.leaving) return;
  registerPedalling(img);
  if (prefersReducedMotion()) {
    img.style.transform = ON_STAGE;
    return;
  }

  const riders = !convoy ? [] : CYCLIST_TIERS.map(() => {
    const r = document.createElement('div');
    r.className = 'cyclist-pass';
    r.setAttribute('aria-hidden', 'true');
    return r;
  });
  await Promise.all(riders.map((r, i) => mountCyclist(r, CYCLIST_TIERS[i])));
  if (!img.isConnected || img.dataset.leaving) return;
  riders.forEach(r => { img.before(r); registerPedalling(r); });

  // Positions are translateX offsets from the centred resting position
  const vw = window.innerWidth;
  const w = img.getBoundingClientRect().width;
  const offLeft = -(vw + w) / 2;
  const speed = (vw + w) / PASS_MS;                /* px per ms, constant */
  const spacingMs = (w + CONVOY_GAP * vw) / speed;  /* rear-to-front gap */

  riders.forEach((r, i) => {
    r.animate(
      [{ transform: tx(offLeft) }, { transform: tx(-offLeft) }],
      { duration: PASS_MS, delay: i * spacingMs, easing: 'linear', fill: 'backwards' }
    ).finished.then(() => r.remove(), () => {});
  });

  // Matching rider: 4th in line, same speed, then brakes into the centre.
  // Ease-out-cubic starts at 3× its average speed → duration chosen so the
  // entry velocity equals the convoy speed (no visible jolt).
  const brakeDist = -offLeft * ARRIVE_EASE_SHARE;
  const cruiseMs = (-offLeft - brakeDist) / speed;
  const brakeMs = 3 * brakeDist / speed;
  img.style.transform = ON_STAGE;
  const arrive = img.animate(
    [
      { transform: tx(offLeft), easing: 'linear' },
      { transform: tx(-brakeDist), easing: EASE_OUT_CUBIC, offset: cruiseMs / (cruiseMs + brakeMs) },
      { transform: ON_STAGE },
    ],
    { duration: cruiseMs + brakeMs, delay: riders.length * spacingMs, fill: 'backwards' }
  );
  arrive.finished.then(() => startIdleSway(img), () => {});
}

/* ==========================================================================
   Cyclist figure — the SVG is inlined into a shadow root instead of an <img>.
   The shadow root scopes its IDs and @keyframes, so several riders (also two
   of the same tier) can be on the page at once, and it exposes the SVG's
   animations to the pedalling control below.
   ========================================================================== */
const svgCache = {};
const loadCyclistSvg = tier => svgCache[tier] ??= fetch(cyclistSrc(tier))
  .then(res => { if (!res.ok) throw new Error(res.status); return res.text(); });

async function mountCyclist(host, tier) {
  let markup;
  try {
    markup = await loadCyclistSvg(tier);
  } catch {
    delete svgCache[tier];  /* e.g. opened via file:// — fall back to the uncoupled <img> */
    markup = `<img src="${cyclistSrc(tier)}" alt="">`;
  }
  const root = host.shadowRoot || host.attachShadow({ mode: 'open' });
  root.innerHTML = `<style>:host{display:block}svg,img{display:block;width:100%;height:100%}</style>${markup}`;
}

/* ==========================================================================
   Pedalling — the CSS animations inside each SVG (legs, upper body, head,
   arms, bike bob) share one crank revolution. They are paused and driven
   from one phase per rider.
   Model: the viewport is a camera riding alongside at the rider's cruising
   speed. Standing still on screen = riding at CADENCE_BASE_RPM; moving
   across the screen = faster or slower than the camera. Cadence therefore
   follows the on-screen speed linearly:
     at rest on screen        → CADENCE_BASE_RPM (cruising)
     convoy speed (PASS_MS)   → CADENCE_CONVOY_RPM (overtaking the camera)
     braking into the centre  → falls from convoy to base cadence
     idle sway                → base cadence: the sway is camera/rider offset, not a speed change
     riding out to the right  → rises, capped at CADENCE_MAX_RPM
   ========================================================================== */
const CRANK_CYCLE_MS     = 850;  /* length of one crank revolution in the SVG animations */
const CADENCE_BASE_RPM   = 70;   /* cruising alongside the camera */
const CADENCE_CONVOY_RPM = 100;  /* passing through the viewport */
const CADENCE_MAX_RPM    = 130;
const CADENCE_SMOOTH_MS  = 80;   /* time constant for cadence changes */
const pedalling = new Map();     /* host → { anims, phase, rpm, x, t } */
let pedalFrame = 0;

function registerPedalling(host) {
  /* call once the host is in the document — CSS animations only exist there */
  const root = host.shadowRoot;
  const anims = root && root.getAnimations ? root.getAnimations() : [];
  anims.forEach(a => { a.pause(); a.currentTime = 0; });
  pedalling.set(host, { anims, phase: 0, rpm: CADENCE_BASE_RPM, x: null, t: null });
  if (!pedalFrame) pedalFrame = requestAnimationFrame(pedalTick);
}

function pedalTick(now) {
  for (const [host, s] of pedalling) {
    if (!host.isConnected) { pedalling.delete(host); continue; }
    const x = new DOMMatrixReadOnly(getComputedStyle(host).transform).m41;
    const dt = s.t === null ? 0 : now - s.t;
    if (dt > 0) {
      const v = (x - s.x) / dt;                                         /* px per ms, relative to the camera */
      const vRef = (window.innerWidth + host.offsetWidth) / PASS_MS;    /* convoy speed */
      const swaying = host.dataset.sway && !host.dataset.leaving;
      const target = swaying ? CADENCE_BASE_RPM : Math.min(CADENCE_MAX_RPM, Math.max(0,
        CADENCE_BASE_RPM + (v / vRef) * (CADENCE_CONVOY_RPM - CADENCE_BASE_RPM)));
      s.rpm += (target - s.rpm) * (1 - Math.exp(-dt / CADENCE_SMOOTH_MS));
      s.phase = (s.phase + dt * s.rpm / 60000 * CRANK_CYCLE_MS) % CRANK_CYCLE_MS;
      s.anims.forEach(a => { a.currentTime = s.phase; });
    }
    s.x = x;
    s.t = now;
  }
  pedalFrame = pedalling.size ? requestAnimationFrame(pedalTick) : 0;
}

/* Slow back-and-forth around the centre once the rider has arrived.
   Every swing turns at a random distance (IDLE_SWAY_MIN…MAX) on the other
   side, with zero speed at each turning point — no jolt after the braking. */
async function startIdleSway(img) {
  const stopped = () => !IDLE_SWAY || !img.isConnected || img.dataset.leaving;
  const randomAmp = () => IDLE_SWAY_MIN + Math.random() * (IDLE_SWAY_MAX - IDLE_SWAY_MIN);
  img.dataset.sway = '1';  /* pedalling ignores this movement */

  let from = ON_STAGE;
  let side = 1;
  let duration = IDLE_SWAY_MS / 4;  /* first move: centre → one side */
  while (!stopped()) {
    const to = `translateX(${(side * randomAmp() * 100).toFixed(2)}vw)`;
    const swing = img.animate(
      [{ transform: from }, { transform: to }],
      { duration, easing: 'ease-in-out', fill: 'forwards' }
    );
    await swing.finished.catch(() => {});  /* rejects when cancelled by rideCyclistOut */
    if (stopped()) return;
    img.style.transform = to;  /* hold position, then drop the finished animation */
    swing.cancel();
    from = to;
    side = -side;
    duration = IDLE_SWAY_MS / 2;  /* one side to the other */
  }
}

/* Accelerate every visible rider out to the right from where it currently is */
async function rideCyclistOut(img) {
  img.dataset.leaving = '1';
  const all = [...document.querySelectorAll('.cyclist-pass'), img];
  await Promise.all(all.map(r => {
    const rect = r.getBoundingClientRect();
    const onScreen = rect.right > 0 && rect.left < window.innerWidth;
    const from = getComputedStyle(r).transform;  /* includes a running animation */
    r.getAnimations().forEach(a => a.cancel());
    if (!onScreen || prefersReducedMotion()) {
      r.style.visibility = 'hidden';
      return;
    }
    r.style.transform = OFF_RIGHT;
    return r.animate(
      [{ transform: from }, { transform: OFF_RIGHT }],
      { duration: LEAVE_MS, easing: EASE_IN }
    ).finished.catch(() => {});
  }));
}

/* ==========================================================================
   SEARCH UI SCREEN (mockup-search-UI)
   ========================================================================== */
let searchUIBg = null;  /* captured body bg when opening from weather screen */
let searchUIGradient = null;

function renderSearchUI(bg) {
  currentScreen = SCREEN.SEARCH_UI;
  if (bg) searchUIBg = bg;
  setBodyBackground(searchUIBg || currentBg || BG.neutral, searchUIBg ? searchUIGradient : currentGradient);

  render(html(
    `<div class="card u-w-full">`,
    `  <div class="row-closebox u-row u-text-24 u-mb-24">`,
    `    <button id="search-ui-close" class="close-btn u-p-0 u-cursor-pointer u-center" aria-label="Schließen">×</button>`,
    `  </div>`,
    `  <div class="headline u-text-62 u-text-light u-mb-24 u-fade-in">${UI.searchUIHeadline}</div>`,
    `  <form id="city-form" autocomplete="off">`,
    `    <input type="text"`,
    `           id="city-input"`,
    `           placeholder="${UI.inputPlaceholder}"`,
    `           autofocus`,
    `           class="input-field u-w-full u-h-56 u-text-16 u-radius-12"`,
    `    />`,
    `    <button type="submit" class="cta-btn u-w-full u-h-56 u-text-16 u-radius-12 u-text-white u-cursor-pointer u-p-0">${UI.ctaChange}</button>`,
    `  </form>`,
    `</div>`
  ));

  const input = document.getElementById('city-input');
  input.addEventListener('focus', () => input.classList.add('focused'));
  input.addEventListener('blur', () => input.classList.remove('focused'));
  input.focus();

  document.getElementById('city-form').addEventListener('submit', onSearchUIChange);
  document.getElementById('search-ui-close').addEventListener('click', () => {
    closeSearchUI();
  });
  document.addEventListener('keydown', onSearchUIKeydown);
}

/* ==========================================================================
   IMPRINT SCREEN — same layout and behaviour as the search UI:
   opened from the weather screen only, × or Esc returns there.
   ========================================================================== */
async function showImprint() {
  if (currentScreen !== SCREEN.WEATHER || !lastWeatherData) return;
  const img = document.querySelector('.cyclist');
  if (img) {
    if (img.dataset.leaving) return;  /* already on its way out */
    await rideCyclistOut(img);
  }
  renderImprint();
}

/* One UI.imprintText entry → HTML (see the comment there for the block types) */
function renderImprintBlock(b) {
  if (typeof b === 'string') return `<p>${b}</p>`;
  if (b.h2) return `<h2 class="imprint-h2 u-text-24">${b.h2}</h2>`;
  if (b.h3) return `<h3 class="imprint-h3 u-text-16">${b.h3}</h3>`;
  if (b.ul) return `<ul class="imprint-list">${b.ul.map(li => `<li>${li}</li>`).join('')}</ul>`;
  return '';
}

function renderImprint() {
  currentScreen = SCREEN.IMPRINT;
  setBodyBackground(currentBg || BG.neutral, currentGradient);

  render(html(
    `<div class="card u-w-full">`,
    `  <div class="row-closebox u-row u-text-24 u-mb-24">`,
    `    <button id="imprint-close" class="close-btn u-p-0 u-cursor-pointer u-center" aria-label="Schließen">×</button>`,
    `  </div>`,
    `  <div class="headline imprint-headline u-text-62 u-text-light u-mb-24 u-fade-in">${UI.imprintHeadline}</div>`,
    `  <div class="imprint-text u-text-16 u-fade-in">`,
    UI.imprintText.map(renderImprintBlock).join(''),
    `  </div>`,
    `</div>`
  ));

  document.getElementById('imprint-close').addEventListener('click', closeImprint);
  document.addEventListener('keydown', onImprintKeydown);
}

function closeImprint() {
  document.removeEventListener('keydown', onImprintKeydown);
  renderWeather(lastWeatherData.weather, lastWeatherData.loc, 'imprintClose');
}

function onImprintKeydown(e) {
  if (currentScreen !== SCREEN.IMPRINT) {
    document.removeEventListener('keydown', onImprintKeydown);
    return;
  }
  if (e.key === 'Escape') closeImprint();
}

/* ==========================================================================
   Event handlers
   ========================================================================== */
/* Esc closes the search UI. Registered once per open (same function reference
   is de-duplicated) and removes itself once the search UI is gone. */
function onSearchUIKeydown(e) {
  if (currentScreen !== SCREEN.SEARCH_UI) {
    document.removeEventListener('keydown', onSearchUIKeydown);
    return;
  }
  if (e.key === 'Escape' && lastWeatherData) {
    document.removeEventListener('keydown', onSearchUIKeydown);
    closeSearchUI();
  }
}

async function onFallbackSearch(e) {
  e.preventDefault();
  const input = document.getElementById('city-input');
  const query = input.value.trim();
  if (!query) return;
  disableInput(input);
  showSearching();
  await performSearch(query, 'fallback');
}

async function onSearchUIChange(e) {
  e.preventDefault();
  const input = document.getElementById('city-input');
  const query = input.value.trim();
  if (!query) return;
  disableInput(input);
  showSearching(true);
  await performSearch(query, 'search-ui');
}

async function performSearch(query, screenType) {
  try {
    const loc = await geocodeCity(query);
    const weather = await getWeather(loc.lat, loc.lon);
    renderWeather(weather, loc.name);
  } catch (err) {
    if (screenType === 'search-ui') {
      renderSearchUI();
      const input = document.getElementById('city-input');
      if (input) reenableInput(input);
    } else {
      renderFallback();
      const input = document.getElementById('city-input');
      if (input) reenableInput(input);
    }
  }
}

function showSearching(inSearchUI) {
  if (inSearchUI) {
    setBodyBackground(searchUIBg || BG.neutral, searchUIBg ? searchUIGradient : null);
    render(html(
      `<div class="card u-w-full">`,
      `  <div class="row-header u-row u-text-24 u-mb-24">`,
      `    <button id="search-ui-close" class="close-btn u-p-0 u-cursor-pointer u-center" aria-label="Schließen">×</button>`,
      `  </div>`,
      `  <div class="spinner u-size-28 u-mr-4 u-rounded-full u-spin"></div>`,
      `  <div class="searching-text u-text-16 u-text-muted u-fade-in-fast">Suche nach ${''} …</div>`,
      `</div>`
    ));
    document.getElementById('search-ui-close').addEventListener('click', () => {
      closeSearchUI();
    });
  } else {
    setBodyBackground(BG.neutral);
    render(html(
      `<div class="card u-w-full">`,
      `  <div class="exclamation-wrapper u-row u-text-24 u-mb-24">`,
      `    <div class="exclamation-icon u-size-28 u-mr-4 u-rounded-full u-shrink-0 u-center u-text-24 u-text-white">!</div>`,
      `    <span class="status u-text-24">${UI.fallbackStatus}</span>`,
      `  </div>`,
      `  <div class="headline u-text-62 u-text-light u-mb-24 u-fade-in">${UI.fallbackHeadline}</div>`,
      `  <div class="spinner u-size-28 u-mr-4 u-rounded-full u-spin"></div>`,
      `  <div class="searching-text u-text-16 u-text-muted u-fade-in-fast">Suche nach ${''} …</div>`,
      `</div>`
    ));
  }
}

function disableInput(input) {
  if (input) { input.disabled = true; input.style.opacity = '0.5'; }
}
function reenableInput(input) {
  if (input) { input.disabled = false; input.style.opacity = '1'; input.focus(); }
}

/* Back to the weather screen without a city change */
function closeSearchUI() {
  if (lastWeatherData) renderWeather(lastWeatherData.weather, lastWeatherData.loc, 'searchClose');
}

async function showSearchUI() {
  if (!lastWeatherData) return;
  const img = document.querySelector('.cyclist');
  if (img) {
    if (img.dataset.leaving) return;  /* already on its way out */
    await rideCyclistOut(img);
  }
  searchUIBg = currentBg;
  searchUIGradient = currentGradient;
  renderSearchUI();
}

/* ==========================================================================
   Geolocation — primary, city search as fallback
   ========================================================================== */
function tryGeolocation() {
  if (!navigator.geolocation) {
    console.warn('Geolocation not supported');
    renderFallback();
    return;
  }
  renderLocating();
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      try {
        const { latitude, longitude } = pos.coords;
        const city = await reverseGeocode(latitude, longitude);
        const weather = await getWeather(latitude, longitude);
        renderWeather(weather, city);
      } catch (err) {
        console.error('Geolocation → weather failed:', err);
        renderFallback();
      }
    },
    (err) => {
      console.warn('Geolocation error:', err.message, '(code:', err.code + ')');
      renderFallback();
    }, {
      enableHighAccuracy: false,
      timeout: 8000,
      maximumAge: 300000,
    }
  );
}

/* ==========================================================================
   Helpers
   ========================================================================== */
function escapeHTML(s) {
  return s.replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
  }[c]));
}

/* ==========================================================================
   Boot — try geolocation first, city search as fallback
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const link = document.getElementById('imprint-link');
  link.textContent = UI.imprintLink;
  link.addEventListener('click', (e) => { e.preventDefault(); showImprint(); });
  tryGeolocation();
});
