---
title: NColorPicker
description: Pick a color from a panel, in hex, rgb or hsl.
---

# NColorPicker

A color field. A trigger shows the current color and its value, and opens a panel with a saturation and brightness area, a hue slider and a text field. `v-model` is a CSS color `string`, or `null` until one is picked.

::component-example{name="color-picker/basic" height="340px"}
::

## Formats

`format` sets the syntax of the value: `hex` (`#rrggbb`, the default), `rgb` (`rgb(r, g, b)`) or `hsl` (`hsl(h, s%, l%)`). The text field reads all three, and a color typed in another syntax is converted to `format`. It also reads the short `#rgb` form and the space separated `rgb(255 0 0)`.

::component-example{name="color-picker/formats" height="340px"}
::

## Opacity

`alpha` adds an opacity slider. A color that is not fully opaque keeps its alpha in the value: `#rrggbbaa`, `rgba()` or `hsla()`. A fully opaque color has none. Without `alpha`, the value never has an alpha.

::component-example{name="color-picker/alpha" height="400px"}
::

## Swatches

`swatches` is a list of colors to pick with one click. Any color the picker reads works. The swatch that matches the current color is marked, and a swatch it can't read is skipped.

::component-example{name="color-picker/swatches" height="400px"}
::

## Inline

`inline` renders the panel in place, without the trigger and the popover. `color` sets the accent of the focus ring, with the same colors as `NButton`.

::component-example{name="color-picker/inline" height="320px"}
::

## Disabled

`disabled` disables the trigger, or the panel when it is `inline`.

::component-example{name="color-picker/disabled"}
::

## Form field

Inside an `NFormField` the trigger gets the `id`, `aria-invalid` and `aria-describedby`, and the field shows the schema error. See [NFormField](/docs/forms/input).

::component-example{name="color-picker/form-field" height="400px"}
::

With a `name`, a hidden input submits the color with a surrounding `<form>`. It is empty while no color is picked.

## Accessibility

The trigger is a `button` with `aria-haspopup="dialog"` and `aria-expanded`, and `aria-controls` while the panel is open. Its name is its text, or `label`. Inside an `NFormField` the field label names it. The panel is a `dialog` named by `label`, or by `placeholder`.

- `ArrowDown` on the trigger opens the panel, and focus moves to the color area.
- `Escape` closes the panel and returns focus to the trigger. A click outside, or moving focus out, closes it too.
- The color area is a `slider`. The arrow keys move the color by 1%, or 10% with `Shift`. Its value text is the current color.
- The hue and opacity sliders are range inputs, so the arrow keys, Home and End work.
- In the text field, `Enter` or leaving the field with a change commits the typed color. A text that is not a color is ignored.

`areaLabel`, `hueLabel`, `alphaLabel` and `inputLabel` set the accessible names of the controls in the panel, for example to translate them.

## API

### Props

| Prop          | Type                                                        | Default         | Description                                                                |
| ------------- | ----------------------------------------------------------- | --------------- | -------------------------------------------------------------------------- |
| `modelValue`  | `string` `null`                                             | `-`             | The color as a CSS string. Empty until one is picked.                      |
| `color`       | `primary` `secondary` `neutral` `success` `info` `warning` `error` | `primary` | The accent of the focus ring and of the panel.                             |
| `format`      | `hex` `rgb` `hsl`                                           | `hex`           | The syntax of the value.                                                   |
| `alpha`       | `boolean`                                                   | `false`         | Adds an opacity slider. The value then carries an alpha.                   |
| `swatches`    | `string[]`                                                  | `[]`            | Colors to pick with one click.                                             |
| `inline`      | `boolean`                                                   | `false`         | Renders the panel in place, without the trigger and popover.               |
| `placeholder` | `string`                                                    | `-`             | Shown in the trigger while no color is picked.                             |
| `name`        | `string`                                                    | `-`             | Native `name`. A hidden input submits the color with a form.               |
| `label`       | `string`                                                    | `-`             | The accessible name, when there is no `NFormField` label.                  |
| `invalid`     | `boolean`                                                   | `false`         | Marks the picker invalid without an `NFormField`.                          |
| `disabled`    | `boolean`                                                   | `false`         | Disables the picker.                                                       |
| `open`        | `boolean`                                                   | `false`         | The open state of the panel, bound with `v-model:open`.                    |
| `areaLabel`   | `string`                                                    | `Color`         | The accessible name of the color area.                                     |
| `hueLabel`    | `string`                                                    | `Hue`           | The accessible name of the hue slider.                                     |
| `alphaLabel`  | `string`                                                    | `Opacity`       | The accessible name of the opacity slider.                                 |
| `inputLabel`  | `string`                                                    | `Color value`   | The accessible name of the text field.                                     |

### Events

| Event               | Payload          | Description                                   |
| ------------------- | ---------------- | --------------------------------------------- |
| `update:modelValue` | `string`         | The color changed, from the panel or the text field. |
| `update:open`       | `boolean`        | The panel opened or closed.                   |

## Theming

The popover and the checkerboard behind a transparent color are CSS variables. Override them after the `noofpi-ui` import.

```css
:root {
  --n-color-picker-width: 18rem;
}
```

| Variable                     | Description                                                                         |
| ---------------------------- | ----------------------------------------------------------------------------------- |
| `--n-color-picker-offset`    | Gap between the trigger and the popover. Defaults to `0.375rem`.                    |
| `--n-color-picker-z`         | `z-index` of the open popover. Defaults to `50`.                                    |
| `--n-color-picker-width`     | Width of the panel. Defaults to `16rem`.                                            |
| `--n-color-picker-bg`        | Popover background. Defaults to `#fff`, and `var(--ui-neutral-900)` in dark mode.   |
| `--n-color-picker-border`    | Popover border color. Defaults to `var(--ui-neutral-200)`, and `var(--ui-neutral-800)` in dark mode. |
| `--n-color-picker-shadow`    | Popover shadow.                                                                     |
| `--n-color-picker-checker-a` | First checkerboard color. Defaults to `#d4d4d4`, and `#52525b` in dark mode.        |
| `--n-color-picker-checker-b` | Second checkerboard color. Defaults to `#fff`, and `#27272a` in dark mode.          |
