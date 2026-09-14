# Apple Creek Tree Services — Responsive Layout Testing Notes

## What changed from Module 2

I kept the Module 2 architecture instead of replacing it. The cascade-layer order remains `reset → base → layout → components → utilities → states → overrides`, and the original green/orange design tokens, navigation, buttons, service cards, callout, form fields, gallery/media cards, focus states, and print strategy remain part of the system.

I extended that architecture with fluid logical wrappers and section spacing, two additional intrinsic Grid patterns, a reusable container-query component, documented content-driven breakpoints, a reduced-motion preference query, a higher-contrast preference query, and a feature-query fallback for subgrid.

## Required layout evidence

### 1. Responsive foundation

The main wrapper uses `inline-size` with a flexible `min()` constraint and `margin-inline: auto`. Section spacing uses `padding-block` and `clamp()`. Component padding and borders use logical directions such as `padding-inline`, `padding-block`, and `border-inline-start`.

### 2. Advanced Grid and intrinsic sizing

- The service grid uses `repeat(auto-fit, minmax(...))` so service cards create as many useful columns as their content can support.
- The gallery uses `repeat(auto-fill, minmax(...))` so media cards wrap without hard-coded device columns.
- The resource layout uses `minmax(18rem, 20rem)` with `minmax(0, 1fr)` when enough content space exists. This bounded sidebar width was chosen after Chrome testing showed that the earlier `fit-content(20rem)` track could collapse too narrowly.

### 3. Subgrid and fallback

Service cards use a normal three-row grid (`auto 1fr auto`) as the default. Inside `@supports (grid-template-rows: subgrid)`, the cards switch to subgrid so headings, descriptions, and links can align more consistently across a row. If subgrid is unavailable, the default card layout is still complete and usable.

### 4. Container query

`.resource-shell` is the query container with `container-type: inline-size`. The resource card is stacked by default. At a container width of `34rem`, the marker and body change to a side-by-side Grid layout. This is better than a viewport-only media query because the resource card can appear in a narrow sidebar or a wider main-content area while the browser viewport stays exactly the same.

### 5. Content-driven breakpoints

- `47rem`: the hero and estimate sections move to two columns only after the heading, body copy, and form controls have enough room to avoid narrow text measures and cramped inputs.
- `58rem`: the resource sidebar moves beside the main resource only after the sidebar card and the main card both retain useful reading width.

These values are based on when the Apple Creek content stops fitting comfortably, not on labels such as phone, tablet, or desktop.

### 6. User preferences

`prefers-reduced-motion: reduce` removes smooth scrolling and reduces transitions/animations to essentially zero duration. `prefers-contrast: more` strengthens borders and the focus ring.

## Testing checklist

| Condition | What I checked | Result |
|---|---|---|
| Narrow | 375 px viewport | Navigation wraps, hero stacks, service/gallery grids become one column as needed, resource cards stack, form controls stay inside the wrapper. |
| Medium | 768 px viewport | Hero and estimate layout have room to split, service cards reflow intrinsically, no horizontal overflow. |
| Wide | 1440 px viewport | Wrapper stops at the intended content maximum, intrinsic grids add columns without stretching text excessively, resource sidebar/main layout is active. |
| 200% zoom/reflow | 1440 px layout checked at an equivalent 720 CSS-pixel content width | Content reflows without horizontal scrolling; navigation wraps and multi-column layouts reduce before text becomes unusably narrow. |
| Keyboard focus | Tab navigation through skip link, navigation, buttons, and form controls | `:focus-visible` produces a visible 3 px focus outline with offset. |
| Reduced motion | Browser preference emulated as `reduce` | Smooth scrolling is disabled and transition duration is reduced. |
| Feature fallback | Subgrid fallback reviewed | Default `auto 1fr auto` service-card rows remain usable if subgrid is unsupported. |
| Container-query fallback | Default resource card reviewed | The stacked resource card remains readable/actionable if container queries are unsupported. |

## AI disclosure

I used ChatGPT as a support and review tool while extending my Apple Creek Tree Services capstone from the Module 2 CSS architecture. I decided to keep the existing layer structure, design tokens, component naming, and tree-service content direction, and I chose the layouts that needed to respond to their content. ChatGPT helped me compare the work to the rubric, draft possible Grid/container-query patterns, and check the CSS for logical properties, preference queries, and fallback coverage. I considered those suggestions, adjusted them to fit my existing capstone, and reviewed the final HTML/CSS and responsive behavior before submitting it. I did not treat the AI output as automatically correct; I verified the layout rules, breakpoints, focus behavior, reduced-motion behavior, and fallback path against the assignment requirements.


## Chromium sidebar correction

During a Chrome check, the first resource card collapsed to its min-content width when the
wide resource layout used `fit-content(20rem)` for the sidebar track. I changed that track to
`minmax(18rem, 20rem)` and made `.resource-shell` explicitly fill its parent. The narrow
default still stacks, while the wide layout now keeps the sidebar readable and gives the
main resource card the remaining space.