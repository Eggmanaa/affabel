# The Judgment Seat of Affabel

An experiential classroom activity for Theology 11 at Bishop García Diego High School.

Students take the throne of King Jalyn and rule on eleven citizens of Endel from the
parable of the Kingdom of Affabel (John Bevere, *Driven by Eternity*, chapters 2, 3 and 8).

## How it works

Each case runs through six phases:

1. **The life review** — every deed, word, and motive, played before the assembly
2. **The defendant speaks** — their actual words from the parable
3. **The verdict** — Affabel or the forsaken land of Lone
4. **The station or the measure** — where in Affabel, or where in Lone
5. **The texts** — select every Scripture the ruling rests on, from a pool of five
6. **The reading** — for each text selected, choose how it justifies the ruling

Then Jalyn's actual ruling is revealed, text by text: which ones he used, which ones
he did not, and whether the student read them the way he did.

### On the text pools

Every text in every pool is genuinely in play. There are no filler options. Each of the
eleven pools holds five texts:

- **Three or four that Jalyn actually cited** in that judgment, taken from the parable
- **One that he did not** — always the specific verse a student reaches for when they get
  that case wrong

For example, Selfish's pool carries Matthew 7:21-23 ("I never knew you"), which is the text
students use to send him to Lone. Jalyn gave that text to Deceived and not to him. Motivator's
pool carries the millstone of Matthew 18:6, which Jalyn read over Double Life instead.

Each text then offers three readings, one of which is the reading Jalyn used. The wrong
readings are not nonsense; they are positions people actually hold. Ephesians 2:8-9 appears
in three different pools and is correct in two of them, because it is the verse Deceived
used to argue he should be saved.

## The docket

The order is deliberately shuffled so students cannot pattern-match. Lookalike pairs
are separated so the second one lands after they have already committed:

| # | Citizen | Outcome |
|---|---------|---------|
| 1 | Independent | Lone, lower level |
| 2 | Ruthless → Reconciled | Affabel |
| 3 | Deceived | Lone, upper level |
| 4 | Patient | Affabel, a throne |
| 5 | Faint Heart | Lone, upper level |
| 6 | Social → Content | Affabel, the flatlands |
| 7 | Motivator → Humbled | Affabel, the flatlands |
| 8 | Double Life | Lone, the dungeon beneath |
| 9 | Brutal → Evangelist | Affabel |
| 10 | Selfish → Unpretentious | Affabel, the flatlands |
| 11 | Charity → Cherished Overcomer | Affabel, a throne |

Seven enter Affabel and four go to Lone, which breaks the assumption students form
after the first three cases.

The deliberate contrasts:

- **Charity vs. Social** — two generous restaurant owners, one a governor and one a plumber
- **Motivator vs. Double Life** — two teachers who damaged students, one saved and one in the deepest darkness
- **Patient vs. Selfish** — the invisible secretary and the popular mayor
- **Reconciled vs. Faint Heart** — one week of faith against a lifetime of profession
- **Evangelist vs. Deceived** — the abrasive convert and the charming believer

## Classroom notes

- Works on any device. Progress saves in the browser, so students can stop and resume.
- Budget 50 to 70 minutes for all eleven. Cases 1 through 6 are a complete arc if you only have one period.
- The verdict record at the end prints or saves as a PDF for submission.
- The record also reports how often a student ruled **harsher** or **gentler** than Jalyn,
  which is usually the most productive thing to discuss.

## Scripture

All quotations are the New American Bible, Revised Edition (NABRE), retrieved from the
USCCB. © 2010, 1991, 1986, 1970 Confraternity of Christian Doctrine, Washington, D.C.
Used for classroom instruction.

## Artwork

Public domain paintings served from Wikimedia Commons, credited on each case.
John Martin, Rembrandt, Caravaggio, Vermeer, Bruegel, Holbein, Frans Hals, Matsys,
Rossetti, Bouguereau, and Gustave Doré.

## Editing

- `assets/data.js` — the 48 NABRE texts, the artwork, and the station and measure definitions
- `assets/cases.js` — the eleven cases: evidence, pleas, rulings, text pools, and every reading
- `assets/app.js` — application logic
- `assets/styles.css` — styling
- `index.html` — page structure and the briefing screen

No build step. Edit and push; Cloudflare Pages redeploys automatically.
