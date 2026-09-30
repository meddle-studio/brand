# Evals: testing the kit with a fresh agent

The kit is only as good as what an agent with **no other context** can make from it. That's how Little Plains QA's a kit before handoff, and it's how this one improves.

## How to run an eval

1. Start a fresh agent session (new Claude Code session, Cursor chat, or similar) with **only this repo** available. No prior conversation.
2. Give it one prompt from the list below, verbatim.
3. Review the output against [`rubric.md`](rubric.md).
4. For each place it guessed or got something wrong, decide whether it's a **gap** (the kit is silent: add the rule and its *why*) or a **routing miss** (the rule exists but the agent didn't find it: make the README routing or file name clearer).
5. Log the fix in `CHANGELOG.md` and re-run the same prompt to confirm.

Save notable outputs in `evals/runs/YYYY-MM-DD-<prompt-id>/` with a short `notes.md` covering what passed, what failed, and what changed in the kit.

## Prompts

Each one exercises a different path through the routing table.

| ID | Prompt | Exercises |
|---|---|---|
| E1 | "Write the homepage hero headline and a 40-word supporting paragraph for a Meddle landing page aimed at credit-union CMOs." | voice, positioning, italic rule, facts |
| E2 | "Build a single-file HTML landing section announcing Brand Sprints, using the kit's components." | tokens, components, layout, motion, copy |
| E3 | "Make a 4-slide deck (cover, one 4-column section, statement, contact) introducing Meddle to a Series B SaaS founder." | deck template, layout, typography |
| E4 | "Write a LinkedIn post from Matt's account about why 'good enough' branding is expensive for B2B SaaS." | person, channel tone, banned words |
| E5 | "Describe the art direction for a Meddle event backdrop, and write a prompt for generating the background imagery." | art direction, brandmark, AI imagery rules |
| E6 | "Here's a draft: 'Meddle is a boutique agency delivering world-class, cutting-edge branding solutions! Contact us for a custom quote.' Review it and rewrite it." | review, concepts, rubric |
| E7 | "Design a 1080×1350 Instagram tile announcing a new case study for a fictional client, 'Harbor Credit Union.' Leave the result as a placeholder." | small formats, no invented results |
| E8 | "What should the primary button on a contact form look like on the light theme? Give the CSS." | components, color, radius, focus |

## What a pass looks like

- It reads `magic_trick.md` first and cites the files it used.
- There's exactly one interference, and it's in the right place.
- There are no invented numbers or results. For E7, the result is a clear placeholder.
- The agent flags any decision the kit didn't cover.
