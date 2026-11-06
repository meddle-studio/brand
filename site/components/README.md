# Components

Working, framework-agnostic HTML/CSS for Meddle surfaces. Every value comes from `brand/visual/tokens.css`. Every class is prefixed `.m-`, so it can sit next to Bootstrap on meddle.studio or in any other stack. The live demo of each one is in the root [`index.html`](../index.html) under **Components**.

## Setup

```html
<link rel="stylesheet" href="brand/visual/fonts.css">
<link rel="stylesheet" href="brand/visual/tokens.css">
<link rel="stylesheet" href="components/components.css">

<body class="m-root m-theme-dark">
  …
  <div class="m-tooltip" aria-hidden="true"></div>   <!-- optional, once per page -->
  <script src="components/components.js"></script>  <!-- theme crossfade, reveals, tooltip, nav autohide -->
</body>
```

Wrap any region in `.m-theme-dark`, `.m-theme-light`, `.m-theme-paper`, or `.m-theme-sheet` and the components inside adapt: they read `--m-bg`, `--m-fg`, `--m-muted`, `--m-rule`, and `--m-hairline`, never raw colors. Themes nest correctly, so a dark panel inside a light page gets dark components.

**Theme crossfade:** put `data-scroll-theme="light"` (or `"dark"`) on the element where the page should change. `components.js` swaps the theme on the `.m-root` element as it crosses the viewport midpoint. Sections with their own `.m-theme-*` class are fixed islands; the rest follow the scroll.

The CSS includes a minimal reset (border-box, `body` margin 0) scoped to `.m-root`. Everything is visible without JavaScript: reveals only hide content once `components.js` has added `.m-js` to `<html>`.

## Inventory

