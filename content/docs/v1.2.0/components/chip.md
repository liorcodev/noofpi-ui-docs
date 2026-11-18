---
title: NChip
description: A dot or count pinned to a corner of the content it wraps.
---

# NChip

A dot or count pinned to a corner of whatever it wraps, such as a notification marker on a button or
an avatar.

::component-example{name="chip/basic"} ::

## Colors

::component-example{name="chip/colors"} ::

## Sizes

Seven sizes from `xxs` to `xxl`. Without `text` the chip is a dot of that size, and a chip with text
is 1.5 times as tall.

::component-example{name="chip/sizes"} ::

## Position

`position` picks the corner. It defaults to `top-right`.

::component-example{name="chip/position"} ::

## Text and content

`text` shows a short string or number. The `content` slot replaces it, for example with an icon.

::component-example{name="chip/text"} ::

## Inset

By default the chip is centered on the corner and overflows the content. `inset` keeps it inside the
content box, which is useful when a parent clips overflow.

::component-example{name="chip/inset"} ::

## Showing and hiding

`show` toggles the chip without removing the wrapped content.

::component-example{name="chip/show"} ::

## Accessibility

A dot is `aria-hidden`. When the chip carries meaning, give the wrapped element an accessible name
such as `aria-label="Inbox, 3 unread"`.

## API

### Props

| Prop         | Type                                                               | Default     | Description                                                      |
| ------------ | ------------------------------------------------------------------ | ----------- | ---------------------------------------------------------------- |
| `text`       | `string` `number`                                                  | `-`         | The text shown in the chip. Without it the chip is a dot.        |
| `color`      | `primary` `secondary` `neutral` `success` `info` `warning` `error` | `primary`   | The color of the chip.                                           |
| `size`       | `xxs` `xs` `sm` `md` `lg` `xl` `xxl`                               | `md`        | The size of the chip.                                            |
| `position`   | `top-right` `top-left` `bottom-right` `bottom-left`                | `top-right` | The corner of the content where the chip is pinned.              |
| `inset`      | `boolean`                                                          | `false`     | Keeps the chip inside the content box instead of overflowing it. |
| `standalone` | `boolean`                                                          | `false`     | Renders only the chip, without a wrapper or positioning.         |
| `show`       | `boolean`                                                          | `true`      | Shows the chip. Set it to `false` to hide it.                    |

### Slots

| Slot      | Description                                 |
| --------- | ------------------------------------------- |
| `default` | The content the chip is pinned to.          |
| `content` | The content of the chip, instead of `text`. |

## Theming

Dot sizes are CSS variables. Override them after the `noofpi-ui` import.

```css
:root {
  --n-chip-size-md: 1rem;
}
```

| Variable               | Description                                                                      |
| ---------------------- | -------------------------------------------------------------------------------- |
| `--n-chip-size-{size}` | Dot size, and the font size of the text. `md` is `0.75rem`, `xxs` is `0.375rem`. |

`{size}` is one of `xxs` `xs` `sm` `md` `lg` `xl` `xxl`.
