/* Forward-leak scanner.

   A case may refer to any citizen already judged earlier in the docket.
   It may never refer to one still ahead: naming them, or naming the hall
   they came from, tells the student the verdict before they rule on it.

   Run with:  node leakscan.js
*/

const fs = require("fs"), vm = require("vm");
const ctx = { console };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync("assets/data.js", "utf8"), ctx);
vm.runInContext(fs.readFileSync("assets/cases.js", "utf8"), ctx);
vm.runInContext(fs.readFileSync("assets/magisterium.js", "utf8") +
  ";globalThis.__x={CASES,CASE_CCC,VERSES};", ctx);
const { CASES, CASE_CCC } = ctx.__x;

const NAMES = {
  Independent: 1, Ruthless: 2, Reconciled: 2, Deceived: 3, Patient: 4,
  "Faint Heart": 5, Social: 6, Content: 6, Motivator: 7, Humbled: 7,
  "Double Life": 8, Brutal: 9, Evangelist: 9, Selfish: 10,
  Unpretentious: 10, Charity: 11, "Cherished Overcomer": 11
};

/* phrases that give away a verdict without naming anybody */
const HINTS = [
  /other hall/i, /the next case/i, /still ahead/i, /later in the docket/i,
  /cases? \d+ and \d+/i, /Hall of (Life|Justice)/i, /in this hall/i,
  /same hall/i, /watch what happens/i
];

let leaks = 0;

CASES.forEach((c, i) => {
  const pos = i + 1;
  const fields = {
    reason: c.reason,
    measureReason: c.measureReason,
    lesson: c.lesson,
    revealed: (c.revealed || []).join(" ")
  };
  c.texts.forEach(t => { fields["note " + t.v] = t.note; });
  const a = CASE_CCC[c.id];
  if (a) { fields["ccc.note"] = a.note; fields["ccc.tension"] = a.tension || ""; }

  Object.entries(fields).forEach(([field, val]) => {
    if (!val) return;
    Object.entries(NAMES).forEach(([name, at]) => {
      if (at <= pos) return;                    // already judged: fair game
      if (new RegExp("\\b" + name + "\\b").test(val)) {
        console.log(`  ${String(pos).padStart(2)}  ${c.name.padEnd(12)} ${field.padEnd(22)} names "${name}" (case ${at})`);
        leaks++;
      }
    });
    HINTS.forEach(re => {
      if (re.test(val)) {
        console.log(`  ${String(pos).padStart(2)}  ${c.name.padEnd(12)} ${field.padEnd(22)} hint: ${re.source}`);
        leaks++;
      }
    });
  });
});

console.log(leaks ? `\n*** ${leaks} FORWARD LEAKS` : "\n>>> no forward leaks");
console.log("\npools (cited/total):", CASES.map(c =>
  c.texts.filter(t => t.cited).length + "/" + c.texts.length).join("  "));
