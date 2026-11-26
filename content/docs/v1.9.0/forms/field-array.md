---
title: NFieldArray
description: A repeatable group of form fields with add, remove and reorder buttons.
---

# NFieldArray

A list of rows that the user can add to and remove from, such as emails, contacts or steps. `v-model` is an array with one item per row. You draw each row in the default slot, and `NFieldArray` adds the buttons and keeps the array in sync.

The rows can hold strings or numbers as well as objects. For a primitive row, call `update` from the slot with the new value.

::component-example{name="field-array/basic"}
::

## Objects

`default-item` is what a new row starts with. An object or array is cloned for each row, so rows never share it. A function is called for each new row. It is `""` by default.

The slot receives the `item`, so for an object row you can bind a field to it with `v-model`.

::component-example{name="field-array/objects"}
::

The add button focuses the first field of the new row. When a row is removed, the focus goes to the row that took its place, or to the add button when none is left.

## Reordering

`sortable` shows a button to move each row up and down. The first row can't move up and the last can't move down. Rows keep their state and focus when they move.

`add` fires with the new item and its index, `remove` with the removed item and its index, and `move` with the old and new index.

::component-example{name="field-array/sortable"}
::

## Limits

`min` is the number of rows that can't be removed. It does not add rows to the model, so an empty list with `min` of `2` stays empty until the user adds them. `max` is the most rows that can be added, with no limit by default.

At `max` the add button is disabled. `max-label` shows a text next to it, which is also added to the group's `aria-describedby`.

`add-label` is the text of the add button, and `item-label` names a row for screen readers, as in `Remove Phone 2`.

::component-example{name="field-array/limits"}
::

## Variants and sizes

`variant` is `plain`, which lays the rows out as they are, or `outline`, which draws each row as a bordered card. `size` is `sm`, `md` or `lg`, and sets the spacing and the size of the buttons.

`align` sets where the row's buttons sit next to its fields: `start` keeps them with the first line, and `center` puts them in the middle of the row. Use `center` for tall rows.

::component-example{name="field-array/variants"}
::

## Slots

Besides the rows, the component has slots around them. `header` is above the list and `footer` is next to the add button. `empty` replaces the list while there are no rows. `add` replaces the add button. `row-actions` adds buttons in front of the move and remove buttons of each row.

All of them are optional. The ones outside the rows receive `add`, so you can start a new row from your own button.

::component-example{name="field-array/slots"}
::

## Form validation

Inside an `NForm`, set `name` to the path of the list in the schema. The errors of `contacts.0.email` reach the first row, so an `NFormField` in the row with the `name` slot prop shows them. The slot's `name` is the row's path, such as `contacts.0`. An error on the list itself, like `min(1)`, shows under the rows and marks the group invalid. See [NForm](/docs/forms/form).

A row with errors gets a `data-invalid` attribute, and an `outline` card then shows the error color. For inputs that aren't inside an `NFormField`, the slot's `errors` has the row's messages by field, such as `errors.name?.[0]`, and `""` holds the messages of the row itself.

::component-example{name="field-array/form"}
::

The `errors` prop adds errors from another source. It takes an array by row (a string, a list of strings, or an object by field), or an object by path like `NForm`'s errors (`"0.email"`, or `""` for the whole list).

## Disabled

`disabled` disables the buttons and, because the group is a `fieldset`, the native fields in the rows. A component that does not render a native field needs the `disabled` slot prop. `invalid` marks the group invalid without an `NFormField` or a schema.

Inside an [NFormField](/docs/forms/input) the group takes the field's `id`, `aria-describedby` and invalid state.

## Accessibility

The group is a `fieldset`, and `label` is its accessible name. Each row is an item of a list. The buttons are named after their row, such as `Move up Item 2` and `Remove Item 2`, from `move-up-label`, `move-down-label`, `remove-label` and `item-label`. With an error on the list, the group has `aria-invalid` and the message is an alert.

With `sortable`, a row can be moved with the keyboard from any of its buttons:

| Key                | Action                                          |
| ------------------ | ----------------------------------------------- |
| `Alt` `ArrowUp`   | Moves the row up. The focus stays on the button. |
| `Alt` `ArrowDown` | Moves the row down. The focus stays on the button. |

## API

Other attributes go to the root `fieldset`.

### Props

