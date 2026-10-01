# Layout

Grid, spacing, and composition for the web and for documents. Values are in [`visual-system.json`](visual-system.json) (`space`, `layout`) and in `tokens.css` (`--m-space-*`, `--m-layout-*`, `--m-deck-*`).

## Principles

1. **The grid is the status quo, so honor it.** Everything aligns to columns and rules. The interference (scale, italic, material) only reads because everything else is strict.
2. **Tight to the edge, generous inside.** The wordmark and nav sit 16px (`--m-space-sm`) from the viewport corner. Sections then breathe with 7.5–11.25rem of vertical space. Corner tension plus open interiors is the Meddle composition.
3. **Asymmetry over centering.** Content usually sits in the right half or right three columns and leaves the left column empty or holding a label or image. Centering is reserved for the single hero statement and the final CTA.
4. **Rules, not boxes.** Structure comes from 1px lines (horizontal dividers, vertical column rules, bordered lists), not from cards, fills, or shadows. The one exception is an **ink panel on a light page**: one per page, holding the price (`.m-price`), or one inked step in a timeline (`.m-timeline .is-key`). It's a single inversion that does the section's interference, not a card system.

## Composition: what makes a page strong

The principles above say what the discipline is. These say how to make it land. A page can follow every rule in the kit and still lose to a generic page if it skips these. Discipline means rigor and conviction, not small, quiet, and vague.

5. **One focal point per section, on a clear scale ladder.** Every section has one element at h1 scale or larger (a headline, a number, or an image), and everything else steps down at least two roles. On an offer page, the hero headline and the price are the two biggest things. A page set entirely in mid sizes (h2 statements, h3 lists) reads as a wireframe.
6. **Show the specifics as structure.** When facts.md has the details (a schedule, a list of deliverables, a price, a comparison), show them as a timeline, numbered rows with a line each, a price panel, or ruled columns. "Detailed deliverables" in a bullet is a claim. Seven named deliverables, each with one line, are proof.
7. **Vary the section shape.** Don't put two sections with the same composition back to back. Alternate between a split (a headline on the left, a list on the right), a full-width strip (timeline, ruled columns), a two-up (list beside a panel), and full-width imagery.
8. **Hold the open space.** Open space reads as intent when something anchors it: a display headline, a sticky panel, a full-width image, or content pinned to an edge. A short headline at the top of a tall, empty column isn't open space. It's a void. Make the item sticky, give the column a focal element, or shorten the section.
9. **Let imagery bring the color.** The interface is monochrome, so a page with no images is grey from top to bottom. Any page longer than two screens needs at least one real image: work from `../assets/work/` (facts.md says how it may be credited) or the material loop (`art-direction.md`). Never use stock.

## Edge vs. container (intentional offset)

Corner elements (the wordmark, nav, and mono meta) sit at the **16px edge** (`--m-layout-edge`). Content sits inside the **container** with **2rem gutters**. The visible 16px step between them is deliberate: identification hugs the frame, and content sits inside it.

## Web grid

- 12-column grid, 2rem gutters (`--m-layout-gutter`), max container 1470px at 1400px+. The site uses Bootstrap 5.3. Outside it, use `.m-grid` with `.m-span-{3,4,5,6,7,8,12}` and `.m-start-{5,7}` from components.css (everything stacks to full width below 768px).
- "Content right" means columns 7–12 (`.m-span-6.m-start-7`) for a half, or 5–12 for two-thirds.
- Breakpoints: 576 / 768 / 992 / 1200 / 1400px.
- Body copy measure: max ~38em (`--m-layout-measure`).
- Section rhythm: bottom padding 7.5rem mobile → 11.25rem desktop. Every content section starts with a hairline across the top and 1rem of padding before the label.

### Section heads on the web

Every content section opens with a hairline and a mono label, and may be numbered: `01 · What we do`. Decks number sections `1.0`, and web pages use `01 ·`. Labels are short and plain ("What you get", "How it compares"). They name the content and don't sell it.

### Navigation

