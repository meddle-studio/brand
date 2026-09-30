# Concepts and vocabulary

The words Meddle owns, and the ones it avoids. Read this for any copy task.

`scripts/check-copy.mjs` parses two tables below: **Avoid** (errors, which block shipping) and **Watch** (warnings, allowed in specific contexts). To ban, unban, or loosen a word, edit the table: that one change updates both the rule and the linter. Keep the table format intact (`| term | say instead | why |`). Put alternates in the first column separated by ` / `. End a term with `*` to match every form of the word (`disrupt*` catches disrupt, disruptor, disrupted, disruption). The **Say this, not that** table is guidance for writers and isn't linted; anything that must be caught belongs in Avoid or Watch.

## Words we own

| Term | Meaning and use | Example |
|---|---|---|
| **industry challengers** | Our audience. Ambitious companies ready to take on their category's leaders. Always plural, always lowercase. | "A brand studio for industry challengers." |
| **interfere with the status quo** | What challengers do, and what the name means. Our version of "disrupt." | "…who are ready to interfere with the status quo." |
| **unfair advantage** | What we give clients. Usually italicized as the payoff. | "It's time you seized an *unfair advantage*." |
| **brand studio** / **brand and design studio** | What Meddle is. | "Meddle is a brand and design studio…" |
| **business strategy + exceptional design** | The merger that defines our work. Keep the pairing. | "By merging *business strategy* with *exceptional design*…" |
| **clarity of purpose** | The strategic half of the promise. | "Clarity of purpose alongside exceptional design." |
| **founder-led** / **senior-only** | How we staff. Say it plainly; it's a differentiator. | "Dedicated, senior-only talent." |
| **co-create** / **partner** | How we work with clients: with them, not for them. | "We partner with you to *co-create*…" |
| **punch above their weight** | What our clients want to do. | "…challengers ready to punch above their weight." |
| **intro call** | The first step. The primary CTA everywhere. | "Book an intro call" |
| **Fortune favors the daring.** | Tagline and sign-off. Always italic, always with the period. | Closing line of pages, decks, emails. |

## Say this, not that

| Say | Not | Why |
|---|---|---|
| studio | agency | The traditional agency is our foil. We're built to be the alternative. |
| industry challengers | disruptors, startups | "Disruptor" is worn out. Many of our clients are maturing companies, not startups. (Exception: "early-stage startups" is correct when describing who Brand Sprints fit. See Watch.) |
| interfere with / challenge the status quo | disrupt | Same reason, and "interfere" is our name. |
| clients / partners | customers, accounts | Accounts are how agencies talk. |
| engagement / project | gig, job | Senior, not casual. |
| Book an intro call | Contact us, Get in touch today!, Schedule a consultation | One CTA, said the same way everywhere. |
| flat fee / one clear price | competitive pricing, custom quote | Transparency is the point. |
| senior-only / founder-led | our team of experts, rockstars | Specific beats boastful. |
| exceptional design | world-class design, cutting-edge design | Claims we can back up, not superlatives. |
| visual identity / identity system | logo package, branding package | We build systems, not files. |

## Avoid

The linter flags these. Most are agency clichés that make copy sound like everyone else's.

| avoid | say instead | why |
|---|---|---|
| agency | studio | We're the alternative to the agency model. "Traditional agency" is allowed only as the named foil in comparisons. |
| disrupt* | challenger, interfere with the status quo | Overused, and "interfere" is literally our name. |
| synerg* | (say the actual benefit) | Empty. |
| leverag* | use, build on | Jargon. |
| best-in-class / world-class | exceptional, or prove it with a result | Unprovable superlatives. |
| cutting-edge / bleeding-edge | modern, or name the specific thing | Cliché. |
| elevate your brand | (name the business outcome) | Agency filler. Use it only in the mission statement, where it's already approved. |
| seamless / seamlessly | (describe what actually happens) | Says nothing. |
| game-chang* | (show the change) | Cliché. |
| passionate | (show it through specifics) | Everyone says it. Nobody believes it. |
| boutique | founder-led, studio | That's how we describe competitors in the business plan, and it sounds small. |
| rockstar / ninja / guru | senior, or the actual role | Unserious in the wrong way. |
| solutions provider | studio, partner | Faceless. |
| tailored to your unique needs / tailored to your needs | (be specific about scope) | Mystery-pricing language. |
| custom quote | a clear price, or "engagements start at $30K" | The opposite of showing our cards. |
| competitive pricing | flat fee, one clear price | Vague, and it sounds like a discount. |
| contact us | Book an intro call | One CTA, said the same way everywhere. |
| in today's fast-paced world / ever-evolving landscape | (cut it) | A throat-clearing opener. |
| excited to announce / excited to share / thrilled to announce / thrilled to share / pleased to announce | (lead with the news) | Weak LinkedIn opener. |
| rush job | fast, two weeks | We're fast, never rushed. |

## Watch

The linter warns on these. They're right in some contexts and wrong in most, so check the context.

| term | say instead | why |
|---|---|---|
| startups / startup | industry challengers, companies | Allowed only for Brand Sprints fit ("Best for early-stage startups…"). Everywhere else our audience is challengers, and many are mature companies. |
| branding | brand strategy, visual identity, brand | Allowed in the core belief, and as a plain search term in page titles and SEO. |
| solutions | (name the solution) | Allowed only in the core belief and the live "custom solutions" line. |
| elevate | (name the outcome) | Approved only inside the mission statement. |
| get in touch | Book an intro call | Allowed only as a secondary CTA next to a primary "Book an intro call". |

## Allowed with care

**Linter-allowed phrases.** These exact phrases are approved even though they contain Avoid or Watch words. The linter skips them.

- `traditional agency`
- `traditional agencies`
- `early-stage startups`
- `premium branding`
- `custom solutions`


- **"Traditional agency."** Allowed as the named foil in comparison tables and sales copy. Never refer to Meddle as one.
- **"Solutions."** Allowed only in the core belief ("they buy solutions to their problems"). Otherwise, name the solution.
- **"Branding."** Allowed when quoting the core belief, or as a plain descriptive search term (page titles, SEO). In brand copy, prefer "brand strategy," "visual identity," or "brand."
- **"Elevate."** Approved inside the mission statement only.

## Product and offer names

Always spelled and capitalized exactly like this:

- **Project-Based** (engagement type)
- **Brand Sprints** (plural as the offer; "a Brand Sprint" for one)
- **Web Design Sprint** (the add-on)
- **Fractional Leadership** (the ongoing engagement)
- **Discovery Workshop** (the 90-minute deep dive in the sales process)

"Brand Immersion" and "Strategic Partnership" exist as unpublished drafts. Don't use them in public copy until they launch (see `../open-questions.md`).
