---
title: NTable
description: A sortable, responsive data table.
---

# NTable

A data table. Wide tables scroll sideways inside their own box, so the page never overflows, and narrow screens can show each row as a card instead.

::component-example{name="table/basic"}
::

## Sorting

Set `sortable` on a column to turn its header into a button. A click cycles ascending, descending, and unsorted. Numbers, dates and text sort naturally (`Item 2` comes before `Item 10`), and empty values stay last in both directions. Bind the sorted column with `v-model:sort`; it also works without it.

::component-example{name="table/sorting"}
::

## Server-side sorting

With `manualSort` the table does not sort the `data` itself. It only reports the `sort` so that you can sort the rows yourself, for example on the server.

::component-example{name="table/manual-sort"}
::

## Custom cells and headers

The `cell-<key>` slot renders a cell with `{ row, value, index, column }`, and `header-<key>` renders a header with `{ column }`. The `footer` slot sits below the rows, outside the scroll area, such as for pagination.

::component-example{name="table/cells"}
::

## Size, border and stripes

`size` sets the padding and the font size. `border` sets the strength of the outer border and the row lines, or removes them with `none`. `striped` alternates the row backgrounds. Rows highlight under the pointer unless `hoverable` is `false`.

::component-example{name="table/appearance"}
::

## Columns

A column can be aligned with `align`, given a `width`, kept on one line with `nowrap`, and hidden on narrower screens with `hideBelow`. Resize the window to see the columns disappear.

::component-example{name="table/hide-columns"}
::

## Stacked on small screens

`stackBelow` turns every row into a card of `label: value` lines below a breakpoint, using the `label` of each column. Only sortable headers remain, as a row of buttons. Resize the window to see it.

::component-example{name="table/stacked"}
::

## Loading and empty

`loading` shows a spinner when there are no rows and dims the rows otherwise. Without rows the `empty` text is shown, or the `empty` slot. The `loading` slot replaces the spinner and `loadingLabel`.

::component-example{name="table/states"}
::

## Maximum height

`maxHeight` limits the table to a CSS height. The rows scroll and the header stays in view.

::component-example{name="table/max-height"}
::

## Clickable rows

`clickable` gives rows a pointer, lets them take focus, and emits `rowClick` on a click or `Enter`. Clicks on links, buttons and form controls inside a row do not trigger it.

::component-example{name="table/clickable"}
::

## Accessibility

The scroll area is a focusable region named by `caption`, or by `label` without one. Sortable headers expose `aria-sort`, and the table is marked `aria-busy` while loading.

## API

### Props

| Prop            | Type                                         | Default      | Description                                                                          |
| --------------- | -------------------------------------------- | ------------ | ------------------------------------------------------------------------------------ |
| `columns`       | `TableColumn[]`                              | required     | The column definitions.                                                              |
| `data`          | `TableRow[]`                                 | `[]`         | The rows, as an array of objects.                                                    |
| `rowKey`        | `string` `Function`                          | the index    | The key in the row, or a function `(row, index) => key`, that identifies it.         |
| `caption`       | `string`                                     | `-`          | The title above the table, also its accessible name.                                 |
| `label`         | `string`                                     | `"Table"`    | The accessible name when there is no `caption`.                                      |
| `size`          | `sm` `md` `lg`                               | `md`         | The padding and font size.                                                           |
| `border`        | `none` `sm` `md` `lg`                        | `sm`         | The strength of the outer border and row lines; `none` removes them.                 |
| `striped`       | `boolean`                                    | `false`      | Alternates the row backgrounds.                                                      |
| `hoverable`     | `boolean`                                    | `true`       | Highlights the row under the pointer.                                                |
| `stackBelow`    | `sm` `md` `lg` `xl`                          | `-`          | Shows each row as a card below this breakpoint instead of scrolling sideways.        |
| `maxHeight`     | `string`                                     | `-`          | A CSS height, such as `"24rem"`; the rows scroll and the header stays in view.       |
| `loading`       | `boolean`                                    | `false`      | Shows a spinner when there are no rows and dims the rows otherwise.                  |
| `empty`         | `string`                                     | `"No data"`  | The text shown when there are no rows.                                               |
| `loadingLabel`  | `string`                                     | `"Loading…"` | The text next to the spinner.                                                        |
| `clickable`     | `boolean`                                    | `false`      | Gives rows a pointer, makes them focusable, and emits `rowClick`.                    |
| `v-model:sort`  | `TableSort`                                  | `-`          | The sorted column and its direction.                                                 |
| `manualSort`    | `boolean`                                    | `false`      | Skips sorting the `data`, which is already sorted, and only reports `sort`.          |
| `as`            | `string` `Component`                         | `div`        | The element or component of the wrapper.                                             |

