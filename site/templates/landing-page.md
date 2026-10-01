# Landing page / web section recipe

**Read first:** `brand/magic_trick.md`, `brand/visual/layout.md` (the composition principles and the page anatomy), `components/README.md`, `brand/visual/motion.md`.
**Code:** `brand/visual/fonts.css` + `brand/visual/tokens.css` + `components/components.css` + `components/components.js`.
**Facts:** prices, the schedule, what's included, the CTA link (`/contact/`), and which work may be shown come only from `brand/facts.md`.

## Page skeleton

**Selling one offer** (Sprints, Web Design Sprint, a workshop)? Use the **offer-page anatomy** in `layout.md`: a full-height hero, the promise, how it works (timeline), what you get beside the price panel, the work, the comparison, and the close. It's the production Sprints page, and every component it needs is in `components.css`.

**Anything else** (a brand-level page or a section of one):

1. **Open dark.** A `100svh` hero on ink: the full-width wordmark over an abstract material loop (`.m-hero`).
2. **Statement.** A centered medium-weight statement that fades up over 1500ms. It's the one place for centering.
3. **Cross into light.** Mark the first content element with `data-scroll-theme="light"` and crossfade over 800ms.
4. **Substance.** Asymmetric sections with a hairline top, varied in shape (layout.md, principle 7): bordered arrow lists, numbered rows, ruled columns, comparison columns, imagery.
5. **Proof** *(only if it's real and relevant).* Work imagery, a work card (video), or a case-study pull-quote. facts.md says which work may illustrate what. Skip this step rather than stretch it.
6. **Close dark.** A single CTA band on ink (`.m-cta-band` holding `.m-pill.m-cta`, lift + glow). The *band* appears once per page. "Book an intro call" as link text can repeat elsewhere (nav pill, a panel, row links), because it's the same action.
7. **Footer.** Mono uppercase link lists with leading arrows (`.m-link--lead`), the sign-off in `.m-signoff`, and © Meddle.

Steps 2 and 5 are optional for a short section. Steps 1, 4, and 6 are not.

## Make it strong, not just compliant

The kit's rules keep a page on brand. They don't make it good on their own. Before you call it done, check it against `layout.md` → "Composition":

- **The first screen is the hero, and only the hero.** Full height, display type, and the one showpiece.
- **Every section has one focal element** at h1 scale or larger. On an offer page, the price is set big (`.m-price`), not buried in a list.
- **Specifics are shown as structure:** the schedule as a timeline, deliverables as numbered rows with a line each, the price in its panel.
- **No two sections in a row share a shape.**
- **No voids.** An empty half-column under a short headline means the section needs a focal element, a sticky item, or less height.
- **At least one real image** on any page longer than two screens.

Then the honest test: picture a capable designer building this page without the kit. If their version would look stronger, yours is too timid. Keep the discipline, and add scale, specifics, and imagery until it wins.

## Checklist

- [ ] At most one interference per viewport-height section, most sections with none, and one showpiece per page (see "What counts as a surface" in magic_trick.md)
- [ ] Hero is `100svh`. Checked at a 1440×900 viewport with the full page captured (`node scripts/screenshot.mjs page.html page.png`), and at 390px wide.
- [ ] The composition checks above pass
- [ ] Inter uses the role's tracking token (−0.042em by default, −0.03em for display, −0.025em for long body). The `.m-*` type classes handle it.
- [ ] Headlines have no widows (`&nbsp;` between the last two words)
- [ ] Mono only in labels, nav, buttons, captions, plus the hero kicker (`.m-kicker`) and the single CTA band
- [ ] Purple only on selection and focus
- [ ] Pills for actions, squares for content, and at most one ink panel on a light page
- [ ] Reduced motion: content fully visible with no animation
- [ ] CTA text is "Book an intro call"
- [ ] `node scripts/check-copy.mjs page.html` passes
