# Graphic elements

The small, repeatable pieces that make a surface feel like Meddle even without the logo. The working CSS is in [`components/components.css`](../../components/components.css).

## The arrow →

The brand's one pictogram. It means "forward, this leads somewhere, this is included."

- **Bordered list arrow** (`../assets/icons/arrow-list.svg`): square-capped stroke, 1em, sitting in the left gutter of each list item. Grey on light (`rgb(56,56,56)` in production). Use it for service lists, inclusions, benefits, and "Meddle" comparison columns.
- **Link arrows** (`arrow-right.svg`, `arrow-top-right.svg`): → for internal links, ↗ for external ones (LinkedIn, Instagram). Position depends on context:
  - **Before** the text in link *lists* (footers, contact lists, deck contact slides): `.m-link--lead`, "→ hello@meddle.studio".
  - **After** the text in *inline* CTAs and row CTAs: `.m-link--arrow` / `.m-link--external`, "Book an intro call →".
- **Typed arrows** in documents: "→ Brand Strategy". Use the real character `→` (U+2192), not `->`.
- **Mobile row CTA:** "Book an intro call →"

## The cross ×

The counterpart to the arrow. It marks what we're *not*, or what the other model does. It appears only in comparison lists (the "Traditional Agency" column), in graphite, with the list items also in graphite. Never use it as a close icon in brand content (UI close buttons are fine).

## Bordered lists

Items separated by 1px rules at 42% opacity, with no bullets except the arrow or cross, and generous vertical padding (1rem+). Items are set in h3/h4 size at **weight 300**. The lightness lets the rules and arrows do the organizing.

## Numbered rows

"Ways to Engage" pattern: a mono grey number (`01`, `02`, `03`), a semibold h2-size title, and a grey description, all on one row between rules. On desktop hover the row expands to show more text and a cursor tooltip names the action. Use it for offers, process steps, and principles.

## Section numbers

Mono, grey, decimal: `1.0`, `2.0`, `3.0`. They sit directly above deck section titles and structure documents like a spec. List numbers use two digits: `01`.

## Mono meta blocks

Small uppercase mono in grey, often two stacked lines, placed along the top edge like a document header: `FORTUNE FAVORS / THE DARING` · `BUSINESS PLAN: / MEDDLE, LLC` · `02`. They make any surface feel like an engineered document. Use them on deck headers, poster corners, social templates, and video end cards.

## Pills

Fully rounded, frosted (`backdrop-filter: blur(20px) saturate(220%)` over `rgba(40,40,40,.8)`), mono uppercase 12–14.5px, and generous padding. Use them for nav, buttons, and tooltips. The active nav item inverts to a paper fill with ink text. The primary CTA on ink has a 1.5px paper outline. See `effects.md`.

## Title rule and image frames (decks)

- **Title rule:** a 1px graphite vertical line at the slide's left margin, running from under the header to the bottom edge, beside the section title. It ties the title to the content below it.
- **Image frames:** square, a 1px graphite border, and fixed positions. Placeholders are outlined empty boxes. They never get rounded corners (device mockups keep their device's shape).

## Rules

1px lines are the main structural device. Horizontal rules divide sections. Vertical rules separate deck columns and bleed off the bottom of the page. Never box content in with four-sided borders; use one rule, on one side, to create structure.

## Underline links

Text links get a 0.075em underline bar in currentColor that draws in from the left on hover and exits to the right (`.m-link`). On touch devices it's always visible.

## Texture

- **Film grain:** optional full-screen noise at 6% opacity over the whole page. Use it sparingly, on hero-heavy pages.
- **Concrete:** a raw, cracked concrete surface is the approved photographic ground for mockups (see `art-direction.md`).

## Illustration

There's exactly one: **the palm** (Orlando HQ), in `../assets/illustration/meddle-palm.svg`. Its rules are in `brandmark.md`. No other illustration style is part of the system. The hands line art in the Creative folder was an exploration and wasn't adopted. When a surface seems to need illustration, it usually needs a photograph, a material render, or a stronger headline (see `art-direction.md`).
