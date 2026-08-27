/* The Judgment Seat of Affabel — application */

const KEY = "affabel.judgment.v1";

const state = {
  judge: "",
  results: {},   // caseId -> {verdict, measure, verse, verdictHit, measureHit, verseHit}
  current: null
};

/* ---------- persistence ---------- */

function save() {
  try { localStorage.setItem(KEY, JSON.stringify({ judge: state.judge, results: state.results })); }
  catch (e) { /* private mode, blocked storage: proceed without saving */ }
}

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return;
    const d = JSON.parse(raw);
    if (d && typeof d === "object") {
      state.judge = d.judge || "";
      state.results = d.results || {};
    }
  } catch (e) { /* ignore */ }
}

/* ---------- helpers ---------- */

const $  = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

function esc(s) {
  return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
}

function show(id) {
  $$(".screen").forEach(s => s.classList.toggle("active", s.id === id));
  document.body.classList.toggle("on-title", id === "title");
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

function caseById(id) { return CASES.find(c => c.id === id); }

function doneCount() { return Object.keys(state.results).length; }

/* ---------- title ---------- */

function initTitle() {
  $("#heroArt").style.backgroundImage = `url("${ART.hero.src}")`;
  $("#heroCredit").textContent = ART.hero.credit;

  const input = $("#judgeName");
  input.value = state.judge;

  $("#beginBtn").addEventListener("click", () => {
    state.judge = input.value.trim();
    save();
    show(doneCount() ? "docket" : "briefing");
    if (doneCount()) renderDocket();
  });

  input.addEventListener("keydown", e => { if (e.key === "Enter") $("#beginBtn").click(); });

  if (doneCount()) {
    $("#resumeNote").hidden = false;
    $("#resumeCount").textContent = doneCount();
  }
}

/* ---------- briefing ---------- */

function initBriefing() {
  $("#briefAffabelArt").style.backgroundImage = `url("${ART.affabel.src}")`;
  $("#briefLoneArt").style.backgroundImage = `url("${ART.lone.src}")`;

  $("#toDocket").addEventListener("click", () => { renderDocket(); show("docket"); });
}

/* ---------- docket ---------- */

function renderDocket() {
  const grid = $("#docketGrid");
  grid.innerHTML = "";

  CASES.forEach((c, i) => {
    const r = state.results[c.id];
    const btn = document.createElement("button");
    btn.className = "docket-card";
    btn.type = "button";

    let mark = "";
    if (r) {
      const hit = r.verdictHit;
      mark = `<span class="docket-mark ${hit ? "mark-hit" : "mark-miss"}" aria-hidden="true">${hit ? "✓" : "✗"}</span>`;
    }

    btn.innerHTML = `
      ${mark}
      <div class="docket-thumb" style="background-image:url('${c.art.src}')"></div>
      <div class="docket-body">
        <div class="docket-num">Case ${String(i + 1).padStart(2, "0")}</div>
        <div class="docket-name">${esc(c.name)}</div>
        <div class="docket-trade">${esc(c.trade)}</div>
      </div>`;

    btn.addEventListener("click", () => openCase(c.id));
    grid.appendChild(btn);
  });

  const pct = (doneCount() / CASES.length) * 100;
  $("#progressFill").style.width = pct + "%";
  $("#progressText").textContent = `${doneCount()} of ${CASES.length} judged`;
  $("#recordBtn").disabled = doneCount() === 0;

  $("#docketGreeting").textContent = state.judge
    ? `The hall is seated, ${state.judge}. The docket stands as follows.`
    : "The hall is seated. The docket stands as follows.";
}

function initDocket() {
  $("#recordBtn").addEventListener("click", () => { renderRecord(); show("record"); });
  $("#reviewLawBtn").addEventListener("click", () => show("briefing"));
  $("#resetBtn").addEventListener("click", () => {
    if (!confirm("Clear every verdict and start the docket over?")) return;
    state.results = {};
    save();
    renderDocket();
  });
}

/* ---------- case ---------- */

function openCase(id) {
  const c = caseById(id);
  state.current = { id, verdict: null, measure: null, verse: null };

  $("#casePortrait").style.backgroundImage = `url("${c.art.src}")`;
  $("#caseArtCredit").textContent = c.art.credit;
  $("#caseName").textContent = c.name;
  $("#caseTrade").textContent = c.trade;
  $("#caseIndex").textContent = `Case ${String(CASES.indexOf(c) + 1).padStart(2, "0")} of ${CASES.length}`;
  $("#caseApproach").textContent = c.approach;
  $("#caseIntro").textContent = c.intro;

  $("#evidenceList").innerHTML = c.review.map(e => `<li>${esc(e)}</li>`).join("");
  $("#pleaBox").innerHTML = c.pleas.map(p => `<p>${esc(p)}</p>`).join("");

  // reset phases
  $("#phaseVerdict").hidden = false;
  $("#phaseMeasure").hidden = true;
  $("#phaseVerse").hidden = true;
  $("#rulingBox").hidden = true;
  $("#caseNav").hidden = true;

  renderVerdictChoices();
  show("case");
}

function renderVerdictChoices() {
  const box = $("#verdictChoices");
  box.innerHTML = "";

  [
    { k: "affabel", cls: "choice-affabel", t: "Affabel", d: "The name is found in the Book of Life. This citizen enters the city for the rest of their life." },
    { k: "lone",    cls: "choice-lone",    t: "Lone",    d: "The name is not found. This citizen is bound and carried to the forsaken land for the rest of their life." }
  ].forEach(o => {
    const b = document.createElement("button");
    b.className = "choice " + o.cls;
    b.type = "button";
    b.innerHTML = `<strong>${o.t}</strong><span>${o.d}</span>`;
    b.addEventListener("click", () => chooseVerdict(o.k));
    box.appendChild(b);
  });
}

function chooseVerdict(v) {
  state.current.verdict = v;
  lockPhase("#verdictChoices", v === "affabel" ? 0 : 1);

  const set = v === "affabel" ? STATIONS : MEASURES;
  $("#measureHeading").textContent = v === "affabel"
    ? "Assign the station"
    : "Assign the measure";
  $("#measureSub").textContent = v === "affabel"
    ? "All who live in the city are rulers, but not all are rewarded equally. Where in Affabel does this citizen belong?"
    : "The structure has levels, and one place beneath it. Where in Lone does this citizen belong?";

  const box = $("#measureChoices");
  box.innerHTML = "";
  Object.keys(set).forEach(k => {
    const o = set[k];
    const b = document.createElement("button");
    b.className = "choice " + (v === "affabel" ? "choice-affabel" : "choice-lone");
    b.type = "button";
    b.innerHTML = `<strong>${esc(o.label)}</strong><span>${esc(o.detail)}</span>`;
    b.addEventListener("click", () => chooseMeasure(k));
    box.appendChild(b);
  });

  $("#phaseMeasure").hidden = false;
  $("#phaseMeasure").scrollIntoView({ behavior: "smooth", block: "center" });
}

function chooseMeasure(m) {
  state.current.measure = m;
  const keys = Object.keys(state.current.verdict === "affabel" ? STATIONS : MEASURES);
  lockPhase("#measureChoices", keys.indexOf(m));

  const c = caseById(state.current.id);
  const box = $("#verseChoices");
  box.innerHTML = "";

  // Present the options in a stable, case-specific shuffle so the correct
  // answer is not always first, but is the same for every student.
  const order = shuffleStable(c.options, c.id);
  order.forEach(vid => {
    const v = VERSES[vid];
    if (!v) return;
    const b = document.createElement("button");
    b.className = "choice choice-verse";
    b.type = "button";
    b.dataset.vid = vid;
    b.innerHTML = `<strong>${esc(v.ref)}</strong><span>${esc(v.text)}</span>`;
    b.addEventListener("click", () => chooseVerse(vid));
    box.appendChild(b);
  });

  $("#phaseVerse").hidden = false;
  $("#phaseVerse").scrollIntoView({ behavior: "smooth", block: "start" });
}

function chooseVerse(vid) {
  state.current.verse = vid;
  const c = caseById(state.current.id);

  $$("#verseChoices .choice").forEach(b => {
    b.disabled = true;
    if (b.dataset.vid === c.verse) b.classList.add("correct");
    else if (b.dataset.vid === vid) b.classList.add("wrong");
  });

  recordAndReveal();
}

function lockPhase(sel, idx) {
  $$(sel + " .choice").forEach((b, i) => {
    b.disabled = true;
    if (i === idx) b.classList.add("chosen");
  });
}

/* Deterministic per-case shuffle so every student sees the same order. */
function shuffleStable(arr, seedStr) {
  let seed = 0;
  for (let i = 0; i < seedStr.length; i++) seed = (seed * 31 + seedStr.charCodeAt(i)) >>> 0;
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    seed = (seed * 1103515245 + 12345) >>> 0;
    const j = seed % (i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ---------- ruling ---------- */

function recordAndReveal() {
  const cur = state.current;
  const c = caseById(cur.id);

  const verdictHit = cur.verdict === c.verdict;
  const measureNA  = c.measure === "unspecified";
  const measureHit = measureNA ? null : (verdictHit && cur.measure === c.measure);
  const verseHit   = cur.verse === c.verse;

  state.results[c.id] = {
    verdict: cur.verdict, measure: cur.measure, verse: cur.verse,
    verdictHit, measureHit, verseHit
  };
  save();

  const affabel = c.verdict === "affabel";
  const banner = $("#rulingBanner");
  banner.className = "ruling-banner " + (affabel ? "ruling-affabel" : "ruling-lone");

  const stationLabel = measureNA
    ? "Station not stated in the parable"
    : (affabel ? STATIONS[c.measure].label : MEASURES[c.measure].label);

  banner.innerHTML = `
    <div class="eyebrow">The ruling of Jalyn</div>
    <div class="ruling-dest">${affabel ? "Affabel" : "The forsaken land of Lone"}</div>
    <div class="ruling-station">${esc(stationLabel)}</div>`;

  const chips = [
    `<span class="chip ${verdictHit ? "chip-hit" : "chip-miss"}">Verdict ${verdictHit ? "matched" : "differed"}</span>`,
    measureNA
      ? `<span class="chip chip-na">Station not scored</span>`
      : `<span class="chip ${measureHit ? "chip-hit" : "chip-miss"}">Station ${measureHit ? "matched" : "differed"}</span>`,
    `<span class="chip ${verseHit ? "chip-hit" : "chip-miss"}">Scripture ${verseHit ? "matched" : "differed"}</span>`
  ].join("");

  const cited = (c.alsoCited || [])
    .filter((v, i, a) => a.indexOf(v) === i)
    .map(v => VERSES[v] ? `<span>${esc(VERSES[v].ref)}</span>` : "")
    .join("");

  $("#rulingBody").innerHTML = `
    <div class="scorechips">${chips}</div>
    <hr class="rule">
    <p class="verdict-words">${esc(c.ruling)}</p>
    <h4>Why</h4>
    <p>${esc(c.reason)}</p>
    <h4>${affabel ? "On the station" : "On the measure"}</h4>
    <p>${esc(c.measureReason)}</p>
    <h4>The governing text</h4>
    <div class="scroll-quote">${esc(VERSES[c.verse].text)}<cite>${esc(VERSES[c.verse].ref)} &nbsp;·&nbsp; NABRE</cite></div>
    <h4>Every text cited in this judgment</h4>
    <div class="cited">${cited}</div>
    <div class="teachnote">
      <span class="eyebrow">Sit with this</span>
      <p>${esc(c.lesson)}</p>
    </div>`;

  $("#rulingBox").hidden = false;
  $("#caseNav").hidden = false;

  const idx = CASES.indexOf(c);
  const next = CASES[idx + 1];
  $("#nextCaseBtn").hidden = !next;
  if (next) $("#nextCaseBtn").textContent = `Call ${next.name}`;
  $("#nextCaseBtn").onclick = () => next && openCase(next.id);

  $("#rulingBox").scrollIntoView({ behavior: "smooth", block: "start" });
}

function initCase() {
  $("#backToDocket").addEventListener("click", () => { renderDocket(); show("docket"); });
}

/* ---------- record ---------- */

function renderRecord() {
  const rows = [];
  let v = 0, s = 0, sTotal = 0, w = 0, harsher = 0, softer = 0;

  CASES.forEach((c, i) => {
    const r = state.results[c.id];
    if (!r) {
      rows.push(`<tr>
        <td>${esc(c.name)}</td>
        <td class="dash">not judged</td><td class="dash">—</td><td class="dash">—</td><td class="dash">—</td></tr>`);
      return;
    }

    if (r.verdictHit) v++;
    if (r.verseHit) w++;
    if (r.measureHit !== null) { sTotal++; if (r.measureHit) s++; }

    if (!r.verdictHit) {
      if (r.verdict === "lone" && c.verdict === "affabel") harsher++;
      if (r.verdict === "affabel" && c.verdict === "lone") softer++;
    } else if (r.measureHit === false) {
      const scale = r.verdict === "affabel" ? ["throne", "mountains", "flatlands"] : ["lower", "upper", "blackest"];
      const mine = scale.indexOf(r.measure), his = scale.indexOf(c.measure);
      if (mine > his) harsher++; else if (mine < his) softer++;
    }

    const yours = r.verdict === "affabel" ? "Affabel" : "Lone";
    const yourStation = r.verdict === "affabel" ? STATIONS[r.measure].label : MEASURES[r.measure].label;
    const mark = (hit) => hit === null
      ? '<span class="dash">n/a</span>'
      : (hit ? '<span class="tick">✓</span>' : '<span class="cross">✗</span>');

    rows.push(`<tr>
      <td>${esc(c.name)}</td>
      <td>${yours}<br><span style="color:var(--faint);font-size:12px">${esc(yourStation)}</span></td>
      <td>${mark(r.verdictHit)}</td>
      <td>${mark(r.measureHit)}</td>
      <td>${mark(r.verseHit)}</td>
    </tr>`);
  });

  $("#recordJudge").textContent = state.judge || "Unnamed judge";
  $("#recordDate").textContent = new Date().toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });

  $("#tallyVerdict").textContent = `${v}/${CASES.length}`;
  $("#tallyStation").textContent = `${s}/${sTotal}`;
  $("#tallyVerse").textContent = `${w}/${CASES.length}`;
  $("#tallyHarsh").textContent = harsher;
  $("#tallySoft").textContent = softer;

  $("#recordRows").innerHTML = rows.join("");

  let read;
  if (doneCount() < CASES.length) {
    read = `You have ruled on ${doneCount()} of the ${CASES.length} cases. Finish the docket before drawing conclusions about your own bench.`;
  } else if (harsher > softer * 2 && harsher >= 3) {
    read = `You ruled harsher than Jalyn ${harsher} times and gentler ${softer}. Your instinct is to convict. Notice that the parable's biggest surprises run the other way: Ruthless, Selfish, and Motivator all received more than they had coming.`;
  } else if (softer > harsher * 2 && softer >= 3) {
    read = `You ruled gentler than Jalyn ${softer} times and harsher ${harsher}. Your instinct is to acquit. Notice who that instinct would have let through: Deceived and Faint Heart both counted on exactly the mercy you extended.`;
  } else if (harsher === 0 && softer === 0) {
    read = `You matched Jalyn on every case, in both direction and degree. Either you know this parable very well or you read the standard rather than the résumé.`;
  } else {
    read = `You ruled harsher than Jalyn ${harsher} times and gentler ${softer} times. That is a fairly even hand. The question worth sitting with is not your accuracy but your reasons.`;
  }
  $("#recordRead").textContent = read;

  $("#recordArt").style.backgroundImage = `url("${ART.throne.src}")`;
}

function initRecord() {
  $("#printBtn").addEventListener("click", () => window.print());
  $("#backFromRecord").addEventListener("click", () => { renderDocket(); show("docket"); });
}

/* ---------- boot ---------- */

document.addEventListener("DOMContentLoaded", () => {
  load();
  initTitle();
  initBriefing();
  initDocket();
  initCase();
  initRecord();
  show("title");
});
