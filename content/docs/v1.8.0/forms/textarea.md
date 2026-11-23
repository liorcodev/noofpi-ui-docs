---
title: NTextarea
description: A styled multi-line text field that matches NInput.
---

# NTextarea

A styled `<textarea>` that looks like [NInput](/docs/forms/input). `v-model` is a `string`. Any native attribute (`placeholder`, `maxlength`, `name`, `disabled`, ...) goes to the `<textarea>`, while `class` and `style` apply to the wrapper around it.

::component-example{name="textarea/basic"}
::

## Rows and autoresize

`rows` is the number of visible lines when the field is empty, `3` by default. Without `autoresize` the user can drag the bottom edge to resize it vertically.

With `autoresize` the field grows with its text and has no resize handle. `rows` is then its minimum height, and `maxRows` is the number of lines after which it scrolls instead of growing. `maxRows` only has an effect with `autoresize`.

::component-example{name="textarea/autoresize"}
::

## Counter

`counter` shows the number of characters under the field, on the right. When the native `maxlength` attribute is set it shows `12 / 200`. The browser enforces `maxlength`, the counter only displays it.

::component-example{name="textarea/counter"}
::

## States

`invalid` marks the field without an `NFormField`. `disabled` is a native attribute.

::component-example{name="textarea/states"}
::

## Form field

Inside an `NFormField` the textarea gets the `id`, `aria-invalid` and `aria-describedby`, so the label names it, and the field shows the schema error. See [NFormField](/docs/forms/input).

::component-example{name="textarea/form-field"}
::

## Accessibility

It is a native `<textarea>`, so the browser handles focus, selection and the keyboard. Name it with an `NFormField` label, or pass an `aria-label`. `invalid` and the field error set `aria-invalid="true"`.

The counter is plain text under the field. It is not announced while you type.

## API

Native attributes go to the `<textarea>`, while `class` and `style` go to the wrapper.

### Props

| Prop         | Type      | Default | Description                                                                           |
| ------------ | --------- | ------- | ------------------------------------------------------------------------------------- |
| `modelValue` | `string`  | `-`     | The text, bound with `v-model`.                                                       |
| `rows`       | `number`  | `3`     | The visible lines when empty. With `autoresize`, also the minimum height.             |
| `autoresize` | `boolean` | `false` | Grows with the text instead of scrolling.                                             |
| `maxRows`    | `number`  | `-`     | With `autoresize`, the number of lines after which the field scrolls.                 |
| `counter`    | `boolean` | `false` | Shows the character count, as `12 / 200` when `maxlength` is set.                     |
| `invalid`    | `boolean` | `false` | Marks the field invalid without an `NFormField`.                                      |

### Events

| Event               | Payload  | Description                                  |
| ------------------- | -------- | -------------------------------------------- |
| `update:modelValue` | `string` | The new text as you type. Used by `v-model`. |

Native events such as `focus` and `blur` are listeners on the `<textarea>`.

## Theming

`NTextarea` uses the same size tokens as `NInput`. Override them after the `noofpi-ui` import.

```css
:root {
  --n-input-h: 3rem;
}
```

| Variable       | Description                                                |
| -------------- | ---------------------------------------------------------- |
| `--n-input-h`  | Minimum height of the field. Default `2.5rem`.             |
| `--n-input-px` | Horizontal padding. Default `0.75rem`.                     |
| `--n-input-fs` | Font size. Default `0.875rem`.                             |
