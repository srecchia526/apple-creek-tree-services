# Apple Creek accessibility conformance review

Module 5 capstone assessment | September 27 2026

Author and final manual tester: Steven Recchia

## Scope and outcome

The revised capstone has four public pages and ten documented findings or improvements. The Module 4 SVG illustrations, picture art direction, system fonts, reading measure, intrinsic grids, and cascade layers are retained. Services, Gallery, and Estimate content have been moved from the original single page into separate pages consistent with the repository site map. This gives the assessment a genuine multi-page test scope.

Baseline: repository commit 8c441b1412a39295d202efacc4526588e9983c51. The baseline had one public capstone page; the historical architecture test page is not a customer-facing page and was excluded. Newly separated pages are assessed in the revised version; the report does not imply they existed in the baseline.

- Home, index.html: first entry, shared navigation, hero art direction, skip link, reading order, and planning resources.
- Services, services.html: repeated cards, heading hierarchy, descriptive links, and responsive reading order.
- Gallery, gallery.html: informative illustrations, alternatives, lazy loading, and image scaling without loss of context.
- Estimate, estimate.html: labels, required states, instructions, native controls, error recovery, keyboard path, and confirmation.

Repository: https://github.com/srecchia526/apple-creek-tree-services
Existing published URL: https://srecchia526.github.io/apple-creek-tree-services/

The published URL was successfully checked after network access was granted. It returned HTTP 200 and still showed the original single-page version, with the same two axe rule findings. Remediation results apply to the revised local files and review branch, not to a deployed update. Production publishing and a post-deployment check remain separate steps.

## Test method and headline results

Automated checker: axe-core 4.10.3 in headless Microsoft Edge 154.0.4258.37. The baseline scan reported color-contrast on eight elements and one nested-complementary-landmark warning. Each revised page returned zero violations at 1440 and 320 CSS pixels. The form error state also returned zero violations. A zero count is not proof of full WCAG conformance.

I personally performed final manual testing of the revised capstone and verified the fixes. The supporting preliminary evidence was generated with AI assistance through source inspection, screenshots, computed styles, and directed browser keyboard actions. Those saved machine logs document the preliminary run, while my final manual verification is a separate part of this review.

Accessibility-tree sampling used Chromium's Accessibility.getFullAXTree for the Estimate page before input, after errors, and after valid entries. No screen-reader speech or braille test was performed.

Evidence is organized under evidence/before and evidence/after. Summary JSON records focus order, landmarks, titles, dimensions, image loading, and motion. Per-page axe JSON records violations and review items. interactions.json records errors, keyboard activation, no-JavaScript behavior, and resolved links. Screenshots and full raw trees are included in the downloadable evidence package. tested-files-sha256.json identifies the tested source files.

## Structure and inclusive interaction checks

Each revised page has an English language declaration, a distinct descriptive title, one h1, and a logical h2/h3 outline. Header, named navigation, main, and footer remain native HTML. Navigation is a list of anchors; each page has exactly one current-page link with aria-current and a visible underline. Links name their destinations or actions. The form uses native input, select, textarea, label, and button elements. All local link and fragment destinations were checked and resolved.

The first Tab exposes Skip to main content. Enter focuses main, now explicitly programmatically focusable without adding a normal Tab stop. Subsequent Tab advances into the content. On every page, forward traversal reaches the footer and exits the document without a trap. The form order is Name, Email, Phone, Service, Job details, Check request details. Shift+Tab from the button returns to Job details. ArrowDown changes the native Service selection. Enter and Space on the button activate validation.

Focus uses a dark outline with a white surrounding band so it remains visible against both light cards and the dark header. Screenshots show the focused navigation and input. The original focus outline already existed; this change improves robustness rather than claiming the original lacked focus entirely.

## Reflow text spacing and contrast

All four revised pages were checked at 320, 375, 768, and 1440 CSS pixels. Document width equaled viewport width in every recorded case. At 320 pixels, navigation wraps and cards stack. Screenshot review found no overlapping text or missing controls in the inspected views.

