# Changelog

What changed in the Meddle brand system, and **why**. Newest first. Each entry says what it affects so someone can check the places it lands.

Format: `## YYYY-MM-DD: title`, then **Changed**, **Why**, **Affects**, **Checked**.

---

## 2026-09-30: v1.6.4 agents.meddle.studio and llms.txt

**Changed:** the published kit is served at two addresses, brand.meddle.studio and agents.meddle.studio. Both are custom domains on the same Worker (`DOMAINS` in `scripts/build-site.mjs`), with no redirect between them. A new root `llms.txt` is the agent entry point: it links the read order and the kit's files by job. The site build fails if any of its links don't resolve.
**Why:** the kit is machine-first, and some audiences are shown it for the agent-first approach rather than for the brand. agents.* names the reader, as the AGENTS.md convention does. agentic.* was ruled out because it names a method, not a reader, and it's the address Little Plains uses for its own pitch. Serving both addresses, not redirecting, keeps whichever one was shared in the address bar. The kit is noindex, so there's no ranking to split and no canonical to pick. llms.txt backs the agents.* claim when someone checks it.
**Affects:** publishing (`wrangler.jsonc`, the published README), the deploy output, CLAUDE.md, README. Adding or moving a kit file that llms.txt links means updating llms.txt.
**Checked:** `npm run site` builds with no dead llms.txt links, and the generated wrangler.jsonc lists both custom domains. `npm run verify` passes.

---

## 2026-09-30: v1.6.3 one kit version

**Changed:** the newest CHANGELOG heading is now the kit's only version. `scripts/build-version.mjs`, the first step of `npm run build`, copies it into package.json, index.html's footer, and `visual-system.json` `meta.version` (which the tokens.css header and the Figma sync quote). `npm run verify` fails if they drift. To release, add the changelog entry and run `npm run build`.
**Why:** four version numbers had drifted apart: the cover showed v1.6.2, the footer and package.json v1.4.0, and visual-system.json v1.2.0.
**Affects:** version labels only. The visual-system.json version now tracks the kit instead of the token data alone.
**Checked:** build sets v1.6.3 in all three files, and verify passes.

---

## 2026-09-30: v1.6.2 MFO was a Brand Sprint; Sprint schedule recorded

**Changed:** facts.md records that MFO was a Brand Sprint (its visuals may illustrate Sprints, unattributed), and the 10-day schedule from the site's HowTo schema. Open question F8 is resolved, and F9 is added (one step of the schedule needs correcting).
**Why:** owner, while redesigning the Sprints page on meddle.studio (branch `feature/sprints-page-v2`).
**Affects:** Sprint pages, decks, and proposals.
**Checked:** `npm run verify`.

---

## 2026-09-30: v1.6.1 publishable build (brand.meddle.studio)

**Changed:** `npm run site` builds `dist/`, the copy of the kit that gets published. It leaves out dev and internal files (`scripts/`, `client-kit/`, `evals/runs/`, CLAUDE.md, figma.json, package.json). It strips private content and rebuilds kit-data.js from what's published. It adds Cloudflare `_headers` (noindex; markdown served as text) and fails if anything private survives. Private content now has one definition, `scripts/lib/private.mjs`, shared with build-docs. It covers the facts.md "Internal only" section, plus any line ending in `<!-- private -->` or a `<!-- private:start/end -->` block. Three lines are marked: the internal pricing notes in this changelog, proposal.md, and open-questions F3.
**Why:** deploying the raw repo would have leaked internal pricing. A separate public repo, rather than opening this one, keeps private content out of public git history. Over http(s), index.html fetches the markdown files live, and only kit-data.js was stripped.
`npm run deploy` pushes `dist/` to the public repo `meddle-studio/brand`, which has its own history and a noreply author. This repo stays private. `dist/` is that repo's checkout, and the build keeps its `.git`. In it, `site/` is the website and the root holds only a README (a generated copy, all rights reserved), `wrangler.jsonc`, and `.gitignore`. A Cloudflare Worker (static assets) serves `site/`, so `.git` and tooling never reach the upload.
**Affects:** deployment only. The kit's content is unchanged, apart from the three marked lines being dropped from kit-data.js.
**Checked:** `npm run site` passes the leak check. Served locally, `/brand/facts.md` has no internal content, and `/scripts/`, `/CLAUDE.md`, and `/client-kit/` return 404.