| Component | Class | Use | Rule it encodes |
|---|---|---|---|
| Type roles | `.m-display` `.m-h1` `.m-statement` `.m-h2` `.m-h3` `.m-body-lg` `.m-body` `.m-small` `.m-label` `.m-caption` | All text | Weight follows role; −0.042em tracking; mono is uppercase labels only |
| Italic payoff | `<em>` inside `.m-root` | One word per headline | `em` → Libre Baskerville Italic 400; 87% inside `.m-display` |
| Link | `.m-link` (+ `--arrow` after, `--lead` before, `--external`) | Inline CTAs (`--arrow`); footer and contact lists (`--lead`) | Underline draws from the left, exits right |
| Sign-off | `.m-signoff` | *Fortune favors the daring.* in footers and CTA bands | Always Baskerville italic, sentence case |
| Grid | `.m-grid` > `.m-span-{3–8,12}` / `.m-start-{5,7}` | 12-column layouts outside Bootstrap | Stacks below 768px |
| Pill | `.m-pill` (+ `.is-active` / `aria-current="page"`) | Nav links, small actions | Pills = actions; frosted; mono uppercase |
| Button | `.m-pill.m-button` | Form submit, primary action | Outlined on light, frosted on dark |
| CTA | `.m-pill.m-cta` | The single end-of-page CTA on ink | Lift + glow. **One per page.** |
| Nav | `.m-nav` + `.m-nav__end` | Primary nav | Contact pushed to the far end |
| Homepage hero | `.m-hero` > `.m-hero__media` + `h1.m-hero__wordmark.m-blend`, then `nav.m-hero__nav[data-autohide][data-scrollspy]` | Brand-level page openings | The meddle.studio pattern: the wordmark starts centered, sticks, and stops above the nav, and the nav then pins |
| Top bar | `.m-topbar` | Offer and sub-pages | Corner wordmark home link plus one pill CTA |
| Offer hero | `.m-offer-hero` > `.m-topbar` + `.m-offer-hero__body` | The opening of an offer page | 100svh on ink; kicker, display headline, and aside centered below the top bar |
| Kicker | `.m-kicker` | The one label above a display hero | Mono at body size; the only large mono besides the CTA |
| CTA band | `.m-cta-band` > `.m-pill.m-cta` (+ `.m-cta--wide` on offer pages) | The end of a page | Once per page; wide = container width at h2 size |
| Timeline | `.m-timeline__phases` (spans set `--m-span`) + `ol.m-timeline` > `li` (`.m-timeline__when`, `h3`, `p`), one `li.is-key` | A process with fixed days | Ruled columns; one inked step is the section's interference; stacks below 992px |
| Numbered list | `ol.m-numbered` > `li` > `.m-numbered__num` + `div` (`h3`, `p`) | Deliverables, what's included | Mono number, title, one line each: specifics, not adjectives |
| Price panel | `aside.m-price.m-theme-dark` (`.m-price__label`, `.m-price__amount`, `.m-price__line`, `.m-list`, a pill) | The price on an offer page | The one ink panel on a light page; amount larger than display; sticky on desktop |
| Gallery | `.m-gallery` > `figure` (first can be `.is-wide`) + `figcaption.m-caption` | Real work | Square corners, 16:9, mono captions; images from `brand/assets/work/` |
| Aside | `.m-aside` | The one fully italic line under a display headline | Part of the headline's move |
| Wordmark | `.m-wordmark--corner` / `.m-wordmark--bleed` + `.m-blend` / `.m-wordmark--ghost` | Logo placement | Default 4.56:1 (no remixes in UI); corner or edge-to-edge, nothing in between; ghost on deck interiors |
| Section | `.m-section` + `.m-section__head` | Page sections | Hairline top, huge bottom padding |
| Section title | `.m-section-title` | Deck-style titles | Mono number over heavy Inter + italic |
| Ruled columns | `.m-columns` (+ `.m-columns__empty`, `--m-columns: 3`) + `.m-col-label` | Deck grid on the web | 1px rule at each column's left edge, no boxes |
| Bordered list | `.m-list` / `.m-list--no` / `.m-list--plain` | Services, inclusions, comparisons | Arrow = included; × = the other model; items at weight 300 |
| Engagement rows | `.m-rows` > `a.m-row` | Offers, process steps | Mono number · title · muted description |
| Comparison | `.m-compare` | Meddle vs. traditional agency | The foil is a model, never a named competitor |
| Quote | `.m-quote` | Client testimonials, pull quotes | Baskerville Italic at −0.042em, oversized bold roman mark, Inter cite |
| Figure | `.m-figure` + `.m-ratio-16x9` / `.m-ratio-5x6` | Imagery | Square corners; mono caption |
| Field | `.m-field` + `.m-input` | Forms | Underline-only inputs; conversational labels |
| Chips | `.m-chips` > `label.m-chip` | Multi-select in forms | Square (content), not pill (action) |
| Tooltip | `.m-tooltip` (+ `.is-visible`) | Cursor label on linked rows | Names the action |
| Meta row | `.m-meta` > `.m-meta__item` | Document header | Mono, uppercase, grey, 4-column |
| Footer | `.m-footer` | Page footer | Mono uppercase links with arrows |
| Reveal | `.m-reveal` / `.m-reveal-list` | Statement fade-up; list items fade right in turn | 1500ms / 1000ms expo; needs components.js; off for reduced motion and (lists) on mobile |

## Snippets

**Hero with full-bleed wordmark over video**
```html
<header class="m-theme-dark" style="position:relative;height:100svh;overflow:hidden">
  <video autoplay muted loop playsinline poster="poster.jpg" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">…</video>
  <h1 class="m-wordmark m-wordmark--bleed m-blend" style="position:relative;margin:0">
    <!-- inline brand/assets/logo/meddle-wordmark.svg (the wordmark, default 4.56:1) -->
  </h1>
  <nav style="position:absolute;bottom:1rem;left:1rem;right:1rem">
    <ul class="m-nav">
      <li><a class="m-pill is-active" href="#">Home</a></li>
      <li><a class="m-pill" href="#work">Work</a></li>
      <li class="m-nav__end"><a class="m-pill" href="/contact/">Contact</a></li>
    </ul>
  </nav>
</header>
```

