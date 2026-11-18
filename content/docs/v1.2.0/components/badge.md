---
title: NBadge
description: A small label for statuses, counts and categories.
---

# NBadge

A small label for statuses, counts and categories. It renders a `<span>`, or any element with `as`.

::component-example{name="badge/variants"}
::

## Colors

`color` accepts the `primary` color of your theme and the semantic colors. It works with every
variant.

::component-example{name="badge/colors"}
::

## Sizes

Five sizes from `xs` to `xl`.

::component-example{name="badge/sizes"}
::

## Pill

`pill` fully rounds the ends.

::component-example{name="badge/pill"}
::

## Icons

Use `icon` for a leading icon and `trailingIcon` for a trailing one. They accept an Iconify class,
any other class, or a Vue component. See [Icons](/docs/icons). A badge without a label is just its
icon.

::component-example{name="badge/icons"}
::

## As a link

Use `as` to render another element or a component, such as an `a`.

::component-example{name="badge/as-link"}
::

## Slots usage

The `leading` and `trailing` slots replace the icons, and the default slot replaces `label`.

::component-example{name="badge/slots"}
::

## API

### Props

| Prop           | Type                                                               | Default   | Description                                                    |
| -------------- | ------------------------------------------------------------------ | --------- | -------------------------------------------------------------- |
| `label`        | `string` `number`                                                  | `-`       | The text of the badge. The default slot works too.             |
| `variant`      | `solid` `outline` `soft` `subtle`                                  | `solid`   | The visual style.                                              |
| `color`        | `primary` `secondary` `neutral` `success` `info` `warning` `error` | `primary` | The color of the variant.                                      |
| `size`         | `xs` `sm` `md` `lg` `xl`                                           | `md`      | The size of the badge.                                         |
| `pill`         | `boolean`                                                          | `false`   | Fully rounds the ends of the badge.                            |
| `icon`         | `string` `Component`                                               | `-`       | Leading icon: an Iconify class, another class, or a component. |
| `trailingIcon` | `string` `Component`                                               | `-`       | Trailing icon, same values as `icon`.                          |
| `as`           | `string` `Component`                                               | `span`    | The element or component to render, such as `a`.               |

### Slots

| Slot       | Description                                   |
| ---------- | --------------------------------------------- |
| `default`  | The content of the badge, instead of `label`. |
| `leading`  | Replaces the leading icon.                    |
| `trailing` | Replaces the trailing icon.                   |

## Theming

Size tokens are CSS variables. Override them after the `noofpi-ui` import.

```css
:root {
  --n-badge-h-md: 1.75rem;
}
```

| Variable                | Description                             |
| ----------------------- | --------------------------------------- |
| `--n-badge-h-{size}`    | Height. `md` is `1.5rem`.               |
| `--n-badge-px-{size}`   | Horizontal padding. `md` is `0.625rem`. |
| `--n-badge-fs-{size}`   | Font size. `md` is `0.75rem`.           |
| `--n-badge-icon-{size}` | Icon size. `md` is `0.875rem`.          |

`{size}` is one of `xs` `sm` `md` `lg` `xl`.