Text-spacing stress applied line height 1.5, letter spacing 0.12em, word spacing 0.16em, and paragraph spacing 2em at 320 pixels. All four remained at 320 pixels wide. A separate root-font enlargement from 16px to 32px at 1440 pixels also retained content without page overflow. This is a font-enlargement stress test, not actual browser zoom and not proof that every fluid font doubles. I personally tested actual 200% browser zoom in Google Chrome, along with narrow-screen layout, and verified the fixes. This personal confirmation is separate from the saved machine evidence. References [3] and [4].

Meaningful state contrast was checked from computed foreground/background colors using relative luminance. Ratios below are rounded for reporting; thresholds are 4.5:1 for ordinary text and 3:1 for control boundaries [1][2].

- Small orange text: originally about 3.22 to 3.69:1; now at least 5.99:1 on the tested light backgrounds.
- Current-page and button-hover text: 4.03:1 originally; 8.11:1 after the lighter orange background.
- Form boundaries against white: 1.39:1 originally; now 4.70:1.
- Default white button text on green: 9.34:1. Error text on white: 6.50:1.
- Dark focus outline against its white band: 18.88:1.

Axe review items remain for the Home gradient and decorative numbers and for the Estimate textarea background. The gradient's darkest endpoint was checked separately: heading 8.15:1, body 12.98:1, and small label 5.99:1. Decorative numbers now use the same 8.11:1 pair as navigation. The textarea has explicit ink on white, 14.87:1, and a 4.70:1 border; screenshots show it unobscured. These are reasoned manual-style resolutions, not deleted tool warnings.

## Remediation log

Priority definitions: High substantially affects use or understanding; Medium affects clarity or navigation; Low is a robustness or preference improvement. The technical measurements below come from the recorded preliminary checks. I subsequently repeated testing and verified the fixes.

### 1 Small orange text contrast

Evidence: the baseline axe color-contrast rule flagged seven small orange labels, including Services and Estimate. Independent calculation found 3.22:1 on pale green and 3.69:1 on white. Impact: small supporting text is difficult to read with reduced vision. Priority: High. Fix: use darker orange #914509 for small labels while preserving the brand palette. Retest: no revised axe violation; worst tested pair 5.99:1. Source: WCAG 1.4.3 [1].

### 2 Current and hover state contrast

Evidence: baseline current Home text measured 4.03:1; the button-hover rule used the same colors. Impact: interaction states make normal-sized text harder to read. Priority: High. Fix: lighter #f4b35d backgrounds with dark ink, plus an underline on the current page. Retest: computed current and hover states match the revised colors, 8.11:1; current links match all four pages. Source: WCAG 1.4.3 [1].

### 3 Faint form boundaries

Evidence: the original form used #d5ddd4 borders on white, 1.39:1. This was identified from CSS and contrast calculation, not an axe violation. Impact: users may not distinguish the white controls from their white container. Priority: High. Fix: use #6d766f control borders. Retest: all five controls expose the darker border; 4.70:1 on white. Source: WCAG 1.4.11 [2].

### 4 Required fields not visibly identified

Evidence: Name and Email had native required attributes but their labels did not identify them as required; no visible required-field instruction existed. Impact: users discover requirements only after submitting. Priority: High. Fix: add required text in both labels, optional text elsewhere, and an instruction before the fields. Retest: visible labels and accessibility-tree required states agree; blank submission identifies both missing fields. Source: WAI form guidance [5][6].

### 5 Instructions disappear and help is unassociated

Evidence: Job details instructions were in placeholder text and the separate privacy help had no programmatic relationship to the textarea. Impact: guidance disappears while typing and may not be conveyed when the field receives assistive-technology focus. Priority: Medium. Fix: move all guidance into persistent text and associate it with the field. Retest: instructions stay visible after typing; the tree exposes the complete text as the textarea description. Source: WAI form guidance [5][6].

## Remediation log continued

### 6 Placeholder submission and unclear outcome

