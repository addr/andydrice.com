# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary reader is Andy himself. Writing is the thinking tool; the site exists so the finished thought has a stable public address.

Secondary readers are people with a general desire to understand the good life and to create it for themselves and others. They are not a professional niche. They arrive by shared link or search, one essay at a time, and may return.

## Product Purpose

andydrice.com is Andy Rice's personal home on the web, with essays as its primary content. Its job is to publish finished essays at canonical URLs Andy owns forever, and to introduce Andy to a first-time visitor.

Success for iteration one was one essay live at its canonical URL after nine years of stalled publishing attempts. Durable success is that publishing stays as cheap as `git push`, so the pipeline never again becomes the reason nothing ships.

## Positioning

Essays written to figure out what the author believes, on the question of the good life, published on a domain the author controls. The site is the canonical home; any copy elsewhere points back here. It is not a newsletter, a portfolio, or a blog of updates.

## Operating Context

- Essays are drafted in Andy's Obsidian vault. At publish time the text is copied into `essays/` as Markdown with frontmatter, proofread, and frozen. The vault draft may keep evolving; the site copy is the text of record.
- Publishing is a push to `main`. Cloudflare Workers Builds redeploys the Eleventy output as static assets. No manual deploy step.
- Essays live at `/essays/<slug>`, no trailing slash, no extension. The slug is chosen by hand in frontmatter, never derived from the filename.
- Frontmatter is validated at build time with Zod. Required: `title`, `slug`, `date`, `description`. Reserved and optional: `updated`, `draft`, `syndication`, `spot` (an optional hex colour that sets the essay's spot colour, added 2026-09-22). A missing required field fails the build.
- Publication date is the ship date. Descriptions are one sentence and approved by Andy before ship.
- Work is tracked in GitHub Issues on `addr/andydrice.com`. Issue #1 is the iteration-one spec of record.
- Decisions and their reasoning are recorded as ADRs in `docs/adr/` (no client script, system fonts, the magazine direction and the mark, per-essay spot). The site's vocabulary is in `CONTEXT.md`. This file keeps the summary.

## Capabilities and Constraints

Confirmed and durable:

- No client-side JavaScript in served pages. Permanent.
- No analytics or reader tracking. Permanent.
- Static HTML built by Eleventy 3.1.x, served by Cloudflare Workers static assets with no Worker script and no Workers Cache.
- Markdown with typographer quotes, dashes, and ellipses, plus footnotes. No other Markdown plugins without a decision.
- HTML5 semantic elements and microformats2 on essays (`h-entry`, `p-name`, `e-content`, `dt-published`, `p-author`) so IndieWeb tools can parse pages without markup changes.
- Self-referencing canonical link on every essay. All asset links root-relative.
- Dark mode follows the system preference. No theme toggle.
- Config stays boring and vanilla. Anything a future Andy or agent cannot read without context is wrong.
- Repo is public with all rights reserved and no license file. Essays are not licensed for reuse.

- System fonts only. No web fonts and no shipped font files, ever. The type is Bodoni 72, Charter, and Futura with system fallbacks; the design must hold on the fallbacks. Decided 2026-09-22 after the visual direction locked.
- Single global stylesheet, CSS only.
- Visual world: a mid-century magazine identity program (warm paper, one spot colour per essay, strict two-column grid, drop initial, heavy rule, a small mark). Durable tokens and rules live in DESIGN.md.
- Optional `spot` frontmatter field on an essay: a hex colour used as that essay's spot colour. Defaults to the house terracotta.

Negotiable in a later design pass (iteration-one scoping, not commitments):

- Nothing currently. The 2026-09-21 placeholder values (fluid 17 to 22px Charter, 66ch, Tufte paper) were replaced by the 2026-09-22 direction.

Committed roadmap, not yet built:

- RSS feed at `/feed.xml`. The path is reserved; nothing else may claim it.
- About page.
- POSSE syndication: copies on Bluesky, Mastodon, dev.to, and Hashnode pointing back to the canonical URL. The `syndication` frontmatter field exists for this.
- Newsletter (Buttondown) and webmentions.

Open decisions:

- Whether the newest essay gets a pointer on the home page beyond the Essays link. (Resolved 2026-09-22: the home page is one paragraph about Andy with inline links only, no job or place, no contact or social links; the essay list lives at `/essays`.)
- Whether shorter notes or evolving pieces ever join the essays. Not planned.
- Retiring the 2017 Jekyll blog and the `www` redirect are in-flight infrastructure issues (#4, #5), not product decisions.

## Brand Commitments

- Name: Andy Rice. Site title is the name. No wordmark exists.
- Mark: a plumb bob silhouette, one colour, drawn as inline SVG in the templates. Chosen 2026-09-22. It appears once per page, small, in a different place on each page; never as a logo lockup with the name.
- Craft bar: om.co, matthewbutterick.com, and daringfireball.net. The site should sit alongside them in finish, not resemble them.
- Home page paragraph, approved 2026-09-22: "I’m Andy Rice. I write to figure out what I believe. Most of what I’m working out is an old question: what makes a good life, and how to build one for yourself and for the people around you. Lately that has meant figuring out what it means to be human in a world where intelligence is cheap, while wisdom is scarce." The first two sentences are the bio line used anywhere a one-liner is needed.
- Voice in the essays: first person, plain, direct, willing to make a claim and follow it. Not academic, not a newsletter voice.
- Repo history reads like Andy wrote it: prose commit messages, no attribution trailers, no emoji.

## Evidence on Hand

- One published essay: `essays/what-does-it-mean-to-be-human.md`, "What Does it Mean to Be Human in the Age of AI?", about 760 words, dated 2026-09-21.
- No testimonials, press, subscriber counts, or reader data exist, and no analytics ever will. Future work must not fabricate social proof or reader numbers.
- No images or photographs of Andy are in the repo.

## Product Principles

1. Publishing must stay trivially cheap. Any feature that adds a step between finished draft and live URL is suspect.
2. The site is a home, not a feed. A visitor should understand who Andy is and find the writing; nothing pushes them to subscribe, follow, or act.
3. The essay is the unit. Each one gets a permanent address, honest date, and frozen text.
4. Everything served is inspectable and durable: plain HTML, no scripts, no tracking, no dependencies a reader's browser has to trust.
5. Iteration is driven by evidence from shipped work, not by designing ahead of it.

## Accessibility & Inclusion

No specific standard was mandated. Existing commitments that serve accessibility and must be kept: semantic HTML5, system dark mode, no JavaScript required to read anything, readable measure and fluid type.
