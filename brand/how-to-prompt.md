# How to prompt with this kit

For people briefing an agent (Claude, Cursor, Codex, ChatGPT) or a freelancer. The kit supplies the brand, so your prompt only needs to supply the job.

## The shape of a good brief

```
Using the Meddle brand system in this repo (start with AGENTS.md),
make: [the output: a LinkedIn post, a 6-slide deck, a landing page section]
for: [the audience: CMOs at credit unions, a Series C SaaS founder]
so that: [the business outcome: book intro calls, explain Brand Sprints]
include: [any specific facts, links, project names]
constraints: [length, format, channel, deadline]
```

**Don't paste brand rules into the prompt.** They're in the files. Repeating them creates two sources of truth, and they'll drift.

## Examples

- *"Using the Meddle kit, write a LinkedIn post from Matt's account about why community banks shouldn't imitate neobanks. Audience: bank CMOs. Goal: position Meddle as the studio that gets financial services. Under 150 words."*
- *"Using the Meddle kit, build a 5-slide capabilities deck in `templates/deck/deck.html` for a Series B SaaS company. Emphasize Project-Based engagements. Pull prices from facts.md."*
- *"Using the Meddle kit, design a landing page for a Brand Sprints paid campaign. Reuse the live Sprints copy from messaging.md. Components only from components.css."*
- *"/meddle-review this draft case study against the kit and list what's off-brand, most important first."*

## Ask the agent to show its gaps

End briefs with: *"If the kit doesn't cover a decision you had to make, tell me what you chose and why."* Those answers are the kit's to-do list. Add the missing rule, with its *why*, and log it in `CHANGELOG.md`.

## For freelancers (no agent)

Send them `index.html` (the browsable system), `brand/magic_trick.md`, the files for their task from the README routing table, and `brand/assets/`. Ask them to score their work against `evals/rubric.md` before delivery.