Evidence: the original form used a placeholder action with POST and a Send Request button, but the static repository provided no handler or delivery service. No real user data was sent during review. Impact: visitors could mistake a prototype for a functioning estimate request. Priority: High. Fix: explicitly identify the form as a demonstration; replace the action with local validation, persistent linked errors, and an honest status message. Retest: Enter and Space work; empty submission focuses the error summary; its link focuses Name; malformed email gets a specific correction message; valid entries clear invalid states and produce confirmation. Zero POST requests were observed. Without JavaScript the button is disabled and an explanation is visible. Limitation: real estimate delivery remains unimplemented. Source: WAI notifications [6], plus operational review.

### 7 Unnecessary nested complementary landmark

Evidence: axe flagged the resource sidebar as a complementary landmark inside another landmark. Impact: unnecessary landmark structure can complicate navigation. Priority: Medium. Fix: use ordinary containers for planning panels that are part of the main content; retain their real headings. Retest: the warning clears, with header, navigation, main, and footer still exposed. Classification: axe best-practice improvement, not asserted as an independent WCAG failure.

### 8 Hero alternative mismatches mobile artwork

Evidence: the shared hero alternative described a home, while the tall mobile SVG shows a tree and worker without a house. Impact: nonvisual users receive a detail absent from that responsive image. Priority: Medium. Fix: use a description accurate for both compositions and identify the artwork as an illustration; clarify gallery alternatives likewise. Retest: source and image inspection confirm the description fits both hero assets; gallery images load with descriptive names. Source: non-text-content review under WCAG 1.1.1.

### 9 Reduced motion still moves the button

Evidence: under the original reduced-motion setting, transitions shortened but hover still applied a one-pixel upward transform. Impact: unnecessary movement remains for people requesting less motion. Priority: Low. Fix: explicitly remove hover transformation for reduced motion. Retest: computed transform is none and smooth scrolling becomes auto. Classification: preference improvement aligned with animation guidance [8], not an asserted AA violation. There is no continuing autoplay animation requiring pause controls.

### 10 Page scope and focus destination robustness

Evidence: the repository contained one public page, insufficient for the assignment's three-page scope; the original skip link advanced reading position but left document.activeElement on body in the tested browser. Impact: limited page scope and a less explicit focus destination. Priority: Medium for assessment scope; Low for focus robustness. Fix: create four actual pages, unique titles/current states, and a programmatically focusable main on each. Retest: every skip link focuses main; all page links resolve. This is an architecture and robustness improvement, not a claim that sections are inherently inaccessible.

## Forms media and accessibility tree sample

The Estimate form retains explicit labels, autocomplete for personal-information fields, a native email input, select and textarea. Errors use text, invalid-state semantics and linked correction targets, rather than color alone. The local confirmation uses a polite status region and clears when entries change. Error messages update on resubmission. Server-side validation, real delivery, and failure handling for a backend are outside this prototype.

There are no data tables in the four public pages. Caption, header cells, scope and responsive table strategies are therefore not applicable. No layout tables were introduced.

The hero and gallery SVGs are informative service illustrations, not photographs of completed work. Their image elements have descriptive alternatives; SVG files also retain internal titles and descriptions for direct viewing. HTML headings and descriptions provide visible context. Decorative resource numbers are hidden from the accessibility tree and contain no unique information. Explicit dimensions, scalable vectors, mobile hero art direction and bounded typography from Module 4 are preserved.

No audio, video, iframe, embedded third-party content, or autoplaying media exists. Captions, transcripts, player controls, embed titles and fallback links are not applicable. There are no nonessential looping effects to stop or hide. Reduced motion disables smooth scrolling and the hover translation while leaving color feedback and keyboard operation available.

### Accessibility tree observations

Estimate page sample, Chromium Accessibility.getFullAXTree:

