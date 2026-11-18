---
title: NSelect
description: An accessible dropdown select with single and multiple modes.
---

# NSelect

A dropdown list of options from `items`. The trigger is a `role="combobox"` button and the list is a
`listbox`, so it is fully keyboard and screen reader friendly.

::component-example{name="select/basic" height="320px"} ::

## Multiple

With `multiple`, the `v-model` is an array of values and the list stays open while you pick. The
chosen options stay checked in the list and the trigger shows their labels joined with commas.

::component-example{name="select/multiple" height="320px"} ::

## Badges

With `multiple`, add `badges` to show the chosen options as badges, wrapping onto more lines. Style
them with `badgeVariant` and `badgeColor`; an `icon` of the item shows in its badge.

::component-example{name="select/badges" height="320px"} ::

## Icons and descriptions

An item can have an `icon` and a `description`. The icon also shows in the trigger.

::component-example{name="select/icons-descriptions" height="320px"} ::

## Item slot

The `item` slot replaces the content of every option and of the trigger. It receives the `item` and
whether it is `selected`. With `multiple` it only applies to the list.

::component-example{name="select/item-slot" height="320px"} ::

## In a form field

Inside an `NFormField`, the trigger carries the field's `id`, `aria-invalid` and `aria-describedby`.
Use `name` to submit the value with a surrounding `form` through a hidden input; with `multiple` it
submits one input per value.

::component-example{name="select/in-field" height="360px"} ::

## Disabled and invalid

Use `invalid` to mark a select invalid outside an `NFormField`. When there is no field label, give
it a `label` as its accessible name.

::component-example{name="select/states"} ::

## Keyboard

Arrow keys, `Home` and `End` move between enabled options. `Enter` or `Space` opens the list and
chooses the active option, `Escape` closes it, and typing jumps to an option by its label. The list
opens upward when there is no room below.

## API

### Props

| Prop           | Type                                                               | Default   | Description                                                                 |
| -------------- | ------------------------------------------------------------------ | --------- | --------------------------------------------------------------------------- |
| `v-model`      | `unknown` `unknown[]`                                              | `-`       | The selected `value`, or an array of values with `multiple`.                |
| `items`        | `SelectItem[]`                                                     | -         | The options. Required.                                                      |
| `placeholder`  | `string`                                                           | `-`       | Shown while nothing is selected.                                            |
| `name`         | `string`                                                           | `-`       | The native `name` of the hidden input that submits the value with a `form`. |
| `label`        | `string`                                                           | `-`       | The accessible name when there is no `NFormField` label.                    |
| `multiple`     | `boolean`                                                          | `false`   | Allows several values and keeps the list open while picking.                |
| `badges`       | `boolean`                                                          | `false`   | With `multiple`, shows the chosen options as badges instead of text.        |
| `badgeVariant` | `solid` `outline` `soft` `subtle`                                  | `subtle`  | The `NBadge` variant of the badges.                                         |
| `badgeColor`   | `primary` `secondary` `neutral` `success` `info` `warning` `error` | `primary` | The `NBadge` color of the badges.                                           |
| `invalid`      | `boolean`                                                          | `false`   | Marks the select invalid without an `NFormField` around it.                 |
| `disabled`     | `boolean`                                                          | `false`   | Disables the select.                                                        |

### Slots

| Slot   | Description                                                                                    |
| ------ | ---------------------------------------------------------------------------------------------- |
| `item` | Replaces the content of an option and of the trigger, with `{ item, selected }` as slot props. |

### SelectItem

| Field         | Type                 | Description                                      |
| ------------- | -------------------- | ------------------------------------------------ |
| `label`       | `string`             | The text of the option.                          |
| `value`       | `unknown`            | The value written to the `v-model`.              |
| `description` | `string`             | Text under the label in the list.                |
| `icon`        | `string` `Component` | An Iconify class, another class, or a component. |
| `disabled`    | `boolean`            | Makes the option unselectable.                   |

## Theming

The list is styled with CSS variables. Override them after the `noofpi-ui` import. The trigger uses
the `--n-input-*` tokens of [NInput](/docs/forms/input).

```css
:root {
  --n-select-max-h: 20rem;
}
```

| Variable            | Description                                                                |
| ------------------- | -------------------------------------------------------------------------- |
| `--n-select-max-h`  | Maximum height of the list. Default `16rem`.                               |
| `--n-select-offset` | Gap between the trigger and the list. Default `0.375rem`.                  |
| `--n-select-z`      | `z-index` of the open select. Default `50`.                                |
| `--n-select-bg`     | Background of the list. Default `#fff`, neutral 900 in dark.               |
| `--n-select-border` | Border of the list. Default neutral 200, neutral 800 in dark.              |
| `--n-select-fg`     | Text color of the list. Default neutral 800, neutral 100 in dark.          |
| `--n-select-muted`  | Color of descriptions. Default neutral 500, neutral 400 in dark.           |
| `--n-select-hover`  | Background of the active option. Default neutral 100, neutral 800 in dark. |
| `--n-select-shadow` | Shadow of the list.                                                        |
