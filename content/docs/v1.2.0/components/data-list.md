---
title: NDataList
description: Label and value rows for facts and settings.
---

# NDataList

Label and value rows with a line between them, for facts and settings that don't need a table. The
label is muted at the start and the value emphasized at the end, so it follows right-to-left
layouts. Put it in an `NCard` for a boxed look.

::component-example{name="data-list/basic"}
::

## Sizes

`size` changes the row padding and the font size.

::component-example{name="data-list/sizes"}
::

## Dividers

Rows are separated by a line. Set `divided` to `false` to remove it.

::component-example{name="data-list/divided"}
::

## Icon and color

`icon` shows a tinted tile before the `title`. `color` tints the tile. `icon` accepts an Iconify
class, any other class, or a Vue component. See [Icons](/docs/icons).

::component-example{name="data-list/icon-color"}
::

## Custom cells

The `label` and `value` slots replace the content of every row and receive the `item` and its
`index`.

::component-example{name="data-list/slots"}
::

## Extra rows

The default slot renders after the rows of `items`. Use the `n-data-list-row`, `n-data-list-label`
and `n-data-list-value` classes on a `div`, `dt` and `dd` to match the rest.

::component-example{name="data-list/extra-rows"}
::

## API

### Props

| Prop      | Type                                                               | Default   | Description                                                              |
| --------- | ------------------------------------------------------------------ | --------- | ------------------------------------------------------------------------ |
| `items`   | `DataListItem[]`                                                   | `[]`      | The rows to show.                                                        |
| `title`   | `string`                                                           | `-`       | A heading above the rows.                                                |
| `icon`    | `string` `Component`                                               | `-`       | An Iconify class, another class, or a component, shown before the title. |
| `color`   | `primary` `secondary` `neutral` `success` `info` `warning` `error` | `primary` | The color of the icon tile.                                              |
| `size`    | `sm` `md` `lg`                                                     | `md`      | The row padding and font size.                                           |
| `divided` | `boolean`                                                          | `true`    | Draws a line between the rows.                                           |
| `as`      | `string` `Component`                                               | `div`     | The element or component to render.                                      |

### Slots

| Slot      | Description                                                      |
| --------- | ---------------------------------------------------------------- |
| `title`   | Replaces the `title`.                                            |
| `icon`    | Replaces the icon tile.                                          |
| `label`   | The content of a row label, with `{ item, index }`.              |
| `value`   | The content of a row value, with `{ item, index }`.              |
| `default` | Extra rows after `items`, written as `n-data-list-row` elements. |

### DataListItem

| Field   | Type              | Description                                   |
| ------- | ----------------- | --------------------------------------------- |
| `label` | `string`          | The name of the row, muted, at the start.     |
| `value` | `string` `number` | The value of the row, emphasized, at the end. |

## Theming

Override the tokens after the `noofpi-ui` import.

```css
:root {
  --n-data-list-py-md: 0.5rem;
  --n-data-list-value: var(--ui-primary-700);
}
```

| Variable                  | Description                                                                                                   |
| ------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `--n-data-list-py-{size}` | Vertical padding of a row. `sm` is `0.5rem`, `md` `0.75rem` and `lg` `1rem`.                                  |
| `--n-data-list-fs-{size}` | Font size. `sm` is `0.8125rem`, `md` `0.875rem` and `lg` `1rem`.                                              |
| `--n-data-list-border`    | The color of the lines. The default is `--ui-neutral-300`, or `--ui-neutral-700` in dark mode.                |
| `--n-data-list-label`     | The color of the labels. The default is `--ui-neutral-500`, or `--ui-neutral-400` in dark mode.               |
| `--n-data-list-value`     | The color of the values and the title. The default is `--ui-neutral-900`, or `--ui-neutral-100` in dark mode. |

`{size}` is one of `sm` `md` `lg`.
