---
title: NHeroPage
description: A landing page hero with eyebrow, title, actions and image.
---

# NHeroPage

A hero section for a landing page: eyebrow, title, description, actions and an optional image.

::component-example{name="hero-page/basic"}
::

## Horizontal layout

`layout="horizontal"` puts the text and the media side by side from `48rem` up, and stacks them on smaller screens. The media comes from `image` and `imageAlt`, or from the `media` slot.

::component-example{name="hero-page/horizontal"}
::

## Reverse

`reverse` puts the media before the text. It only affects the horizontal layout.

::component-example{name="hero-page/reverse"}
::

## Slots

Use the `eyebrow`, `title`, `description` and `actions` slots for content beyond plain text.

::component-example{name="hero-page/slots"}
::

## API

### Props

| Prop          | Type                     | Default    | Description                                                           |
| ------------- | ------------------------ | ---------- | --------------------------------------------------------------------- |
| `title`       | `string`                 | `-`        | The heading.                                                          |
| `description` | `string`                 | `-`        | The text under the title.                                             |
| `eyebrow`     | `string`                 | `-`        | The small uppercase text above the title.                             |
| `image`       | `string`                 | `-`        | The URL of the image.                                                 |
| `imageAlt`    | `string`                 | `""`       | The alt text of the image.                                            |
| `layout`      | `vertical` `horizontal`  | `vertical` | Centered with the media below, or the text and the media side by side. |
| `reverse`     | `boolean`                | `false`    | Puts the media before the text in the horizontal layout.              |
| `headingAs`   | `string`                 | `h1`       | The element of the title.                                             |
| `as`          | `string` `Component`     | `section`  | The element or component to render.                                   |

### Slots

| Slot          | Description                                      |
| ------------- | ------------------------------------------------ |
| `eyebrow`     | Replaces the `eyebrow`.                          |
| `title`       | Replaces the `title`.                            |
| `description` | Replaces the `description`.                      |
| `actions`     | Buttons or links under the description.          |
| `media`       | Replaces the `image`.                            |

The layout uses logical properties, so it mirrors in right-to-left pages.

## Theming

Override the tokens on a hero, or on a wrapper, after the `noofpi-ui` import.

```css
.hero {
  --n-hero-page-gap: 4rem;
  --n-hero-page-eyebrow: var(--ui-success-600);
}
```

| Variable                | Description                                                                                         |
| ----------------------- | --------------------------------------------------------------------------------------------------- |
| `--n-hero-page-gap`     | The gap between the text and the media. The default is `2.5rem`.                                    |
| `--n-hero-page-desc`    | The color of the description. The default is `--ui-neutral-500`, or `--ui-neutral-400` in dark mode. |
| `--n-hero-page-eyebrow` | The color of the eyebrow. The default is `--ui-primary-600`, or `--ui-primary-400` in dark mode.    |
