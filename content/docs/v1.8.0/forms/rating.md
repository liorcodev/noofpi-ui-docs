---
title: NRating
description: Pick a rating by clicking stars, or show one.
---

# NRating

A star rating. `v-model` is a `number` from `0` to `max`. Hover previews the value, a click sets it, and the arrow keys change it.

::component-example{name="rating/basic"}
::

## Max, half stars and clear

`max` is the number of stars (`5` by default). `allow-half` lets a click on the half of a star pick half a point. `clearable` resets the value to `0` when you click the current value again.

Without `clearable` the value can't go back to `0` once it is set, by mouse or by keyboard.

::component-example{name="rating/options"}
::

## Sizes and colors

`size` is `sm`, `md` or `lg`. `color` takes the same colors as `NButton`, and is `warning` by default.

::component-example{name="rating/sizes-colors"}
::

## Custom icon

`icon` replaces the star. It accepts an Iconify class, any other class, or a Vue component. The empty ones show it in a muted color.

::component-example{name="rating/icon"}
::

## Read-only and disabled

`readonly` shows the value without letting it change. It is not focusable and is read as an image. `disabled` dims the rating and blocks it.

::component-example{name="rating/readonly-disabled"}
::

## Form field

Inside an `NFormField` the rating gets the `id`, `aria-invalid` and `aria-describedby`, and the field shows the schema error. An invalid rating shows its stars in the error color. See [NFormField](/docs/forms/input).

::component-example{name="rating/form-field"}
::

With a `name`, a hidden input submits the value with a surrounding `<form>`. It is empty while the value is `0`.

## Accessibility

An interactive rating is a `slider` that can be focused. It has `aria-valuemin` `0`, `aria-valuemax` set to `max` and `aria-valuenow`. `label` is its accessible name. The label of an `NFormField` does not name it, so pass a `label` as well.

| Key                       | Action                                                                          |
| ------------------------- | ------------------------------------------------------------------------------- |
| `ArrowRight` `ArrowUp`    | Adds one step: `1`, or `0.5` with `allow-half`.                                 |
| `ArrowLeft` `ArrowDown`   | Removes one step.                                                               |
| `Home`                    | Goes to the first step, or to `0` when `clearable`.                             |
| `End`                     | Goes to `max`.                                                                  |

In a right-to-left page the stars start on the right, and `ArrowLeft` and `ArrowRight` swap. A read-only rating is a `img` named like `Quality: 3/5`, or `3/5` without a `label`. A disabled rating keeps the `slider` role with `aria-disabled`, and is not focusable.

## API

Other attributes go to the root element.

### Props

| Prop         | Type                                                               | Default   | Description                                                      |
| ------------ | ------------------------------------------------------------------ | --------- | ---------------------------------------------------------------- |
| `modelValue` | `number`                                                           | `0`       | The value, from `0` to `max`.                                    |
| `max`        | `number`                                                           | `5`       | The number of stars.                                             |
| `allowHalf`  | `boolean`                                                          | `false`   | Lets a click on the half of a star pick half a point.            |
| `clearable`  | `boolean`                                                          | `false`   | Clicking the current value again resets it to `0`.               |
| `icon`       | `string` `Component`                                               | `-`       | Replaces the star: an Iconify class, another class, or a component. |
| `label`      | `string`                                                           | `-`       | The accessible name.                                             |
| `name`       | `string`                                                           | `-`       | Native `name`. A hidden input submits the value with a form.     |
| `color`      | `primary` `secondary` `neutral` `success` `info` `warning` `error` | `warning` | The color of the filled stars.                                   |
| `size`       | `sm` `md` `lg`                                                     | `md`      | The size of the stars.                                           |
| `readonly`   | `boolean`                                                          | `false`   | Shows the value without letting it change.                       |
| `invalid`    | `boolean`                                                          | `false`   | Marks the rating invalid without an `NFormField`.                |
| `disabled`   | `boolean`                                                          | `false`   | Disables the rating.                                             |

### Events

| Event               | Payload  | Description                              |
| ------------------- | -------- | ---------------------------------------- |
| `update:modelValue` | `number` | The value changed by click or keyboard.  |

## Theming

The star size is a CSS variable per size. Override them after the `noofpi-ui` import.

```css
:root {
  --n-rating-size-md: 2rem;
}
```

| Variable             | Description                                |
| -------------------- | ------------------------------------------ |
| `--n-rating-size-sm` | Star size of the `sm` rating. Defaults to `1rem`.   |
| `--n-rating-size-md` | Star size of the `md` rating. Defaults to `1.5rem`. |
| `--n-rating-size-lg` | Star size of the `lg` rating. Defaults to `2rem`.   |
