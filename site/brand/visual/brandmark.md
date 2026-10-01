# Brandmark

Read this before placing the logo anywhere. Files are in [`../assets/logo/`](../assets/logo/). Every SVG uses `fill="currentColor"`, so set the color with CSS `color`. Inline the SVG (or use `<svg><use href="#wm"/></svg>`), because an `<img>` can't inherit color.

## The wordmark

**MEDDLE**, custom-drawn heavy capitals, tightly fitted so the letters nearly touch. **Default proportion: about 4.56 : 1.**

Look closely and the drawing is subtly *meddled with*. The M's inner strokes pinch and flare, and the bowls of the D's aren't geometrically perfect. It's a disciplined grotesk that someone has interfered with, which makes it the magic trick in miniature. **Never redraw, "clean up," or retype it in a font.** The irregularities are the point.

The trademark is registered as standard characters (see `facts.md`). In running text, write "Meddle," not "MEDDLE."

## Files

| File | Proportion | Use |
|---|---|---|
| `meddle-wordmark.svg` | 912.8 × 199.8 (4.56 : 1) | **The wordmark, everywhere.** Exported from the Figma presentation master. It's the same drawing as the site header and hero. |
| `meddle-wordmark-sm.svg` | 136.8 × 30 (4.56 : 1) | The same drawing as shipped in the site header. Use it where a small inline file is handy (email signatures, favicons in context). |
| `meddle-app-icon.png`, `meddle-icon-512.png` | Square | App and touch icons: a tight crop into the M that bleeds off the edges. |
| `meddle-avatar-square.png` | Square | Social avatar: the paper wordmark centered on ink. |

## The default, and the remix

**The default is 4.56:1, untouched.** Use it in most cases, and always where the wordmark *identifies* Meddle: the site header and corner, documents, proposals, every deck slide, email signatures, avatars and app icons, and anything a client receives. If a space is too short for the default, make it smaller or move it; don't squash it to fit.

**Every once in a while, remix it.** When the wordmark is the design element rather than the signature (merch, posters, campaign and hero art, stage screens, social art, motion pieces), it can be squashed, stretched, cropped, repeated, or otherwise messed with. That's on-brand: it's the mark being meddled with on purpose. Owner decision, 2026-10-01.

- **Start from `meddle-wordmark.svg`.** A remix interferes with the real drawing. Never redraw it or retype it in a font.
- **It's the surface's one interference.** A remixed wordmark is the move, so the rest of the surface stays disciplined: no italic payoff beside it, no second remixed mark.
- **Make it look deliberate.** Push it hard (a heavy squash, a crop that bleeds off the shirt) rather than a few percent off, which just reads as a mistake.
- **Color rules still apply:** ink, paper, ghost, or the difference blend, or a material render for art.
- **Keep the default somewhere close** when the piece goes out alone (a shirt can carry the default on the sleeve or label, a poster can sign off with a corner mark).

*Why:* the wordmark's energy comes from its tall, heavy letters and tight fit, which is why the default is untouched. A remix borrows that tension and plays with it; it only reads as intentional because the standard mark is so consistent everywhere else.

## Color

- **Ink on light** (paper, concrete, sheet, paper stock).
- **Paper on ink.**
- **Ghost** on deck interior slides, so the wordmark identifies without competing with the content (`--m-wordmark-ghost`, `--m-wordmark-ghost-blend`, set per theme):
  - on light slides: concrete `#d9d9d9` with `mix-blend-mode: multiply` (reads `#c5c5c5` on paper, `#d6d6d5` on sheet)
  - on ink slides: graphite `#757575` at 30% opacity (reads `#353534`)
- **Corner wordmark on web pages:** paper with `mix-blend-mode: difference`, so it always reads as the opposite of whatever is behind it (ink on light sections, paper on dark). It works well on the monochrome site; `.m-topbar` and `.m-hero__wordmark` do this by default. Owner decision, 2026-09-30.
- **Over video or photography:** paper with `mix-blend-mode: difference` (`--m-effect-blend-difference`). The mark then inverts against whatever passes behind it. This is the production homepage treatment, and it's approved for any wordmark or nav over moving imagery.
- **Never** purple, a gradient, or an outline.
- **Material renders** (chrome, liquid metal, stone, glass) are for campaign and hero art, like the stage-screen and 3D sculpture explorations. They're allowed as imagery, never as the wordmark in the header, a signature, or a document.

## Size and placement

- **Minimum size:** 24px tall on mobile, 30px on desktop. In print, 0.25in tall.
- **Clear space:** at least the height of the E's middle arm (about ¼ of the wordmark's height) from other elements. The *edge* of the canvas may be closer: the wordmark likes to sit hard in the corner (15–16px on web, 15px on a 1920px slide).
- **The two approved placements** (for the default; a remix is art, so it follows the composition):
  1. **Corner:** top-left, as identification. Site header, documents, and every deck slide (≈429px wide on a 1920 slide: full contrast on the cover, ghost on interiors).
  2. **Edge to edge:** the wordmark spans the entire width of the surface (web hero, deck closing slide, stage screen, poster) or bleeds off it (business card). This is scale as interference. Use it once per piece, in the opening or closing moment.
- In between (a medium-sized centered logo floating in space) is the one placement to avoid. It's neither identification nor statement.

## Don'ts

- Don't set "MEDDLE" in Inter Black as a stand-in. Always use the SVG.
- Don't stretch, squash, skew, or rotate the mark where it identifies Meddle (corner, header, documents, decks, signatures, icons). Remixes are for merch and art; see "The default, and the remix". Rotating a photographed business card is fine.
- Don't add a tagline lockup to the mark. "Fortune favors the daring" sits separately in mono meta or italic.
- Don't place it on busy imagery without the difference blend or a clean area.
- Don't add shadows, glows, or bevels (material renders are art, not the logo).
- Don't combine it with client logos in a lockup, except as a plain "Meddle × Client" in text.

## The twisted palm (Orlando HQ)

`../assets/illustration/meddle-palm.svg`: a palm tree whose trunk curls back on itself, with a tattoo-flash line quality. It stands for **Meddle Orlando, our HQ**, and it's the **only official illustration** in the system. In captions and copy it goes by its nickname: *the twisted palm, our only officially unofficial illustration*. The paradox is the point: set "unofficial" as the italic payoff so it reads as a wink, not a typo. While Meddle is a solo-led studio it's personal, the founder's mark, and it lives on the founding merch.

- **Use it for:** merch and swag, founder and personal contexts (a signature flourish, a studio sticker, a welcome note), and Orlando-specific moments (HQ, local events).
- **With the wordmark:** the wordmark leads and the palm is small and secondary, never locked up beside it at a similar size (see the shirt in `../assets/reference/shirt-against-sky-crop.jpg`). On merch it can be accompanied by small serif caps: "EST. 2025 ORLANDO", "LOVE WHAT YOU DO".
- **Color:** ink or paper only (`currentColor`). It isn't purple, isn't a color fill, and isn't ghosted.
- **Don't:** use it as a logo replacement or app icon, put it on client work, redraw or restyle it, or add other illustrations "in the same style". The hands-from-a-monitor line art in the Creative folder was an exploration and **isn't part of the system**.
- **Minimum size:** 16mm or 64px tall, so the trunk's texture stays legible.
