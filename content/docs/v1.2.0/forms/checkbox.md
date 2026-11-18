---
title: NCheckbox
description: A styled checkbox bound to a boolean or an array.
---

# NCheckbox

A styled checkbox with its label beside it. `v-model` is a `boolean`.

::component-example{name="checkbox/basic"} ::

## Array model

Give each checkbox a `value` and bind them to one array. The array holds the values of the checked
boxes.

::component-example{name="checkbox/array"} ::

## Custom label

The default slot replaces `label`, so the label can hold markup such as a link.

::component-example{name="checkbox/slot"} ::

## States

`disabled` is a native attribute, and `invalid` marks the checkbox without an `NFormField`.

::component-example{name="checkbox/states"} ::

## Form field

Inside an `NFormField` the checkbox gets the `id`, `aria-invalid` and `aria-describedby`, and the
field shows the schema error. See [NFormField](/docs/forms/input).

::component-example{name="checkbox/form-field"} ::

## API

Native attributes (`name`, `value`, `disabled`, ...) go to the `<input>`, while `class` and `style`
go to the wrapper.

### Props

| Prop         | Type                                                               | Default   | Description                                          |
| ------------ | ------------------------------------------------------------------ | --------- | ---------------------------------------------------- |
| `modelValue` | `boolean` `unknown[]`                                              | `-`       | A boolean, or an array shared by several checkboxes. |
| `label`      | `string`                                                           | `-`       | The text beside the box. The default slot works too. |
| `color`      | `primary` `secondary` `neutral` `success` `info` `warning` `error` | `primary` | The color of the checked box.                        |
| `invalid`    | `boolean`                                                          | `false`   | Marks the checkbox invalid without an `NFormField`.  |

### Slots

| Slot      | Description                            |
| --------- | -------------------------------------- |
| `default` | The label content, instead of `label`. |
