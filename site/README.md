# Meddle Brand System

The agentic brand system for **Meddle**, a brand and design studio for industry challengers.

It's one source of truth that designers, collaborators, and AI agents all build from: the positioning and voice, the visual rules and assets, and working code. Every rule says **what** to do, **why** it exists, and **where** it applies, so the next person (or agent) can make a good call on a page nobody has designed yet.

Open [`index.html`](index.html) in a browser to explore it visually.

---

## Where to start

**Read [`brand/magic_trick.md`](brand/magic_trick.md) first.** It's the one idea everything else applies: *Meddle is the status quo, interfered with*, about 90% discipline and 10% meddling, one interference per surface.

Then pick the **one row** that best matches your job and read its files, in order. Each row is complete for that job; add a second row only when the job really spans two (for example, a deck *and* its copy).

| If you're making… | Read, in order |
|---|---|
| **Any other copy** (bios, captions, UI text, anything not listed below) | `brand/verbal/voice-and-tone.md` → `brand/verbal/concepts.md` → `brand/verbal/messaging.md` → `brand/facts.md` |
| **Something that explains who Meddle is or why hire us** | `brand/verbal/positioning.md` → `brand/verbal/messaging.md` → `brand/facts.md` |
| **A web page or landing section** | `templates/landing-page.md` → `components/README.md` (+ the CSS/JS it names) → `brand/visual/layout.md` → `brand/visual/brandmark.md` → `brand/visual/motion.md` → `brand/verbal/messaging.md` → `brand/facts.md` |
| **A layout** (slide, social tile, poster) | `brand/visual/layout.md` → `brand/visual/typography.md` → `brand/visual/color.md` → `components/README.md` |
| **A deck, proposal, or one-pager** | `templates/deck/README.md` (Figma master + HTML) → `brand/visual/layout.md` (Decks) → `brand/visual/brandmark.md` → `templates/proposal.md` |
| **Anything with the logo in it** | `brand/visual/brandmark.md` |
| **Anything with imagery, 3D, or video** | `brand/visual/art-direction.md` → `brand/visual/motion.md` |
| **Web UI or front-end code** | `brand/visual/tokens.css` + `components/components.css` → `components/README.md` → `brand/visual/motion.md` → `brand/visual/effects.md` |
| **A case study** | `templates/case-study.md` → `brand/verbal/voice-and-tone.md` → `brand/visual/art-direction.md` |
| **A social tile or carousel** | `tools/social/` (open `index.html` in it) → `templates/linkedin-post.md` → `brand/verbal/messaging.md` |
| **A LinkedIn post, email, or proposal** | the matching recipe in `templates/` → `brand/verbal/voice-and-tone.md` → `brand/verbal/concepts.md` → `brand/facts.md` |
| **A review of someone else's work** | `evals/rubric.md` |

Numbers and details that change (prices, address, years) live **only** in [`brand/facts.md`](brand/facts.md). Unresolved decisions are in [`brand/open-questions.md`](brand/open-questions.md).

---

## What's inside

