---
title: NInbox
description: A three-pane mail layout of a folder rail, a message list and a reader.
---

# NInbox

A mail layout of three panes: a collapsible folder rail, a message list and a reader. The list fills the inbox until a message opens, then the reader grows out of its edge. `NInbox` only lays out the panes. You render the folders, the messages and the message yourself, in the slots.

`v-model:open` is whether a message is open. The inbox fills the height of its parent, so give the parent a height.

::component-example{name="inbox/basic"}
::

## Responsive

`NInbox` responds to its own width, not to the viewport, so it works inside a dashboard or a resizable panel. Drag the bottom right corner of the example to resize it.

`breakpoint` is the inbox width from which the list and the reader sit side by side: `sm` (`40rem`), `md` (`48rem`), `lg` (`64rem`, the default) or `xl` (`80rem`). Narrower, only one pane is shown at a time and the reader has a back button. `rail-breakpoint` is the width from which the rail is shown (`xl` by default). Narrower, it is hidden.

::component-example{name="inbox/responsive"}
::

## Rail

The `rail` slot is the folders and labels. It scrolls on its own. `rail-header` sits above it, next to the button that hides the rail, and `rail-footer` is pinned to the bottom.

`v-model:rail` shows and hides the rail, and is `true` by default. Where the rail is hidden, the button that shows it is in the `list-header`. `hide-rail-icon` and `show-rail-icon` change the icons of the two buttons.

::component-example{name="inbox/rail"}
::

## Full width reader

The reader has a button that gives the message the whole width and hides the list. `v-model:expanded` holds that state. Closing the message resets it.

::component-example{name="inbox/expanded"}
::

## Slots and close

`list-header` is above the list, e.g. a search field. `reader-header` is next to the back and close buttons, usually the subject. The default slot is the message.

The back and close buttons set `open` to `false` and emit `close`, and so does `Escape` inside the reader.

::component-example{name="inbox/slots"}
::

## Accessibility

The inbox is a `group` named by `label`. While no message is open the reader is `inert`, so it can't be reached with the keyboard. The buttons are named by `backLabel`, `closeLabel`, `expandLabel`, `restoreLabel`, `showRailLabel` and `hideRailLabel`. Translate them for other languages.

| Key      | Action                                    |
| -------- | ----------------------------------------- |
| `Escape` | In the reader, closes the open message.   |

Mark the current folder and message yourself, e.g. with `aria-current`.

## API

Other attributes go to the root element.

### Props

| Prop              | Type                   | Default                       | Description                                                                |
| ----------------- | ---------------------- | ----------------------------- | -------------------------------------------------------------------------- |
| `open`            | `boolean`              | `false`                       | Whether a message is open (`v-model:open`).                                |
| `expanded`        | `boolean`              | `false`                       | Whether the reader takes the whole width (`v-model:expanded`).             |
| `rail`            | `boolean`              | `true`                        | Whether the `rail` slot is shown (`v-model:rail`).                         |
| `breakpoint`      | `sm` `md` `lg` `xl`    | `lg`                          | Inbox width from which the list and the reader sit side by side.           |
| `railBreakpoint`  | `sm` `md` `lg` `xl`    | `xl`                          | Inbox width from which the rail is shown.                                  |
| `border`          | `boolean`              | `true`                        | Outer border and rounded corners.                                          |
| `label`           | `string`               | `Inbox`                       | The accessible name of the inbox.                                          |
| `backLabel`       | `string`               | `Back to list`                | The accessible name of the back button.                                    |
| `closeLabel`      | `string`               | `Close message`               | The accessible name of the close button.                                   |
| `expandLabel`     | `string`               | `Full width`                  | The accessible name of the button that gives the reader the whole width.   |
| `restoreLabel`    | `string`               | `Show list`                   | The accessible name of the button that brings the list back.               |
| `showRailLabel`   | `string`               | `Show folders`                | The accessible name of the button that shows the rail.                     |
| `hideRailLabel`   | `string`               | `Hide folders`                | The accessible name of the button that hides the rail.                     |
| `hideRailIcon`    | `string` `Component`   | `i-lucide-panel-left-close`   | Icon of the button that hides the rail.                                    |
| `showRailIcon`    | `string` `Component`   | `i-lucide-panel-left-open`    | Icon of the button that shows the rail.                                    |

### Events

| Event             | Payload   | Description                                                            |
| ----------------- | --------- | ---------------------------------------------------------------------- |
| `update:open`     | `boolean` | A message opened or closed.                                            |
| `update:expanded` | `boolean` | The reader took the whole width or gave it back.                       |
| `update:rail`     | `boolean` | The rail was shown or hidden.                                          |
| `close`           | `-`       | The user closed the message: the back or close button, or `Escape`.    |

### Slots

| Slot            | Description                                                                              |
| --------------- | ---------------------------------------------------------------------------------------- |
| `rail-header`   | Above the rail, e.g. a compose button. Next to it is the button that hides the rail.     |
| `rail`          | The rail, usually the folders and labels. Scrolls on its own.                            |
| `rail-footer`   | Pinned to the bottom of the rail, e.g. a storage quota.                                  |
| `list-header`   | Above the list, e.g. a search field. Where the rail is hidden it holds the show button.  |
| `list`          | The list of messages. Scrolls on its own.                                                |
| `reader-header` | Next to the back and close buttons at the top of the reader, usually the subject.        |
| `default`       | The message. Scrolls on its own.                                                         |

## Theming

The pane sizes and colors are CSS variables. Override them after the `noofpi-ui` import, or on a parent of the inbox.

```css
:root {
  --n-inbox-list-w: 28rem;
}
```

| Variable               | Description                                                                              |
| ---------------------- | ---------------------------------------------------------------------------------------- |
| `--n-inbox-height`     | Height of the inbox. Defaults to `100%`.                                                 |
| `--n-inbox-rail-w`     | Width of the rail. Defaults to `15rem`.                                                  |
| `--n-inbox-list-w`     | Width of the list while the reader is open. Defaults to `24rem`.                         |
| `--n-inbox-reader-min` | Width the reader keeps while it opens and closes, so its content slides in. Defaults to `24rem`. |
| `--n-inbox-duration`   | Duration of the opening and closing. Defaults to `0.3s`.                                 |
| `--n-inbox-bg`         | Background of the panes. White in light mode, `--ui-neutral-950` in dark mode.           |
| `--n-inbox-border`     | Color of the borders. `--ui-neutral-200` in light mode, `--ui-neutral-800` in dark mode. |