- Pill nav in one row: Home · About · Work · Services, with **Contact pushed to the far end**.
- **Small screens:** keep the single row and let it scroll horizontally (production does this). Never hide Contact. No hamburger on marketing pages.
- **Offer and sub-pages** (Sprints, case studies): the corner wordmark links home, and there's a single pill CTA ("Book an intro call") at the other end. The full nav is optional.
- Page titles: `Page name | Meddle`, or just the title if it already contains "Meddle".

### Hero height

Every page hero is `100svh`, offer pages included: the opening owns the first screen. Brand-level pages use the wordmark hero (`.m-hero`). Offer pages use `.m-offer-hero`: the top bar, then the kicker, display headline, and aside centered in the space below (production: the Sprints page). Don't shrink a hero to its content. The first screen is where the one showpiece lives.

When you check your render, use a normal viewport (1440×900, or `node scripts/screenshot.mjs`), not one tall window. A 2600px-tall window makes a `100svh` hero fill the whole screenshot.

### Page anatomy (homepage pattern)

1. **Hero** (100svh, ink; `.m-hero` in components): full-bleed abstract video, and the **wordmark spanning the full width** with 16px padding and `mix-blend-mode: difference`. It starts vertically centered, sticks to the top as you scroll, and stops just above the nav (bottom margin = nav height − 12px). The frosted pill nav sits on the hero's bottom edge (Home · About · Work · Services, with Contact pushed right), pins to the top when it reaches it, hides on scroll down, and returns on scroll up.
2. **Statement** (100vh, centered, still on the dark opening theme): one medium-weight statement, with at most one italic move per sentence (a matched pair counts as one). It fades up slowly.
3. **Work**: large video cards, full container width, with the theme crossing to light as they arrive.
4. **Services**: hairline, a statement in the left half, the tagline in italic on the right in grey, another hairline, then a sticky "What We Do" arrow list on the left and numbered "Ways to Engage" rows on the right.
5. **Footer** (ink): mono uppercase links with arrows and © Meddle.

### Offer-page anatomy (Sprints pattern)

From the owner's Sprints page redesign (meddle.studio, 2026-09-30). Use it for any page that sells one offer.

1. **Hero** (`.m-offer-hero`, 100svh, ink, centered): the `.m-topbar` (corner wordmark home, one "Book an intro call" pill), then a `.m-kicker`, a `.m-display` headline with the one italic payoff (break the line on purpose: "Fast. Cheap.<br>*And* Good."), and the `.m-aside` talking back to it. On an offer page this headline is the page's showpiece, so don't add a hero video or a full-bleed wordmark.
2. **Promise:** the approved one-line promise at h2 in the left half, and a short arrow list (`.m-list`, h3) on the right.
3. **How it works:** a hairline section head, an h2 headline with an `.m-body-lg` lede beside it, then the full-width `.m-timeline` built from the schedule in facts.md, with one step inked (the decision day).
4. **What you get + the price:** numbered deliverables (`.m-numbered`, one line each, from facts.md) in seven columns, and the `.m-price` ink panel in the other five, sticky. The price is the section's interference, so its headline stays plain.
5. **The work:** "What it can look like," as an `.m-gallery` of real images from an engagement of this offer (`../assets/work/`), with a full-width image first and mono captions that name the deliverable. Credit it only as facts.md allows.
6. **Comparison:** the offer against the traditional agency (`.m-compare`), under a plain headline.
7. **Close:** the `.m-cta-band` on ink with one `.m-cta.m-cta--wide`, then the footer.

The theme runs ink (hero) → concrete (2–6) → ink (close). A dark band partway down, like the production page's agentic-guide section, is allowed when it introduces something new. Sections 2–6 alternate shape (split, strip, two-up, gallery, split), which is principle 7 at work.

### Case-study anatomy

Full-screen hero video with the client name and mono service tags, then light sections (Overview, Challenge, Strategy, Identity sub-sections, Website). Each section starts with a hairline and a mono label, has large body copy (21.6–32px), and 16:9 or 5:6 imagery. It ends with a dark quote section (Baskerville), credits, and a CTA.