---

## 2026-09-30: v1.6.0 blank client kit template

**Changed:** Added `client-kit/`, a brand-neutral template for the agentic brand guide now included in every Brand Sprint:
- **The same structure as this kit:** README routing, AGENTS.md, magic trick, facts, open questions, verbal and visual files, visual-system.json → tokens.css, rubric and evals, and generic `/brand-make` and `/brand-review` skills.
- **Fill-in guidance:** each file says why it exists and carries `TODO(phase)` prompts; `npm run status` counts them by phase.
- **SETUP.md (Meddle-internal):** the fill order by sprint phase, rules of thumb, the eval loop, and a handoff checklist.
- **Scripts, generalized:** the token build takes a configurable CSS prefix, and mechanics start empty.

`npm run new-client -- "Client" <folder>` creates one: it fills the client name, slug, prefix, and date, builds the tokens, and refuses to overwrite an existing folder. `client-kit/` is excluded from kit-data.js, and AGENTS.md tells agents to ignore it.
**Why:** the owner's request, ahead of the first client run. It also follows the article's advice to set the kit up at the start of an engagement, not in the last week.
**Affects:** new engagements only. Meddle's own kit is unchanged.
**Checked:** created a test kit ("Harbor Credit Union"): no placeholders left, `--hcu-*` tokens built, `verify` passes, `status` lists TODOs by phase, and the linter flags starter Avoid words.

---

## 2026-09-30: v1.5.0 index.html opens like a document; tracking inheritance fix

**Changed:**
- **New cover for index.html.** The kit opens on a paper document cover in the deck-cover language, with no video:
  - the corner wordmark at full contrast;
  - a mono meta row (Meddle · Brand system / version and date, read live from this changelog / Fortune favors the daring / 00);
  - a huge "Brand *System*" title between rules;
  - a ruled four-column index (Magic trick · Verbal · Visual · Build).

  The pill nav moves to a plain bar that pins once you scroll past the cover. The meddle.studio sticky-wordmark hero (`.m-hero`) now appears as a labelled, scroll-inside demo in Components.
- **Tracking inheritance fix.** `em` letter-spacing set only on `<body>` computes to px there (−0.67px) and inherits as that fixed px, so large text without its own tracking (for example the voice-principle titles) looked loose. `:where(.m-root, .m-root *) { letter-spacing: var(--m-tracking-brand) }` recalculates it per element at zero specificity. Mono labels keep an explicit 0. The same fix is scoped to `.slide` in deck.html.

**Why:** owner feedback. The video hero made the kit look like the meddle.studio homepage at a glance, and the voice-principle titles were visibly looser than the headings.
**Affects:** index.html; any page on components.css (headings without their own tracking tighten to −0.042em); decks.
**Checked:** cover at 1440 and 500px; voice-principle titles measured at −2.52px on 60px (−0.042em); the hero demo sticks and stops above its nav.

---

## 2026-09-30: v1.4.2 tighter italic payoff tracking

**Changed:** The Libre Baskerville Italic payoff now tracks at −0.042em (it was −0.02em, or −0.01em at display size), via a new token, `font.tracking.italic` → `--m-tracking-italic`. The same token covers the sign-off and quotes. It's applied in components.css (`em`, `.m-signoff`), the social tiles, deck.html, the typography docs, the Figma generator, and the five Figma "Italic Payoff" text styles (−4.2%).
**Why:** owner feedback: tighten the italic so it complements the Inter type.
**Affects:** every italic payoff on web, tiles, decks, and Figma.
**Checked:** tokens rebuilt; Figma styles read back at −4.2%; tile preview screenshot.

---

## 2026-09-30: v1.4.1 difference-blend corner wordmark; tile descenders; showcase gutter

