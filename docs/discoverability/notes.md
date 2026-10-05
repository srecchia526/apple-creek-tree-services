# Discoverability and structured content

Reviewed October 4, 2026. Scope: the four public capstone pages on `main` at base commit `a100947`. The architecture example and earlier planning files remain historical documents, not additional public service pages.

## Metadata inventory

| Page | Purpose and user task | Title | Primary heading | Canonical |
| --- | --- | --- | --- | --- |
| Home (`index.html`) | Introduce tree-care planning; find services or the form demo | Tree Care Planning \| Apple Creek Tree Services | Tree care built around your property. | https://srecchia526.github.io/apple-creek-tree-services/ |
| Services (`services.html`) | Read the four service-planning summaries; describe the work in the form demo | Tree-Care Services \| Apple Creek Tree Services | Core tree-care services | https://srecchia526.github.io/apple-creek-tree-services/services.html |
| Gallery (`gallery.html`) | Understand service types through original illustrations | Service Illustrations \| Apple Creek Tree Services | Tree-care service illustrations | https://srecchia526.github.io/apple-creek-tree-services/gallery.html |
| Estimate (`estimate.html`) | Practice describing work and access; check entries locally | Estimate Form Demo \| Apple Creek Tree Services | Prepare your estimate request | https://srecchia526.github.io/apple-creek-tree-services/estimate.html |

Exact meta descriptions implemented in each page's head:

- Home: Explore tree-care planning, service illustrations, and an estimate-form demonstration on the Apple Creek Tree Services student capstone website.
- Services: Read about tree removal, trimming and pruning, stump grinding, and storm cleanup planning in the Apple Creek Tree Services student capstone.
- Gallery: View original tree removal, pruning, and storm cleanup illustrations in the Apple Creek student capstone. These are illustrations, not completed-job photos.
- Estimate: Practice describing tree work and property access in the Apple Creek capstone estimate form. Entries are checked locally; nothing is sent or saved.

## Publication, canonical, robots, and sitemap decisions

All four URLs above returned HTTP 200 with the corresponding existing page titles during this review. The existing wide hero SVG also returned HTTP 200 and `image/svg+xml`. These checks confirm the repository's existing published capstone address; they do not verify real business operations or publication of these new edits. The published site needs another check after deployment.

Each page now declares its preferred HTTPS URL. Home uses the directory URL rather than `/index.html`; existing relative navigation links remain intact. Canonical annotations express a preference, not a guarantee of Google's selection. If hosting changes, update all four canonicals, Home social URLs, and the sitemap together.

`sitemap.xml` lists only the four public pages, with the same preferred URLs. No guessed last-modified dates, priorities, historical documentation, or unimplemented pages are included. Submit the sitemap URL in Search Console after deployment and verified property access.

No `robots.txt` is added. This is a GitHub Pages project beneath `/apple-creek-tree-services/`; crawlers read robots rules at the host root (`https://srecchia526.github.io/robots.txt`), not the project directory. A project-level file would suggest control it does not provide. A host-root robots policy is deferred until ownership and the needs of other projects on that host are reviewed. There is no new `noindex` directive on these public capstone pages. Robots exclusion is not privacy protection and is not a reliable way to remove an already indexed URL.

## Headings, links, and accessibility

Each public page retains one descriptive H1 and its existing H2/H3 hierarchy. Gallery's generic “Cleanup” heading now reads “Storm Cleanup” to match its image and paragraph. Home's service link now reads “View Tree-Care Services.” Existing navigation uses ordinary HTML anchors with `href`, including current-page indicators and the skip link. Existing form labels, error handling, status announcements, styles, and JavaScript are preserved.

The stray `</source>` was removed because `source` is a void element. The mobile picture source now states its 800 by 1000 dimensions, alongside the existing desktop image's 1600 by 900 dimensions. No keyword stuffing or image-alt changes were needed.

## Social metadata

Home has Open Graph title and description matching its search metadata, the verified Home URL, `website` type, and site name. The image URL points to the existing `assets/hero-tree-care-wide.svg` at the published base URL. Image type is `image/svg+xml`, dimensions are 1600 by 900, and image alt is “Illustration of a tree-care worker inspecting a mature tree.” This reuses existing artwork and adds no new business claim.

This is source-checked Open Graph markup, not a verified platform preview. Some sharing platforms may not render this SVG. A PNG/JPEG export of the existing illustration and platform debugger checks remain deferred before relying on an image preview; update image URL/type/dimensions when that export is ready. No successful Facebook, LinkedIn, or other social-preview test is claimed.

