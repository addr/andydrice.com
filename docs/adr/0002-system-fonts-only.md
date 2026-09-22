# System fonts only, and the design must hold on the fallbacks

The type is Bodoni 72 for display and the drop initial, Charter for text, and Futura in tracked capitals for labels, all as installed on the reader's system, with Didot, Georgia, Avenir Next, and Gill Sans as fallbacks. No web fonts are loaded and no font files are shipped, ever. Decided 2026-09-22 after the visual direction locked.

## Considered options

- Self-hosted web fonts for exact metrics on every device. Rejected: they add bytes, a third asset type, and a render-blocking dependency to a site whose whole promise is that a page is nothing but text, and they would make the design depend on one face's metrics.
- A single system face everywhere. Rejected in the direction rounds as too plain.

## Consequences

- Every size and measure is chosen to survive on Georgia and Gill Sans. Nothing may depend on a face's exact metrics.
- On systems without Bodoni 72 or Charter the page looks different but still correct. That is acceptable and expected.
