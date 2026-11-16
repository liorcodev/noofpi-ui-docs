---
title: NDialog
description: A modal dialog for confirmations and forms.
---

# NDialog

A modal dialog, rendered into `body`. Bind the open state with `v-model:open`. The default slot is the content, `footer` holds the actions, and `title` and `description` fill the header.

::component-example{name="dialog/basic" height="240px"}
::

## Dismissing

`Escape`, a click on the backdrop and the close button all close the dialog. Set `dismissible` to `false` to turn off `Escape` and the backdrop, so only the buttons you provide can close it, and `close` to `false` to hide the close button.

## Placement and size

`placement` puts the panel in the `center`, or against the `top`, `bottom`, `start` or `end` edge. `size` sets the width: `sm`, `md`, `lg`, `xl` or `full`. For the side-sheet pattern, see [NDrawer](/docs/feedback/drawer).

## Accessibility

The panel is a `role="dialog"` with `aria-modal`, named by the `title` (or `label`) and described by the `description`. Focus moves into the dialog when it opens (to an element with `autofocus` if there is one), `Tab` stays inside it, the page behind doesn't scroll, and focus returns to the element that opened it when it closes.

## API

### Props

| Prop          | Type                                         | Default    | Description                                                         |
| ------------- | -------------------------------------------- | ---------- | ------------------------------------------------------------------- |
| `title`       | `string`                                     | `-`        | The heading, also the accessible name.                              |
| `description` | `string`                                     | `-`        | Text under the title.                                               |
| `label`       | `string`                                     | `-`        | The accessible name when there is no `title`.                       |
| `placement`   | `center` `top` `bottom` `start` `end`        | `center`   | Where the panel sits.                                               |
| `size`        | `sm` `md` `lg` `xl` `full`                   | `md`       | The width of the panel.                                             |
| `dismissible` | `boolean`                                    | `true`     | Closes on `Escape` and on a click outside the panel.                |
| `close`       | `boolean`                                    | `true`     | Shows the close button.                                             |
| `closeIcon`   | `string` `Component`                         | `i-lucide-x` | The icon of the close button.                                     |
| `closeLabel`  | `string`                                     | `Close`    | The accessible name of the close button.                            |
| `to`          | `string` `HTMLElement` `false`               | `body`     | Where the dialog is rendered. `false` renders it in place.          |
| `open`        | `boolean`                                    | `false`    | The open state, bound with `v-model:open`.                          |

### Slots

| Slot      | Description                                          |
| --------- | ---------------------------------------------------- |
| `default` | The content.                                         |
| `header`  | Replaces the `title` and `description`.              |
| `footer`  | The actions at the bottom.                           |

## Theming

Override the tokens after the `noofpi-ui` import.

| Variable              | Description                                                   |
| --------------------- | ------------------------------------------------------------- |
| `--n-dialog-z`        | `z-index` of the dialog. Default `60`.                        |
| `--n-dialog-backdrop` | Backdrop color. Default `rgb(0 0 0 / 0.5)`, dark `0.7`.       |
| `--n-dialog-bg`       | Panel background. Default `#fff`, dark `--ui-neutral-900`.    |
| `--n-dialog-border`   | Panel border color.                                           |
| `--n-dialog-fg`       | Text color.                                                   |
| `--n-dialog-muted`    | Color of the description.                                     |
| `--n-dialog-shadow`   | Panel shadow.                                                 |
