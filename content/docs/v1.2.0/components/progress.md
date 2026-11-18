---
title: NProgress
description: A determinate or indeterminate progress bar.
---

# NProgress

A progress bar. Without a `value` it is indeterminate and shows an animation.

::component-example{name="progress/basic"}
::

## Value

`value` goes from `0` to `max`.

::component-example{name="progress/value"}
::

## Max

`max` defaults to `100`. The value is clamped between `0` and `max`, and the percentage is rounded.

::component-example{name="progress/max"}
::

## Indeterminate

Omit `value` when the duration is unknown. `showValue` has no effect in this state.

::component-example{name="progress/indeterminate"}
::

## Colors

::component-example{name="progress/colors"}
::

## Sizes

Four sizes from `xs` to `lg`.

::component-example{name="progress/sizes"}
::

## Slots usage

The `label` slot replaces the label, and `value` replaces the percentage. It receives the clamped
`value` and the `percent`.

::component-example{name="progress/slots"}
::

## Accessibility

The bar has `role="progressbar"` with `aria-valuemin`, `aria-valuemax` and, when determinate,
`aria-valuenow`. `label` is its accessible name. With a `prefers-reduced-motion` setting the
animation is disabled.

## API

### Props

| Prop        | Type                                                               | Default   | Description                                                             |
| ----------- | ------------------------------------------------------------------ | --------- | ----------------------------------------------------------------------- |
| `value`     | `number`                                                           | `-`       | The current value, from `0` to `max`. Omit it for an indeterminate bar. |
| `max`       | `number`                                                           | `100`     | The maximum value.                                                      |
| `label`     | `string`                                                           | `-`       | The text above the bar, also its accessible name.                       |
| `showValue` | `boolean`                                                          | `false`   | Shows the percentage at the end of the label row.                       |
| `color`     | `primary` `secondary` `neutral` `success` `info` `warning` `error` | `primary` | The color of the bar.                                                   |
| `size`      | `xs` `sm` `md` `lg`                                                | `md`      | The height of the bar.                                                  |
| `as`        | `string` `Component`                                               | `div`     | The element or component to render.                                     |

### Slots

| Slot    | Description                                             |
| ------- | ------------------------------------------------------- |
| `label` | Replaces `label`.                                       |
| `value` | Replaces the percentage. Receives `{ value, percent }`. |

## Theming

Heights and the track color are CSS variables. Override them after the `noofpi-ui` import.

```css
:root {
  --n-progress-h-md: 0.75rem;
}
```

| Variable                | Description                                                                                        |
| ----------------------- | -------------------------------------------------------------------------------------------------- |
| `--n-progress-h-{size}` | Height of the bar. `xs` is `0.25rem`, `sm` is `0.375rem`, `md` is `0.5rem` and `lg` is `0.75rem`.  |
| `--n-progress-track`    | Color of the track. Defaults to `var(--ui-neutral-200)`, and `var(--ui-neutral-800)` in dark mode. |
