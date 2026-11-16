---
title: NNumberInput
description: A number field with decrement and increment buttons.
---

# NNumberInput

A number field with minus and plus buttons. `v-model` is a `number`, or `undefined` while the input is empty.

::component-example{name="number-input/basic"}
::

## Step

`step` is the amount per button press or arrow key. Decimal steps don't drift, so `9.99` plus `0.05` is exactly `10.04`.

::component-example{name="number-input/step"}
::

## Empty value

Clearing the input sets the model to `undefined`. Typed text is committed on blur or Enter and clamped to `min` and `max`; text that isn't a number reverts.

::component-example{name="number-input/empty"}
::

## States

::component-example{name="number-input/states"}
::

## Button labels

`decrementLabel` and `incrementLabel` set the `aria-label` of the buttons. Translate them or make them specific.

::component-example{name="number-input/labels"}
::

## Form field

Inside an `NFormField` the input gets the `id`, `aria-invalid` and `aria-describedby`, and shows the error of its `name`. See [NFormField](/docs/forms/input).

::component-example{name="number-input/form-field"}
::

## Keyboard and accessibility

The input is a `spinbutton` with `aria-valuenow`, `aria-valuemin` and `aria-valuemax`.

| Key                   | Action                                  |
| --------------------- | --------------------------------------- |
| `ArrowUp` `ArrowDown` | Change the value by one `step`.         |
| `PageUp` `PageDown`   | Change the value by 10 steps.           |
| `Home` `End`          | Jump to `min` or `max`, when set.       |
| `Enter`               | Commit the typed text.                  |

## API

Native attributes such as `placeholder` and `name` go to the `<input>`, while `class` and `style` go to the wrapper.

### Props

| Prop             | Type      | Default      | Description                                                              |
| ---------------- | --------- | ------------ | ------------------------------------------------------------------------ |
| `modelValue`     | `number`  | `-`          | The value, bound with `v-model`. `undefined` while the input is empty.   |
| `min`            | `number`  | `-`          | The lower bound. Values are clamped and the decrement button disables.   |
| `max`            | `number`  | `-`          | The upper bound. Values are clamped and the increment button disables.   |
| `step`           | `number`  | `1`          | The amount per button press or arrow key.                                |
| `invalid`        | `boolean` | `false`      | Marks the input invalid without an `NFormField`.                         |
| `disabled`       | `boolean` | `false`      | Disables the input and both buttons.                                     |
| `decrementLabel` | `string`  | `Decrease`   | The `aria-label` of the decrement button.                                |
| `incrementLabel` | `string`  | `Increase`   | The `aria-label` of the increment button.                                |

## Theming

The height and font size follow the input tokens from [NFormField and NInput](/docs/forms/input).

| Variable       | Description                                                       |
| -------------- | ----------------------------------------------------------------- |
| `--n-input-h`  | Height of the field and width of each button. Default `2.5rem`.   |
| `--n-input-fs` | Font size. Default `0.875rem`.                                    |