**Changed:** The web corner wordmark (`.m-topbar`) is now paper with `mix-blend-mode: difference`, and `.m-wordmark svg` gets `fill: currentColor`. It was rendering black on ink on the with/without page. brandmark.md records the rule.
**Why:** owner feedback: "use mix blend mode difference on the logo so it's always the opposite. Works pretty well on the monochrome site."
Also: social tiles no longer clip descenders. Italic Baskerville g/y/f hung below the line box, and `.t-fit` clips overflow, so the fitted text now carries descender padding (0.22em, or 0.28em for display) that the auto-fit measures and exports keep. The showcase hero's padding shorthand was removing the container gutter, so it now uses top/bottom padding only.
**Affects:** showcase/with-without, any page using `.m-topbar` or `.m-wordmark`, and tile exports.
**Checked:** headless Chrome screenshots of the showcase header and the tile preview ("advantage" descender intact).

---

## 2026-09-30: v1.4.0 Figma variables, the homepage hero, three GUIs

**Changed:**
- **Figma variables sync.** `scripts/figma-variables.mjs` turns `visual-system.json` + `motion.json` into idempotent Figma Plugin code (config: `brand/visual/figma.json`). It was run against the "Meddle Brand" file and created:
  - `Meddle / Primitives` (56 variables: color, alpha, space, radius, border, font family and weight, layout, motion timing and easing)
  - `Meddle / Theme` (11 semantic colors × Dark/Light/Paper/Sheet, aliased to primitives)
  - `Meddle / Type` (11 sizes × Desktop/Mobile, from each clamp's min and max)
  - 16 `Meddle/*` text styles (sizes bound to the type variables, plus "Italic Payoff" companions)
  - a "Tokens (synced)" board. Everything carries WEB code syntax (`var(--m-…)`).

  The pre-kit M-Black, M-White, and Purple now alias color/ink, paper, and signal, with no visual change to their 220 bindings. M-Grey `#909090` isn't a kit value and was left alone (open question B9).
- **Quotes are italic** (owner correction, per the MFO case study): client quotes and pull quotes are Libre Baskerville Italic at −0.042em, with a bold roman mark and an Inter cite. Updated in the tokens, typography.md, AGENTS.md, components, the index, and the Figma "Meddle/Quote" style.
- **Homepage hero** (`.m-hero`): the meddle.studio behavior, where the wordmark starts centered, sticks, and stops above the nav, and the nav then pins and auto-hides. It's a component in components.css/js (with `--m-nav-h`, `data-autohide-after`, and `data-scrollspy`), and index.html uses it. It was measured against the live site (wordmark at 161→501 and nav at 650 on load, matching).
- **Social tile generator** (`tools/social/`): six layouts × four formats, locked tokens and wordmark, and a live kit linter. Export is blocked while a check fails (off-brand words, more than one italic payoff, missing image, overflow), and it warns past 15 words. PNG export has embedded fonts. The shared rule parser moved to `scripts/lib/lexicon.mjs`, and `build-lexicon.mjs` generates `brand/verbal/lexicon.js` for browsers.
- **With/without showcase** (`showcase/with-without/`): the same prompts run with and without the kit (unedited outputs, archived in `evals/runs/2026-09-30-without-kit/`). Each difference is traced to the file and rule that decided it.
- **index.html renders the real files.** Voice principles, say/not, color swatches, the routing table, and the theme contrast ratios now come from the source files and tokens, not hand-typed copies. A source reader opens any kit file (with deep links `#doc=…`). Over http it fetches live; from disk it uses the generated `kit-data.js` (`scripts/build-docs.mjs`, which strips facts.md's internal section).
- `npm run build` / `npm run verify` now cover all generated files. New kit rule: one idea per social tile, 15 words or fewer.

**Why:** owner request (Figma sync, the hero, the three GUIs recommended in the roadmap discussion). Rendering the index from source removes the drift that let a stale sheet hex survive in AGENTS.md and the index.
**Affects:** Figma (new collections and styles; re-sync after token changes), anything with a client quote, index.html (now needs `npm run build` after doc edits when opened from disk).
**Checked:**
- Figma sync ran with 0 errors, and the board screenshot was verified.
- The hero was measured against meddle.studio.
- All six tile layouts exported to PNG and were inspected; the lint, double-italic, and missing-image blocks were tested.
- The showcase was toggled through all four states.
- In the reader, sections render from files, relative links and hash navigation work, and the internal facts are absent.
- `npm run verify` passes.

---

## 2026-09-30: v1.3.0 owner answers to open questions

**Changed** (owner decisions, resolving open questions F1, F2, F4–F7, B2, B3):
- **Experience:** in the creative industry since 2011. Prefer "since 2011" in evergreen copy, and calculate years from it. "Over a decade" stays accurate.
- **Title:** Founder & Creative Director. "Chief Creative Officer" is retired.
- **Location:** HQ and operations are in **Orlando, FL**. St. Petersburg is the commercial registered agent address, used in legal documents and schema only. Added a location line to messaging.md, and flagged the site schema's service area as drift.
- **Phone:** never on web or social. Print pieces are the owner's call.
- **Brand Sprint deliverables:** a logo suite, typography, color, key brand mockups, a homepage design, full guidelines (Figma and PDF), and an agentic brand guide (new today). Recorded in facts.md, with an approved line in messaging.md. One open question remains: which past projects were Sprints (F8).
- **Illustration:** the curled **palm** is Meddle Orlando's HQ mark and the only official illustration. Added `brand/assets/illustration/meddle-palm.svg` (a vector converted from `Library/Logos/meddle-tat.pdf`, recolorable) with usage rules in brandmark.md and graphic-elements.md, and a tile on index.html. The hands line art **isn't part of the system**, so it's removed from the kit.
- **Assets:** added `meddle-avatar-square.png` (social avatar, from `Library/Logos/Meddle-Square.png`).

**Affects:** bios and boilerplates (location and years), proposals (pricing floor), Sprint pages and decks (deliverables), merch (palm rules), and the meddle.studio schema (Orlando).
**Checked:** the linter reports 0 errors on kit copy; tokens are up to date; the palm SVG renders as clean vector in ink and paper.

---

## 2026-09-30: v1.2.0 adopt the Figma deck master; one wordmark proportion; fixes from eval #2

**Changed: from the owner's Figma presentation template** ("Discovery & Strategy (TEMPLATE)", figma.com/design/F5oGU0iiKPWWgMGkZDaA21), which supersedes the 2025 business-plan deck as the deck source of truth:
- **One wordmark proportion (4.56:1).** `meddle-wordmark.svg` is now the exact vector exported from the Figma master (the same drawing as the site header and hero). The vertically squashed 5.85:1 version used in the business plan, and the ×0.45 "squish", are **retired everywhere** (`brand/assets/logo/retired/`). All stretch and squash allowances are removed from `brandmark.md`, `motion.md`, and index.html. *Why:* owner decision. The owner moved away from the squashed variant everywhere; the kit had wrongly treated it as the default.
- **Ghost wordmark on deck interiors:** concrete with multiply on light slides, graphite at 30% on ink. New theme tokens `--m-wordmark-ghost` / `--m-wordmark-ghost-blend`, plus `.m-wordmark--ghost`.
- **New `paper` theme** (decks: cover and most slides) and **sheet = `#fcfbfa`** (the Figma warm near-white, replacing the business plan's `#fbfcfc`). Deck rules and labels move from ash to graphite.
- **Deck template rebuilt** (`templates/deck/deck.html`) from Figma measurements: a paper cover with rules, then statement, columns, list + image, big idea, conclusion, and a closing slide (the closing is derived). The recipe, `layout.md` (Decks), and the typography deck scale are rewritten. References are exported to `brand/assets/reference/deck-template-*.jpg`, and the business-plan pages moved to `archive-business-plan-2025/`.

**Changed: from fresh-agent eval #2** (`evals/runs/2026-09-30-fresh-agent-2/`: both outputs passed every blocking rubric line with 0 lint errors, and progressive enhancement worked):
- Fixed `.m-grid` (`.m-span-N` without `.m-start-N` spanned 12 columns) and made `.m-section__head` work at any depth.
- **Contrast:** new `--m-muted-small` (ink @ 65% on light, 4.7–5.4:1) for small mono labels, captions, list numbers, and field labels. Graphite failed at those sizes.
- New components: `.m-topbar` (offer-page header), `.m-cta-band`, and `.m-aside`. index.html uses `.m-cta-band`.
- **Linter:** `term*` stems (`disrupt*`, `leverag*`, `synerg*`, `game-chang*`), reversed LinkedIn clichés, warnings for emoji, hashtag walls, and engagement bait, and a data-driven allow list in concepts.md ("premium branding", "early-stage startups", …).
- **Docs:** the numbers rule now matches the approved lines (spell out in sentences, numerals in tables and comparisons); the CTA *band* appears once per page, while the link text may repeat; LinkedIn is plain text (no italics, no Unicode fakes); "(plan)" lines are approved for any channel; the statement snippet inherits the dark opening theme; AGENTS.md no longer implies every headline needs an italic; routing rows are complete, and "Any copy" became "Any other copy".

**Affects:** every deck (use the Figma master or the new deck.html), any page that used the tall or squish wordmark files (they're gone; use `meddle-wordmark.svg`), components using `.m-theme-sheet` rules (now graphite), and copy linting (new errors on stems and clichés).
**Checked:** tokens rebuild with the contrast report (paper and muted-small pass); the deck prints 7 pages at 1920×1080 and matches the Figma renders (header slots, ghost wordmark, rules, type scale); index.html verified in Chrome (hero with the exact wordmark, brandmark tiles on paper and ghost, no overflow); the linter is 0 errors on all kit copy, templates, and index.html.

---

## 2026-09-30: v1.1.0 fixes from fresh-agent eval #1

**Changed:** Closed the gaps found when a context-free agent built eval E2 (Brand Sprints landing section) and E6 (review and rewrite) from the kit alone. The run is in `evals/runs/2026-09-30-fresh-agent/`. It guessed 33 decisions, and the ones that mattered are fixed here.

- **Defined "surface"** (`magic_trick.md`). A surface is one view seen at once; a web page is a sequence of them with one showpiece. One move can do two jobs and counts once, and the signature (sign-off, corner wordmark, mono meta) doesn't count. *Why:* `magic_trick.md`, `landing-page.md`, and `voice-and-tone.md` gave three different interference budgets.
- **Reconciled live copy with the italic rules** (`voice-and-tone.md`, `messaging.md`). The homepage's "*business strategy* / *exceptional design*" is now a sanctioned *matched pair* (one move). The Sprints subhead is now *the aside*, the one approved fully italic line. *Why:* approved lines were breaking the kit's own rules, and an agent correctly dropped them.
- **Mechanics:** when to spell out numbers vs. use numerals, `$30K` everywhere except contracts, SOWs, and legal, when copy should state a price, and the two approved forms of the sign-off.
- **Vocabulary and linter:** added `contact us`, `custom quote`, `competitive pricing`, and `tailored to your needs` to **Avoid** (errors). Added a new **Watch** table (warnings) for context-dependent words: startups (fine for Sprint fit), branding, solutions, elevate, get in touch. The linter now skips `<style>`, `<script>`, HTML comments, and fenced code blocks, and supports `check-copy: ignore-start` / `ignore-end`. *Why:* "Contact us for a custom quote." used to exit 0.
- **Facts:** the intro-call link (`/contact/`), what a Brand Sprint includes as published, and a rule not to label case studies as Sprints. New open question F7 covers the Sprint deliverables list.
- **Code:**
  - `components.css` now has a scoped reset (border-box, body margin), a `.m-grid` 12-column grid, `.m-link--lead` (arrow before), `.m-signoff`, and `.m-reveal-list`. The nav keeps one row and scrolls on small screens.
  - Reveals are progressive enhancement, so content is visible without JS.
  - Buttons now use inherited custom properties, fixing invisible buttons on dark panels nested in light pages.
  - `.m-row__desc` moves to `fg-secondary`, since small graphite on concrete failed contrast.
  - Fixed values became tokens (a fluid `--m-type-label-size`, the muted legal line, opacity for disabled states).
  - New `components/components.js`: theme crossfade, reveals, tooltip, nav auto-hide. `index.html` now uses it.
- **Docs:**
  - Mono sizes now cover the page kicker and the one CTA band, which production already uses.
  - Arrows go before items in link lists and after inline CTAs.
  - Nav, section-head, hero-height, and page-title rules, plus the edge vs. container offset, are now explicit.
  - Typography now documents the numbered-row 600 weight and the display tracking.
- **Routing:** the README asks readers to pick *one* row, and adds rows for web pages and for LinkedIn/email/proposals. `landing-page.md` is now reachable from the README.

**Affects:** anything built with components.css (re-check buttons and reveals), copy linting (new errors may appear on old drafts), and meddle.studio (the Sprints meta description "agency guesswork" still flags).
**Checked:** tokens rebuild and `--check` pass; the linter catches the E6 draft (6 errors) and passes the kit's own copy with 0 errors; index.html verified in Chrome (theme crossfade dark → light → dark, reveals, lead arrows, sign-off, nested-theme buttons, no overflow, the list-arrow CORS error gone); the deck still prints to 6 pages at 1920×1080.

---

## 2026-09-30: v1.0.0 initial agentic brand system

**Changed:** Created the kit from three sources: the meddle.studio production code (`~/Sites/meddle`, 2026), the Meddle business plan deck (Sept 2025), and the Creative folder (logo variants, merch, and business-card concepts). The structure follows Little Plains' Agentic Brand Systems model (agentic.littleplains.com): verbal guidance, a visual system with JSON → CSS tokens, working components, a README with routing, and a decision log.

**Decisions made by the owner (Matt Bacon) during setup:**
- **Scope:** this is Meddle's own brand system. The structure may later become a client offering, but this repo is Meddle's.
- **Positioning:** lead with *industry challengers* in any category, with financial services and B2B SaaS as proven depth rather than a restriction. *Why:* the published case studies (MFO nonprofit accounting, Armor Bands DTC healthcare) are outside the business plan's two verticals, and the site copy is category-agnostic.
- **Color:** monochrome, with purple `#af69f4` as a signal only (selection and focus). Green `#00ff6a` and blue `#4160ff` are retired. *Why:* the brand as actually shipped (deck, cards, site, merch) is monochrome, the accents were leftover code, and a signal only works if it's rare.
- **Facts:** when sources conflict, the live website wins. It's the newest source. Conflicts are listed in `brand/open-questions.md`.

**Decisions made by the kit (derived from evidence, open to revision):**
- **The magic trick,** "the status quo, interfered with; one interference per surface." *Evidence:* every deck section title and site headline pairs heavy Inter with exactly one Libre Baskerville italic word, and the wordmark is a heavy grotesk with irregular, "meddled" curves.
- **Named the neutrals** ink / paper / concrete / sheet / graphite / ash. Added `sheet #fbfcfc` and `ash #8c8d8d`, which were sampled from the deck and are used on document surfaces and dark-surface muted text. *Why:* the deck and the site used different whites and greys, so each one now has a named job instead of being an unexplained inconsistency.
- **Focus ring:** signal on dark, ink on light. *Why:* purple on concrete measures 2.42:1, below the 3:1 non-text minimum.
- **Weight follows role** (900 display, 500 statement and body, 300 list items, 700 grey labels). *Evidence:* production CSS.
- **Radius:** pill for actions, square for content (chips stay square because they're form inputs). *Evidence:* production CSS.
- **Mechanics standardized:** `$30K` (capital K), `$90K–$250K` (en dash, no spaces), en dash for number ranges. *Why:* the site mixed `$90k – $250k`, `$80k - $500k+`, and `$30K`.
- **Wordmark placement:** corner or edge-to-edge only. Vertical-only distortion using the provided tall and squish files.

**Affects:** everything (initial release).
**Checked:** tokens build and `--check` pass; contrast report generated; the copy linter runs clean on the kit's own voice and messaging files; the deck template renders and prints to 1920×1080 PDF in Chrome; index.html renders in Chrome.
