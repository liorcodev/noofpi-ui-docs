---
title: useToast and NToaster
description: Toast notifications from anywhere in the app.
---

# useToast and NToaster

Mount `NToaster` once, for example in `app.vue`, then call `toast.add` from anywhere. `toast` and
`useToast()` are the same object, and neither is auto-imported by `noofpi-ui/vite`, so import them
from `noofpi-ui`.

::component-example{name="toast/basic"} ::

The examples on this page each include an `NToaster` to be self-contained. The docs show one toaster
at a time, so toasts never appear twice.

## Colors and icons

`color` sets the accent. `success`, `info`, `warning` and `error` come with a matching icon, which
`icon` replaces. `error` and `warning` toasts have `role="alert"`, the others `role="status"`.

::component-example{name="toast/colors"} ::

## Actions

`actions` adds buttons under the text. Each one takes any `NButton` prop plus an `onClick` handler.

::component-example{name="toast/actions"} ::

## Updating a toast

`toast.add` returns the toast with its `id`. Pass it to `toast.update` to change the toast, and its
timer starts over. Use `duration: 0` to keep a toast until it is closed.

::component-example{name="toast/update"} ::

## Position

`NToaster` places toasts at one of six positions.

::component-example{name="toast/position"} ::

## Behavior

A toast pauses its timer while it is hovered or focused. Reusing the `id` of a visible toast updates
it instead of adding another. The state is shared across the app and lives in memory, so call `add`
on the client, in event handlers rather than during SSR.

In templates, import `toast` instead of writing `const toast = useToast()`. vue-tsc 3.3 wrongly
types a local non-ref binding read through a property (`toast.add`) as `.value`, which fails
`bun run typecheck` with `Property 'value' does not exist`. Imported bindings are not affected.

## API

### toast

| Member                | Description                                                                      |
| --------------------- | -------------------------------------------------------------------------------- |
| `toasts`              | A readonly list of the current toasts.                                           |
| `add(options)`        | Shows a toast and returns it with its `id`. An existing `id` updates that toast. |
| `update(id, options)` | Merges new options into a toast, and its timer starts over.                      |
| `remove(id)`          | Closes one toast.                                                                |
| `clear()`             | Closes all toasts.                                                               |

### Toast options

| Option        | Type                                                               | Default      | Description                                                                    |
| ------------- | ------------------------------------------------------------------ | ------------ | ------------------------------------------------------------------------------ |
| `id`          | `string` `number`                                                  | generated    | Identifies the toast. Reusing the id of a visible toast updates it.            |
| `title`       | `string`                                                           | -            | The heading of the toast.                                                      |
| `description` | `string`                                                           | -            | The text under the title.                                                      |
| `icon`        | `string` `Component`                                               | by `color`   | The leading icon. `success`, `info`, `warning` and `error` have a default.     |
| `color`       | `primary` `secondary` `neutral` `success` `info` `warning` `error` | `primary`    | The accent color.                                                              |
| `close`       | `boolean`                                                          | `true`       | Shows a close button.                                                          |
| `closeIcon`   | `string` `Component`                                               | `i-lucide-x` | Replaces the icon of the close button.                                         |
| `actions`     | `ToastAction[]`                                                    | -            | Buttons under the text.                                                        |
| `duration`    | `number`                                                           | `5000`       | Milliseconds before the toast closes. `0` keeps it until it is closed.         |
| `onClose`     | `() => void`                                                       | -            | Called once the toast is removed, by the user, its timer, `remove` or `clear`. |

### ToastAction

Any `NButton` prop, such as `label`, `icon` or `variant`, plus:

| Field     | Type                          | Default | Description                        |
| --------- | ----------------------------- | ------- | ---------------------------------- |
| `onClick` | `(event: MouseEvent) => void` | -       | Called when the button is clicked. |

### NToaster props

| Prop       | Type                                                                             | Default        | Description                                                                 |
| ---------- | -------------------------------------------------------------------------------- | -------------- | --------------------------------------------------------------------------- |
| `position` | `top-left` `top-center` `top-right` `bottom-left` `bottom-center` `bottom-right` | `bottom-right` | Where the toasts are placed.                                                |
| `duration` | `number`                                                                         | `5000`         | The default duration in milliseconds of toasts that don't set their own.    |
| `max`      | `number`                                                                         | `5`            | How many toasts show at once, the rest wait their turn. `0` means no limit. |

## Theming

Override the tokens after the `noofpi-ui` import.

```css
:root {
  --n-toast-w: 28rem;
}
```

| Variable           | Description                                                                    |
| ------------------ | ------------------------------------------------------------------------------ |
| `--n-toast-w`      | Width of a toast. Default `24rem`.                                             |
| `--n-toast-gap`    | Gap between toasts. Default `0.5rem`.                                          |
| `--n-toast-inset`  | Distance from the edge of the viewport. Default `1rem`.                        |
| `--n-toast-z`      | `z-index` of the toaster. Default `100`.                                       |
| `--n-toast-bg`     | Background. Default `#fff`, dark `--ui-neutral-900`.                           |
| `--n-toast-border` | Border color. Default `--ui-neutral-200`, dark `--ui-neutral-800`.             |
| `--n-toast-fg`     | Text color. Default `--ui-neutral-900`, dark `--ui-neutral-100`.               |
| `--n-toast-muted`  | Color of the description. Default `--ui-neutral-500`, dark `--ui-neutral-400`. |
| `--n-toast-shadow` | Shadow.                                                                        |
