---
title: NPopover
description: An anchored panel with rich content, opened by click, hover or your own state.
---

# NPopover

A floating panel anchored to a trigger. Unlike [NTooltip](/docs/feedback/tooltip) it can hold interactive content, and unlike [NMenu](/docs/navigation/menu) it holds anything you like. The default slot is the trigger and `content` is the panel.

::component-example{name="popover/basic" height="320px"}
::

## Triggers

`trigger` is `click` (default), `hover` or `manual`. On hover, `delay` and `hideDelay` set the wait before opening and closing, keyboard focus opens it immediately, and the pointer can move into the panel without closing it.

::component-example{name="popover/hover" height="240px"}
::

## Controlled

With `trigger="manual"`, or any trigger, bind the state with `v-model:open`. `dismissible` controls whether `Escape` and a click outside close the popover.

::component-example{name="popover/controlled" height="240px"}
::

## Placement

`placement` is a preference from 12 values (`top`, `top-start`, `top-end`, `right` and so on). The popover flips to the opposite side and shifts when it doesn't fit, so it stays inside the viewport. `arrow` shows a pointer back to the trigger and `offset` sets the distance in pixels.

## Accessibility

The trigger gets `aria-haspopup="dialog"`, `aria-expanded` and `aria-controls`, and the panel is a `dialog` named by `label`. `Escape` closes it and returns focus to the trigger. A trigger that isn't focusable is made a `role="button"` that works with `Enter` and `Space`.

## API

### Props

| Prop          | Type                                                                           | Default        | Description                                              |
| ------------- | ------------------------------------------------------------------------------ | -------------- | -------------------------------------------------------- |
| `placement`   | `top` `right` `bottom` `left`, each with `-start` or `-end`                    | `bottom-start` | Preferred placement; flips and shifts to fit.            |
| `trigger`     | `click` `hover` `manual`                                                       | `click`        | How the popover opens.                                   |
| `label`       | `string`                                                                       | `Popover`      | The accessible name of the popover.                      |
| `dismissible` | `boolean`                                                                      | `true`         | Closes on `Escape` and pointer interaction outside.      |
| `arrow`       | `boolean`                                                                      | `true`         | Shows a pointer back to the trigger.                     |
| `offset`      | `number`                                                                       | `8`            | Distance from the trigger in pixels.                     |
| `delay`       | `number`                                                                       | `100`          | Hover delay in milliseconds. Focus opens immediately.    |
| `hideDelay`   | `number`                                                                       | `100`          | Delay before closing after hover leaves.                 |
| `maxWidth`    | `string`                                                                       | `20rem`        | CSS maximum width.                                       |
| `to`          | `string` `HTMLElement` `false`                                                 | `body`         | Teleport target, or `false` to render in place.          |
| `disabled`    | `boolean`                                                                      | `false`        | Doesn't open.                                            |
| `open`        | `boolean`                                                                      | `false`        | The open state, bound with `v-model:open`.               |

### Slots

| Slot      | Description                                                                      |
| --------- | -------------------------------------------------------------------------------- |
| `default` | The trigger. Gets `{ open }`.                                                    |
| `trigger` | Same as `default`; takes priority when both are given.                           |
| `content` | The panel content. Gets `{ close }`, which closes it and returns focus.          |

## Theming

```css
:root {
  --n-popover-min-w: 18rem;
}
```

| Variable            | Description                                              |
| ------------------- | -------------------------------------------------------- |
| `--n-popover-z`     | `z-index` of the open popover. Default `70`.             |
| `--n-popover-min-w` | Minimum width of the panel. Default `14rem`.             |
| `--n-popover-bg`    | Panel background. Default `#fff`, dark `--ui-neutral-900`. |
| `--n-popover-border`| Panel border color. Default `--ui-neutral-200`, dark `--ui-neutral-700`. |
| `--n-popover-fg`    | Text color. Default `--ui-neutral-800`, dark `--ui-neutral-100`. |
| `--n-popover-shadow`| Panel shadow.                                            |
