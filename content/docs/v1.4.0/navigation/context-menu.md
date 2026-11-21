---
title: NContextMenu
description: A menu that opens at the pointer on right click, long press or the keyboard.
---

# NContextMenu

Wrap an area and give it `items`. The menu opens at the pointer on right click, on a long press for touch, and with `Shift+F10` or the context menu key. It takes the same `items` as [NMenu](/docs/navigation/menu) and stays inside the viewport.

::component-example{name="context-menu/basic"}
::

## Items

Pass an array of arrays to split the items into groups divided by separators. `icon`, `shortcut`, `to`, `color: "error"`, `disabled` and `onSelect` work as in `NMenu`. `onSelect` runs when an item is chosen, and `event.preventDefault()` keeps the menu open. The menu also emits `select`.

## Keyboard

Make the wrapped area focusable (for example with `tabindex="0"`) so that `Shift+F10` and the context menu key can open the menu from the keyboard. Arrow keys, `Home` and `End` move between items, `Escape` closes the menu and returns focus, and `Tab` closes it. Give the menu a `label` as its accessible name.

## Disabled

With `disabled` the browser's own context menu is kept.

## API

### Props

| Prop       | Type                              | Default | Description                                                          |
| ---------- | --------------------------------- | ------- | -------------------------------------------------------------------- |
| `items`    | `MenuItem[]` `MenuItem[][]`       | `[]`    | The items, or groups of items divided by separators.                 |
| `linkAs`   | `string` `Component`              | `a`     | The element or component that renders items with `to`, such as `NoofpiLink`. |
| `label`    | `string`                          | `-`     | The accessible name of the menu.                                     |
| `to`       | `string` `HTMLElement` `false`    | `body`  | Teleport target, or `false` to render in place.                      |
| `disabled` | `boolean`                         | `false` | Keeps the browser's own context menu.                                |
| `open`     | `boolean`                         | `false` | The open state, bound with `v-model:open`.                           |

### Slots

| Slot      | Description                                                                          |
| --------- | ------------------------------------------------------------------------------------ |
| `default` | The area that opens the menu. Gets `{ open }`.                                       |
| `header`  | Content above the items.                                                             |
| `item`    | Replaces the content of an item. Gets `{ item }`.                                    |

### Events

| Event    | Payload    | Description                     |
| -------- | ---------- | ------------------------------- |
| `select` | `MenuItem` | Emitted when an item is chosen. |

## Theming

The panel uses the [NMenu](/docs/navigation/menu#theming) tokens, plus two of its own.

| Variable                   | Description                                         |
| -------------------------- | --------------------------------------------------- |
| `--n-context-menu-z`       | `z-index` of the open menu. Default `80`.           |
| `--n-context-menu-origin`  | `transform-origin` of the open animation. Default `left top`. |
