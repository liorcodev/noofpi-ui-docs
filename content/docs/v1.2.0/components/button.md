---
title: NButton
description: A button with variants, colors, sizes, shapes, icons and responsive props.
---

# NButton

A button for actions and navigation. It renders a `<button>`, or a link with `as="a"`.

::component-example{name="button/variants"} ::

## Variants

The `soft` variant uses the same gentle tint as a soft badge. Hover and press states become
progressively stronger without reaching the visual weight of a solid button.

## Colors

`color` accepts the `primary` color of your theme and the semantic colors. It works with every
variant.

::component-example{name="button/colors"} ::

## Sizes

Seven sizes from `xxs` to `xxl`.

::component-example{name="button/sizes"} ::

## Shapes

::component-example{name="button/shapes"} ::

A button without a label is a square around its icon, or a circle with `shape="circle"`. Give it an
`aria-label`.

## Icons

Use `icon` for a leading icon and `trailingIcon` for a trailing one. They accept an Iconify class,
any other class, or a Vue component. See [Icons](/docs/icons).

::component-example{name="button/icons"} ::

## Loading

`loading` replaces the leading icon with a spinner and disables the button.

::component-example{name="button/loading"} ::

## As a link

Use `as` to render another element or a component such as `NoofpiLink`.

::component-example{name="button/as-link"} ::

## Responsive

`size`, `shape` and `block` take a value per Tailwind breakpoint. It is mobile first, and `base` is
below `sm`. Resize the window to see this one change.

::component-example{name="button/responsive"} ::

## API

### Props

| Prop           | Type                                                               | Default   | Description                                                      |
| -------------- | ------------------------------------------------------------------ | --------- | ---------------------------------------------------------------- |
| `label`        | `string`                                                           | `-`       | The text of the button. The default slot works too.              |
| `variant`      | `solid` `outline` `soft` `subtle` `ghost` `link`                   | `solid`   | The visual style.                                                |
| `color`        | `primary` `secondary` `neutral` `success` `info` `warning` `error` | `primary` | The color of the variant.                                        |
| `size`         | `xxs` `xs` `sm` `md` `lg` `xl` `xxl`                               | `md`      | The size. Responsive.                                            |
| `shape`        | `rounded` `square` `pill` `circle`                                 | `rounded` | The corner shape. Responsive.                                    |
| `block`        | `boolean`                                                          | `false`   | Makes the button full width. Responsive.                         |
| `icon`         | `string` `Component`                                               | `-`       | Leading icon: an Iconify class, another class, or a component.   |
| `trailingIcon` | `string` `Component`                                               | `-`       | Trailing icon, same values as `icon`.                            |
| `loading`      | `boolean`                                                          | `false`   | Shows a spinner instead of the leading icon and disables it.     |
| `loadingIcon`  | `string` `Component`                                               | `-`       | Replaces the built-in spinner.                                   |
| `disabled`     | `boolean`                                                          | `false`   | Disables the button.                                             |
| `as`           | `string` `Component`                                               | `button`  | The element or component to render, such as `a` or `NoofpiLink`. |

### Slots

| Slot       | Description                                    |
| ---------- | ---------------------------------------------- |
| `default`  | The content of the button, instead of `label`. |
| `leading`  | Replaces the leading icon.                     |
| `trailing` | Replaces the trailing icon.                    |

## Theming

Size tokens are CSS variables. Override them after the `noofpi-ui` import.

```css
:root {
  --n-btn-h-md: 3rem;
}
```

| Variable              | Description                                           |
| --------------------- | ----------------------------------------------------- |
| `--n-btn-h-{size}`    | Height. `md` is `2.5rem`.                             |
| `--n-btn-px-{size}`   | Horizontal padding. `md` is `1rem`.                   |
| `--n-btn-fs-{size}`   | Font size. `md` is `0.875rem`.                        |
| `--n-btn-gap-{size}`  | Gap between the icon and the label. `md` is `0.5rem`. |
| `--n-btn-icon-{size}` | Icon size. `md` is `1.125rem`.                        |

`{size}` is one of `xxs` `xs` `sm` `md` `lg` `xl` `xxl`.
