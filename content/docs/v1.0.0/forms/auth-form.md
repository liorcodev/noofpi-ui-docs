---
title: NAuthForm
description: A login, signup or reset form from a list of fields.
---

# NAuthForm

A login, signup or reset form built from a list of `fields`. It uses `NForm`, `NFormField`, `NInput` and `NButton`, and validates with a Zod `schema`.

::component-example{name="auth-form/basic"}
::

## Validation

Pass a Zod `schema` (3 or 4) whose keys match the `name` of the fields. The form validates on submit and shows the first error of each field under it. `submit` carries the parsed data. Without a `schema`, or a `form`, it carries the plain values.

The payload is typed from the `schema`: a handler declared as `(data: z.infer<typeof schema>) => ...` is accepted for `@submit`, and an inline `@submit="(data) => ..."` gets the type without an annotation. Without a `schema`, or with a `form`, the payload is `unknown`.

Field options such as `description`, `help`, `required` and `placeholder` are passed to the `NFormField` and the input.

::component-example{name="auth-form/signup"}
::

## Providers

`providers` adds outline buttons above the fields, for example social sign in. `separator` sets the text between them and the fields, and defaults to `or`.

::component-example{name="auth-form/providers"}
::

## Loading and errors

`loading` shows a spinner on the submit button and prevents resubmitting, for a request handled outside the form. `error` shows a failure above the submit button.

::component-example{name="auth-form/loading-error"}
::

## Slots usage

The `header` slot replaces `title`, `description` and `icon`. The `footer` slot adds content below the submit button, such as a link to another page.

::component-example{name="auth-form/slots"}
::

## API

### Props

| Prop          | Type                                  | Default    | Description                                                                          |
| ------------- | ------------------------------------- | ---------- | ------------------------------------------------------------------------------------ |
| `fields`      | `AuthField[]`                         | -          | The inputs, in order. Required.                                                      |
| `title`       | `string`                              | `-`        | The heading of the form.                                                             |
| `description` | `string`                              | `-`        | Text under the title.                                                                |
| `icon`        | `string` `Component`                  | `-`        | An icon above the title: an Iconify class, another class, or a component.            |
| `providers`   | `AuthProvider[]`                      | `[]`       | Outline buttons shown above the fields.                                              |
| `separator`   | `string`                              | `or`       | The text between the providers and the fields.                                       |
| `submitLabel` | `string`                              | `Continue` | The label of the submit button.                                                      |
| `loading`     | `boolean`                             | `false`    | Shows a spinner on the submit button and prevents resubmitting.                      |
| `error`       | `string`                              | `-`        | A failure shown above the submit button.                                             |
| `schema`      | `FormSchema`                          | `-`        | A Zod schema validated against the values on submit. Ignored with `form`.            |
| `form`        | `NoofpiFormLike`                      | `-`        | The result of noofpi's `useDoofpiForm()`, whose `values` hold the inputs' state.     |

With `form`, give its `initial` a key for every field `name`, and its `failure` is shown next to `error`. See [NForm](/docs/forms/form).

### Slots

| Slot     | Description                                                       |
| -------- | ----------------------------------------------------------------- |
| `header` | Replaces the title, description and icon.                         |
| `footer` | Content below the submit button, such as a link to another page.  |

### Events

| Event    | Payload      | Description                                                                                  |
| -------- | ------------ | -------------------------------------------------------------------------------------------- |
| `submit` | `T` `unknown` | The parsed data with a `schema` (typed as its output), what `onSubmit` returned with a `form`, or the plain values. |
| `error`  | `FormErrors` | Validation failed: the messages of each field by name.                                       |

### AuthField

| Field          | Type                                                        | Default | Description                                                            |
| -------------- | ----------------------------------------------------------- | ------- | ---------------------------------------------------------------------- |
| `name`         | `string`                                                    | -       | The key in the values and the path in the schema.                      |
| `type`         | `text` `email` `password` `tel` `url` `checkbox`            | `text`  | The input type. A `checkbox` renders a checkbox with the `label`.      |
| `label`        | `string`                                                    | `-`     | The label of the field.                                                |
| `placeholder`  | `string`                                                    | `-`     | The placeholder of the input.                                          |
| `autocomplete` | `string`                                                    | `-`     | The `autocomplete` attribute of the input.                             |
| `description`  | `string`                                                    | `-`     | Text between the label and the input.                                  |
| `help`         | `string`                                                    | `-`     | Text under the input while there is no error.                          |
| `required`     | `boolean`                                                   | `false` | Marks the field as required.                                           |

### AuthProvider

| Field      | Type                 | Default | Description                                      |
| ---------- | -------------------- | ------- | ------------------------------------------------ |
| `label`    | `string`             | -       | The text of the button.                          |
| `icon`     | `string` `Component` | `-`     | The icon of the button.                          |
| `onClick`  | `() => void`         | `-`     | Called when the button is clicked.               |
| `disabled` | `boolean`            | `false` | Disables the button.                             |

## Styling

`NAuthForm` has no CSS variables. Style it with the `n-auth`, `n-auth-header`, `n-auth-title`, `n-auth-providers`, `n-auth-separator`, `n-auth-alert` and `n-auth-footer` classes, or put utilities on the element, for example `class="max-w-md"`. The form is `24rem` wide at most.