## Rules and borders

| Rule | Spec | Use |
|---|---|---|
| Rule | 1px, theme `rule` (42% alpha; solid ash on sheet) | Bordered lists, section dividers, deck column rules |
| Hairline | 1px, theme `hairline` (10% alpha) | Top of every content section, image placeholders, structural edges |
| Button border | 1.5px, currentColor | Outlined pill buttons |

## Radius

- **Square (0)** for everything that holds content: images, video, cards, form fields, selection chips, deck elements.
- **Pill (999px)** for things you press to go somewhere: nav links, buttons, tooltips.
- *Why:* one shape per job. A pill means "action," a square means "content." Don't use in-between radii like 8px or 12px.

## Imagery ratios

16:9 for landscape and wide shots, 5:6 for portrait pairs, full-bleed video in heroes. Use the "portrait-landscape stack" for identity details: one 5:6 on the left, two 16:9 stacked on the right.

## Decks (1920×1080)

The master lives in Figma: **"Discovery & Strategy (TEMPLATE)"** (figma.com/design/F5oGU0iiKPWWgMGkZDaA21, frames 4083×2297). The working HTML version is [`templates/deck/deck.html`](../../templates/deck/deck.html), with every measurement scaled ×0.4703 to 1920×1080. References are in `../assets/reference/deck-template-*.jpg`. The 2025 business-plan deck (`../assets/reference/archive-business-plan-2025/`) is the previous generation. Its squashed wordmark and dark cover are retired.

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ MEDDLE (429px, ghost)   CLIENT NAME     DISCOVERY        FORTUNE FAVORS   03 │  ← mono 13px, x = 543 / 967 / 1443
│                                         & STRATEGY       THE DARING          │
│ │                                                                            │
│ │ The Big Picture   ← Inter 900 + Baskerville italic, ~104px, x = 46          │
│ │                                                                            │
│ │           (open space: part of the design)                                 │
│ ├───────────────┬────────────────┬────────────────┬───────────────────────── │
│ │ Label (bold,  │ Label          │ Label          │ Label                    │  ← columns start at y≈626,
│ │ graphite)     │ Body 21px ink  │                │                          │    1px graphite rules bleed
│ │               │                │                │                          │    off the bottom edge
└──────────────────────────────────────────────────────────────────────────────┘
```

- **Header on every slide:** the wordmark top-left at 15px / 21px, 429px wide (full contrast on the cover, ghost on interiors). Mono meta in fixed slots: **client name** (x 543), **document title** on two lines (x 967), **"Fortune favors / the daring"** (x 1443), and a two-digit page number flush right (`00` on the cover). Use this order on every slide (one slide in the Figma master swaps the last two; treat that as a slip).
- **Backgrounds:** paper `#e8e8e8` for the cover and most slides, sheet `#fcfbfa` for reading-heavy column slides, and ink for statement and big-idea slides. Rules and image frames are 1px graphite.
- **Section title:** heavy Inter plus a Baskerville italic word, ~104px, at x 46 / y ≈176. A second line may be all italic ("Another Conclusion / *About Strategy*"). A **title rule** (1px, x 31) often runs from just under the header down to the bottom edge, beside the title.
- **Open space is structural.** Columns sit in the lower ~40% of the slide, and statements anchor to the bottom-left. Don't fill the top half just because it's empty.
- **Image frames:** square corners with a 1px graphite border, occupying the right half (x 966) or right third (x 1156), inset 118px from the top and 32px from the right and bottom.
- **Cover:** paper, the wordmark at full contrast, full-width rules at y 136 and y 983, and the title across two lines at ~232px ("Discovery / *& Strategy*").

Slide types and their rules are in [`templates/deck/README.md`](../../templates/deck/README.md).

## Social and small formats

Scale the deck logic down: wordmark or mono meta in a corner, one heavy headline with an italic payoff, rules for structure, and imagery for color. Square (1080×1080) and portrait (1080×1350) are the defaults. Keep a 16px-equivalent edge margin (≈1.5% of width).