### Slots

| Slot           | Description                                                                              |
| -------------- | ---------------------------------------------------------------------------------------- |
| `cell-<key>`   | The content of a cell, with `{ row, value, index, column }`. Defaults to the row value.  |
| `header-<key>` | The content of a column header, with `{ column }`. Defaults to its `label`.              |
| `empty`        | Replaces the `empty` text.                                                               |
| `loading`      | Replaces the spinner and the `loadingLabel`.                                             |
| `footer`       | Below the rows, outside the scroll area, such as for pagination.                         |

### Events

| Event      | Payload                                        | Description                                              |
| ---------- | ---------------------------------------------- | -------------------------------------------------------- |
| `rowClick` | `row: TableRow, index: number, event: Event`   | A row was clicked or activated with the keyboard, when `clickable` is set. |

### TableColumn

| Field       | Type                    | Default | Description                                                                          |
| ----------- | ----------------------- | ------- | ------------------------------------------------------------------------------------ |
| `key`       | `string`                | required | The key of the value in each row. It also names the `cell-<key>` and `header-<key>` slots. |
| `label`     | `string`                | `-`     | The header text, also the label of the cell when the table is stacked.               |
| `align`     | `start` `center` `end`  | `start` | The text alignment; `start` and `end` follow the writing direction.                  |
| `sortable`  | `boolean`               | `false` | Turns the header into a button that sorts by this column.                            |
| `width`     | `string`                | `-`     | A CSS width of the column, such as `"8rem"`.                                         |
| `hideBelow` | `sm` `md` `lg` `xl`     | `-`     | Hides the column on screens narrower than this breakpoint.                           |
| `nowrap`    | `boolean`               | `false` | Keeps the text of the cells on one line.                                             |

### TableSort

| Field       | Type          | Description                  |
| ----------- | ------------- | ---------------------------- |
| `key`       | `string`      | The `key` of the sorted column. |
| `direction` | `asc` `desc`  | The sort direction.          |

## Theming

Colors, padding and font size are CSS variables. Override them after the `noofpi-ui` import.

```css
:root {
  --n-table-py-md: 0.5rem;
}
```

| Variable                          | Description                                                           |
| --------------------------------- | --------------------------------------------------------------------- |
| `--n-table-px-{size}`             | Horizontal padding. `md` is `1rem`.                                   |
| `--n-table-py-{size}`             | Vertical padding. `md` is `0.625rem`.                                 |
| `--n-table-fs-{size}`             | Font size. `md` is `0.875rem`.                                        |
| `--n-table-bg`                    | Background. Default `#fff`, `--ui-neutral-900` in dark mode.          |
| `--n-table-fg`                    | Text color. Default `--ui-neutral-900`, `--ui-neutral-100` in dark mode. |
| `--n-table-border-{sm,md,lg}`     | Border color for each `border` strength. `sm` is `--ui-neutral-300`.  |
| `--n-table-bw-{sm,md,lg}`         | Border width for each `border` strength. Default `1px`.               |
| `--n-table-head-bg`               | Header background. Default `--ui-neutral-50`, `--ui-neutral-800` in dark mode. |
| `--n-table-head-fg`               | Header text color. Default `--ui-neutral-800`, `--ui-neutral-200` in dark mode. |
| `--n-table-muted`                 | Color of the empty and loading text. Default `--ui-neutral-500`.      |
| `--n-table-stripe`                | Background of the even rows with `striped`.                           |
| `--n-table-hover`                 | Background of the row under the pointer.                              |

`{size}` is one of `sm` `md` `lg`.
