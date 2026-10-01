# Review rubric

Use this to review any Meddle output, whether it's your own, a freelancer's, or an agent's. Score each line **pass / fix / n/a**. Anything marked "fix" in the first block blocks shipping.

## Blocking

- [ ] **One interference.** One deliberate break per surface (headline italic, wordmark at scale, one material image, or one wink), where a surface is one view seen at once. On web pages that means at most one per viewport section and one showpiece per page. The signature (sign-off, corner wordmark, mono meta) doesn't count. See `magic_trick.md` → "What counts as a surface".
- [ ] **Facts are real.** Every price, number, name, result, and quote is traceable to `brand/facts.md` or a real source. Nothing is invented.
- [ ] **Wordmark is `meddle-wordmark.svg`** (default proportion, 4.56:1), in the corner or edge to edge, ink or paper (ghost on deck interiors, difference-blended over imagery). Never typed out or recolored. Never stretched or squashed where it identifies Meddle; a deliberate remix on merch or art passes only if it's that surface's one interference.
- [ ] **Monochrome.** No accent colors. Purple only on selection or focus. Any color comes from imagery.
- [ ] **No banned words.** `node scripts/check-copy.mjs` reports 0 errors.

## Craft

- [ ] **It's strong, not just compliant.** Each section has one focal element on a clear scale ladder, the specifics are shown as structure (schedule, deliverables, price), the shapes vary from section to section, and it has real imagery where the page is long. Picture a competent version made *without* the kit. If that one would look better, this is a **fix**, even when every other line passes. (`layout.md` → "Composition")
- [ ] **Type roles are right:** Inter at −0.042em; mono only in uppercase labels (small, except the page kicker and the one CTA band); Baskerville only as the italic payoff (or client quotes); weight follows role.
- [ ] **The italic lands on the payoff**, not a filler word; once per headline.
- [ ] **The grid is honored:** alignment to columns, rules instead of boxes, asymmetry, generous section spacing, and the edge margin for corner elements.
- [ ] **Shapes:** pills for actions, square corners for content. No in-between radii.
- [ ] **Theme logic:** open dark, work in light (concrete on web, sheet in documents), close dark.
- [ ] **Contrast:** muted greys only at large sizes on light surfaces; small secondary text uses ink @ 75%.
- [ ] **Motion** (if any): expo-out, slow for statements, fast for UI, reduced-motion safe.

## Voice

- [ ] **It couldn't have come from a traditional agency.** It takes a position.
- [ ] **It names a business outcome** or a concrete detail.
- [ ] **It's transparent** about price, process, and fit where relevant.
- [ ] **Person is consistent:** "we" for the studio, "I" for Matt, never mixed.
- [ ] **Mechanics:** en dashes in ranges, `$30K` format, no widows, no exclamation points, "Book an intro call" as the CTA, *Fortune favors the daring.* with the period.

## Gaps

- [ ] List any decision the reviewer or maker had to guess because the kit didn't cover it. **Each one becomes a kit update** (a rule plus its why) logged in `CHANGELOG.md`.
