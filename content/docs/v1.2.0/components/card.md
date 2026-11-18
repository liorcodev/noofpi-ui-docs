---
title: NCard and NStat
description: A content container and a statistic block.
---

# NCard and NStat

`NCard` is a container with optional media, header and footer sections. `NStat` shows a labeled
number with an icon and a trend.

::component-example{name="card/basic"}
::

## Variants

`variant` sets the visual style. The default is `outline`.

::component-example{name="card/variants"}
::

## Colors

`color` tints the variant. It defaults to `neutral`, and it affects the border, background and
header and footer dividers.

::component-example{name="card/colors"}
::

## Media

The `media` slot renders edge to edge above the padded content. Put an image or a video in it, which
is stretched to fill the width.

::component-example{name="card/media"}
::

## As a link

Use `as` to render another element, for example a clickable card with `as="a"`.

::component-example{name="card/as-link"}
::

## Stat

`NStat` shows a `label`, a `value` and a `description`. `icon` adds a tinted tile, and `trend` adds
an arrow and colors the description. Put it in an `NCard` for a boxed look.

::component-example{name="card/stat"}
::

## Stat slots

The `label`, default and `description` slots replace the matching text, and `icon` replaces the
tile.

::component-example{name="card/stat-slots"}
::

## API

### NCard props

| Prop      | Type                                                               | Default   | Description                                                   |
| --------- | ------------------------------------------------------------------ | --------- | ------------------------------------------------------------- |
| `variant` | `outline` `solid` `soft` `subtle`                                  | `outline` | The visual style.                                             |
| `color`   | `primary` `secondary` `neutral` `success` `info` `warning` `error` | `neutral` | The color of the variant.                                     |
| `as`      | `string` `Component`                                               | `div`     | The element or component to render, such as `article` or `a`. |

### NCard slots

| Slot      | Description                                                   |
| --------- | ------------------------------------------------------------- |
| `default` | The padded content of the card.                               |
| `media`   | Edge to edge content above everything else, such as an image. |
| `header`  | A padded section above the content, separated by a line.      |
| `footer`  | A padded section below the content, separated by a line.      |

### NStat props

| Prop          | Type                                                               | Default   | Description                                                              |
| ------------- | ------------------------------------------------------------------ | --------- | ------------------------------------------------------------------------ |
| `label`       | `string`                                                           | `-`       | The muted name of the statistic.                                         |
| `value`       | `string` `number`                                                  | `-`       | The main value.                                                          |
| `description` | `string`                                                           | `-`       | The text under the value, such as the change since last month.           |
| `icon`        | `string` `Component`                                               | `-`       | An Iconify class, another class, or a component, shown in a tinted tile. |
| `color`       | `primary` `secondary` `neutral` `success` `info` `warning` `error` | `primary` | The color of the icon tile.                                              |
| `trend`       | `up` `down` `neutral`                                              | `-`       | Adds an arrow before the description and colors it for `up` and `down`.  |
| `as`          | `string` `Component`                                               | `div`     | The element or component to render.                                      |

### NStat slots

| Slot          | Description                                |
| ------------- | ------------------------------------------ |
| `default`     | The value, instead of `value`.             |
| `label`       | The label, instead of `label`.             |
| `icon`        | Replaces the icon tile.                    |
| `description` | The description, instead of `description`. |

## Theming

`NCard` padding is a CSS variable. Override it after the `noofpi-ui` import.

```css
:root {
  --n-card-p: 1rem;
}
```

| Variable     | Description                                                              |
| ------------ | ------------------------------------------------------------------------ |
| `--n-card-p` | The padding of the header, content and footer. The default is `1.25rem`. |
