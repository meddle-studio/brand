# Typography

Three families, three jobs. Values are in [`visual-system.json`](visual-system.json) under `font` and `type`, exposed as `--m-type-{role}-size|weight|line-height|tracking`. Load them with [`fonts.css`](fonts.css).

| Family | Job | Rule of thumb |
|---|---|---|
| **Inter** | The status quo, done exceptionally: headlines, statements, body, UI | Almost everything |
| **Libre Baskerville Italic** | The interference: the one word that carries the idea | One per headline |
| **IBM Plex Mono** | The system's voice: labels, meta, navigation | Small and uppercase, always |

## Inter

- **Tracking −0.042em on all Inter text,** headlines and body alike. Two exceptions: the display role uses −0.03em (it runs 50–110px, where −0.042em starts to collide), and long case-study body uses −0.025em. The italic payoff (`em`), the sign-off, and quotes track at **−0.042em** too (`--m-tracking-italic`), so the Baskerville sits as tight as the Inter around it. This is the most important detail after the italic. Without it, Inter reads as default UI; with it, it reads as Meddle.
  - *Why:* the tight tracking makes the type dense, editorial, and deliberate. 42 recurs in the system on purpose (rules sit at 42% opacity too).
- **Weight follows role, not heading level:**

| Role | Weight | Feel | Example |
|---|---|---|---|
| Display / cover / section title | 900 Black (800 for h1) | Shouts | "Business Plan", "Fast. Cheap. *And* Good." |
| Statement / h2 / h3 | 500 Medium | Speaks | "It's time you seized an *unfair advantage*…" |
| Body (web) | 500 Medium | Speaks clearly on screen | 19.2px paragraphs |
| Body (documents) | 400 Regular | Reads | Deck and proposal columns |
| Bordered-list items | 300 Light | Whispers, and lets the arrows lead | "Two brand options" |
| Numbered-row titles | 600 Semibold | Names an offer | "Project-Based", "Brand Sprints" |
| Labels (grey) | 700 Bold | Organizes | Deck column labels: "About", "Structure" |

- **Line height:** display 1.0, h1 1.05, h2 1.15, statement and h3 1.3, body 1.4.
- **`text-wrap: pretty`** on everything; `balance` on short headlines. Bind the last two words of headlines and statements with `&nbsp;` so they never leave a widow.
- Enable `font-feature-settings: 'liga' 1, 'calt' 1` (the production site does).

## The italic: Libre Baskerville

The brand's signature typographic move. Inside a heavy Inter line, **one word or short phrase switches to Libre Baskerville Italic 400**.

- `em` is globally mapped to Libre Baskerville Italic 400. Write `<em>`/`*word*` and it's handled.
- **Italicize the payoff, not the setup.** "Executive *Summary*," "seized an *unfair advantage*," "Fast. Cheap. *And* Good."
- **Once per headline.** In statements and paragraphs, at most one italic phrase per sentence.
- **Same size as the surrounding Inter** by default. At display sizes (80px+) next to weight 900, set the `em` to **87%** so the serif doesn't overpower the sans.
- **Spacing at display size:** a Baskerville italic capital after punctuation can lean into the period ("Cheap.*And*"). Components add `padding-inline-start: .06em` to `em` in display and h1. Keep the normal word space too.
- **Never bold** the italic. Never use Baskerville roman for headlines. Never set a whole headline in Baskerville.
- **Deck section titles** use the pattern `Heavy Inter word` + `Baskerville italic word`, and an ampersand joining two ideas goes in italic too: "Organization *& Management*," "Services *& Offerings*," "Marketing *& Sales Strategy*."
- **Client quotations and pull quotes** are set entirely in Libre Baskerville **Italic** 400, 24–40px, line height 1.4, tracking **−0.042em** (the brand tracking, as on the MFO case study), with an oversized **bold roman** Baskerville opening quotation mark. A quote is the one place a whole passage goes italic. Attribution (cite) is Inter.

## IBM Plex Mono

- **Always uppercase** (via CSS `text-transform`, so type the source in normal case), weight 400–500. Sizes:
  - **Labels:** 11–14.5px (`--m-type-label-size`, `--m-type-caption-size`). Nearly every use.
  - **Page kicker** (`.m-kicker`): body size (~19px) for the one-line label above a display hero ("BRAND SPRINTS" over "Fast. Cheap. *And* Good.").
  - **The end-of-page CTA:** h3–h2 size inside the CTA pill ("BOOK AN INTRO CALL"). A label blown up to headline scale is itself an interference, so it's used once per page, only there. (Production: the Sprints page `#lets-go` band.)
- **Used for:** nav pills, buttons, tooltip labels, footer, form labels, figure captions, service tags on case-study heroes, deck header meta ("FORTUNE FAVORS / THE DARING"), section numbers ("1.0"), list numbers ("01").
- **Tracking:** 0 at 12px+, +0.08em at 11px and below.
- **Never** for headlines, body, or anything longer than one short line (two stacked lines are fine in deck meta).
- **Why:** mono labels are the system's metadata layer. They make every surface feel engineered and documented, which is the discipline half of the trick.

## Scale (web)

| Role | Size (min → max) | Weight | Line height |
|---|---|---|---|
| display | 50 → 110px | 900 | 1.0 |
| h1 | 45 → 80px | 800 | 1.05 |
| statement | 30 → 48px | 500 | 1.3 |
| h2 | 30 → 60px | 500 | 1.15 |
| h3 | 20 → 32px | 500 (300 in lists) | 1.3 |
| body-lg | 21.6 → 32px | 400 | 1.3 |
| body | 19.2px | 500 | 1.4 |
| small | 16px | 500 | 1.4 |
| label (mono) | 12 → 14.5px | 400 | 1.0 |
| caption (mono) | 11px | 400 | 1.3 |

All fluid sizes use `clamp()` in the tokens. Don't invent in-between sizes; pick the nearest role.

## Scale (decks, 1920×1080)

Measured from the Figma master (see `layout.md` → Decks) and implemented in `templates/deck/deck.html`.

| Role | Size | Weight | Notes |
|---|---|---|---|
| Cover title | 232px | 900 + Baskerville italic 400 | Two lines, the second in italic ("Discovery / *& Strategy*"), line height 1.02 |
| Statement-slide title | 158px | 900 + italic | "Project *Goal*" on ink |
| Section title | 96–104px | 900 + italic | May run to a second, all-italic line |
| Big idea | ~172px | 400 | One sentence, on ink, balanced |
| Statement body | 50px | 400 | Line height 1.55, starting at column 2 (x 508) |
| Conclusion statement | 70px | 400 | Line height 1.23, anchored bottom-left, one italic phrase |
| Column / list label | 20–21px | 700 | Graphite |
| Column / list body | 20–21px | 400 | Ink, line height 1.2–1.25 |
| Header meta | 13px mono | 400 | Muted, uppercase, 2 lines |

## Don'ts

- Don't set body copy in mono or Baskerville.
- Don't track out Inter (positive letter-spacing) except in mono captions.
- Don't use more than one italic phrase in a headline, or italicize a filler word ("the", "and") except where it *is* the payoff ("*And* Good").
- Don't use faux-bold or faux-italic. Load the real styles (fonts.css does).
- Don't substitute fonts. If Inter truly isn't available (e.g. a legacy email client), fall back to Helvetica Neue / Arial with the same tracking. Libre Baskerville falls back to Baskerville / Georgia Italic.
