/* The Judgment Seat of Affabel — application */

const KEY = "affabel.judgment.v2";

const state = {
  judge: "",
  results: {},   // caseId -> scored result
  current: null
};

/* ---------- persistence ---------- */

function save() {
  try { localStorage.setItem(KEY, JSON.stringify({ judge: state.judge, results: state.results })); }
  catch (e) { /* private mode or blocked storage: carry on without saving */ }
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
  window.scrollTo({ top: 0, behavior: "auto" });
}

const caseById = id => CASES.find(c => c.id === id);
const doneCount = () => Object.keys(state.results).length;

/* Deterministic per-case shuffle: every student sees the same order,
   but the cited texts are not clustered at the top. */
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

/* ---------- title ---------- */

function initTitle() {
  $("#heroArt").style.backgroundImage = `url("${ART.hero.src}")`;
  $("#heroCredit").textContent = ART.hero.credit;

  const input = $("#judgeName");
  input.value = state.judge;

  $("#beginBtn").addEventListener("click", () => {
    state.judge = input.value.trim();
    save();
    if (doneCount()) { renderDocket(); show("docket"); }
    else show("briefing");
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

    const mark = r
      ? `<span class="docket-mark ${r.verdictHit ? "mark-hit" : "mark-miss"}" aria-hidden="true">${r.verdictHit ? "✓" : "✗"}</span>`
      : "";

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

  $("#progressFill").style.width = (doneCount() / CASES.length) * 100 + "%";
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
  state.current = { id, verdict: null, measure: null, picked: [], readings: {} };

  $("#casePortrait").style.backgroundImage = `url("${c.art.src}")`;
  $("#caseArtCredit").textContent = c.art.credit;
  $("#caseName").textContent = c.name;
  $("#caseTrade").textContent = c.trade;
  $("#caseIndex").textContent = `Case ${String(CASES.indexOf(c) + 1).padStart(2, "0")} of ${CASES.length}`;
  $("#caseApproach").textContent = c.approach;
  $("#caseIntro").textContent = c.intro;
  $("#evidenceList").innerHTML = c.review.map(e => `<li>${esc(e)}</li>`).join("");
  $("#pleaBox").innerHTML = c.pleas.map(p => `<p>${esc(p)}</p>`).join("");

  $("#phaseVerdict").hidden = false;
  $("#phaseMeasure").hidden = true;
  $("#phaseTexts").hidden = true;
  $("#phaseReading").hidden = true;
  $("#rulingBox").hidden = true;
  $("#caseNav").hidden = true;

  renderVerdictChoices();
  show("case");
}

function renderVerdictChoices() {
  const box = $("#verdictChoices");
  box.innerHTML = "";
  [
    { k: "affabel", cls: "choice-affabel", t: "Affabel",
      d: "The name is found in the Book of Life. This citizen enters the city for the rest of their life." },
    { k: "lone", cls: "choice-lone", t: "Lone",
      d: "The name is not found. This citizen is bound and carried to the forsaken land for the rest of their life." }
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
  $("#measureHeading").textContent = v === "affabel" ? "Assign the station" : "Assign the measure";
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
  $("#phaseMeasure").scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ---------- phase V: select the texts ---------- */

function chooseMeasure(m) {
  state.current.measure = m;
  const keys = Object.keys(state.current.verdict === "affabel" ? STATIONS : MEASURES);
  lockPhase("#measureChoices", keys.indexOf(m));

  const c = caseById(state.current.id);
  const box = $("#textChoices");
  box.innerHTML = "";

  shuffleStable(c.texts.map(t => t.v), c.id).forEach(vid => {
    const v = VERSES[vid];
    const b = document.createElement("button");
    b.className = "choice choice-verse pickable";
    b.type = "button";
    b.dataset.vid = vid;
    b.setAttribute("aria-pressed", "false");
    b.innerHTML = `<span class="tick-box" aria-hidden="true"></span>
      <strong>${esc(v.ref)}</strong><span>${esc(v.text)}</span>`;
    b.addEventListener("click", () => toggleText(vid, b));
    box.appendChild(b);
  });

  $("#textCount").textContent = "None selected";
  $("#lockTextsBtn").disabled = true;
  $("#phaseTexts").hidden = false;
  $("#phaseTexts").scrollIntoView({ behavior: "smooth", block: "start" });
}

function toggleText(vid, btn) {
  const picked = state.current.picked;
  const i = picked.indexOf(vid);
  if (i >= 0) picked.splice(i, 1); else picked.push(vid);

  const on = picked.includes(vid);
  btn.classList.toggle("chosen", on);
  btn.setAttribute("aria-pressed", String(on));

  $("#textCount").textContent = picked.length === 0
    ? "None selected"
    : `${picked.length} text${picked.length === 1 ? "" : "s"} selected`;
  $("#lockTextsBtn").disabled = picked.length === 0;
}

/* ---------- phase VI: justify each text ---------- */

function lockTexts() {
  const c = caseById(state.current.id);
  const order = shuffleStable(c.texts.map(t => t.v), c.id)
    .filter(v => state.current.picked.includes(v));
  state.current.picked = order;

  $$("#textChoices .choice").forEach(b => { b.disabled = true; b.classList.add("locked"); });
  $("#lockTextsBtn").disabled = true;

  const box = $("#readingChoices");
  box.innerHTML = "";

  order.forEach((vid, n) => {
    const t = c.texts.find(x => x.v === vid);
    const v = VERSES[vid];

    const block = document.createElement("div");
    block.className = "reading-block";
    block.dataset.vid = vid;
    block.innerHTML = `
      <div class="reading-head">
        <span class="reading-n">${n + 1}</span>
        <div>
          <div class="reading-ref">${esc(v.ref)}</div>
          <p class="reading-text">${esc(v.text)}</p>
        </div>
      </div>
      <p class="your-call">Finish the sentence: I rule this way because&hellip;</p>
      <div class="reading-opts"></div>`;

    const opts = $(".reading-opts", block);
    shuffleStable(t.just.map((_, i) => String(i)), c.id + vid).forEach(idx => {
      const j = t.just[Number(idx)];
      const b = document.createElement("button");
      b.className = "choice choice-reason";
      b.type = "button";
      b.dataset.idx = idx;
      b.textContent = j.t;
      b.addEventListener("click", () => pickReading(vid, Number(idx), block));
      opts.appendChild(b);
    });

    box.appendChild(block);
  });

  $("#deliverBtn").disabled = true;
  $("#readingProgress").textContent = `0 of ${order.length} explained`;
  $("#phaseReading").hidden = false;
  $("#phaseReading").scrollIntoView({ behavior: "smooth", block: "start" });
}

function pickReading(vid, idx, block) {
  state.current.readings[vid] = idx;
  $$(".choice", block).forEach(b => b.classList.toggle("chosen", Number(b.dataset.idx) === idx));

  const total = state.current.picked.length;
  const done = Object.keys(state.current.readings).length;
  $("#readingProgress").textContent = `${done} of ${total} explained`;
  $("#deliverBtn").disabled = done < total;

  if (done < total) {
    const next = state.current.picked.find(v => !(v in state.current.readings));
    const el = next && $(`.reading-block[data-vid="${next}"]`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    $("#deliverBtn").scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function lockPhase(sel, idx) {
  $$(sel + " .choice").forEach((b, i) => {
    b.disabled = true;
    if (i === idx) b.classList.add("chosen");
  });
}

/* ---------- the ruling ---------- */

function deliver() {
  const cur = state.current;
  const c = caseById(cur.id);

  const verdictHit = cur.verdict === c.verdict;
  const measureNA  = c.measure === "unspecified";
  const measureHit = measureNA ? null : (verdictHit && cur.measure === c.measure);

  const cited = c.texts.filter(t => t.cited).map(t => t.v);
  const found = cited.filter(v => cur.picked.includes(v));
  const missed = cited.filter(v => !cur.picked.includes(v));
  const wrongPicks = cur.picked.filter(v => !cited.includes(v));

  let soundCount = 0;
  found.forEach(v => {
    const t = c.texts.find(x => x.v === v);
    if (t.just[cur.readings[v]] && t.just[cur.readings[v]].sound) soundCount++;
  });

  state.results[c.id] = {
    verdict: cur.verdict, measure: cur.measure,
    picked: cur.picked.slice(), readings: Object.assign({}, cur.readings),
    verdictHit, measureHit,
    textsFound: found.length, textsCited: cited.length, textsWrong: wrongPicks.length,
    readingsSound: soundCount, readingsScored: found.length
  };
  save();

  $$("#readingChoices .choice").forEach(b => b.disabled = true);
  $("#deliverBtn").disabled = true;

  const affabel = c.verdict === "affabel";
  const banner = $("#rulingBanner");
  banner.className = "ruling-banner " + (affabel ? "ruling-affabel" : "ruling-lone");
  banner.innerHTML = `
    <div class="eyebrow">The ruling of Jalyn</div>
    <div class="ruling-dest">${affabel ? "Affabel" : "The forsaken land of Lone"}</div>
    <div class="ruling-station">${esc(measureNA
      ? "Station not stated in the parable"
      : (affabel ? STATIONS[c.measure].label : MEASURES[c.measure].label))}</div>`;

  const chips = [
    `<span class="chip ${verdictHit ? "chip-hit" : "chip-miss"}">Verdict ${verdictHit ? "matched" : "differed"}</span>`,
    measureNA
      ? `<span class="chip chip-na">Station not scored</span>`
      : `<span class="chip ${measureHit ? "chip-hit" : "chip-miss"}">Station ${measureHit ? "matched" : "differed"}</span>`,
    `<span class="chip ${found.length === cited.length && !wrongPicks.length ? "chip-hit" : "chip-miss"}">Texts ${found.length}/${cited.length}${wrongPicks.length ? ` · ${wrongPicks.length} not used by Jalyn` : ""}</span>`,
    found.length
      ? `<span class="chip ${soundCount === found.length ? "chip-hit" : "chip-miss"}">Reasoning ${soundCount}/${found.length}</span>`
      : `<span class="chip chip-miss">Reasoning not scored</span>`
  ].join("");

  /* per-text breakdown, in the pool's display order */
  const rows = shuffleStable(c.texts.map(t => t.v), c.id).map(vid => {
    const t = c.texts.find(x => x.v === vid);
    const v = VERSES[vid];
    const sel = cur.picked.includes(vid);
    const chosen = sel ? t.just[cur.readings[vid]] : null;

    let cls, tag;
    if (t.cited && sel)        { cls = "tx-hit";  tag = "Jalyn used this. You found it."; }
    else if (t.cited && !sel)  { cls = "tx-miss"; tag = "Jalyn used this. You did not select it."; }
    else if (!t.cited && sel)  { cls = "tx-false";tag = "Jalyn did not use this on this case."; }
    else                       { cls = "tx-none"; tag = "Jalyn did not use this. You left it alone."; }

    const yours = chosen ? `
      <div class="tx-yours ${chosen.sound ? "tx-sound" : "tx-unsound"}">
        <span class="tx-label">${chosen.sound ? "Your reading, and Jalyn's" : "Your reading"}</span>
        <p>&ldquo;${esc(chosen.t)}&rdquo;</p>
      </div>` : "";

    const right = (t.cited && chosen && !chosen.sound)
      ? (() => { const s = t.just.find(j => j.sound); return s ? `
      <div class="tx-yours tx-sound">
        <span class="tx-label">The reading Jalyn used</span>
        <p>&ldquo;${esc(s.t)}&rdquo;</p>
      </div>` : ""; })() : "";

    return `<div class="tx ${cls}">
      <div class="tx-top"><strong>${esc(v.ref)}</strong><span class="tx-tag">${tag}</span></div>
      <p class="tx-note">${esc(t.note)}</p>
      ${yours}${right}
    </div>`;
  }).join("");

  $("#rulingBody").innerHTML = `
    <div class="scorechips">${chips}</div>
    <hr class="rule">
    <p class="verdict-words">${esc(c.ruling)}</p>
    <h4>Why</h4>
    <p>${esc(c.reason)}</p>
    <h4>${affabel ? "On the station" : "On the measure"}</h4>
    <p>${esc(c.measureReason)}</p>
    <h4>The texts, one at a time</h4>
    <div class="tx-list">${rows}</div>
    <div class="teachnote">
      <span class="eyebrow">Sit with this</span>
      <p>${esc(c.lesson)}</p>
    </div>`;

  $("#rulingBox").hidden = false;
  $("#caseNav").hidden = false;

  const next = CASES[CASES.indexOf(c) + 1];
  $("#nextCaseBtn").hidden = !next;
  if (next) {
    $("#nextCaseBtn").textContent = `Call ${next.name}`;
    $("#nextCaseBtn").onclick = () => openCase(next.id);
  }

  $("#rulingBox").scrollIntoView({ behavior: "smooth", block: "start" });
}

function initCase() {
  $("#backToDocket").addEventListener("click", () => { renderDocket(); show("docket"); });
  $("#returnBtn").addEventListener("click", () => { renderDocket(); show("docket"); });
  $("#lockTextsBtn").addEventListener("click", lockTexts);
  $("#deliverBtn").addEventListener("click", deliver);
}

/* ---------- the record ---------- */

function renderRecord() {
  const rows = [];
  let v = 0, s = 0, sTotal = 0;
  let tFound = 0, tCited = 0, tWrong = 0, rSound = 0, rScored = 0;
  let harsher = 0, softer = 0;

  CASES.forEach(c => {
    const r = state.results[c.id];
    if (!r) {
      rows.push(`<tr><td>${esc(c.name)}</td><td class="dash">not judged</td>
        <td class="dash">—</td><td class="dash">—</td><td class="dash">—</td><td class="dash">—</td></tr>`);
      return;
    }

    if (r.verdictHit) v++;
    if (r.measureHit !== null) { sTotal++; if (r.measureHit) s++; }
    tFound += r.textsFound; tCited += r.textsCited; tWrong += r.textsWrong;
    rSound += r.readingsSound; rScored += r.readingsScored;

    if (!r.verdictHit) {
      if (r.verdict === "lone" && c.verdict === "affabel") harsher++;
      if (r.verdict === "affabel" && c.verdict === "lone") softer++;
    } else if (r.measureHit === false) {
      const scale = r.verdict === "affabel" ? ["throne", "mountains", "flatlands"] : ["lower", "upper", "blackest"];
      const mine = scale.indexOf(r.measure), his = scale.indexOf(c.measure);
      if (mine > his) harsher++; else if (mine < his) softer++;
    }

    const mark = hit => hit === null
      ? '<span class="dash">n/a</span>'
      : (hit ? '<span class="tick">✓</span>' : '<span class="cross">✗</span>');
    const frac = (a, b, extra) => `<span class="${a === b ? "tick" : "cross"}">${a}/${b}</span>${extra || ""}`;

    rows.push(`<tr>
      <td>${esc(c.name)}</td>
      <td>${r.verdict === "affabel" ? "Affabel" : "Lone"}<br>
          <span style="color:var(--faint);font-size:12px">${esc(
            r.verdict === "affabel" ? STATIONS[r.measure].label : MEASURES[r.measure].label)}</span></td>
      <td>${mark(r.verdictHit)}</td>
      <td>${mark(r.measureHit)}</td>
      <td>${frac(r.textsFound, r.textsCited,
            r.textsWrong ? `<br><span style="color:var(--lone-lit);font-size:11px">+${r.textsWrong} not used</span>` : "")}</td>
      <td>${r.readingsScored ? frac(r.readingsSound, r.readingsScored) : '<span class="dash">—</span>'}</td>
    </tr>`);
  });

  $("#recordJudge").textContent = state.judge || "Unnamed judge";
  $("#recordDate").textContent = new Date().toLocaleDateString(undefined,
    { year: "numeric", month: "long", day: "numeric" });

  $("#tallyVerdict").textContent = `${v}/${CASES.length}`;
  $("#tallyStation").textContent = `${s}/${sTotal}`;
  $("#tallyTexts").textContent = `${tFound}/${tCited}`;
  $("#tallyReason").textContent = rScored ? `${rSound}/${rScored}` : "—";
  $("#tallyHarsh").textContent = harsher;
  $("#tallySoft").textContent = softer;
  $("#tallyWrongTexts").textContent = tWrong
    ? `plus ${tWrong} he did not use`
    : "none cited that he did not use";

  $("#recordRows").innerHTML = rows.join("");

  let read;
  if (doneCount() < CASES.length) {
    read = `You have ruled on ${doneCount()} of the ${CASES.length} cases. Finish the docket before drawing conclusions about your own bench.`;
  } else if (harsher > softer * 2 && harsher >= 3) {
    read = `You ruled harsher than Jalyn ${harsher} times and gentler ${softer}. Your instinct is to convict. Notice that the parable's biggest surprises run the other way: Ruthless, Selfish, and Motivator all received more than they had coming.`;
  } else if (softer > harsher * 2 && softer >= 3) {
    read = `You ruled gentler than Jalyn ${softer} times and harsher ${harsher}. Your instinct is to acquit. Notice who that instinct would have let through: Deceived and Faint Heart both counted on exactly the mercy you extended.`;
  } else if (v <= 3) {
    read = `You matched Jalyn on ${v} of the ${CASES.length} cases. Before deciding you did badly, look at which ones you missed. If they cluster on Ruthless, Patient, Social, Motivator, and Brutal, you were not judging carelessly. You were judging the way Endel judged, by record and by reputation, and that is exactly the instinct this parable was built to expose.`;
  } else if (harsher === 0 && softer === 0) {
    read = `You matched Jalyn on every case, in both direction and degree. Either you know this parable very well or you read the standard rather than the résumé.`;
  } else {
    read = `You ruled harsher than Jalyn ${harsher} times and gentler ${softer} times. That is a fairly even hand. The question worth sitting with is not your accuracy but your reasons.`;
  }

  if (doneCount() === CASES.length && rScored) {
    const pct = rSound / rScored;
    if (pct >= 0.85) read += ` And your reasoning held: ${rSound} of ${rScored} texts were read the way Jalyn read them. You were not guessing.`;
    else if (pct < 0.55) read += ` Worth noting separately: you found the right texts more often than you read them correctly, ${rSound} of ${rScored}. Knowing which verse applies is not the same as knowing what it says.`;
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
