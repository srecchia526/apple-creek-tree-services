# Responsive Layout Notes

This update extends the existing Module 2 Apple Creek Tree Services CSS architecture instead of replacing it. The original cascade-layer order, design-token approach, component naming, focus treatment, and overall visual direction are preserved.

## Responsive foundation

- `.site-shell` uses logical `inline-size` with flexible gutters and `margin-inline: auto`.
- Section spacing uses logical `padding-block` and fluid `clamp()` values.
- Page-level layouts begin as single-column layouts and only add columns when the content has enough room.

## Advanced Grid patterns

- The service grid uses `repeat(auto-fit, minmax(...))` so service cards add or remove columns according to their minimum useful width.
- The gallery grid uses `repeat(auto-fill, minmax(...))` so placeholder media cards remain readable without a device-specific column count.
- The resource section uses a bounded `minmax(18rem, 20rem)` sidebar plus a flexible main track. This replaced an earlier `fit-content(20rem)` version after Chrome showed that the sidebar could collapse toward min-content width.

## Subgrid and fallback

Service cards use `subgrid` when supported to align heading, description, and action rows across cards. A normal `grid-template-rows: auto 1fr auto` layout is defined first, so the cards remain usable in browsers without subgrid support.

## Container-query component

The reusable resource card is placed inside `.resource-shell`, which is an inline-size query container. The card stays stacked by default and changes to a side-by-side internal layout when its own container has enough room. This is more appropriate than a viewport-only media query because the same component appears in both a narrow sidebar and a wider main-content context at the same viewport width.

## Content-driven breakpoints

- Around `47rem`, the hero and estimate form gain a second column because the copy and form controls have enough room without creating narrow text measures.
- Around `58rem`, the resource sidebar and main card sit side-by-side because both components remain readable at that point.

These breakpoints are based on where the Apple Creek content stops fitting comfortably, not on generic phone/tablet/desktop labels.

## User preferences and fallback strategy

The stylesheet respects `prefers-reduced-motion: reduce` by removing smooth scrolling and reducing transition motion. It also includes a higher-contrast preference adjustment. Advanced layout features are introduced only after a usable default is defined, so unsupported subgrid or container-query behavior does not remove content or actions.

## Chrome correction

A Chrome test showed that the original wide resource layout using `fit-content(20rem)` allowed the first resource card to collapse too narrowly. The sidebar track was changed to `minmax(18rem, 20rem)`, and `.resource-shell` was explicitly set to fill its parent. This keeps the sidebar readable while leaving the remaining space to the main resource card.