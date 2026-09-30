# Effects

Surface treatments. Values are in [`visual-system.json`](visual-system.json) → `effect`, exposed as `--m-effect-*`. Effects are rare by design: rules and type do the work, and effects are for moments.

| Effect | Value | Use | Never |
|---|---|---|---|
| **Frost** | `backdrop-filter: blur(20px) saturate(220%)` over `rgba(40,40,40,.8)` | Nav pills and buttons, especially over video | On large panels or cards: frosted glass as a layout style reads as generic UI |
| **Frost hover** | `blur(60px) saturate(190%)` over `rgba(144,144,144,.8)` | Hover/focus state of frosted pills | — |
| **Frost tooltip** | `blur(5px) saturate(220%)` over paper @ 75% | The cursor-following tooltip | — |
| **Difference blend** | `mix-blend-mode: difference` | Wordmark and nav in paper over video/imagery, so they invert against what passes behind | On body text or anything that must stay readable |
| **Glow** | `0 0 20px rgba(232,232,232,.8)` | Hover on the single end-of-page CTA on ink, paired with a 4px lift | Anywhere else. One glow per page. |
| **Soft shadow** | `0 6px 24px rgba(0,0,0,.08)` | Floating UI (dropdowns, popovers) | On images, cards, or type |
| **Tooltip shadow** | `0 10px 30px rgba(0,0,0,.05)` | Tooltip only | — |
| **Film grain** | Noise canvas at 6% opacity, fixed, pointer-events none | Optional atmosphere on hero-heavy pages | Documents, decks, anything printed |

## Rules

- **Flat by default.** No gradients in UI, no bevels, no inner shadows, no glassmorphism cards.
- **One effect moment per screen.** A frosted nav over the hero video is one moment. Don't also add grain *and* glow in the same viewport.
- **Material belongs in imagery, not CSS.** Chrome, glass, and liquid come from renders (see `art-direction.md`), not from CSS gradients imitating them.
- **Effects must degrade gracefully.** Where `backdrop-filter` is unsupported, the solid `rgba(40,40,40,.8)` fill has to work on its own.
