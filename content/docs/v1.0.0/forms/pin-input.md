---
title: NPinInput
description: A one-cell-per-character code input.
---

# NPinInput

A code input with one cell per character, for one-time codes and PINs. `v-model` is the code as a string.

::component-example{name="pin-input/basic"}
::

## Length and type

`length` sets the number of cells. `type="numeric"` accepts digits only, `type="alphanumeric"` also accepts letters. Other characters are ignored.

::component-example{name="pin-input/length-type"}
::

## Mask

`mask` hides the characters like a password.

::component-example{name="pin-input/mask"}
::

## Complete event

`complete` fires with the code once every cell is filled.

::component-example{name="pin-input/complete"}
::

## States

::component-example{name="pin-input/states"}
::

## Form field

Inside an `NFormField` the first cell gets the `id` and the group gets `aria-describedby`, so the label and the error are announced. `name` submits the whole code from one hidden input.

::component-example{name="pin-input/form-field"}
::

## Keyboard and autofill

Typing moves to the next cell. Pasting or autofilling a code (the first cell has `autocomplete="one-time-code"`) spreads it over the cells.

| Key                       | Action                                                      |
| ------------------------- | ----------------------------------------------------------- |
| `Backspace`               | Clears the cell, or steps back and clears the previous one. |
| `Delete`                  | Clears the cell.                                            |
| `ArrowLeft` `ArrowRight`  | Move between cells. The arrows follow `dir="rtl"`.          |
| `Home` `End`              | Move to the first or last cell.                             |

## API

### Props

| Prop         | Type                      | Default   | Description                                                   |
| ------------ | ------------------------- | --------- | ------------------------------------------------------------- |
| `modelValue` | `string`                  | `""`      | The code, bound with `v-model`.                               |
| `length`     | `number`                  | `6`       | The number of cells.                                          |
| `type`       | `numeric` `alphanumeric`  | `numeric` | The characters the cells accept.                              |
| `mask`       | `boolean`                 | `false`   | Hides the characters like a password.                         |
| `name`       | `string`                  | `-`       | Submits the whole code from one hidden input with this name.  |
| `invalid`    | `boolean`                 | `false`   | Marks the cells invalid without an `NFormField`.              |
| `disabled`   | `boolean`                 | `false`   | Disables every cell.                                          |

### Events

| Event      | Payload  | Description                      |
| ---------- | -------- | -------------------------------- |
| `complete` | `string` | Every cell is filled, with the code. |

## Theming

| Variable         | Description                                                    |
| ---------------- | -------------------------------------------------------------- |
| `--n-pin-cell-w` | Width of each cell. Defaults to `--n-input-h`, which is `2.5rem`. |

```css
:root {
  --n-pin-cell-w: 3rem;
}
```
