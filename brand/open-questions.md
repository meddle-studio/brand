# Open questions

Decisions the kit can't make on its own. Until they're resolved, agents follow the **interim rule** in each row. When one is resolved, update the relevant file, log it in `CHANGELOG.md`, and delete the row.

Owner: Matt Bacon. Opened 2026-09-30.

## Conflicting facts (interim rule: the live website wins)

| # | Question | Sources | Interim rule |
|---|---|---|---|
| F9 | **Sprint schedule:** which step of the recorded 10-day schedule is inaccurate? | Owner | Use it as recorded in facts.md until corrected. |

## Brand decisions to confirm

| # | Question | Interim rule |
|---|---|---|
| B1 | **Is the recurring "42" intentional?** (−0.042em tracking, 42% rule opacity) | Keep both values exactly. The kit calls it a motif. |
| B4 | **® usage:** add ® to the first textual mention in legal and footer contexts now that the mark is registered? | Optional in legal and document footers. Never on the wordmark artwork in hero or display uses. |
| B5 | **Brand Immersion** and **Strategic Partnership:** launching? They exist as unpublished pages (`_custom.html`, `_fractional.html`). | Don't mention publicly. |
| B6 | **Lowercase wordmark** (`meddle-lowercase.xml` in the Creative folder): retired or reserved? | Not included in the kit. Caps only. |
| B9 | **M-Grey `#909090`** in the Meddle Brand Figma file (7 uses) isn't a kit color. Should it become ash `#8c8d8d` or graphite `#757575`? | Left untouched by the Figma sync. Use ash or graphite in new work. |
| B8 | **Deck header order:** the Figma master's "Project Goal" slide swaps the doc-title and tagline slots. Intentional? | Use client · title · tagline · page on every slide. |

*Resolved 2026-09-30 by the owner: experience (since 2011), public minimum ($30K), title (Founder & Creative Director), location (Orlando HQ; St. Petersburg is the registered address), phone policy, Sprint deliverables, and illustrations (the palm is official; the hands line art isn't part of the system). See CHANGELOG v1.3.0.*

## Site vs. kit drift to fix on meddle.studio

These are kit decisions the production site doesn't yet reflect. They're low priority.

- `site.scss` still defines retired green and blue (`.button`, `.text-accent` use green). Remove them or leave them unused.
- Money and range formatting: the contact page uses `$90k – $250k` and the Sprints page uses `$80k - $500k+`. The kit standard is `$90K–$250K`.
- The site's schema (`_includes/schema.html`) lists St. Petersburg / Tampa Bay as the address and service area. The registered address can stay, but consider adding **Orlando** (HQ) to `areaServed` and anywhere the site says where Meddle is based.
- The Sprints meta description begins "Stop the agency guesswork." The copy linter flags "agency". Consider "traditional agency guesswork" or rephrasing.
