---
name: andydrice.com
description: A mid-century magazine identity program at reading scale, set in system fonts on warm paper with one spot colour per essay.
colors:
  paper: "#f6efe2"
  paper-dark: "#1d1913"
  ink: "#2a241c"
  ink-dark: "#e6dccb"
  soft: "#6f6456"
  soft-dark: "#a69c8c"
  hair: "#e0d7c6"
  hair-dark: "#2c271f"
  rule-read: "#d3cab9"
  rule-read-dark: "#3b352c"
  spot: "#b8673f"
  spot-dark: "color-mix(in oklab, #b8673f 62%, #f6efe2)"
  spot-text: "color-mix(in oklab, #b8673f 78%, #1a1008)"
  spot-text-dark: "color-mix(in oklab, #b8673f 62%, #f6efe2)"
typography:
  display:
    fontFamily: "Bodoni 72, Bodoni 72 Oldstyle, Didot, Big Caslon, Hoefler Text, Georgia, serif"
    fontSize: "clamp(2rem, 3.3vw, 2.9rem)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "-0.005em"
  headline:
    fontFamily: "Bodoni 72, Bodoni 72 Oldstyle, Didot, Big Caslon, Hoefler Text, Georgia, serif"
    fontSize: "2.6rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.005em"
  title:
    fontFamily: "Bodoni 72, Bodoni 72 Oldstyle, Didot, Big Caslon, Hoefler Text, Georgia, serif"
    fontSize: "1.85rem"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.005em"
  lede:
    fontFamily: "Charter, Bitstream Charter, Iowan Old Style, Georgia, serif"
    fontSize: "1.45rem"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Charter, Bitstream Charter, Iowan Old Style, Georgia, serif"
    fontSize: "1.2rem"
    fontWeight: 400
    lineHeight: 1.55
  standfirst:
    fontFamily: "Charter, Bitstream Charter, Iowan Old Style, Georgia, serif"
    fontSize: "1.2rem"
    fontWeight: 400
    lineHeight: 1.45
  small:
    fontFamily: "Charter, Bitstream Charter, Iowan Old Style, Georgia, serif"
    fontSize: "1.08rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Futura, Avenir Next, Gill Sans, Century Gothic, Segoe UI, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "0.18em"
  code:
    fontFamily: "Menlo, SF Mono, Consolas, monospace"
    fontSize: "0.85em"
rounded:
  none: "0"
  focus: "1px"
spacing:
  rail-gap: "2.2rem"
  rule-inset: "1.6rem"
  entry-pad: "1.3rem 0 1.7rem"
  entry-gap: "1.6rem"
  after-head: "2.4rem"
  after-stand: "2.6rem"
  foot-gap: "4rem"
  page-top: "clamp(2.5rem, 7vh, 4.5rem)"
  page-side: "clamp(20px, 5vw, 72px)"
  column-gap: "clamp(2.5rem, 6vw, 6rem)"
components:
  rail-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  rail-link-hover:
    textColor: "{colors.spot-text}"
  rail-link-current:
    textColor: "{colors.spot-text}"
  entry:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    padding: "{spacing.entry-pad}"
  entry-hover:
    textColor: "{colors.spot-text}"
  text-link:
    textColor: "{colors.spot-text}"
  go-link:
    textColor: "{colors.spot-text}"
    typography: "{typography.label}"
  foot:
    textColor: "{colors.soft}"
    typography: "{typography.label}"
  mark:
    textColor: "{colors.ink}"
    size: "1.15rem"
---

# Design System: andydrice.com

## Overview

**Creative North Star: "The Magazine Program"**

andydrice.com is a mid-century magazine identity program scaled down to a single reading column. It is built from the discipline of a print program rather than the conventions of a blog: ink on warm paper, one spot colour, a strict two-column grid with a wayfinding rail on the left, and a small found mark that turns up once per page in a different place. Nothing announces itself. There is no name header, no hero, no wordmark; the index paragraph carries the name, and the essays list is a page of rules and titles.

The build is flat and typographic. Depth is carried by rule weight (a 5px ink rule opens the reading column; 5px spot rules head each list entry; 1px hairlines separate footnotes and code), by the three faces (Bodoni for display and the drop initial, Charter for text, Futura tracked caps for labels), and by the single spot colour, which is allowed to appear only as the drop initial, the rules, the closing square, the current-page dot, and link ink. All type is system-installed; the design is required to hold on the fallbacks, so nothing depends on a face's exact metrics. Dark mode follows the system through `light-dark()`, with the spot's dark rendition derived from the one house hex so a per-essay `spot` value in frontmatter recolours the whole page in both schemes.