## Structured-data decision

No JSON-LD is added. The current pages are a student demonstration, and the form does not submit to a business. A production business domain, address, phone, service area, operating hours, credentials, emergency availability, and testimonials have not been verified. The GitHub Pages capstone address is verified, but that alone does not establish a real LocalBusiness identity. I am deferring business structured data until facts can be checked against visible, owner-approved page content. A generic WebPage object could describe these pages, but is not required for this assignment and does not establish a business or a supported rich-result feature.

Google's structured-data guidelines require markup to represent the page accurately; syntactically valid fictional business details would not meet that purpose. There is no JSON-LD to run through a structured-data validator now. If business markup is later appropriate, verify its facts first, check JSON-LD with the Schema.org validator, and use Google's Rich Results Test for supported features. Passing a validator would not guarantee a rich result.

## Image discoverability inventory

Existing filenames already describe their subjects, so they are retained to preserve URLs and accessibility evidence. All images are original service illustrations, not photographs of completed jobs.

| File | Dimensions | Alternative and page context |
| --- | --- | --- |
| `assets/hero-tree-care-wide.svg` | 1600 × 900 | Informative Home image: worker inspecting a mature tree; alongside tree-care planning introduction; reused for Home sharing |
| `assets/hero-tree-care-tall.svg` | 800 × 1000 | Mobile art direction of the same subject; shares the picture's image alt; not a second separately announced image |
| `assets/tree-removal.svg` | 800 × 600 | Informative Gallery image: worker preparing controlled removal near a house; Tree Removal heading and planning paragraph |
| `assets/pruning.svg` | 800 × 600 | Informative Gallery image: worker pruning with a pole saw; Trimming & Pruning heading and clearance/structure paragraph |
| `assets/storm-cleanup.svg` | 800 × 600 | Informative Gallery image: cut branches stacked after a storm; Storm Cleanup heading and debris-planning paragraph |

All informative images keep their existing descriptive alt. No decorative image needs a new alt decision. Explicit dimensions, gallery lazy loading, SVG scaling, hero priority, and responsive art direction remain in place. Services and Estimate have no content images.

## Validation evidence and limits

- The official W3C Nu HTML Checker received the edited source of all four pages on October 4, 2026. Each returned an empty messages array: zero errors or warnings. Raw results are in [html-validation.json](html-validation.json).
- Local source inspection checks unique titles/descriptions, one H1 per page, heading progression, canonical URLs, local anchor/file targets, informative image alt/dimensions, and sitemap consistency. Results and reviewed file hashes are in [source-inspection.json](source-inspection.json). This is a source check, not a browser accessibility audit or a search-performance measurement.
- Live HTTP checks verified the existing published page and image URLs before edits. They do not show the edited metadata is deployed.
- The Module 5 report and evidence remain unchanged. Their hashes and browser results apply to the earlier reviewed files, not automatically to this revision. A fresh visual, keyboard, zoom, narrow-screen, and form check is still needed after deployment. No new full accessibility-conformance claim is made.
- JSON-LD validation is not applicable because business markup is deferred. Social platform debugger, Search Console indexing, and rich-result checks have not been performed.

## Claims I will not make

I will not claim these changes guarantee first-page rankings, increased traffic, or more estimate requests; I have no ranking, traffic, or conversion evidence. I will not claim Google must display my exact titles/descriptions or select my canonical URLs. I will not claim that structured data, a sitemap, or passing HTML validation guarantees indexing or rich results. I will not describe these illustrations as actual completed jobs or promise emergency response.

## Sources and next checks

- [Google: title links](https://developers.google.com/search/docs/appearance/title-link) and [snippets](https://developers.google.com/search/docs/appearance/snippet)
- [Google: valid metadata](https://developers.google.com/search/docs/crawling-indexing/valid-page-metadata) and [canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google: robots.txt scope](https://developers.google.com/search/docs/crawling-indexing/robots/intro) and [sitemap construction](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google: image discoverability](https://developers.google.com/search/docs/appearance/google-images)
- [Open Graph protocol](https://ogp.me/)
- [Google: structured-data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [W3C Nu HTML Checker](https://validator.w3.org/nu/), [Schema.org validator](https://validator.schema.org/), and [Google Rich Results Test](https://search.google.com/test/rich-results)

After deployment, inspect the live page source and all canonical/social/image URLs, load the sitemap, repeat the accessibility checks, and test an exported raster share image. Search Console checks require verified access and cannot be inferred from public HTTP responses.
