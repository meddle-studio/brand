# Deck recipe

**Master:** Figma, **"Discovery & Strategy (TEMPLATE)"**: https://www.figma.com/design/F5oGU0iiKPWWgMGkZDaA21/Discovery---Strategy--TEMPLATE-?node-id=8-553. It's the source of truth for decks. Build client decks by duplicating it in Figma.
**Working HTML:** [`deck.html`](deck.html): the same system at 1920×1080, with print-to-PDF built in. Use it for agent-built decks, quick internal decks, and anywhere Figma isn't available.
**Read first:** `brand/magic_trick.md`, `brand/visual/layout.md` (Decks), `brand/visual/typography.md` (deck scale), `brand/visual/brandmark.md` (ghost wordmark).
**References:** `brand/assets/reference/deck-template-*.jpg`, renders of the Figma master. (`archive-business-plan-2025/` is the previous generation. Don't copy its wordmark or dark cover.)

## Slide types

| Type | Theme | Use | The interference |
|---|---|---|---|
| Cover | paper | First slide. The full-contrast wordmark, rules above and below the title | **Scale:** a 232px two-line title, the second line in italic |
| Statement | ink | Framing a goal, mission, or problem: "Project *Goal*" plus one paragraph at 50px | The italic in the title |
| Columns | sheet | Up to 4 labeled, ruled columns in the lower half ("The Big *Picture*": Why / Who / How / What) | The italic in the title |
| List + image | paper | 3–4 labeled items behind a rule, with one image frame on the right (brand values, traits, audience) | The italic in the title |
| Comparison rows | paper / sheet | Competitors, role models: rows of image + name + two text columns between rules | The italic in the title |
| Big idea | ink | **One per deck**, at the turn of the story: one sentence at ~172px | The sentence itself (no italic needed) |
| Conclusion | paper | Two-line title, a 70px statement anchored bottom-left with one italic phrase, image on the right | The italic phrase |
| Closing | ink | Last slide (derived; not in the Figma master): sign-off, contact, wordmark edge to edge | **Scale:** the full-width wordmark |

## Rules

- **Header on every slide:** wordmark top-left, then client name, document title (two lines), "Fortune favors / the daring", and the page number, in that order. The wordmark is full contrast on the cover and **ghost** on every interior slide.
- **Section titles** are heavy Inter plus one Baskerville italic word or phrase. Italicize the second idea: "Target *Audience*", "Brand *Values*", "Top *Competitors*".
- **Leave the space.** Columns live in the lower half and statements anchor to the bottom. Empty upper space is part of the layout.
- **Columns:** a bold graphite label, then 20–21px body in ink. Aim for 30–80 words per column. If it doesn't fit, split it across two slides rather than shrinking the type.
- **Image frames:** square corners, a 1px graphite border, and fixed positions (right half or right third). Placeholders stay outlined boxes until real imagery arrives.
- **Numbers:** pull them from `brand/facts.md`. Never invent them.
- **Photos:** only real project work or `brand/assets/reference/`.
- **Client decks:** keep Meddle's frame (header, rules, type) and show the client's work in its own colors inside the image frames.

## Export

Chrome → Print → Save as PDF (background graphics on), or run headless:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --no-pdf-header-footer \
  --virtual-time-budget=8000 --print-to-pdf=deck.pdf "file://$PWD/templates/deck/deck.html"
```

## Keynote / Google Slides

Recreate the master from the Figma file: a 16:9 canvas, the 4.56:1 wordmark top-left (ghosted on interiors), mono meta at 13/1920 of the width, Inter 900 titles with Libre Baskerville Italic, 1px `#757575` rules, and backgrounds `#e8e8e8` / `#fcfbfa` / `#1a1918`.
