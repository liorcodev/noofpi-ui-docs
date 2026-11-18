---
title: NPagination
description: Page navigation with a collapsing list of pages.
---

# NPagination

Page buttons with previous and next. `v-model` is the current page, starting at `1`. Give it the
`total` number of items and the `pageSize`, and it works out the pages.

::component-example{name="pagination/basic"}
::

## Many pages

Long ranges collapse into `…`. `siblings` is the number of pages shown on each side of the current
one, and `boundaries` the number always shown at the start and the end. The number of buttons stays
the same while paging, so they do not shift. `showEdges` adds buttons for the first and the last
page.

::component-example{name="pagination/many-pages"}
::

## Sizes

::component-example{name="pagination/sizes"}
::

## With a table

Place it in the `footer` slot of [NTable](/docs/data/table). Slice the rows yourself, or load the
page on `update:modelValue`.

::component-example{name="pagination/table"}
::

## Accessibility

It is a `nav` landmark labelled by `label`. The current page has `aria-current="page"`, and every
button has an accessible name. Use `pageLabel`, `prevLabel` and the other labels to translate them.
A page outside of the range is clamped, and the arrows flip in right-to-left layouts.

## API

### Props

| Prop         | Type                                                               | Default                        | Description                                   |
| ------------ | ------------------------------------------------------------------ | ------------------------------ | --------------------------------------------- |
| `v-model`    | `number`                                                           | `1`                            | The current page, starting at `1`.            |
| `total`      | `number`                                                           | `0`                            | The total number of items.                    |
| `pageSize`   | `number`                                                           | `10`                           | The number of items per page.                 |
| `siblings`   | `number`                                                           | `1`                            | Pages shown on each side of the current one.  |
| `boundaries` | `number`                                                           | `1`                            | Pages always shown at the start and the end.  |
| `showEdges`  | `boolean`                                                          | `false`                        | Shows the first and last page buttons.        |
| `size`       | `sm` `md` `lg`                                                     | `md`                           | The size of the buttons.                      |
| `label`      | `string`                                                           | `Pagination`                   | The accessible name of the navigation.        |
| `prevLabel`  | `string`                                                           | `Previous page`                | The accessible name of the previous button.   |
| `nextLabel`  | `string`                                                           | `Next page`                    | The accessible name of the next button.       |
| `firstLabel` | `string`                                                           | `First page`                   | The accessible name of the first page button. |
| `lastLabel`  | `string`                                                           | `Last page`                    | The accessible name of the last page button.  |
| `pageLabel`  | `(page: number) => string`                                         | `` (page) => `Page ${page}` `` | The accessible name of a page button.         |
| `disabled`   | `boolean`                                                          | `false`                        | Disables every button.                        |
| `color`      | `primary` `secondary` `neutral` `success` `info` `warning` `error` | `primary`                      | The color of the current page.                |

## Theming

Sizes and colors are CSS variables. Override them after the `noofpi-ui` import. Set
`--n-pagination-active-*` on `.n-pagination`, not `:root`.

```css
:root {
  --n-pagination-item-md: 2.5rem;
}
```

| Variable                     | Description                                                                               |
| ---------------------------- | ----------------------------------------------------------------------------------------- |
| `--n-pagination-item-{size}` | Width and height of a button. `sm` is `1.75rem`, `md` is `2.25rem` and `lg` is `2.75rem`. |
| `--n-pagination-fg`          | Text color.                                                                               |
| `--n-pagination-muted`       | Color of the `…`.                                                                         |
| `--n-pagination-hover`       | Background of a hovered button.                                                           |
| `--n-pagination-active-bg`   | Background of the current page.                                                           |
| `--n-pagination-active-fg`   | Text color of the current page.                                                           |
