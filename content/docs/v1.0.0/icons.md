---
title: Icons
description: Built-in Iconify icons, generated into your CSS at build time.
---

# Icons

[Iconify](https://iconify.design) is built in. Use an icon name anywhere an icon is accepted, such as the `icon`, `trailingIcon` and `loadingIcon` props of `NButton`, or on its own with `NIcon`.

::component-example{name="icons/basic"}
::

## Icon sets

Lucide ships with noofpi-ui, and is the default set: `i-lucide-<name>`. [Browse the icons](https://icones.js.org/collection/lucide). For any other set, install it and use `i-<set>-<icon>`. No CSS config is needed.

```bash
bun add -d @iconify-json/mdi-light
```

```vue
<NIcon name="i-mdi-light-home" />
```

Icons are generated into your CSS at build time, with no runtime and no network, and they are SSR-safe. Only the icons you use are included, so write the class as a complete literal string. A class built from parts, such as a template string, is not found.

## Sizes

An icon is `1em` and follows the font size, so size it with a text utility such as `text-xl`, or with `size-6`.

::component-example{name="icons/sizes"}
::

## Colors

An icon takes the text color. Use a color utility on the icon, or on any parent.

::component-example{name="icons/colors"}
::

## Accessible names

Without a `label`, an icon is decorative and set to `aria-hidden`. With a `label`, it becomes an image with that accessible name.

::component-example{name="icons/labels"}
::

## In buttons

`NButton` takes the same icon values. A button with an icon and no label needs an `aria-label`. See [NButton](/docs/components/button).

::component-example{name="icons/in-buttons"}
::

## Components

`name` and the icon props of other components also accept a Vue component, for example your own inline SVG. Use `currentColor` so it follows the text color.

::component-example{name="icons/component"}
::

## API

### Props

| Prop    | Type                 | Default | Description                                                                              |
| ------- | -------------------- | ------- | ---------------------------------------------------------------------------------------- |
| `name`  | `string` `Component` | -       | An Iconify class such as `i-lucide-plus`, another class such as `fa-solid fa-x`, or a Vue component. Required. |
| `label` | `string`             | -       | The accessible name. Without it, the icon is decorative and `aria-hidden`.               |

Any other attribute, such as `class`, is passed to the icon element.
