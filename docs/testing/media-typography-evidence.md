# Media and Typography Optimization Evidence

This update builds on the Module 3 responsive layout rather than replacing it. I kept the existing cascade layers, intrinsic grids, container query, content-driven breakpoints, and preference queries. I added original SVG media, responsive art direction, a documented type system, and explicit layout-stability rules.

## Asset inventory and provenance

| Asset | Source and license | Purpose | Optimization and accessibility |
|---|---|---|---|
| `hero-tree-care-wide.svg` | Original artwork created for this Apple Creek capstone; author-owned | Wide hero illustration | 1600 × 900 viewBox; descriptive alt text on the HTML image; high fetch priority; explicit dimensions reserve space |
| `hero-tree-care-tall.svg` | Original artwork created for this Apple Creek capstone; author-owned | Mobile art-direction version of the hero | 800 × 1000 viewBox; selected by `<picture>` below 42rem; shares the hero image's accessible name |
| `tree-removal.svg` | Original artwork created for this Apple Creek capstone; author-owned | Explains the tree-removal service | 800 × 600; meaningful alt text; lazy loaded; explicit dimensions |
| `pruning.svg` | Original artwork created for this Apple Creek capstone; author-owned | Explains the pruning service | 800 × 600; meaningful alt text; lazy loaded; explicit dimensions |
| `storm-cleanup.svg` | Original artwork created for this Apple Creek capstone; author-owned | Explains storm cleanup | 800 × 600; meaningful alt text; lazy loaded; explicit dimensions |
| System font stack | Fonts already installed on the visitor's operating system | Site typography | No network request, third-party license dependency, preload, FOIT, or avoidable web-font layout shift |

The code contains the same inventory as an HTML comment so the provenance travels with the page. There are no external stock photos, icon libraries, audio files, videos, animations, iframes, social embeds, or web fonts in this version. Caption, transcript, playback-control, embed-title, embed-fallback, and web-font-loading requirements are therefore not applicable.

## Responsive images and art direction

- The hero uses `<picture>` to select a tighter 4:5 composition below `42rem` and a 16:9 composition at wider sizes. This is art direction, not only scaling.
- The fallback `<img>` includes `width="1600"` and `height="900"`. CSS repeats the correct aspect ratio for both picture sources so their regions are reserved before loading.
- Gallery illustrations have `width="800"`, `height="600"`, `aspect-ratio: 4 / 3`, and `object-fit: cover`.
- SVG is the correct delivery format for this flat vector artwork. It remains sharp at any viewport or device-pixel ratio and avoids multiple raster copies. A raster `srcset`/`sizes` set was not added because those candidates would contain the same vector information and would not reduce the intrinsic SVG download. The `<picture>` sources are used only where the composition actually changes.
- The hero is above the fold and uses `fetchpriority="high"`. Gallery images use `loading="lazy"`. All images use asynchronous decoding.

## Accessibility decisions

- The hero and gallery images add information, so each has concise alt text describing its visible purpose.
- No text is baked into the artwork. The real headings and descriptions remain HTML.
- The SVG files include internal `<title>` and `<desc>` elements for direct-file inspection, while the `<img>` elements provide the accessible names used on the page.
- The illustrations are explicitly described as service illustrations. They are not presented as photographs of completed Apple Creek jobs.
- There is no audio, video, autoplaying animation, or external embed requiring controls, captions, transcripts, a title, or a fallback link.

## Typography and font loading

- The stack is `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`.
- The type scale uses rem-based values and fluid `clamp()` steps from `0.875rem` supporting text through the responsive hero heading.
- Body copy uses `line-height: 1.6`; headings use `1.15`.
- Paragraphs are limited to `68ch`, while section headings use a narrower section container.
- Spacing comes from a consistent rem-based token scale. Buttons and form controls inherit the same font.
- Because all faces are local system fonts, the page does not block on a font request. The fallback sequence is similar in metrics and reduces reflow across platforms.

## Checked testing evidence

| Check | Method | Result |
|---|---|---|
| Responsive width: 375px | Rendered page and inspected overflow/media selection | Pass — single-column reflow, vertical hero artwork, no horizontal overflow |
| Responsive width: 768px | Rendered page and inspected breakpoint behavior | Pass — hero/estimate layout split only when content has room; grids reflow |
| Responsive width: 1440px | Rendered page and inspected maximum wrapper width | Pass — wide hero composition selected and reading measure remains bounded |
| 200% zoom/reflow | Checked 1440px viewport at 200% zoom-equivalent layout | Pass — navigation wraps, content remains available, and no page-level horizontal scrolling is required |
| Slow network/layout shift | Disabled cache and throttled asset delivery; inspected reserved regions | Pass — image width/height plus CSS aspect ratios reserve the hero and gallery regions |
| Image dimensions | Compared HTML dimensions to each SVG viewBox | Pass — hero 1600×900 or 800×1000; gallery assets 800×600 |
| File size | Measured repository assets | Pass — each SVG is a small text asset; no oversized raster file is shipped |
| Alt text | Inspected every `<img>` in `index.html` | Pass — every informative image has a concise non-empty `alt` value |
| Captions/transcripts | Inventoried audio and video | Not applicable — the page contains neither |
| Embed fallback/title | Inventoried iframe and external embeds | Not applicable — the page contains neither |
| Font loading | Inspected document requests and CSS stack | Pass — no external font request or web-font layout-shift risk |
| HTML/CSS/SVG integrity | Parsed HTML, checked local references, and validated SVG XML | Pass — referenced local assets exist and parse successfully |

## Layout-shift risk review

Every `<img>` has numeric intrinsic dimensions. The CSS reserves the same ratios with `aspect-ratio`, uses `block-size: auto`, and limits media to its container. The mobile hero source changes from 16:9 to 4:5, and the matching media query changes the reserved CSS ratio at the same breakpoint. Lazy loading is limited to below-the-fold gallery media so the primary hero is not deferred.

## AI disclosure

I used ChatGPT to help compare the existing capstone to the rubric, draft original SVG illustration code, suggest responsive media markup, and organize the testing checklist. I considered the output instead of accepting it blindly. I kept the existing Module 3 layout system and visual direction, checked the HTML/CSS/SVG syntax, verified the image dimensions and local references, and changed the result where needed to fit the actual site. The final decisions to use author-owned SVG artwork, provide separate mobile and wide hero compositions, retain system fonts, and describe the illustrations honestly were made for this project and then verified against the assignment requirements.
