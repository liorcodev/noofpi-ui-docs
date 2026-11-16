---
title: NAlert
description: A persistent message with a title, an icon and actions.
---

# NAlert

An inline banner for messages that stay on the page, unlike a [toast](/docs/feedback/toast). It takes a `title` and a `description`, and picks an icon from the `color`.

::component-example{name="alert/basic"}
::

## Colors

`success`, `info`, `warning` and `error` get a matching icon. `primary` and `neutral` have none, so set `icon` if you want one.

::component-example{name="alert/colors"}
::

## Variants

::component-example{name="alert/variants"}
::

## Icons

`icon` takes an Iconify class or a component. The `leading` slot replaces it entirely.

::component-example{name="alert/icons"}
::

## Actions and closing

`actions` renders buttons under the text. Each one takes any [NButton](/docs/components/button) prop plus an `onClick` handler. `close` adds a close button that emits `close`. The alert does not hide itself, so remove it with `v-if`.

::component-example{name="alert/actions"}
::

## Accessibility

`error` and `warning` alerts use `role="alert"` and are announced right away. The others use `role="status"` and are announced politely. The icon is hidden from assistive technology, and the close button is named by `closeLabel`.

## API

### Props

| Prop          | Type                                                   | Default   | Description                                                                 |
| ------------- | ------------------------------------------------------ | --------- | --------------------------------------------------------------------------- |
| `title`       | `string`                                               | `-`       | The heading.                                                                |
| `description` | `string`                                               | `-`       | The text under the heading. The default slot replaces it.                   |
| `icon`        | `string` `Component`                                   | `-`       | The leading icon. Defaults to one that matches `color`.                     |
| `color`       | `primary` `neutral` `success` `info` `warning` `error` | `primary` | The accent color.                                                           |
| `variant`     | `solid` `outline` `soft` `subtle`                      | `soft`    | The look of the alert.                                                      |
| `close`       | `boolean`                                              | `false`   | Shows a close button.                                                       |
| `closeIcon`   | `string` `Component`                                   | `i-lucide-x` | Replaces the icon of the close button.                                   |
| `closeLabel`  | `string`                                               | `Close`   | The accessible name of the close button.                                    |
| `actions`     | `AlertAction[]`                                        | `-`       | Buttons under the text: any `NButton` prop, plus `onClick`.                 |
| `as`          | `string` `Component`                                   | `div`     | The element or component to render.                                         |

### Slots

| Slot          | Description                          |
| ------------- | ------------------------------------ |
| `default`     | Replaces `description`.              |
| `title`       | Replaces `title`.                    |
| `leading`     | Replaces the icon.                   |
| `actions`     | Replaces `actions`.                  |

### Events

| Event   | Description                          |
| ------- | ------------------------------------ |
| `close` | The close button was clicked.        |

## Theming

Padding is a CSS variable. Override it after the `noofpi-ui` import.

```css
:root {
  --n-alert-px: 1.25rem;
}
```

| Variable         | Description                                  |
| ---------------- | -------------------------------------------- |
| `--n-alert-px`   | Horizontal padding. Defaults to `1rem`.      |
| `--n-alert-py`   | Vertical padding. Defaults to `0.875rem`.    |
