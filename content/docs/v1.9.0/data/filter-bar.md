---
title: NFilterBar
description: A toolbar of search, filters, sort and saved views that produces a typed model.
---

# NFilterBar

A toolbar for a list or a table. It has a search field, a panel of filters, a sort menu and saved views. Active filters show as removable chips below it.

`v-model` is `{ search, filters, sort }`. `NFilterBar` only edits that value, you do the filtering. It never changes the object it gets, it emits a new one. Parts that are missing get their defaults: `""`, `{}` and `null`.

::component-example{name="filter-bar/basic"}
::

## Filter types

`filters` is the list of filters. Each has a `key` (where its value is stored in `filters`), a `label` and a `type`:

| Type          | Value                       |
| ------------- | --------------------------- |
| `select`      | One option `value`.         |
| `multiselect` | An array of option values.  |
| `boolean`     | `true` or `false`.          |
| `date`        | A `YYYY-MM-DD` string.      |
| `daterange`   | A `DateRange`.              |
| `number`      | A number.                   |
| `text`        | A string.                   |

`select` and `multiselect` take `options`, each with a `label`, a `value`, and an optional `icon` or `color` dot. `number`, `date` and `daterange` take `min` and `max`. `text` and `number` take a `placeholder`. A filter with no value is left out of `filters`, and one with a value shows as a chip that opens its editor.

::component-example{name="filter-bar/types"}
::

## Sort and views

`sort-options` adds a sort menu with the columns the user can sort by. The value is `{ key, direction }`, the same shape as the sort of [NTable](/docs/data/table).

`views` are saved sets of search, filters and sort. Choosing one replaces the value, and `v-model:view` holds its `id`. Editing the value clears it. With `saveable`, the views menu gets a save item that emits `save-view` with the current value. Store it and add it to `views`.

::component-example{name="filter-bar/sort-views"}
::

## Chips

A chip shows the label of the filter and its value: option labels, and `Intl` formatting for dates and numbers in the `locale`. `format-value` returns the text of a chip, or `undefined` to use the default. The `value` slot replaces the text, and the `chip` slot replaces the whole chip. The `empty` slot shows while no filter is set.

::component-example{name="filter-bar/chips"}
::

## Custom editor

The slot `filter-<key>` replaces the editor of that filter, in the filters panel and in its chip. `update` sets the value, and `undefined` removes the filter. `close` closes the panel.

::component-example{name="filter-bar/custom-editor"}
::

## Events and slots

Typing in the search field reaches `v-model` after `debounce` milliseconds. Enter and clearing the field apply it at once. `search` is emitted when the search is applied, and `clear` when Clear all is used. Clear all empties the search and the filters, and keeps the sort.

`leading` is before the search field, `trailing` is after the controls and `actions` is at the very end of the row.

::component-example{name="filter-bar/events-slots"}
::

## Accessibility

The bar is a `search` landmark named by `label`. The chips are a list, and each has a button that opens its editor and a button named `Remove filter: Status` that takes it off. Translate the labels (`searchLabel`, `filtersLabel`, `clearLabel`, `sortLabel` and the others) for other languages.

## API

Other attributes go to the root element.

### Props

| Prop               | Type                                           | Default           | Description                                                                              |
| ------------------ | ---------------------------------------------- | ----------------- | ---------------------------------------------------------------------------------------- |
| `modelValue`       | `FilterBarValue`                               | `-`               | The search, the filters and the sort.                                                    |
| `filters`          | `FilterBarFilter[]`                            | `[]`              | The filters the user can set.                                                            |
| `searchable`       | `boolean`                                      | `true`            | Shows the search field.                                                                  |
| `searchPlaceholder`| `string`                                       | `Search…`         | The placeholder of the search field.                                                     |
| `debounce`         | `number`                                       | `300`             | Milliseconds to wait after typing before the search is emitted.                          |
| `sortOptions`      | `FilterBarSortOption[]`                        | `[]`              | The columns the user can sort by. Without them there is no sort menu.                    |
| `views`            | `FilterBarView[]`                              | `[]`              | Saved views the user can switch to.                                                      |
| `view`             | `string` `number` `null`                       | `null`            | The `id` of the current view (`v-model:view`). It is cleared when the value is edited.   |
| `saveable`         | `boolean`                                      | `false`           | Adds a save item to the views menu that emits `save-view`.                               |
| `formatValue`      | `(filter, value) => string \| undefined`       | `-`               | The text of a chip. Return `undefined` for the default.                                  |
| `locale`           | `string`                                       | the browser's     | BCP 47 tag of the dates and numbers in the chips.                                        |
| `disabled`         | `boolean`                                      | `false`           | Disables the whole bar.                                                                  |
| `label`            | `string`                                       | `Filter bar`      | The accessible name of the bar.                                                          |
| `searchLabel`      | `string`                                       | `Search`          | The accessible name of the search field.                                                 |
| `clearSearchLabel` | `string`                                       | `Clear search`    | The accessible name of the button that clears the search.                                |
| `filtersLabel`     | `string`                                       | `Filters`         | Text of the filters button and name of the chip list.                                    |
| `clearLabel`       | `string`                                       | `Clear all`       | Text of the clear all buttons.                                                           |
| `resetLabel`       | `string`                                       | `Reset`           | Text of the button that resets one filter.                                               |
| `doneLabel`        | `string`                                       | `Done`            | Text of the button that closes a panel.                                                  |
| `removeLabel`      | `string`                                       | `Remove filter`   | Start of the accessible name of a chip's remove button.                                  |
| `sortLabel`        | `string`                                       | `Sort`            | Text of the sort button.                                                                 |
| `ascendingLabel`   | `string`                                       | `Ascending`       | Item of the sort menu.                                                                   |
| `descendingLabel`  | `string`                                       | `Descending`      | Item of the sort menu.                                                                   |
| `defaultSortLabel` | `string`                                       | `Default order`   | Item of the sort menu that removes the sorting.                                          |
| `viewsLabel`       | `string`                                       | `Views`           | Text of the views button.                                                                |
| `saveViewLabel`    | `string`                                       | `Save current view` | Item of the views menu that saves the value.                                           |
| `yesLabel`         | `string`                                       | `Yes`             | Text of a `boolean` filter that is `true`.                                               |
| `noLabel`          | `string`                                       | `No`              | Text of a `boolean` filter that is `false`.                                              |