```
brand/
  magic_trick.md          ← read first: the one idea
  how-to-prompt.md        ← how to brief an agent (or a person) with this kit
  facts.md                ← canonical numbers, contacts, offers
  open-questions.md       ← conflicts and undecided items, awaiting the owner
  verbal/
    positioning.md        ← who we're for, what we promise, why us
    voice-and-tone.md     ← how Meddle sounds, by context
    concepts.md           ← words we own / avoid (drives the copy linter)
    messaging.md          ← approved lines, boilerplates, CTAs
  visual/
    visual-system.json    ← SOURCE of every visual value
    tokens.css            ← GENERATED from the JSON (don't edit)
    motion.json           ← motion values
    fonts.css             ← Inter, IBM Plex Mono, Libre Baskerville
    color.md  typography.md  layout.md  brandmark.md
    graphic-elements.md  art-direction.md  effects.md  motion.md
  assets/
    logo/                 ← the wordmark (one proportion, 4.56:1) + small version + app icons; retired/ = don't use
    icons/                ← arrows
    reference/            ← approved imagery, Figma deck-template renders, video stills
    illustration/         ← the twisted palm (Orlando HQ), the only official illustration
components/
  components.css          ← working HTML/CSS components (.m-*)
  components.js           ← theme crossfade, reveals, tooltip, nav autohide
  README.md               ← inventory, snippets
templates/
  deck/deck.html          ← 1920×1080 deck template (prints to PDF)
  *.md                    ← recipes: case study, proposal, LinkedIn, email, landing page
scripts/
  build-tokens.mjs        ← visual-system.json → tokens.css (+ contrast report)
  check-copy.mjs          ← lints copy against concepts.md
  build-lexicon.mjs       ← concepts.md → brand/verbal/lexicon.js (copy rules for browser tools)
  build-docs.mjs          ← markdown → kit-data.js (strips facts.md's internal section)
  new-client-kit.mjs      ← creates a client kit from client-kit/: npm run new-client -- "Client" <folder>
  figma-variables.mjs     ← visual-system.json → Figma variables + text styles (idempotent)
  lib/lexicon.mjs         ← the one parser for copy rules
evals/                    ← fresh-agent QA prompts and review rubric
.claude/skills/           ← /meddle-make and /meddle-review for Claude Code
index.html                ← the browsable brand system (renders the real source files, with a reader)
llms.txt                  ← the agent entry point on the published site (links must resolve, or the site build fails)
client-kit/               ← BLANK template for a client's agentic brand guide (not Meddle's brand; see below)
tools/social/             ← social tile generator: on-brand PNGs for LinkedIn/Instagram, kit-checked
showcase/with-without/    ← the same prompts with and without the kit (sales page)
kit-data.js               ← GENERATED docs bundle for index.html offline (npm run build)
AGENTS.md  CLAUDE.md      ← agent entry points
CHANGELOG.md              ← what changed, and why
```

---

## Commands

No install needed (Node 18+).

```bash
npm run build                            # regenerate everything derived: version (from CHANGELOG), tokens.css, lexicon.js, kit-data.js
npm run verify                           # fail if any generated file is stale (run before committing)
npm run check -- draft.md                # lint copy against concepts.md (also accepts stdin and .html)
npm run figma                            # print the Figma sync code (see CLAUDE.md)
npm run site                             # build dist/ for brand.* and agents.meddle.studio (strips private content, fails on leaks)
npm run deploy                           # build, push dist/ to the public repo meddle-studio/brand, and deploy it live (-- --force to redeploy)
```

Run `npm run build` after editing any markdown in the kit too: `index.html` renders the real files, and opened from disk it reads the bundled `kit-data.js`.

---

## Changing the system

The system only stays true if the reasons travel with the values.

1. **Change the source, not the output.** Colors, type, and spacing go in `visual-system.json` (then rebuild). Words go in `concepts.md` or `messaging.md`. Facts go in `facts.md`.
2. **Record why.** Add a dated entry to `CHANGELOG.md`: what changed, why, and what it affects (the site, decks, templates).
3. **Check the places it lands.** Some things sync automatically (tokens). Others need a person to look (voice, art direction, the live site). Note in the changelog what you checked.
4. **Test with a fresh agent.** When you add or change a rule, run one of the prompts in `evals/` with an agent that has *only* this repo, see where it guesses, and fill the gap.

The owner (Matt Bacon) approves changes to positioning, the brandmark, and color.

---

## Starting a client kit (Brand Sprint deliverable)

`client-kit/` is a blank, brand-neutral version of this system: the same structure, scripts, eval loop, and routing, with `TODO(phase)` prompts where the decisions go. It isn't part of Meddle's brand, so agents working on Meddle should ignore it.

```bash
npm run new-client -- "Harbor Credit Union" "../Clients/harbor-brand"   # fills names, sets the token prefix (--hcu-*)
cd "../Clients/harbor-brand" && npm run status                           # what's left, by phase
```

Fill it as decisions land (the order is in its `SETUP.md`), run its eval loop before handoff, then delete `SETUP.md`.

## Using the kit from other projects

- **Claude Code:** this repo ships `/meddle-make` and `/meddle-review` skills. To use them in another repo (e.g. `~/Sites/meddle`), symlink them: `ln -s "$PWD/.claude/skills/meddle-make" ~/.claude/skills/`. Same for `meddle-review`.
- **Cursor / Codex / other agents:** point them at `AGENTS.md`.
- **Chat assistants (Claude, ChatGPT):** upload `brand/magic_trick.md`, the relevant files from the routing table, and `brand/facts.md`, then brief them using `brand/how-to-prompt.md`.
- **meddle.studio:** the site's SCSS predates this kit. Where they disagree, the kit states the intended rule; see `components/README.md`.
