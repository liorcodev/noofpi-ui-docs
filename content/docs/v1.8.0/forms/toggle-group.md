---
title: NToggleGroup
description: A row of buttons where one or several can be on.
---

# NToggleGroup

A group of toggle buttons built on `NButton`. By default exactly one item is on, and `v-model` is the `value` of that item. With `multiple`, any number of items can be on and `v-model` is an array of values.

It is lighter than [NTabs](/docs/navigation/tabs) and [NRadioGroup](/docs/forms/groups): there is no panel and no label or description under each option. `NFileExplorer` uses it for its view toggle.

::component-example{name="toggle-group/basic"}
::

## Items

`items` is an array of `{ value, label, icon, ariaLabel, disabled }`. `value` can be any type. `label` and `icon` are both optional, and `icon` accepts an Iconify class, another class, or a Vue component. See [Icons](/docs/icons).

::component-example{name="toggle-group/icons"}
::

## Multiple

With `multiple`, each item toggles on its own and `v-model` is an array. The array is empty when nothing is on. A click on an item adds its `value` to the end of the array or removes it.

::component-example{name="toggle-group/multiple"}
::

## Appearance

`size`, `color`, `shape` and `variant` are passed to each [NButton](/docs/components/button). `checkedVariant` is the variant of an item that is on, `solid` by default. `bordered` is the border and padding around the items, and `false` removes them.

::component-example{name="toggle-group/appearance"}
::

## Layout

`block` fills the width and shares it equally between the items. `orientation` is `horizontal` or `vertical`.

::component-example{name="toggle-group/layout"}
::

## Item slot

The `item` slot replaces the label of an item. It receives the `item` and whether it is `checked`. The `icon` of the item still shows.

::component-example{name="toggle-group/item-slot"}
::

## Disabled

`disabled` on an item disables that item. `disabled` on the group disables all of them.

::component-example{name="toggle-group/disabled"}
::

## Form field

Inside an `NFormField` the group gets the `id`, `aria-invalid` and `aria-describedby`, and the field shows the schema error. See [NFormField](/docs/forms/input). Without a field, `invalid` marks the group invalid.

::component-example{name="toggle-group/form-field"}
::

## Accessibility

Without `multiple`, the group is a `radiogroup` and each item is a `radio` with `aria-checked`. Only the item that is on is in the tab order, or the first enabled item when none is on. `aria-orientation` follows `orientation`.

- `ArrowRight` and `ArrowDown` move to the next enabled item, and `ArrowLeft` and `ArrowUp` to the previous one. They wrap around, in both orientations.
- In a horizontal group with `dir="rtl"`, `ArrowLeft` is next and `ArrowRight` is previous.
- `Home` and `End` move to the first and the last enabled item.
- Moving also turns the item on, as in a native radio group. Disabled items are skipped.

With `multiple`, the group is a `group` and each item is a button with `aria-pressed`. Every item is in the tab order, and `Space` or `Enter` toggles the focused one.

`label` is the accessible name of the group. An item with an `icon` and no `label` needs an `ariaLabel`, since the icon is not announced. A disabled group has `aria-disabled="true"`.

## API

Native attributes, `class` and `style` go to the group element.

### Props

| Prop             | Type                                                                | Default      | Description                                                       |
| ---------------- | ------------------------------------------------------------------- | ------------ | ----------------------------------------------------------------- |
| `modelValue`     | `unknown`                                                           | `-`          | The `value` of the item that is on, or an array of them with `multiple`. |
| `items`          | `ToggleGroupItem[]`                                                 | `-`          | The items. Required.                                              |
| `multiple`       | `boolean`                                                           | `false`      | Lets any number of items be on. `v-model` is then an array.       |
| `orientation`    | `horizontal` `vertical`                                             | `horizontal` | The direction of the items, and of the arrow keys.                |
| `size`           | `xxs` `xs` `sm` `md` `lg` `xl` `xxl`                                | `md`         | The size of the items.                                            |
| `color`          | `primary` `secondary` `neutral` `success` `info` `warning` `error`  | `primary`    | The color of the items.                                           |
| `shape`          | `rounded` `square` `pill` `circle`                                  | `rounded`    | The shape of the items and of the border around them.             |
| `variant`        | `solid` `outline` `soft` `subtle` `ghost` `link`                    | `ghost`      | The variant of an item that is off.                               |
| `checkedVariant` | `solid` `outline` `soft` `subtle` `ghost` `link`                    | `solid`      | The variant of an item that is on.                                |
| `bordered`       | `boolean`                                                           | `true`       | Draws the border and padding around the items.                    |
| `block`          | `boolean`                                                           | `false`      | Fills the width, the items sharing it equally.                    |
| `invalid`        | `boolean`                                                           | `false`      | Marks the group invalid without an `NFormField`.                  |
| `disabled`       | `boolean`                                                           | `false`      | Disables every item.                                              |
| `label`          | `string`                                                            | `-`          | The accessible name of the group.                                 |

### ToggleGroupItem

| Field       | Type                 | Description                                                         |
| ----------- | -------------------- | ------------------------------------------------------------------- |
| `value`     | `unknown`            | What `v-model` holds when the item is on. Required.                 |
| `label`     | `string`             | The text of the item.                                               |
| `icon`      | `string` `Component` | The icon of the item.                                               |
| `ariaLabel` | `string`             | The accessible name of the item. Needed for an item with no `label`. |
| `disabled`  | `boolean`            | Disables the item.                                                  |

### Events

| Event               | Payload   | Description                                                         |
| ------------------- | --------- | ------------------------------------------------------------------- |
| `update:modelValue` | `unknown` | The new value, or the new array with `multiple`. Used by `v-model`. |

### Slots

| Slot   | Props                                           | Description                                |
| ------ | ----------------------------------------------- | ------------------------------------------ |
| `item` | `{ item: ToggleGroupItem, checked: boolean }`   | The label of an item, instead of its text. |

## Theming

The border, its background and the invalid color are CSS variables. Override them after the `noofpi-ui` import.

```css
:root {
  --n-toggle-group-border: #ccc;
}
```

| Variable                   | Description                                                                                   |
| -------------------------- | --------------------------------------------------------------------------------------------- |
| `--n-toggle-group-border`  | Color of the border. Defaults to `var(--ui-neutral-200)`, and `var(--ui-neutral-800)` in dark mode. |
| `--n-toggle-group-bg`      | Background of the group. Defaults to `transparent`.                                           |
| `--n-toggle-group-invalid` | Border color of an invalid group. Defaults to `var(--ui-error-500)`, and `var(--ui-error-400)` in dark mode. |