### Types

| Type                    | Shape                                                                                                         |
| ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| `FilterBarValue`        | `{ search: string; filters: Record<string, unknown>; sort: FilterBarSort \| null }`                           |
| `FilterBarFilter`       | `{ key; label; type; options?; placeholder?; icon?; min?; max? }`                                             |
| `FilterBarOption`       | `{ label: string; value: unknown; icon?; color? }`                                                            |
| `FilterBarSort`         | `{ key: string; direction: 'asc' \| 'desc' }`                                                                 |
| `FilterBarSortOption`   | `{ key: string; label: string }`                                                                              |
| `FilterBarView`         | `{ id: string \| number; label: string; value: FilterBarValue }`                                              |

### Events

| Event               | Payload          | Description                                                                   |
| ------------------- | ---------------- | ----------------------------------------------------------------------------- |
| `update:modelValue` | `FilterBarValue` | The search, a filter or the sort changed. A new object.                       |
| `update:view`       | `string` `number` `null` | A view was applied, or the value was edited.                          |
| `search`            | `string`         | The search was applied: after the debounce, on Enter, or when cleared.        |
| `clear`             | `-`              | Clear all was used. `v-model` already holds the empty search and filters.     |
| `save-view`         | `FilterBarValue` | The save item of the views menu was used. Store it and add it to `views`.     |

### Slots

| Slot            | Props                                 | Description                                                                         |
| --------------- | ------------------------------------- | ----------------------------------------------------------------------------------- |
| `leading`       | `-`                                   | Content before the search field.                                                    |
| `trailing`      | `-`                                   | Content after the controls, e.g. a button that exports the list.                    |
| `actions`       | `-`                                   | Buttons at the very end of the row, after `trailing`.                               |
| `empty`         | `-`                                   | Shown on the chips line while no filter is set, e.g. a hint.                        |
| `chip`          | `filter`, `value`, `text`, `remove`   | Replaces a chip. `remove` takes the filter off.                                     |
| `value`         | `filter`, `value`, `text`             | Replaces the value text of a chip, after its name.                                  |
| `filter-<key>`  | `value`, `update`, `close`            | Replaces the editor of the filter with that `key`.                                  |

## Theming

The bar is styled with CSS variables. Override them after the `noofpi-ui` import.

```css
:root {
  --n-filter-bar-search-w: 24rem;
}
```

| Variable                     | Description                                                      |
| ---------------------------- | ---------------------------------------------------------------- |
| `--n-filter-bar-gap`         | Gap between the controls. Defaults to `0.5rem`.                  |
| `--n-filter-bar-search-w`    | Width of the search field. Defaults to `16rem`.                  |
| `--n-filter-bar-search-max-w`| Largest width of the search field. Defaults to `24rem`.          |
| `--n-filter-bar-chip-h`      | Height of a chip. Defaults to `1.75rem`.                         |
| `--n-filter-bar-chip-max-w`  | Largest width of a chip. Defaults to `16rem`.                    |
| `--n-filter-bar-chip-bg`     | Background of a chip.                                            |
| `--n-filter-bar-chip-fg`     | Text color of a chip.                                            |
| `--n-filter-bar-chip-muted`  | Color of the filter name and the remove icon.                    |
| `--n-filter-bar-chip-ring`   | Border color of a chip.                                          |
| `--n-filter-bar-chip-hover`  | Background of a chip on hover.                                   |
| `--n-filter-bar-muted`       | Color of secondary text.                                         |
| `--n-filter-bar-link`        | Color of the Clear all and Reset links.                          |
