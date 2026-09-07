# Apple Creek Tree Services CSS Architecture Notes

## Architecture and Cascade Strategy

The stylesheet uses CSS cascade layers in this order:

`reset → base → layout → components → utilities → states → overrides`

This keeps broad rules early and interaction or exception rules later. Most selectors are single classes to avoid specificity battles. The overrides layer is intentionally kept nearly empty.

## Token Decisions

Global custom properties in `:root` cover color, typography, spacing, shape, layout width, and focus. The palette uses dark green for the brand, orange as the action/accent color, and neutral grays for text, borders, and surfaces.

The button pattern also uses component-specific custom properties so `.button--secondary` can change the button appearance without duplicating the full button rule.

## Naming Approach

Components use readable names such as `.site-nav`, `.service-card`, `.form-field`, and `.media-card`. Element parts use `__`, modifiers use `--`, utilities use a `u-` prefix, and state classes use an `is-` prefix when a native selector or ARIA state is not available.

## Component Patterns Included

1. Site navigation
2. Buttons
3. Service cards
4. Callouts
5. Form fields
6. Gallery/media cards
7. Footer

## Utilities and States

Utilities include text centering, visually hidden content, spacing helpers, and full-width controls. State support includes hover, `:focus-visible`, current page via `[aria-current="page"]`, invalid form controls via `[aria-invalid="true"]`, disabled controls, and a success state.

## Print Support

The print block is intended mainly for service information and estimate-related pages. Navigation, footer actions, forms, and buttons are removed, cards avoid breaking across pages, and URLs are appended to printed links.

## Browser Checks

The architecture should be checked at narrow widths around 375–600 px and wide widths around 1200–1440 px. Keyboard focus, current-page navigation, invalid and disabled form controls, and print preview should also be checked.

Expected responsive behavior: the card grid uses `auto-fit`, while the split layout changes from one column to two columns at 48rem.

## Refactoring Evidence

### Before

Earlier practice CSS repeated literal colors, borders, spacing values, radii, and similar component rules. Some selectors also used deeper descendant chains.

### After

- Repeated values are centralized in custom properties.
- Components use single-class selectors whenever possible.
- Navigation uses `.site-nav__link` instead of deep descendant chains.
- Buttons use component-scoped custom properties for variants.
- Repeated patterns have named components instead of copy/paste styling.
- States are grouped in their own layer.
- Utilities are separated from components and use a `u-` prefix.

## AI Disclosure

I used ChatGPT as a planning and review aid while building the first CSS architecture package. It helped identify repeated patterns, suggest a cascade-layer structure, and check that the assignment requirements were represented. I chose the Apple Creek component patterns, naming, token values, and final organization, then reviewed the stylesheet against the rubric and planned site content before submitting it.
