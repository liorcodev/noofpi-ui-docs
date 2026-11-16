---
title: NCheckboxGroup and NRadioGroup
description: Groups of checkboxes or radios from a list of items.
---

# NCheckboxGroup and NRadioGroup

Groups of options rendered inside a `fieldset` from a list of `items`. `NCheckboxGroup` lets you check several options, `NRadioGroup` exactly one.

::component-example{name="groups/checkbox-group"}
::

## Radio group

The `v-model` of `NRadioGroup` is the `value` of the selected item. The radios share a generated `name`, or the one you pass.

::component-example{name="groups/radio-group"}
::

## Buttons

`buttons` renders the options as toggle buttons: `NCheckButton` for checkboxes and a selectable `NButton` for radios. `color`, `size`, `variant` and `checkedVariant` style the buttons, and `description` is ignored.

::component-example{name="groups/buttons"}
::

## Orientation

Options are stacked by default. Use `orientation="horizontal"` to lay them in a row.

::component-example{name="groups/orientation"}
::

## Disabled

Disable a single option with `disabled` on its item, or the whole group with `disabled` on the component.

::component-example{name="groups/disabled"}
::

## In a form field

Inside an `NFormField`, the group carries the field's `id`, `aria-invalid` and `aria-describedby`, and takes its invalid state from the field. Outside a field, use `invalid`.

::component-example{name="groups/in-field"}
::

## API

### Props

Both components share these props. `color`, `size`, `variant` and `checkedVariant` apply to `buttons` mode only. The `v-model` default of `[]` is for `NCheckboxGroup`, `NRadioGroup` starts as `undefined`.

| Prop             | Type                                                   | Default                                           | Description                                                                         |
| ---------------- | ------------------------------------------------------ | ------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `v-model`        | `unknown[]` `unknown`                                  | `[]`                                              | The checked values for `NCheckboxGroup`, the selected value for `NRadioGroup`.      |
| `items`          | `ChoiceItem[]`                                         | -                                                 | The options. Required.                                                              |
| `orientation`    | `vertical` `horizontal`                                | `vertical`                                        | The direction the options are laid out in.                                          |
| `buttons`        | `boolean`                                              | `false`                                           | Renders each option as a toggle button instead of a checkbox or radio.              |
| `name`           | `string`                                               | -                                                 | The native `name` of the inputs, generated for radios when omitted, unused with `buttons`. |
| `invalid`        | `boolean`                                              | `false`                                           | Marks the group invalid without an `NFormField` around it.                          |
| `disabled`       | `boolean`                                              | `false`                                           | Disables every option.                                                              |
| `color`          | `primary` `neutral` `success` `info` `warning` `error` | -                                                 | The color of the buttons.                                                           |
| `size`           | `xxs` `xs` `sm` `md` `lg` `xl` `xxl`                   | -                                                 | The size of the buttons.                                                            |
| `variant`        | `solid` `outline` `soft` `subtle` `ghost` `link`       | `outline`                                         | The variant of unchecked buttons.                                                   |
| `checkedVariant` | `solid` `outline` `soft` `subtle` `ghost` `link`       | `solid`                                           | The variant of checked buttons.                                                     |

### ChoiceItem

| Field         | Type      | Description                                           |
| ------------- | --------- | ----------------------------------------------------- |
| `label`       | `string`  | The text of the option.                               |
| `value`       | `unknown` | The value added to or selected in the `v-model`.      |
| `description` | `string`  | Text under the label, ignored with `buttons`.         |
| `disabled`    | `boolean` | Disables this option.                                 |