- The form is named Prepare your estimate request and described by required-field and demonstration instructions.
- Name and Email are textboxes with required=true. Phone is optional; Service is a named combobox; Job details is a multiline textbox with persistent help as its description.
- After empty submission, the Name and Email nodes expose invalid=true and their respective error descriptions. Error-summary links are keyboard reachable and target their fields.
- The button is named Check request details. The status node has live=polite and atomic=true, with the confirmation text present after valid entries.

This sample confirms browser-exposed roles, names, states and relationships in the tested states. It does not establish actual speech timing, verbosity, virtual-cursor navigation or compatibility with every screen reader. The raw trees and a compact selection are retained; no NVDA, JAWS or VoiceOver result is claimed.

### Repeat the recorded checks

Open each revised HTML page or serve the repository root locally. Run axe-core 4.10.3 at 1440 and 320 CSS pixels. Inspect all reported violations and review items. Tab through every page; activate the skip link and navigation with Enter. On Estimate, use the sequence Name, Email, Phone, Service, Job details, button. Reverse with Shift+Tab, and use arrow keys in Service. Submit blank values, then a name plus malformed email, then Test User and test@example.com. Confirm errors, linked focus, and the honest success message. Apply the spacing values on page 2 and inspect each page at 320 pixels. Inspect the form's accessibility tree before errors, after errors, and after success.

## Conformance summary and release limitations

Within the local sample, native structure, names, keyboard traversal, linked errors, informative image alternatives, responsive layout, text-spacing tolerance, tested contrast pairs, and reduced-motion behavior appear consistent with the relevant accessibility expectations. The ten logged findings or improvements were addressed and retested. Zero axe violations were reported on each revised public page at desktop and narrow widths, with remaining review items documented separately.

This is a scoped conformance summary, not certification or a claim of complete WCAG 2.2 AA compliance. I have completed final manual testing and fix verification. My final personal checks used Google Chrome and included keyboard navigation, actual 200% browser zoom, narrow-screen layout and form error messages. The Chrome version, exact test date and narrow viewport width were not supplied. The saved preliminary evidence does not establish actual browser zoom, other-browser coverage, physical mobile-device coverage, screen-reader output, or verification of the final deployed release. The historical architecture demo is excluded. The estimate form intentionally remains a local demonstration until a real endpoint and its error handling are implemented.

### Personal verification record

Tester: Steven Recchia. I personally performed the final capstone testing and verified the fixes. This completion statement was supplied after reviewing the revised site. The preserved JSON logs and screenshots remain preliminary tool-generated evidence, not newly captured evidence from my personal run.

Browser: Google Chrome. I confirmed that my personal testing included keyboard navigation, 200% browser zoom, narrow-screen layout and the Estimate form's error messages. I repeated the testing and verified the fixes. Chrome version, exact test date, narrow viewport width and personal screenshots were not supplied. The detailed measurements elsewhere in this report remain the recorded preliminary evidence.

Post-publication verification remains a separate release check: after merging and deployment, open all four public URLs, rerun axe, and confirm the deployed version matches the reviewed changes.

### AI disclosure

I used OpenAI Codex to help organize findings, consult accessibility guidance, suggest checks, draft documentation, and assist with HTML, CSS and JavaScript revisions. I considered its proposed page structure, contrast changes, form guidance, alternatives and interaction improvements. AI-assisted preliminary scans and browser checks provided supporting evidence. I personally performed the final manual testing and verified the fixes. The accepted changes and retest evidence are documented in the remediation log. AI assistance is disclosed; responsibility for my final review and submission remains mine.

### Sources checked

[1] W3C Contrast Minimum: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
[2] W3C Non text Contrast: https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
[3] W3C Reflow: https://www.w3.org/WAI/WCAG22/Understanding/reflow.html
[4] W3C Text Spacing: https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html
[5] WAI Labeling Controls: https://www.w3.org/WAI/tutorials/forms/labels/
[6] WAI User Notifications: https://www.w3.org/WAI/tutorials/forms/notifications/
[7] W3C Resize Text and Focus Visible: https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html and https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html
[8] W3C Animation from Interactions: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
