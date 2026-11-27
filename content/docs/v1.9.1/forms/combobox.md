---
title: NCombobox
description: A searchable select: a text input that filters a list of options as you type.
---

# NCombobox

An input with a list of options from `items`. Typing filters the options by label; choosing one writes its `value` to the `v-model`. Use it instead of [NSelect](/docs/forms/select) when the list is long enough that finding an option by scrolling is slow. It is a `role="combobox"` input with a `listbox`, so it is keyboard and screen reader friendly.

::component-example{name="combobox/basic" height="360px"}
::

## Clearable and custom filtering

Add `clearable` for a button that clears the selection. Turn `filter` off to filter the options yourself, for example from a server: `v-model:search-term` holds what the user typed and is emptied again when the list closes. `emptyText` is shown when no option matches.

::component-example{name="combobox/custom-filter" height="360px"}
::

## In a form field

Inside an `NFormField`, the input carries the field's `id`, `aria-invalid` and `aria-describedby`. Use `name` to submit the value with a surrounding `form` through a hidden input.

::component-example{name="combobox/in-field" height="360px"}
::

## Keyboard

Typing opens the list. `ArrowDown` and `ArrowUp` open it and move between enabled options, `Enter` chooses the active option, and `Escape` closes the list and restores the text of the selection, without closing a dialog around the combobox. `Tab` or clicking outside also closes it. The list opens upward when there is no room below.

## Placement

The list is teleported to the `body` and positioned next to the field, so a container that clips its overflow, such as a table, a card or a dialog body, can't cut it off. It follows the field on scroll and resize, and is placed again when typing filters the options.

## API

### Props

| Prop          | Type           | Default      | Description                                                                              |
| ------------- | -------------- | ------------ | ---------------------------------------------------------------------------------------- |
| `v-model`     | `unknown`      | `-`          | The selected `value`.                                                                    |
| `v-model:search-term` | `string` | `""`        | The text typed in the input. Empty while the list is closed.                             |
| `items`       | `SelectItem[]` | -            | The options. Required.                                                                   |
| `placeholder` | `string`       | `-`          | Shown while the input is empty.                                                          |
| `name`        | `string`       | `-`          | The native `name` of the hidden input that submits the value with a `form`.              |
| `label`       | `string`       | `-`          | The accessible name when there is no `NFormField` label.                                 |
| `filter`      | `boolean`      | `true`       | Filters the options by label while typing. Turn off to filter them yourself.             |
| `clearable`   | `boolean`      | `false`      | Shows a button that clears the selection.                                                |
| `emptyText`   | `string`       | `No results` | Shown in the list when no option matches.                                                |
| `clearLabel`  | `string`       | `Clear`      | The accessible name of the clear button.                                                 |
| `invalid`     | `boolean`      | `false`      | Marks the combobox invalid without an `NFormField` around it.                            |
| `disabled`    | `boolean`      | `false`      | Disables the combobox.                                                                   |

### Slots

| Slot   | Description                                                                 |
| ------ | --------------------------------------------------------------------------- |
| `item` | Replaces the content of an option, with `{ item, selected }` as slot props. |

`SelectItem` is the same as for [NSelect](/docs/forms/select#selectitem).

## Theming

The list uses the `--n-select-*` variables of [NSelect](/docs/forms/select#theming) and the field the `--n-input-*` tokens of [NInput](/docs/forms/input).
