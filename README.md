# Apple Creek Tree Services

## Module 5 accessibility review

Four public capstone pages: Home (`index.html`), Services (`services.html`), Gallery (`gallery.html`), and Estimate (`estimate.html`). Open `index.html` or serve the repository root with a local static server.

The estimate form is explicitly a local demonstration. It does not send or save requests. JavaScript provides validation and linked errors; with JavaScript off, the action is disabled and explained.

- [Conformance report and test scope](docs/accessibility/conformance-report.md)
- [Recorded evidence](docs/accessibility/evidence/)
- [Module 4 media and typography history](docs/testing/media-typography-evidence.md)

The Module 5 report supersedes earlier testing claims for the revised pages. Steven Recchia reports completing final personal capstone testing and fix verification. The report distinguishes that personal review from preliminary AI-assisted evidence. His personal checks used Google Chrome and included keyboard navigation, 200% browser zoom, narrow-screen layout and form errors. Chrome version, exact test date and narrow viewport width were not supplied. Deployed-release verification remains pending. The earlier architecture demo is historical and excluded from the public-page scope.

GitHub Pages can serve the repository root after the reviewed change is merged. The draft branch is not a deployed preview.

## Discoverability and structured-content assignment

My capstone has four public pages. The existing published site is [Apple Creek Tree Services](https://srecchia526.github.io/apple-creek-tree-services/); all four page URLs returned HTTP 200 during the October 4, 2026 review. The edits in this checkout still need to be committed and deployed.

I updated page-specific titles and descriptions, added canonical links, added Home-page Open Graph metadata using the existing illustration, and included a four-page sitemap. I clarified the Gallery storm-cleanup heading and the Home service link, removed an invalid closing source tag, and supplied the mobile picture source dimensions. The design, form behavior, and existing accessibility features remain in place.

The [metadata inventory and discoverability notes](docs/discoverability/notes.md) cover page purposes, user tasks, exact descriptions, image decisions, deferred business structured data, robots scope, social-preview limits, and claims I cannot support. A project-level robots file would not control this GitHub Pages host, so I have deferred that decision to the host root.

### Validation notes

The W3C HTML checker reported no errors or warnings in the four edited pages. Its [raw results](docs/discoverability/html-validation.json) and the [local source inspection](docs/discoverability/source-inspection.json) are saved with this update. This checks markup and source relationships, not ranking results. The new metadata is not yet verified on the deployed site. Social-preview testing and another browser accessibility check remain pending; the Module 5 evidence describes the earlier reviewed revision.

### AI disclosure

I used AI to help review the existing capstone files and prepare discoverability edits and documentation. The output considered included page titles and descriptions, canonical and social tags, a sitemap, and an image and heading review. Verification for this update included comparing descriptions with visible content, checking the existing published URLs, inspecting local links and image dimensions, and submitting the edited HTML to the W3C checker.

The resulting changes are the metadata and small content/markup improvements listed above. AI did not supply verified business facts. I left business structured data deferred and kept the estimate form's demonstration notices. The October 9 release sprint records browser checks separately from earlier evidence. Actual 200% zoom and final deployment of the sprint fixes still need verification.