The confirmed refusals are the category default (cream paper with a centred serif column and a ruled dated list) and the marketing reflex (hero type, saturated fields, pills, buttons, social proof). There is no client script, no raster, no web font, and no shadow.

**Key Characteristics:**
- Warm paper and dark ink in both schemes; one terracotta spot, overridable per essay
- Bodoni display, Charter text, Futura tracked-cap labels; system fonts only
- Rail-plus-column grid; the rail holds wayfinding, the date, and the mark
- Heavy rules do the structural work: 5px ink above the words, 5px spot above each entry
- A spot drop initial opens the paragraph or essay; a spot square closes each essay
- Visited entries fade their rule to grey through pure CSS `:visited`
- The plumb bob mark, 1.15rem, in ink, exactly once per page, never beside the name

## Colors

A two-value warm neutral world (paper and ink, each with a soft and a hairline step) plus one spot, and every value carries a dark-scheme rendition.

### Primary
- **Terracotta Spot** (`{colors.spot}`): the house spot colour. It is the drop initial, the 5px rule above every unread list entry, the square that closes each essay, the current-page dot in the rail, the focus ring, and the selection highlight. It is never a fill behind text and never a background field.
- **Spot in the Dark** (`{colors.spot-dark}`): the spot at 62% mixed with light paper in OKLab, used wherever the spot appears under the dark scheme. Derived, not hand-picked, so a single hex in frontmatter is enough (lands near #d29a7d for the house terracotta, about 7.2:1 on dark paper).
- **Spot as Ink** (`{colors.spot-text}`): the spot deepened toward near-black (78% spot, 22% #1a1008 in OKLab) for anything set as running text in the spot: inline links, the current rail item, hovered rail and entry titles. Lands near #925232 for the house terracotta, about 5.3:1 on paper. Under the dark scheme it collapses to the same value as Spot in the Dark.

### Neutral
- **Paper** (`{colors.paper}` / `{colors.paper-dark}`): the only background. Set on both `html` and `body`; there are no cards, panels, or tinted fields.
- **Ink** (`{colors.ink}` / `{colors.ink-dark}`): all body and display text, the rail links at rest, the 5px rule above the reading column, the blockquote's left hairline, and the mark.
- **Soft** (`{colors.soft}` / `{colors.soft-dark}`): the standfirst, the "Published" word in the rail, the footer line, and the footnotes. Secondary text only; never a rule.
- **Hair** (`{colors.hair}` / `{colors.hair-dark}`): 1px separators inside the essay body: the horizontal rule, the footnote separator, and the border around a code block.
- **Rule Read** (`{colors.rule-read}` / `{colors.rule-read-dark}`): the 5px entry rule once the entry has been visited. A grey a step darker than Hair so a read entry still reads as ruled.

### Named Rules
**The One Spot Rule.** A page carries exactly one spot colour, set by `--spot-base`, except the essays list, where each entry sets its own `--spot-base` on its rule, the only place two spots may meet. It is drawn as rules, one initial, one square, one dot, and link ink; it never fills a surface and never sits behind text.

**The Derived Dark Rule.** Never hand-pick a dark-scheme spot. The dark rendition and the text rendition are both `color-mix()` derivations of `--spot-base`, so a per-essay `spot` hex recolours every scheme and every use at once.

**The Spot-as-Ink Rule.** The spot as a rule or initial is `--spot`; the spot as running text is `--spot-text`. Do not set text in `--spot` on light paper (3.6:1 for the house value).

## Typography

**Display Font:** Bodoni 72 (with Bodoni 72 Oldstyle, Didot, Big Caslon, Hoefler Text, Georgia)
**Body Font:** Charter (with Bitstream Charter, Iowan Old Style, Georgia)
**Label Font:** Futura (with Avenir Next, Gill Sans, Century Gothic, Segoe UI, system-ui)
**Code:** Menlo (with SF Mono, Consolas), inline at 0.85em

**Character:** A high-contrast modern serif for the few large words, a sturdy transitional text face for the many small ones, and a geometric sans in tracked caps for the wayfinding. All three ship with the operating system; the pairing is a print program's, not a web font's. Body text uses oldstyle proportional figures and hanging first-line punctuation.

### Hierarchy
- **Display** (400, clamp(2rem, 3.3vw, 2.9rem), 1.04, tracking -0.005em): the essay title, balanced, capped at 18em wide.
- **Headline** (400, 2.6rem, 1.0; 2.1rem on phone): the "Essays" list heading.
- **Title** (400, 1.85rem, 1.08): each essay's title on the list, balanced; the newest entry alone is set at 2.35rem. Also the in-essay `h2` (1.85rem) and `h3` (1.45rem), both at 1.1.
- **Lede** (400, 1.45rem, 1.45; 1.25rem on phone): the one index paragraph, capped at 30em.
- **Body** (400, 1.2rem, 1.55; 1.1rem on phone): essay text on a 64ch measure.
- **Standfirst** (400 italic, 1.2rem, 1.45, in Soft): the essay description under the title, capped at 34em.
- **Small** (400, 1.08rem, 1.5): the one-sentence description under each list entry, capped at 34em. Footnotes sit at 1rem/1.5 in Soft.
- **Label** (500, 0.72rem, tracking 0.18em, uppercase, 1.6): the rail nav, the "Published" line and date, the entry date, the footer, and the ESSAYS door on the index (0.68em of its paragraph). Footnote reference numbers use the label face at 0.7em.
- **Drop initial** (400 Bodoni, in `--spot`, floated, line-height 0.8): 5.7em on the index paragraph, 4.9em on the essay's first paragraph.

### Named Rules
**The Three Faces Rule.** Bodoni for display and the initial, Charter for reading, Futura for labels. No face plays another's part: no Bodoni labels, no Futura headings, no Charter caps.

**The Fallback Holds Rule.** No web fonts, no shipped font files. Every size and measure is chosen to survive on Georgia and Gill Sans; nothing depends on a face's exact metrics.

**The Newest Is Largest Rule.** On the list, the first entry's title steps up from 1.85rem to 2.35rem. Only the newest.

## Layout

The body element is the grid. Two columns at desktop: a rail of clamp(10rem, 16vw, 14rem) and a reading column of the remainder, separated by a column gap of clamp(2.5rem, 6vw, 6rem), the whole capped at 78rem and centred. Page padding is clamp(2.5rem, 7vh, 4.5rem) top, clamp(20px, 5vw, 72px) at the sides, 3rem at the foot. The rail is sticky at the page-top offset and lays its items out as a column with a 2.2rem gap; on the essay page the mark pushes to the rail's foot with an auto top margin. The reading column takes the second grid column, sits under a 5px ink rule with 1.6rem of inset below it, and the footer joins the same column 4rem after the main. The essays list drops the ink rule (`.main.plain`) because its entries carry their own rules.

Content measures are set per role, not per page: the index paragraph at 30em, the essay body and footnotes at 64ch, the standfirst and entry descriptions at 34em, the title at 18em, the list at 44rem. The right third of the desktop viewport is left empty on purpose.

Inside the list, each entry is its own two-column grid: a 10.5rem date column and the title column, 1.6rem apart, with the description in a second row under the title. Entries are padded 1.3rem above and 1.7rem below their 5px rule.

At 720px and below the grid folds to one column with a 1.6rem row gap and 1.6rem top padding. The rail becomes one or two rows: the nav spans the full width as a flex row (1.4rem gap), the date and mark share the next row with the mark pushed right, the current-page dot is hidden, and the rail is no longer sticky. Body drops to 1.1rem, the index paragraph to 1.25rem, the list heading to 2.1rem, and entries stack date, title, description.

**The Body Is the Grid Rule.** There is no wrapper container. The rail and the reading column are direct children of `body`, placed by `grid-column`.

## Elevation & Depth

No shadows anywhere. The system is a flat print surface; depth is conveyed by rule weight and colour, not by layering. A 5px rule in ink is the heaviest structural element and marks the top of the reading column; 5px rules in the spot head each list entry; 1px hairlines in Hair separate footnotes, divide sections, and box code. There are no cards, panels, tints, or backdrop effects; the only background is Paper. Motion is a single 0.15s ease-out colour transition on links, applied only under `prefers-reduced-motion: no-preference`.

**The Rules Not Shadows Rule.** Hierarchy is drawn with rules of three weights (5px ink, 5px spot, 1px hair). Never add a shadow, a border-radius, or a tinted panel to separate content.

## Shapes

Square. Every corner is a hard corner: rules are flat bars, the code block is a 1px hairline box, the closing endmark is a 0.6em spot square. The only radius is the 1px softening on a focus outline and the 50% radius on the 0.42rem current-page dot. Links underline with a 1px stroke offset 0.18em; the rail and entries drop the underline entirely and use colour instead. The mark is the one organic silhouette on the page: a plumb bob drawn as a filled path in `currentColor`, 1.15rem square.

## Components

### Rail (navigation)
- **Style:** a `<nav aria-label="Site">` list in the label face, with the site title and Essays as the only two links. No underline. The "Published" line and date follow it in the essay's rail, and the mark closes the rail on essay pages.
- **Default / hover / current:** Ink at rest; Spot as Ink on hover and for the current page, which also gains a 0.42rem spot dot 1.1rem to its left at 0.62em down. Both links carry `aria-current="page"` when current.
- **Mobile:** one flex row with 1.4rem gaps; the dot is hidden.

### Entry (list item)
- **Shape:** an `<a>` block spanning date, title, and description, no radius, 5px spot rule on top.
- **Color:** Ink text on Paper; the rule is the spot. Once visited the rule turns to Rule Read through `:visited`; nothing else changes.
- **Hover / Focus:** the title turns to Spot as Ink. The block carries the focus ring.
- **Internal padding:** 1.3rem above, 1.7rem below; 1.6rem between date and title columns.

### Text link
- **Style:** Spot as Ink, 1px underline offset 0.18em. Focus is a 2px spot outline offset 4px with 1px radius. The transition is colour only, 0.15s.
- **Go link (index):** the ESSAYS door is set in the label face at 0.68em of its paragraph, tracked 0.18em, uppercase, no underline at rest, nothing between it and the plumb bob; hover underlines at 0.3em offset.
- **Footer link:** inherits Soft, no underline, Spot as Ink on hover.

### Drop initial
The first letter of the index paragraph (a marked-up span with a visually hidden copy for screen readers) and of the essay's first paragraph (a `::first-letter`), floated left in Bodoni at 400, line-height 0.8, in `--spot`, padded 0.06em to 0.07em top and 0.12em right. 5.7em on the index, 4.9em in the essay.

### Endmark
A 0.6em square in `--spot` drawn by `::after` on the essay's last paragraph, 0.4em after the final word. On the index the paragraph closes with the mark instead.

### The mark
The plumb bob: a 24-unit inline SVG (circle, stem, and bob path) filled with `currentColor`, rendered at 1.15rem in Ink, `aria-hidden`. Once per page and in a different place on each: closing the index paragraph, under the entries on the list, at the foot of the rail on an essay. Never beside the name as a lockup.

### Essay body
Charter at 1.2rem/1.55 on 64ch. Paragraphs are separated by 1em and pretty-wrapped. `h2` and `h3` are Bodoni. Blockquotes are italic with a 1px ink rule on the left and 1.2em inset. Horizontal rules and the footnote separator are 1px Hair. Code blocks are 0.9rem/1.45 in a 1px Hair box with 1em padding. Footnotes are 1rem/1.5 in Soft; reference numbers are in the label face at 0.7em with no underline.

## Do's and Don'ts

### Do:
- **Do** set every page's spot through `--spot-base` only; let `--spot`, `--spot-dark`, and `--spot-text` derive from it.
- **Do** use `--spot-text` for any text in the spot and `--spot` for rules, the initial, the square, the dot, the focus ring, and selection.
- **Do** open a reading page with the 5px ink rule and 1.6rem inset, and open a list entry with a 5px spot rule.
- **Do** place the plumb bob once per page, at 1.15rem in Ink, somewhere it has not been on the other pages.
- **Do** set labels in Futura at 0.72rem, 500, tracked 0.18em, uppercase; set titles in Bodoni at 400 with -0.005em tracking.
- **Do** keep the two-column grid on `body` and fold it to one column at 720px with the rail as a row.
- **Do** fade a visited entry's rule to Rule Read with `:visited` and change nothing else about it.

### Don't:
- **Don't** add shadows, radii, cards, tinted panels, pills, or buttons; the surface is flat paper and rules.
- **Don't** ship a web font, a font file, a raster, or a client script.
- **Don't** add a name header, a wordmark, or a lockup of the mark with the name; the index paragraph carries the name.
- **Don't** set text in `--spot` on light paper or hand-pick a dark-scheme spot.
- **Don't** put the essay list on the index. One spot colour per essay page and per the home page; on the essays list each entry carries its own essay's spot on its rule, and that is the only place two spots may meet.
- **Don't** add social proof, counts, subscribe prompts, or a theme toggle; dark mode follows the system.
