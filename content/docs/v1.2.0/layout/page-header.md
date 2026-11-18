---
title: NPageHeader
description: A title with a description and an icon tile.
---

# NPageHeader

A page title with a description and an icon in a gradient tile.

::component-example{name="page-header/basic"} ::

## Sizes

`size` scales the tile, the title and the description. On narrow screens the header shrinks further
on its own.

::component-example{name="page-header/sizes"} ::

## Colors

`color` sets the color of the icon tile.

::component-example{name="page-header/colors"} ::

## Actions

The `actions` slot is pushed to the end of the row. Use it for buttons.

::component-example{name="page-header/actions"} ::

## Custom slots

Replace the tile, the title or the description with the `icon`, `title` and `description` slots. The
`icon` slot takes any content, such as an avatar.

::component-example{name="page-header/slots"} ::

## API

### Props

| Prop          | Type                                                               | Default   | Description                                                                |
| ------------- | ------------------------------------------------------------------ | --------- | -------------------------------------------------------------------------- |
| `title`       | `string`                                                           | `-`       | The heading.                                                               |
| `description` | `string`                                                           | `-`       | The text under the title.                                                  |
| `icon`        | `string` `Component`                                               | `-`       | An Iconify class, another class, or a component, shown in a gradient tile. |
| `color`       | `primary` `secondary` `neutral` `success` `info` `warning` `error` | `primary` | The color of the icon tile.                                                |
| `size`        | `sm` `md` `lg`                                                     | `md`      | The size of the tile, title and description.                               |
| `headingAs`   | `string`                                                           | `h1`      | The element of the title.                                                  |
| `as`          | `string` `Component`                                               | `div`     | The element or component to render.                                        |

### Slots

| Slot          | Description                                     |
| ------------- | ----------------------------------------------- |
| `icon`        | Replaces the icon tile.                         |
| `title`       | Replaces the `title`.                           |
| `description` | Replaces the `description`.                     |
| `actions`     | Content at the end of the row, such as buttons. |

The layout uses logical properties, so it mirrors in right-to-left pages.

## Theming

Override the tokens on a header, or on a wrapper, after the `noofpi-ui` import.

```css
.page-header-compact {
  --n-page-header-tile: 2.5rem;
  --n-page-header-title-size: 1.25rem;
}
```

| Variable                     | Description                                                                                          |
| ---------------------------- | ---------------------------------------------------------------------------------------------------- |
| `--n-page-header-gap`        | The gap between the tile, the text and the actions. The default is `1rem`.                           |
| `--n-page-header-tile`       | The size of the icon tile. The default is `3.5rem`.                                                  |
| `--n-page-header-title-size` | The font size of the title. The default is `1.75rem`.                                                |
| `--n-page-header-desc-size`  | The font size of the description. The default is `1rem`.                                             |
| `--n-page-header-desc`       | The color of the description. The default is `--ui-neutral-500`, or `--ui-neutral-400` in dark mode. |

These defaults are for `md`. The `sm` and `lg` sizes set their own values.
