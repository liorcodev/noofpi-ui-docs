---
title: NFormField and NInput
description: A field wrapper with label and error, and a styled input.
---

# NFormField and NInput

`NInput` is a styled `<input>` and `NFormField` wraps any control with its label, description, hint, help and error.

::component-example{name="input/basic"}
::

`v-model` is a `string` or `number`. Any native attribute (`placeholder`, `autocomplete`, `name`, ...) goes to the `<input>`, while `class` and `style` apply to the wrapper around it.

## Icons

`icon` and `trailingIcon` add an icon before or after the text. They accept an Iconify class, any other class, or a Vue component. See [Icons](/docs/icons).

::component-example{name="input/icons"}
::

## Prepend and append

`prepend` and `append` put a shaded block before or after the input that shares its border and focus ring, for example `https://` or `.com`.

::component-example{name="input/addons"}
::

## Slots

The `leading` and `trailing` slots replace the icons with any content, such as a show-password or clear button. The `prepend` and `append` slots do the same for the addons.

::component-example{name="input/slots"}
::

## States

`invalid` marks the input without an `NFormField`. `disabled` is a native attribute.

::component-example{name="input/states"}
::

## Form field

`NFormField` binds its `label` to the control and gives `NInput` the `id`, `aria-invalid` and `aria-describedby` automatically. `required` adds a `*` to the label, `description` sits under it, `hint` beside it, and `help` under the control while there is no error.

::component-example{name="input/form-field"}
::

## Validation errors

Give the field its `name`, the path in the schema (`email`, `user.email`, `tags.0`), and it shows that field's first error from the surrounding [NForm](/docs/forms/form).

::component-example{name="input/validation"}
::

## Custom error

`error` replaces the form's message with a string, or marks the field invalid without a message when `true`.

::component-example{name="input/error"}
::

## Other controls

The default slot of `NFormField` receives `{ id, invalid, error, describedBy }`, so any control can be wired to the label and the error.

::component-example{name="input/custom-control"}
::

## API

### NInput props

| Prop           | Type                 | Default  | Description                                                              |
| -------------- | -------------------- | -------- | ------------------------------------------------------------------------ |
| `modelValue`   | `string` `number`    | `-`      | The value, bound with `v-model`.                                         |
| `type`         | `string`             | `text`   | The native input type.                                                   |
| `invalid`      | `boolean`            | `false`  | Marks the input invalid without an `NFormField`.                         |
| `icon`         | `string` `Component` | `-`      | Icon before the text: an Iconify class, another class, or a component.   |
| `trailingIcon` | `string` `Component` | `-`      | Icon after the text, same values as `icon`.                              |
| `prepend`      | `string`             | `-`      | Text in a shaded block before the input.                                 |
| `append`       | `string`             | `-`      | Text in a shaded block after the input.                                  |

### NInput slots

| Slot       | Description                                   |
| ---------- | --------------------------------------------- |
| `leading`  | Replaces the leading icon.                    |
| `trailing` | Replaces the trailing icon.                   |
| `prepend`  | Replaces the `prepend` text.                  |
| `append`   | Replaces the `append` text.                   |

### NFormField props

| Prop          | Type                | Default | Description                                                                         |
| ------------- | ------------------- | ------- | ----------------------------------------------------------------------------------- |
| `name`        | `string`            | `-`     | The field's path in the schema, used to read its error from the surrounding form.   |
| `label`       | `string`            | `-`     | The label bound to the control.                                                     |
| `description` | `string`            | `-`     | Text under the label.                                                               |
| `hint`        | `string`            | `-`     | Text beside the label, for example "Optional".                                      |
| `help`        | `string`            | `-`     | Text under the control while there is no error.                                     |
| `error`       | `string` `boolean`  | `-`     | A message that replaces the form's, or `true` to mark the field invalid.            |
| `required`    | `boolean`           | `false` | Adds a `*` to the label.                                                            |

### NFormField slots

| Slot          | Description                                                                         |
| ------------- | ----------------------------------------------------------------------------------- |
| `default`     | The control, with `{ id, invalid, error, describedBy }` to wire any other control.  |
| `label`       | Replaces the label text.                                                            |
| `description` | Replaces the description.                                                           |
| `hint`        | Replaces the hint.                                                                  |
| `help`        | Replaces the help text.                                                             |
| `error`       | Replaces the error message, with `{ error }`.                                       |

## Theming

Size tokens are CSS variables. Override them after the `noofpi-ui` import.

```css
:root {
  --n-input-h: 3rem;
}
```

| Variable        | Description                              |
| --------------- | ---------------------------------------- |
| `--n-input-h`   | Height of the input. Default `2.5rem`.   |
| `--n-input-px`  | Horizontal padding. Default `0.75rem`.   |
| `--n-input-fs`  | Font size. Default `0.875rem`.           |
