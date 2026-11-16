---
title: NForm
description: A form that validates with a Zod schema or useDoofpiForm.
---

# NForm

A `<form>` that validates with a Zod schema (3 or 4) and hands the errors to its fields. Pass a `schema` and the `state` to validate, and `NFormField` shows each field's error.

::component-example{name="form/basic"}
::

## Slot props

The default slot receives `errors` (by field path), `submit`, `validate` and `reset`. `type="submit"` and `type="reset"` buttons inside the form work as usual, and the browser's own validation is off (`novalidate`) so the schema decides.

::component-example{name="form/slot-props"}
::

## Events

`submit` fires with the parsed data when the state is valid. `error` fires with the field errors otherwise: keys are paths such as `user.email` or `tags.0`, and issues on the whole value are under `""`.

::component-example{name="form/events"}
::

## Template ref

The component exposes `submit()`, `validate()`, `reset()` and `errors` through a template ref. `validate()` returns whether the values are valid without submitting.

::component-example{name="form/template-ref"}
::

## With useDoofpiForm

The `form` prop takes the result of noofpi's [`useDoofpiForm`](https://liorcodev.github.io/noofpi-docs/docs/doofpi/forms), so the browser and the doofpi endpoint share one schema. It validates, submits, and maps the server's 400 errors onto the fields. `schema` and `state` are ignored when `form` is set, and the slot also receives `failure` and `submitting`. This needs the noofpi framework, so the example is not live.

```vue
<script setup lang="ts">
import { createUser } from "../../shared/schemas"; // also the endpoint's `input`

const form = useDoofpiForm(createUser, {
  initial: { email: "" },
  onSubmit: (data) => client.users.create.write(data),
});
</script>

<template>
  <NForm :form="form" @submit="created = $event">
    <template #default="{ errors, failure, submitting }">
      <input v-model="form.values.email" />
      <p v-if="errors.email">{{ errors.email[0] }}</p>
      <p v-if="failure">{{ failure }}</p>
      <NButton type="submit" label="Create" :loading="submitting" />
    </template>
  </NForm>
</template>
```

## API

### Props

| Prop       | Type                  | Default | Description                                                                          |
| ---------- | --------------------- | ------- | ------------------------------------------------------------------------------------ |
| `form`     | `NoofpiFormLike`      | `-`     | The result of `useDoofpiForm()`, which validates, submits and maps the server errors. |
| `schema`   | `FormSchema`          | `-`     | A Zod schema validated against `state` on submit, ignored with `form`.               |
| `state`    | `object`              | `-`     | The reactive values to validate, ignored with `form`.                                |
| `disabled` | `boolean`             | `false` | Makes submitting do nothing.                                                         |

### Slots

| Slot      | Description                                                                                                                         |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `default` | The form content, with `{ errors, failure, submitting, submit, validate, reset }`. `failure` and `submitting` are only set with `form`. |

### Events

| Event    | Payload                  | Description                                                                          |
| -------- | ------------------------ | ------------------------------------------------------------------------------------ |
| `submit` | `unknown`                | The parsed data with `schema` and `state`, or what `onSubmit` returned with `form`.  |
| `error`  | `Record<string, string[]>` | Validation failed: the field errors by path, with `""` for the whole value.        |

### Exposed

| Member       | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| `submit()`   | Validates, then submits. Emits `submit` or `error`.          |
| `validate()` | Validates without submitting and returns whether it is valid. |
| `reset()`    | Clears the errors, or resets the `form`.                     |
| `errors`     | The current field errors.                                    |
