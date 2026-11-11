# Motion

How Meddle moves. Values are in [`motion.json`](motion.json), exposed as `--m-ease-*` and `--m-duration-*` in `tokens.css`.

## The feel

**Confident, then unhurried.** The signature curve is expo-out (`cubic-bezier(0.19, 1, 0.22, 1)`): it moves decisively at the start and then takes its time to settle. Nothing bounces, wobbles, or springs. Motion should feel like a senior person entering a room: it doesn't rush, and it doesn't hesitate.

## Rules

1. **Expo-out for anything meaningful** (theme changes, reveals, underlines, galleries). Use the standard curve for small hover color changes and in-out for things that leave and return (nav auto-hide).
2. **Slow for statements, fast for UI.** The page's one positioning statement fades up over 1500ms. Hover feedback takes 150ms. The gap between those two speeds is intentional: the statement gets a moment, and the UI gets out of the way.
3. **Direction has meaning.** Lists enter from the left, the way the arrows point. Statements rise. The nav leaves upward and returns downward.
4. **Everything you press feels pressed.** Nav pills scale to 0.9 on `:active`. The primary CTA scales to 0.95 and drops 2px.
5. **One showpiece per page.** The hero video loop *or* a big wordmark animation, never both competing.
6. **The theme is a scene change.** Crossing from dark to light is an 800ms crossfade of background and text color, triggered when a marked element passes the viewport midpoint. Never a hard cut.
7. **Respect reduced motion.** Under `prefers-reduced-motion`, durations drop to 0, reveals show content at rest, and the hero video shows its poster frame. `tokens.css` handles the durations automatically.

## Patterns

See `motion.json` → `patterns` for exact values.

| Pattern | What happens | Duration / curve |
|---|---|---|
| reveal-statement | Fade up | 1500ms expo |
| reveal-list | Each item fades right in turn (off below 768px) | 1000ms expo |
| theme-crossfade | Background and text color swap at the viewport midpoint | 800ms expo |
| underline | Bar draws from the left on hover and exits right | 950ms expo |
| press | scale(.9), or scale(.95) + 2px down | 300ms |
| cta-lift | Lift 4px, glow, border fades | 300ms standard |
| nav-autohide | Hide on scroll down, show on scroll up | 300ms in-out |
| tooltip-follow | Mono pill follows the cursor over linked rows | 150ms standard |
| hero-sticky-wordmark | The hero wordmark sticks and stops above the nav, and the nav then pins (`.m-hero`) | CSS sticky, no easing |

## The wordmark in motion

- Approved: the difference blend over moving footage, fades, and wipes or masks that reveal the whole mark.
- A squash or stretch is a remix (see `brandmark.md`): fine in campaign, social, and merch motion where the wordmark is the design element, never on the site header, corner wordmark, or deck mark.
- Not approved: spinning, per-letter bouncing, or glitch effects that break the letterforms.

## Video

- Hero loops are abstract 3D material (see `art-direction.md`), muted, looping, and inline, with separate landscape and portrait cuts and a poster frame.
- Case-study cards use short (≈10–20s) muted teaser loops of the work.
- There's no sound anywhere on the site.
