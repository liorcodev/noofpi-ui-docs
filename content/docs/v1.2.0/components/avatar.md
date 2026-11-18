---
title: NAvatar
description: An image with an initials or icon fallback.
---

# NAvatar

An image with a fallback: text, the initials of `alt`, or an icon.

::component-example{name="avatar/basic"}
::

## Fallback

If `src` is missing or fails to load, the fallback is shown. It is `text` if set, otherwise the
initials of `alt` (`Jane Mary Doe` becomes `JD`), otherwise an icon.

::component-example{name="avatar/fallback"}
::

## Sizes

Seven sizes from `xxs` to `xxl`.

::component-example{name="avatar/sizes"}
::

## Shapes

::component-example{name="avatar/shapes"}
::

## Colors

`color` tints the fallback background and text, and the border.

::component-example{name="avatar/colors"}
::

## Bordered

`bordered` adds a border in the `color` of the avatar.

::component-example{name="avatar/bordered"}
::

## Group

Overlap bordered avatars with a negative space utility.

::component-example{name="avatar/group"}
::

## Accessibility

`alt` is the accessible name. Without `alt` an avatar showing only a fallback is `aria-hidden`.

## API

### Props

| Prop       | Type                                                               | Default         | Description                                                              |
| ---------- | ------------------------------------------------------------------ | --------------- | ------------------------------------------------------------------------ |
| `src`      | `string`                                                           | `-`             | The image URL. If it fails to load, the fallback is shown.               |
| `alt`      | `string`                                                           | `-`             | The accessible name. Its initials are the fallback unless `text` is set. |
| `text`     | `string`                                                           | `-`             | The fallback text, used instead of the initials.                         |
| `icon`     | `string` `Component`                                               | `i-lucide-user` | The fallback icon: an Iconify class, another class, or a component.      |
| `size`     | `xxs` `xs` `sm` `md` `lg` `xl` `xxl`                               | `md`            | The size of the avatar.                                                  |
| `shape`    | `circle` `rounded` `square`                                        | `circle`        | The corner shape.                                                        |
| `color`    | `primary` `secondary` `neutral` `success` `info` `warning` `error` | `neutral`       | The color of the fallback and the border.                                |
| `bordered` | `boolean`                                                          | `false`         | Adds a border in `color`.                                                |

## Theming

Sizes are CSS variables. Override them after the `noofpi-ui` import.

```css
:root {
  --n-avatar-size-md: 3rem;
}
```

| Variable                 | Description                                                                 |
| ------------------------ | --------------------------------------------------------------------------- |
| `--n-avatar-size-{size}` | Width and height. `md` is `2.5rem`, `xxs` is `1.25rem` and `xxl` is `4rem`. |
| `--n-avatar-border-w`    | Border width of a bordered avatar. Defaults to `2px`.                       |

`{size}` is one of `xxs` `xs` `sm` `md` `lg` `xl` `xxl`.
