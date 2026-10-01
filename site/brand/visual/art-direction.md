# Art direction

How Meddle imagery looks, and why. Reference images are in [`../assets/reference/`](../assets/reference/). Look at them before directing, generating, or choosing imagery.

## The idea

Imagery follows the magic trick too. **Real, raw, disciplined surfaces** (concrete, paper, fabric, a dark theater) carry **one surreal, material interference**: glossy 3D glass, chrome, or liquid, or type at impossible scale. The UI is monochrome, so **imagery is where the color lives.**

## Four image families

### 1. Raw surfaces (the ground)
Photographed, tactile, natural light with real shadows. Poured concrete with cracks, uncoated paper stock, cotton, sky.
- *Reference:* `business-card-concrete.jpg`, where a sheet business card sits across a crack in a concrete floor, lit from a corner.
- *Use for:* stationery and print mockups, merch, case-study presentation of identity work.
- *Rule:* the object sits *across* something (a crack, an edge, a shadow line) rather than floating centered on a void. It gives tension, and it's a quiet interference.

### 2. Engineered surreal (the material)
Abstract 3D renders: glass ribbons, floating spheres, liquid chrome, iridescent metal, porous stone. It runs from calm (white spheres drifting in a pale blue room) to intense (gold-green glass spiraling on black).
- *Reference:* `hero-video-still-calm.jpg`, `hero-video-still-intense.jpg` (stills from the homepage loop), and the chrome wordmark on the stage screen in `swag-shirt-card-stage.jpg`.
- *Use for:* hero video loops, section backgrounds behind type, campaign art, and the wordmark as sculpture.
- *Rule:* **One material per piece.** Glass *or* chrome *or* liquid, never a mashup. Type over it is paper with `mix-blend-mode: difference`, or sits in a clean area.

### 3. Scale (the statement)
The wordmark or a headline at architectural size: filling a stage screen over a silhouetted audience, bleeding off a card, spanning a viewport.
- *Reference:* `stage-wordmark-crop.jpg` (stage), `wordmark-on-ink.png`.
- *Use for:* openers, launch moments, event and OOH, social covers.
- *Rule:* the audience or environment stays dark and quiet so the type is the event.

### 4. Real people, real objects (the evidence)
Hands holding the actual thing (a shirt on a hanger against a hard blue sky), product in use, and client work in situ (billboards, signage, devices). It's specific, never staged stock.
- *Reference:* `swag-shirt-card-stage.jpg` (left panel).
- *Use for:* merch, case studies, social proof.
- *Rule:* frame for the object, not the face. Crop people at the hand, arm, or torso unless the person *is* the story (a founder portrait for a case study).

## Color in imagery

Anything goes *inside* the image, and it's encouraged, since this is where the brand gets its color. Recurring notes: saturated cobalt/sky blue, liquid gold and acid green in glass, chrome with iridescent edges, grey concrete, a flash of red-orange motion blur. Keep the surrounding layout monochrome so the image carries it.

## Presenting client work

- Show the work in believable, specific places: a billboard, a real business card, office signage, a device in a hand.
- Approved work images live in `../assets/work/<client>/`. `facts.md` says which offer each one may illustrate and how it may be credited.
- The client's palette leads inside the frame, and Meddle's monochrome frames it.
- Replace clichés with specifics. From the MFO case study: "We traded generic nonprofit clichés (smiling children, clasped hands, etc.) for a system built on specificity."
- Case-study ratios: 16:9 landscape, 5:6 portrait pairs, and short muted video loops with poster frames.

## AI-generated imagery

Allowed for the *engineered surreal* family (abstract materials, sculptural wordmark renders) and for mood exploration. When generating:
- Prompt for **one material**, macro detail, and physically plausible light (studio or architectural, not neon fantasy).
- **Always composite the real wordmark SVG** onto renders. Never let a model draw "MEDDLE" letterforms.
- Don't generate people, client work, or documentary-style "evidence" images. Those must be real.
- Starting prompt shape: *"Macro photograph of [one material: glossy black chrome / translucent gold glass ribbons / porous stone], [calm: slow drifting forms in a pale architectural space | intense: spiraling vortex on black], studio lighting, shallow depth of field, no text."*

## Don't

- Stock-photo handshakes, laptops-on-desks, smiling teams in offices, or generic "innovation" lightbulbs and rockets.
- Duotones or color overlays in brand colors (there are no brand colors to overlay).
- Purple-tinted imagery, since that would turn the signal into a scheme.
- More than one image family fighting in a single frame.
- Drop shadows on photos, rounded image corners, or collage clutter.
