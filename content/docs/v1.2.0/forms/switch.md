---
title: NSwitch
description: An on/off toggle bound to a boolean.
---

# NSwitch

A toggle for a setting that applies right away. `v-model` is a `boolean`. It is a native checkbox
with `role="switch"`, so it works with the keyboard (Space) and with `<form>`.

::component-example{name="switch/basic"} ::

## Colors and sizes

`color` takes the same colors as `NButton`, and `size` is `sm`, `md` or `lg`.

::component-example{name="switch/colors-sizes"} ::

## Custom label

The default slot replaces `label`, so the label can hold markup such as a link.

## States

`disabled` is a native attribute, and `invalid` marks the switch without an `NFormField`.

::component-example{name="switch/states"} ::

## Form field

Inside an `NFormField` the switch gets the `id`, `aria-invalid` and `aria-describedby`, and the
field shows the schema error. See [NFormField](/docs/forms/input).

::component-example{name="switch/form-field"} ::

## API

Native attributes (`name`, `disabled`, ...) go to the `<input>`, while `class` and `style` go to the
wrapper.

### Props

| Prop         | Type                                                               | Default   | Description                                             |
| ------------ | ------------------------------------------------------------------ | --------- | ------------------------------------------------------- |
| `modelValue` | `boolean`                                                          | `-`       | On or off.                                              |
| `label`      | `string`                                                           | `-`       | The text beside the switch. The default slot works too. |
| `color`      | `primary` `secondary` `neutral` `success` `info` `warning` `error` | `primary` | The color when on.                                      |
| `size`       | `sm` `md` `lg`                                                     | `md`      | The size of the switch.                                 |
| `invalid`    | `boolean`                                                          | `false`   | Marks the switch invalid without an `NFormField`.       |

### Slots

| Slot      | Description                            |
| --------- | -------------------------------------- |
| `default` | The label content, instead of `label`. |

## Theming

The height is a CSS variable per size. Override it after the `noofpi-ui` import. The width is `1.8`
times the height.

```css
:root {
  --n-switch-h-md: 1.5rem;
}
```

| Variable          | Description                                                                                          |
| ----------------- | ---------------------------------------------------------------------------------------------------- |
| `--n-switch-h-sm` | Height of the `sm` switch. Defaults to `1rem`.                                                       |
| `--n-switch-h-md` | Height of the `md` switch. Defaults to `1.25rem`.                                                    |
| `--n-switch-h-lg` | Height of the `lg` switch. Defaults to `1.5rem`.                                                     |
| `--n-switch-off`  | Track color when off. Defaults to `var(--ui-neutral-300)`, and `var(--ui-neutral-700)` in dark mode. |
