# No client-side JavaScript and no reader tracking

Every page is plain HTML and one stylesheet. No script runs in the reader's browser, no analytics or tracking is ever added, and dark mode follows the system preference with no toggle. The site exists so a finished essay has a durable, inspectable address; anything a reader's browser has to execute or trust works against that, and reader numbers would only tempt the writing toward an audience it is not for. Decided 2026-09-21 and confirmed permanent on 2026-09-22.

## Consequences

- Interactions are limited to what CSS can do: hover, focus, `:visited`, and `prefers-color-scheme`.
- There will never be reader data to design from. Iteration is driven by shipped work, not metrics.
- Features that need a script (search, comments, a theme toggle) are out unless this decision is reversed in a new ADR.
