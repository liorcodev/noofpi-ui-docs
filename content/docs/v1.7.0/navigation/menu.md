---
title: NMenu
description: A dropdown menu for actions and user menus.
---

# NMenu

A dropdown menu. The default slot is the trigger: a button, or an avatar for a user menu.

::component-example{name="menu/basic" height="240px"}
::

## Groups, icons and shortcuts

Pass an array of arrays to split the items into groups divided by separators. `icon` adds a leading icon, `shortcut` a display-only hint at the end of the row, and `color: "error"` marks a destructive action.

::component-example{name="menu/groups" height="340px"}
::

## Variants

`variant` sets how an item looks at rest. It takes the same values as `NButton`: `solid`, `outline`, `soft`, `subtle`, `ghost` and `link`. The default is `ghost`, a plain row that is tinted on hover. The row is colored by its `color`, so a variant and a `color` combine, for example a `solid` `error` item for a destructive action.

::component-example{name="menu/variants" height="380px"}
::

## Disabled

An item with `disabled` can't be chosen or focused. With `disabled` on the menu, it doesn't open.

::component-example{name="menu/disabled" height="240px"}
::

## Links

An item with `to` renders a link instead of a button. `target` is passed on, and `rel="noopener noreferrer"` is added for `_blank`. Use `linkAs` to render the links with a router component such as `NoofpiLink`.

::component-example{name="menu/links" height="240px"}
::

## User menu

`type: "label"` is a non-interactive heading, with an optional `description` for details such as an email. An avatar isn't focusable, so the menu turns it into a `role="button"` that works with the keyboard.

::component-example{name="menu/user-menu" height="320px"}
::

## Placement

`placement` is a preference. When the menu doesn't fit, it opens on the other side of the trigger, or aligns to the trigger's other edge, so a button at the edge of the window never pushes it off screen. The position is worked out when the menu opens, and again when the page scrolls or the window is resized.

::component-example{name="menu/placement" height="240px"}
::

## Inside a table or card

The panel is teleported to the `body` and positioned next to its trigger, so a container that clips its overflow, such as a table, a card or a scrolling box, can't cut the menu off. Open the menu of the last row below.

::component-example{name="menu/in-table" height="360px"}
::

Set `to` to another element or selector to teleport the panel there, or to `false` to render it in place, inside the menu's own element.

## Slots

The default slot gets `{ open }`, so the trigger can react to the state. `header` renders above the items, and `item` replaces the content of every item.

::component-example{name="menu/slots" height="300px"}
::

## Selecting items and open state

`onSelect` runs when an item is chosen, and `event.preventDefault()` keeps the menu open. The menu also emits `select`. Bind the open state with `v-model:open`.

::component-example{name="menu/events" height="240px"}
::

## Accessibility

The trigger gets `aria-haspopup` and `aria-expanded`. Arrow keys, `Home` and `End` move between items, `Escape` closes the menu and returns focus to the trigger, and `Tab` closes it and continues from the trigger. Give the menu a `label` as its accessible name.

## API

### Props

| Prop        | Type                                                             | Default        | Description                                                                |
| ----------- | ---------------------------------------------------------------- | -------------- | -------------------------------------------------------------------------- |
| `items`     | `MenuItem[]` `MenuItem[][]`                                      | `[]`           | The items, or groups of items divided by separators.                       |
| `placement` | `bottom-start` `bottom` `bottom-end` `top-start` `top` `top-end` | `bottom-start` | Where the menu opens, relative to its trigger.                             |
| `linkAs`    | `string` `Component`                                             | `a`            | The element or component that renders items with `to`, such as `NoofpiLink`. |
| `label`     | `string`                                                         | `-`            | The accessible name of the menu.                                           |
| `to`        | `string` `HTMLElement` `false`                                   | `body`         | Where the panel is teleported. `false` renders it in place.                |
| `disabled`  | `boolean`                                                        | `false`        | Prevents the menu from opening.                                            |
| `open`      | `boolean`                                                        | `false`        | The open state, bound with `v-model:open`.                                 |

### MenuItem

| Field         | Type                           | Default | Description                                                              |
| ------------- | ------------------------------ | ------- | ------------------------------------------------------------------------ |
| `type`        | `item` `label` `separator`     | `item`  | A regular item, a non-interactive heading, or a divider.                 |
| `label`       | `string`                       | `-`     | The text of the item or heading.                                         |
| `description` | `string`                       | `-`     | Text under a `label` heading.                                            |
| `icon`        | `string` `Component`           | `-`     | Leading icon: an Iconify class, another class, or a component.           |
| `to`          | `string`                       | `-`     | Makes the item a link: the `href` of an `a`, or the `to` of `linkAs`.    |
| `target`      | `string`                       | `-`     | The `target` of the link, such as `_blank`.                              |
| `color`       | `ButtonColor`                  | `neutral` | The color of the item. Use `error` for destructive actions.            |
| `variant`     | `ButtonVariant`                | `ghost` | How the item looks at rest: `solid`, `outline`, `soft`, `subtle`, `ghost` or `link`. |
| `shortcut`    | `string`                       | `-`     | A display-only hint at the end of the row, such as `Ctrl K`.             |
| `disabled`    | `boolean`                      | `false` | Prevents the item from being chosen.                                     |
| `onSelect`    | `(event: Event) => void`       | `-`     | Called when the item is chosen. `event.preventDefault()` keeps the menu open. |

### Slots

| Slot      | Description                                                                              |
| --------- | ---------------------------------------------------------------------------------------- |
| `default` | The trigger, such as an `NButton` or an `NAvatar`. Gets `{ open }`.                      |
| `header`  | Content above the items, such as the signed-in user.                                     |
| `item`    | Replaces the content of an item. Gets `{ item }`.                                        |

### Events

| Event    | Payload    | Description                                    |
| -------- | ---------- | ---------------------------------------------- |
| `select` | `MenuItem` | Emitted when an item is chosen.                |

## Theming

Override the tokens after the `noofpi-ui` import.

```css
:root {
  --n-menu-min-w: 14rem;
}
```

| Variable           | Description                                         |
| ------------------ | --------------------------------------------------- |
| `--n-menu-min-w`   | Minimum width of the panel. Default `12rem`.        |
| `--n-menu-offset`  | Gap between the trigger and the panel. Default `0.375rem`. |
| `--n-menu-z`       | `z-index` of the open menu. Default `50`.           |
| `--n-menu-bg`      | Panel background. Default `#fff`, dark `--ui-neutral-900`. |
| `--n-menu-border`  | Panel border color. Default `--ui-neutral-200`, dark `--ui-neutral-800`. |
| `--n-menu-fg`      | Text color. Default `--ui-neutral-800`, dark `--ui-neutral-100`. |
| `--n-menu-muted`   | Color of descriptions and shortcuts. Default `--ui-neutral-500`, dark `--ui-neutral-400`. |
| `--n-menu-hover`   | Background of the focused item. Default `--ui-neutral-100`, dark `--ui-neutral-800`. |
| `--n-menu-shadow`  | Panel shadow.                                       |