| Prop            | Type                                | Default           | Description                                                                                              |
| --------------- | ----------------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------- |
| `modelValue`    | `unknown[]`                         | `[]`              | The rows' values. Strings and numbers work as well as objects.                                           |
| `label`         | `string`                            | `-`               | The accessible name of the group.                                                                        |
| `name`          | `string`                            | `-`               | The path of the list in the surrounding `NForm`'s schema. Row `n` is `name.n` in the slot's `name`.      |
| `errors`        | `FieldArrayErrors`                  | `-`               | Errors to show in addition to the `NForm`'s: an array by row, or an object by path.                      |
| `defaultItem`   | `unknown`                           | `""`              | What a new row starts with. Objects and arrays are cloned, a function is called for each new row.        |
| `sortable`      | `boolean`                           | `false`           | Shows buttons that move a row up and down.                                                               |
| `min`           | `number`                            | `0`               | Rows that can't be removed. The model is not padded up to it.                                            |
| `max`           | `number`                            | `-`               | Rows that can be added. No limit by default.                                                             |
| `addLabel`      | `string`                            | `Add`             | The text of the add button.                                                                              |
| `addIcon`       | `string` `Component`                | `i-lucide-plus`   | The icon of the add button.                                                                              |
| `removeIcon`    | `string` `Component`                | `i-lucide-trash-2` | The icon of the remove button.                                                                          |
| `removeLabel`   | `string`                            | `Remove`          | The name of the remove button, followed by the row's name (`Remove Item 2`).                             |
| `moveUpLabel`   | `string`                            | `Move up`         | The name of the move up button, followed by the row's name.                                              |
| `moveDownLabel` | `string`                            | `Move down`       | The name of the move down button, followed by the row's name.                                            |
| `itemLabel`     | `string`                            | `Item`            | Names a row for screen readers, followed by its number (`Item 2`).                                       |
| `maxLabel`      | `string`                            | `-`               | Shown next to the add button once `max` is reached.                                                      |
| `variant`       | `plain` `outline`                   | `plain`           | `outline` draws each row as a bordered card.                                                             |
| `size`          | `sm` `md` `lg`                      | `md`              | The spacing and the size of the buttons.                                                                 |
| `align`         | `start` `center`                    | `start`           | Where the row's buttons sit next to its fields: with the first line, or in the middle.                   |
| `invalid`       | `boolean`                           | `false`           | Marks the group invalid without an `NFormField`.                                                         |
| `disabled`      | `boolean`                           | `false`           | Disables the buttons and the native fields in the rows.                                                  |

`FieldArrayErrors` is an array with an entry per row (`string`, `string[]`, an object by field such as `{ email: ['…'] }`, or `null`), or an object by path (`"0"`, `"0.email"`, and `""` for the whole list).

### Events

| Event               | Payload                              | Description                                    |
| ------------------- | ------------------------------------ | ---------------------------------------------- |
| `update:modelValue` | `unknown[]`                          | The rows changed: added, removed, moved or edited with `update`. |
| `add`               | `item: unknown`, `index: number`     | A row was added. `index` is its position.      |
| `remove`            | `item: unknown`, `index: number`     | A row was removed. `index` is where it was.    |
| `move`              | `from: number`, `to: number`         | A row was moved from one index to another.     |

### Slots

| Slot          | Props                                                                       | Description                                                          |
| ------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `default`     | `item`, `index`, `key`, `name`, `errors`, `disabled`, `update`, `remove`, `move` | The content of a row. `update(value)` replaces the row's value, `remove()` removes it and `move(to)` moves it to an index. |
| `row-actions` | The same as `default`                                                       | Buttons in front of the row's move and remove buttons.              |
| `header`      | `add`, `count`, `disabled`                                                  | Above the list. `disabled` is `true` when no row can be added.      |
| `empty`       | `add`, `disabled`                                                           | Replaces the list while there are no rows.                           |
| `add`         | `add`, `disabled`                                                           | Replaces the add button.                                             |
| `footer`      | `add`, `count`, `disabled`                                                  | Next to the add button, after the `max-label`.                       |

`add(item?)` adds a row with `item`, or with the `default-item`, and does nothing when no row can be added. `count` is the number of rows. In the row slots, `name` is `undefined` without a `name` prop, `errors` is an object of message lists by field, and `disabled` is the `disabled` prop.

### Exposed

| Member               | Description                                                          |
| -------------------- | -------------------------------------------------------------------- |
| `add(item?)`         | Adds a row, like the add button.                                     |
| `remove(index)`      | Removes the row at `index`, unless it is below `min`.                |
| `move(from, to)`     | Moves a row.                                                         |
| `focus()`            | Focuses the first focusable element of the group.                    |

## Theming

The spacing is a set of CSS variables. Override them after the `noofpi-ui` import.

```css
:root {
  --n-field-array-gap: 1rem;
}
```

The `sm` and `lg` sizes set their own spacing on the group, so to change those, set the variable on `.n-field-array[data-size="sm"]` or `.n-field-array[data-size="lg"]`.

| Variable                  | Description                                                                                                      |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `--n-field-array-gap`     | The space between rows. Defaults to `0.75rem`, `0.5rem` for `sm` and `1rem` for `lg`.                            |
| `--n-field-array-row-gap` | The space between a row's fields and its buttons. Defaults to `0.5rem`, `0.25rem` for `sm` and `0.75rem` for `lg`. |
| `--n-field-array-card-p`  | The padding of an `outline` card. Defaults to `0.75rem`, `0.5rem` for `sm` and `1rem` for `lg`.                  |
| `--n-field-array-edge`    | The border color of an `outline` card. Defaults to `--ui-neutral-200`, `--ui-neutral-800` in dark mode, and the error color when invalid. |
| `--n-field-array-card-bg` | The background of an `outline` card. Defaults to `transparent`.                                                  |
| `--n-field-array-line`    | The height of a row's first line, which the buttons are centered on with `align="start"`. Defaults to `--n-input-h`, or `2.5rem`, and is `0.5rem` less for `sm` and more for `lg`. Set it when the fields are taller. |