**Offer page: hero, timeline, deliverables + price, work** (the full anatomy is in `brand/visual/layout.md`)
```html
<body class="m-root m-theme-dark">
<header class="m-offer-hero">
  <div class="m-topbar">
    <a class="m-wordmark m-wordmark--corner" href="https://meddle.studio/" aria-label="Meddle home"><!-- inline meddle-wordmark-sm.svg --></a>
    <a class="m-pill" href="https://meddle.studio/contact/">Book an intro call</a>
  </div>
  <div class="m-offer-hero__body">
    <p class="m-kicker">Brand Sprints</p>
    <h1 class="m-display">Fast. Cheap.<br><em>And</em>&nbsp;Good.</h1>
    <p class="m-aside">All three? At the same time? In&nbsp;THIS&nbsp;economy?</p>
  </div>
</header>

<section class="m-section m-container" data-scroll-theme="light" style="padding-top:var(--m-space-3xl)">
  <div class="m-section__head"><h2 class="m-label m-secondary">01 · How the two weeks go</h2></div>
  <p class="m-h2">A plain headline that names the process</p>  <!-- the inked step is this section's interference -->
  <div class="m-timeline__phases" style="--m-steps:6"><span>Before</span><span style="--m-span:2">Week one · …</span><span style="--m-span:3">Week two · …</span></div>
  <ol class="m-timeline" style="--m-steps:6">
    <li><span class="m-timeline__when">Before · Thursday</span><h3>Questionnaire</h3><p>…</p></li>
    <li class="is-key"><span class="m-timeline__when">Day 06 · Monday</span><h3>Decision day</h3><p>…</p></li>
    <!-- one li per step in facts.md; only one .is-key -->
  </ol>
</section>

<section class="m-section m-container">
  <div class="m-section__head"><h2 class="m-label m-secondary">02 · What you get</h2></div>
  <div class="m-grid">
    <div class="m-span-7">
      <p class="m-h2">A plain headline that names what's included</p>
      <ol class="m-numbered">
        <li><span class="m-numbered__num">01</span><div><h3>Logo suite</h3><p>…</p></div></li>
      </ol>
    </div>
    <div class="m-span-5">
      <aside class="m-price m-theme-dark" aria-label="Price">
        <p class="m-price__label">Brand Sprint</p>
        <p class="m-price__amount">$30K</p>
        <p class="m-price__line">One line on the terms</p>
        <ul class="m-list"><li>…</li></ul>
        <a class="m-pill m-button" href="https://meddle.studio/contact/">Book an intro call</a>
      </aside>
    </div>
  </div>
</section>

<section class="m-section m-container">
  <div class="m-section__head"><h2 class="m-label m-secondary">03 · From a recent Sprint</h2></div>
  <div class="m-gallery">
    <figure class="is-wide"><img src="brand/assets/work/mfo/05-ooh-billboard.webp" alt="A billboard carrying a new brand identity"><figcaption class="m-caption">Out of home</figcaption></figure>
    <figure><img src="brand/assets/work/mfo/01-monogram.webp" alt="A monogram"><figcaption class="m-caption">Logo suite</figcaption></figure>
  </div>
</section>
```
Copy and numbers here are placeholders that show the shape. Take the real ones from `brand/verbal/messaging.md` and `brand/facts.md`.

**Statement**
```html
<!-- No theme class: it inherits the page's opening (dark) theme, like the production homepage. -->
<section style="min-height:100vh;display:grid;place-items:center;text-align:center">
  <h2 class="m-statement m-reveal">It's time you seized an <em>unfair&nbsp;advantage</em>.</h2>
</section>
```

**Deck-style section on the web**
```html
<section class="m-theme-sheet m-container">
  <h2 class="m-section-title m-display"><span class="m-section-title__number">3.0</span>
    <span class="m-section-title__text">Market <em>Analysis</em></span></h2>
  <div class="m-columns">
    <div class="m-columns__empty"></div>
    <div><h3 class="m-col-label">Target Market</h3><p class="m-body">…</p></div>
    <div><h3 class="m-col-label">Core Problems Solved</h3><p class="m-body">…</p></div>
    <div><h3 class="m-col-label">Differentiators</h3><p class="m-body">…</p></div>
  </div>
</section>
```

**Comparison**
```html
<div class="m-compare">
  <div><h3 class="m-h3">Meddle</h3>
    <ul class="m-list m-h3"><li>Flat fee of $30K</li><li>2 weeks to brand</li></ul></div>
  <div><h3 class="m-h3">Traditional Agency</h3>
    <ul class="m-list m-list--no m-h3"><li>$80K–$500K+</li><li>3–9 months or more</li></ul></div>
</div>
```

## Using these in meddle.studio

The production site already implements most of these under Bootstrap class names (`.arrow-list`, `.list-bordered`, `.nav-link`, `.btn-meddle`, `.meddle-input`, `.cs-*`). When the site and the kit disagree, the kit is the intended rule. Log the difference in `CHANGELOG.md` and fix the site, or update the kit with the reason.
