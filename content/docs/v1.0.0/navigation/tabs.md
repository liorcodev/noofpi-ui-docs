---
title: NTabs
description: Accessible tabs and panels.
---

# NTabs

Tabs and their panels. `v-model` is the `value` of the selected tab, and the first enabled tab is selected by default.

::component-example{name="tabs/basic"}
::

Each panel is the slot named after the `value` of its tab. Tabs without such a slot use the `panel` slot, which gets `{ item }`. Only the selected panel is rendered.

## Variants

`line` underlines the selected tab. `pill` highlights it on a filled track.

::component-example{name="tabs/variants"}
::

## Orientation

`orientation="vertical"` stacks the tabs next to their panel. Arrow keys switch to up and down.

::component-example{name="tabs/vertical"}
::

## Icons and disabled tabs

A tab can have an `icon`, an Iconify class or a component. See [Icons](/docs/icons). A tab with `disabled` can't be selected or focused.

::component-example{name="tabs/icons"}
::

## Label slot

The `label` slot replaces the content of a tab and gets `{ item, selected }`.

::component-example{name="tabs/label-slot"}
::

## Activation

With `automatic`, a tab is selected as soon as arrow keys focus it. With `manual`, focus moves first and `Enter` or `Space` selects. Try both with the keyboard.

::component-example{name="tabs/activation"}
::

## Keep alive

Panels unmount when they are not selected. `keepAlive` keeps the panels of visited tabs mounted and hidden, which preserves their state.

::component-example{name="tabs/keep-alive"}
::

## Accessibility

The tabs follow the WAI-ARIA tabs pattern. One tab is in the tab order, and the arrow keys (left and right, or up and down when vertical, mirrored in RTL), `Home` and `End` move between enabled tabs. Give the list a `label` as its accessible name.

## API

### Props

| Prop          | Type                     | Default      | Description                                                                |
| ------------- | ------------------------ | ------------ | -------------------------------------------------------------------------- |
| `items`       | `TabItem[]`              | -            | The tabs. Required.                                                        |
| `modelValue`  | `string` `number`        | -            | The `value` of the selected tab, bound with `v-model`. Without a match, the first enabled tab is selected. |
| `orientation` | `horizontal` `vertical`  | `horizontal` | The direction of the tab list.                                             |
| `variant`     | `line` `pill`            | `line`       | The visual style.                                                          |
| `activation`  | `automatic` `manual`     | `automatic`  | Whether arrow keys select a tab as they focus it, or wait for `Enter` or `Space`. |
| `keepAlive`   | `boolean`                | `false`      | Keeps the panels of visited tabs mounted and hidden instead of unmounting them. |
| `label`       | `string`                 | -            | The accessible name of the tab list.                                       |

### TabItem

| Field      | Type                 | Default | Description                                                    |
| ---------- | -------------------- | ------- | -------------------------------------------------------------- |
| `label`    | `string`             | -       | The text of the tab.                                           |
| `value`    | `string` `number`    | -       | Identifies the tab: the `v-model` value and the name of its panel slot. |
| `icon`     | `string` `Component` | -       | Leading icon: an Iconify class, another class, or a component. |
| `disabled` | `boolean`            | `false` | Prevents the tab from being selected.                          |

### Slots

| Slot      | Description                                                                          |
| --------- | ------------------------------------------------------------------------------------ |
| `label`   | Replaces the content of a tab. Gets `{ item, selected }`.                            |
| `panel`   | The panel of every tab without a slot named after its `value`. Gets `{ item }`.      |
| `{value}` | The panel of the tab with that `value`, for example `#account`. Gets `{ item }`.     |

### Events

| Event               | Payload            | Description                         |
| ------------------- | ------------------ | ----------------------------------- |
| `update:modelValue` | `string` `number`  | Emitted when a tab is selected.     |

## Theming

Override the tokens after the `noofpi-ui` import.

```css
:root {
  --n-tabs-gap: 1.5rem;
}
```

| Variable                 | Description                                                                         |
| ------------------------ | ----------------------------------------------------------------------------------- |
| `--n-tabs-gap`           | Gap between the tabs and the panel. Default `1rem`.                                 |
| `--n-tabs-border`        | Color of the line under the tabs. Default `--ui-neutral-200`, dark `--ui-neutral-800`. |
| `--n-tabs-fg`            | Text color of unselected tabs. Default `--ui-neutral-500`, dark `--ui-neutral-400`. |
| `--n-tabs-fg-active`     | Text color of the selected tab. Default `--ui-neutral-900`, dark `--ui-neutral-50`. |
| `--n-tabs-pill-bg`       | Track color of the `pill` variant. Default `--ui-neutral-100`, dark `--ui-neutral-800`. |
| `--n-tabs-pill-active-bg` | Background of the selected pill. Default `#fff`, dark `--ui-neutral-900`.          |
