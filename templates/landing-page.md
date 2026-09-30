# Landing page / web section recipe

**Read first:** `brand/magic_trick.md`, `brand/visual/layout.md` (page anatomy), `components/README.md`, `brand/visual/motion.md`.
**Code:** `brand/visual/fonts.css` + `brand/visual/tokens.css` + `components/components.css` + `components/components.js`.
**Facts:** prices, the CTA link (`/contact/`), and what's included come only from `brand/facts.md`.

## Page skeleton

1. **Open dark.** A hero on ink: either the full-width wordmark over an abstract material loop (brand pages), or a mono label plus a display headline with one italic payoff (offer pages, like Sprints: "Fast. Cheap. *And* Good.").
2. **Statement.** A centered medium-weight statement that fades up over 1500ms. It's the one place for centering.
3. **Cross into light.** Mark the first content element with `data-scroll-theme="light"` and crossfade over 800ms.
4. **Substance.** Asymmetric sections with a hairline top, bordered arrow lists, numbered rows, and comparison columns.
5. **Proof** *(only if it's real and relevant).* A work card (video) or a case-study pull-quote. Don't imply a case study was a Sprint unless facts.md says so. Skip this step rather than stretch it.
6. **Close dark.** A single CTA band on ink (`.m-cta-band` holding `.m-pill.m-cta`, lift + glow). The *band* appears once per page. "Book an intro call" as link text can repeat elsewhere (nav pill, row links), because it's the same action.
7. **Footer.** Mono uppercase link lists with leading arrows (`.m-link--lead`), the sign-off in `.m-signoff`, and © Meddle.

Steps 2 and 5 are optional for a single-offer page or section. Steps 1, 4, and 6 are not.

## Checklist

- [ ] At most one interference per viewport-height section, most sections with none, and one showpiece per page (see "What counts as a surface" in magic_trick.md)
- [ ] Inter uses the role's tracking token (−0.042em by default, −0.03em for display, −0.025em for long body). The `.m-*` type classes handle it.
- [ ] Headlines have no widows (`&nbsp;` between the last two words)
- [ ] Mono only in labels, nav, buttons, captions, plus the hero kicker and the single CTA band
- [ ] Purple only on selection and focus
- [ ] Pills for actions, squares for content
- [ ] Reduced motion: content fully visible with no animation
- [ ] CTA text is "Book an intro call"
- [ ] `node scripts/check-copy.mjs page.html` passes
