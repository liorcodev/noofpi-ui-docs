---
title: NSlider
description: Pick a number from a range by dragging a thumb.
---

# NSlider

A slider for a number between `min` and `max`. `v-model` is a `number`. It is a native
`<input type="range">`, so the arrow keys, Home, End, PageUp and PageDown work.

::component-example{name="slider/basic"} ::

## Range and step

`min` and `max` set the range (`0` to `100` by default) and `step` the increment. The `value` slot
formats the shown value.

::component-example{name="slider/range-step"} ::

## Colors and sizes

`color` takes the same colors as `NButton`, and `size` is `sm`, `md` or `lg`. `disabled` is a native
attribute.

::component-example{name="slider/colors-sizes"} ::

## Form field

Inside an `NFormField` the slider gets the `id`, `aria-invalid` and `aria-describedby`, and the
field shows the schema error. See [NFormField](/docs/forms/input).

::component-example{name="slider/form-field"} ::

## Accessibility

`label` is the accessible name of the slider. Without a `label`, pass an `aria-label`.

## API

Native attributes (`name`, `aria-label`, ...) go to the `<input>`, while `class` and `style` go to
the wrapper.

### Props

| Prop         | Type                                                               | Default   | Description                                       |
| ------------ | ------------------------------------------------------------------ | --------- | ------------------------------------------------- |
| `modelValue` | `number`                                                           | `-`       | The value. The slider sits at `min` without one.  |
| `min`        | `number`                                                           | `0`       | The lowest value.                                 |
| `max`        | `number`                                                           | `100`     | The highest value.                                |
| `step`       | `number`                                                           | `1`       | The increment.                                    |
| `label`      | `string`                                                           | `-`       | Text above the slider, also its accessible name.  |
| `showValue`  | `boolean`                                                          | `false`   | Shows the value at the end of the label row.      |
| `color`      | `primary` `secondary` `neutral` `success` `info` `warning` `error` | `primary` | The color of the filled track and the thumb.      |
| `size`       | `sm` `md` `lg`                                                     | `md`      | The size of the track and the thumb.              |
| `invalid`    | `boolean`                                                          | `false`   | Marks the slider invalid without an `NFormField`. |
| `disabled`   | `boolean`                                                          | `false`   | Disables the slider.                              |

### Slots

| Slot    | Props               | Description                             |
| ------- | ------------------- | --------------------------------------- |
| `label` | `-`                 | The label content, instead of `label`.  |
| `value` | `{ value: number }` | The shown value, instead of the number. |

## Theming

The track and the thumb are CSS variables per size. Override them after the `noofpi-ui` import.

```css
:root {
  --n-slider-track-md: 0.5rem;
}
```

| Variable              | Description                                                                                                 |
| --------------------- | ----------------------------------------------------------------------------------------------------------- |
| `--n-slider-track-sm` | Track height of the `sm` slider. Defaults to `0.25rem`.                                                     |
| `--n-slider-track-md` | Track height of the `md` slider. Defaults to `0.375rem`.                                                    |
| `--n-slider-track-lg` | Track height of the `lg` slider. Defaults to `0.5rem`.                                                      |
| `--n-slider-thumb-sm` | Thumb size of the `sm` slider. Defaults to `0.875rem`.                                                      |
| `--n-slider-thumb-md` | Thumb size of the `md` slider. Defaults to `1.125rem`.                                                      |
| `--n-slider-thumb-lg` | Thumb size of the `lg` slider. Defaults to `1.375rem`.                                                      |
| `--n-slider-track`    | Color of the unfilled track. Defaults to `var(--ui-neutral-200)`, and `var(--ui-neutral-800)` in dark mode. |
