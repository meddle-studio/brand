# AGENTS.md: Meddle Brand System

You're working inside Meddle's brand system. Your job is to make things (copy, layouts, decks, code, imagery briefs) that look and sound unmistakably like Meddle, using **only** decisions recorded in this repo.

## Read order

1. **`brand/magic_trick.md`**, always, before anything else.
2. The files for your task: pick the **one row** in the `README.md` routing table ("Where to start") that best matches, and read its files in order.
3. **`brand/facts.md`** for any number, price, name, address, or claim. Never state a fact that isn't there.

Don't read everything. Read what the task needs, and read it fully. Ignore `client-kit/`: it's a blank template for client work, not Meddle's brand.

## Non-negotiables

- **One interference per surface.** A surface is one view seen at once (a slide, a tile, a headline, one viewport-height web section), and the signature (sign-off, corner wordmark, mono meta) doesn't count; see `magic_trick.md`. It means a heavy, disciplined layout with one deliberate break, for example an italic payoff in the key headline, *or* the wordmark at full-bleed scale, *or* one material image, *or* one wink in the copy. Never several, and many sections need none.
- **Monochrome.** Ink `#1a1918`, paper `#e8e8e8`, concrete `#d9d9d9`, sheet `#fcfbfa`, and greys. Purple `#af69f4` is only a signal (selection, focus on dark). Color comes from imagery.
- **Type:** Inter at −0.042em tracking for almost everything. IBM Plex Mono only for uppercase labels (small, except the page kicker and the one end-of-page CTA). Libre Baskerville Italic only: the italic payoff, and client quotes (at −0.042em).
- **The wordmark is `brand/assets/logo/meddle-wordmark.svg`, at its default proportion (4.56:1).** Never stretch or squash it where it identifies Meddle (corner, header, documents, decks). On merch or art where the logo is the design element, a deliberate remix (squashed, stretched, cropped) is allowed and counts as that surface's interference; see `brandmark.md`. Never type "MEDDLE" in a font as a logo. Place the default in the corner or edge to edge, never floating mid-size. Deck interiors use the ghost treatment (`brandmark.md`).
- **Say "studio," never "agency"** (except "traditional agency" as the foil). Primary CTA: **"Book an intro call."** Sign-off: *Fortune favors the daring.*
- **Use tokens, not raw values.** In code, load `brand/visual/fonts.css`, `brand/visual/tokens.css`, `components/components.css` (and `components/components.js` for motion), and use `--m-*` variables and `.m-*` classes. Inline the wordmark SVG so `currentColor` works; `<img>` can't inherit color.
- **Never edit `brand/visual/tokens.css` by hand.** Edit `visual-system.json`, then run `node scripts/build-tokens.mjs`.

## Before you hand work back

- Copy: run `node scripts/check-copy.mjs <file>` and fix the errors.
- Anything: score it against `evals/rubric.md`. If you had to guess at a decision the kit doesn't cover, **say so explicitly** in your reply ("The kit doesn't specify X; I chose Y because…"). Those gaps are how the kit improves.
- Never invent client results, testimonials, prices, or credentials.

## If you're changing the kit itself

Change the source file, add a dated entry to `CHANGELOG.md` with the *why*, and rebuild tokens if you touched visual values. Positioning, brandmark, and color changes need the owner's approval, so propose them and don't apply them unasked.
