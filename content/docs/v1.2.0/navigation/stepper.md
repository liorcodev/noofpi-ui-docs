---
title: NStepper
description: Shows the steps of a multi-step flow and where the user is.
---

# NStepper

Pass `items` and bind `v-model` to the index of the current step, starting at `0`. Earlier steps are
complete, and the stepper does not move on by itself, so change the model from your own buttons.

::component-example{name="stepper/basic"}
::

## Vertical

::component-example{name="stepper/vertical"}
::

## Icons

`icon` on an item replaces the step number. Completed steps always show a check. `clickable` is
`true` by default, so a completed step is a button that goes back to it. Set it to `false` to lock
the steps.

::component-example{name="stepper/icons"}
::

## Sizes

::component-example{name="stepper/sizes"}
::

## Accessibility

It is an ordered list labelled by `label`, and the current step has `aria-current="step"`. Completed
steps are buttons only when `clickable` is on. The separators are hidden from assistive technology.

## API

### Props

| Prop          | Type                                                               | Default      | Description                                        |
| ------------- | ------------------------------------------------------------------ | ------------ | -------------------------------------------------- |
| `v-model`     | `number`                                                           | `0`          | The index of the current step.                     |
| `items`       | `StepperItem[]`                                                    | `[]`         | The steps. See below.                              |
| `orientation` | `horizontal` `vertical`                                            | `horizontal` | The direction of the steps.                        |
| `size`        | `sm` `md` `lg`                                                     | `md`         | The size of the indicators and the text.           |
| `clickable`   | `boolean`                                                          | `true`       | Lets a completed step be clicked to go back to it. |
| `label`       | `string`                                                           | `Progress`   | The accessible name of the list.                   |
| `color`       | `primary` `secondary` `neutral` `success` `info` `warning` `error` | `primary`    | The color of the current and completed steps.      |

### Item

| Field         | Type      | Description                                |
| ------------- | --------- | ------------------------------------------ |
| `title`       | `string`  | The name of the step.                      |
| `description` | `string`  | A line under the title.                    |
| `icon`        | `string`  | An icon shown instead of the number.       |
| `disabled`    | `boolean` | Stops a completed step from being clicked. |

### Slots

| Slot        | Description                                                 |
| ----------- | ----------------------------------------------------------- |
| `indicator` | Replaces the circle content. Gets `{ item, index, state }`. |

## Theming

Sizes and colors are CSS variables. Override them after the `noofpi-ui` import. Set
`--n-stepper-active-*` on `.n-stepper`, not `:root`.

```css
:root {
  --n-stepper-indicator-md: 2.5rem;
}
```

| Variable                       | Description                                                                             |
| ------------------------------ | --------------------------------------------------------------------------------------- |
| `--n-stepper-indicator-{size}` | Width and height of the circle. `sm` is `1.5rem`, `md` is `2rem` and `lg` is `2.5rem`.  |
| `--n-stepper-fg`               | Text color.                                                                             |
| `--n-stepper-muted`            | Color of descriptions and upcoming steps.                                               |
| `--n-stepper-line`             | Color of the line to an upcoming step.                                                  |
| `--n-stepper-upcoming-bg`      | Background of an upcoming circle.                                                       |
| `--n-stepper-active-bg`        | Background of the current and completed circles, and of the line after a completed one. |
| `--n-stepper-active-fg`        | Color of the number or icon on them.                                                    |
