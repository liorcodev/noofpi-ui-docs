---
title: NCheckButton
description: A toggle button that behaves like a checkbox.
---

# NCheckButton

A toggle button built on `NButton`: outlined while unchecked, solid while checked. It uses the same `v-model` as `NCheckbox`.

::component-example{name="check-button/basic"}
::

## Array model

Give each button a `value` and bind them to the same array. Checking a button adds its `value` to the array, unchecking removes it.

::component-example{name="check-button/array"}
::

## Appearance

`variant` and `checkedVariant` set the look before and after checking. Every other prop of [NButton](/docs/components/button), such as `color`, `size` and `shape`, is passed through.

::component-example{name="check-button/appearance"}
::

## Icon only

A button without a label is a square around its icon. Give it an `aria-label`, since the icon is not announced.

::component-example{name="check-button/icon-only"}
::

## Disabled

::component-example{name="check-button/disabled"}
::

The button sets `aria-pressed` to reflect its state, so screen readers announce it as a toggle.

## API

### Props

Props that are not listed here (`label`, `color`, `size`, `shape`, `icon`, `disabled`, ...) are passed to `NButton`.

| Prop             | Type                                             | Default   | Description                                                            |
| ---------------- | ------------------------------------------------ | --------- | ---------------------------------------------------------------------- |
| `v-model`        | `boolean` `unknown[]`                            | `-`       | A boolean, or an array that holds the `value` of every checked button. |
| `value`          | `unknown`                                        | `-`       | The entry this button adds to an array `v-model`.                      |
| `variant`        | `solid` `outline` `soft` `subtle` `ghost` `link` | `outline` | The variant while unchecked.                                           |
| `checkedVariant` | `solid` `outline` `soft` `subtle` `ghost` `link` | `solid`   | The variant while checked.                                             |

### Slots

The slots of `NButton` are forwarded.

| Slot       | Description                                    |
| ---------- | ---------------------------------------------- |
| `default`  | The content of the button, instead of `label`. |
| `leading`  | Replaces the leading icon.                     |
| `trailing` | Replaces the trailing icon.                    |
