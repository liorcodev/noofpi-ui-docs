---
title: NFileExplorer
description: A file manager with folders, list and grid views, selection, drag and drop, and upload.
---

# NFileExplorer

A file manager for your own data: browse folders, select, rename, delete, move, copy and upload. It only displays and reports. Every change is an event, and you apply it to the `items` you pass in.

::component-example{name="file-explorer/basic" height="520px"}
::

## Items

A `FileItem` has a `value` and a `label`, and optionally `size`, `modified`, `icon`, `description`, `url` and `children`. `type` is inferred from `children` or `loadChildren`: set it to `folder` for an empty folder. The open folder is `v-model:current` (`undefined` is the top level) and the selected values are `v-model:selected`.

## Events

Each event says what the user did. Update your data, and the explorer follows.

| Event           | Payload                         | What to do                                                                  |
| --------------- | ------------------------------- | --------------------------------------------------------------------------- |
| `open`          | `item`                          | A file was opened. Folders are navigated into instead.                      |
| `rename`        | `item`, `label`                 | Change the item's `label`.                                                  |
| `delete`        | `items`                         | Remove the items.                                                           |
| `move`          | `items`, `folder?`              | Items were dropped, or cut and pasted, on `folder`. `undefined` is the top level. |
| `copy`          | `items`, `folder?`              | Add copies of the items to `folder`, with new `value`s.                     |
| `create-folder` | `name`, `parent?`               | Add a new folder to `parent`.                                               |
| `upload`        | `files`, `folder?`              | Add the files to `folder`, or send them to your server.                     |
| `download`      | `items`                         | Files with a `url` are saved by the explorer. Folders are yours to handle, such as a zip. |
| `load`          | `folder`, `children`            | `loadChildren` answered. Store the result as the folder's `children`.       |
| `load-error`    | `error`, `folder`               | `loadChildren` failed.                                                      |

A name that already exists in the folder is refused when creating or renaming.

## Actions

`actions` chooses the built-in actions: `new-folder`, `download`, `copy`, `cut`, `paste`, `rename` and `delete`. All are on by default. Upload is not one of them: switch it on with `showUpload`, which also accepts files dropped from the computer. `accept` filters the file picker.

## Selection, sorting and views

`multiple` lets Ctrl/Cmd-click and Shift-click select several items. `view` is `list` or `grid` (`v-model:view`). `sort` is `{ key, direction }` with `name`, `size` or `modified` (`v-model:sort`); folders always stay before files. The search box filters the open folder, and `:searchable="false"` removes it.

## Lazy loading

A folder without `children` is loaded by `loadChildren` the first time it is opened, with a loading state meanwhile. Keep the result with the `load` event so that later changes inside that folder work like anywhere else.

::component-example{name="file-explorer/lazy" height="420px"}
::

## Slots

| Slot      | Props                                                                      | Description                              |
| --------- | -------------------------------------------------------------------------- | ---------------------------------------- |
| `item`    | `item`, `selected`, `rename`                                               | Replaces the name of an item.            |
| `icon`    | `item`                                                                     | Replaces the icon of an item.            |
| `empty`   | -                                                                          | Replaces the text of an empty folder.    |
| `toolbar` | `selectedItems`, `rename`, `remove`, `download`, `copy`, `cut`, `clear`    | Replaces the bar shown while items are selected. |

## Keyboard

| Keys                | Action                                              |
| ------------------- | --------------------------------------------------- |
| Arrow keys, `Home`, `End` | Move between items.                           |
| `Enter`             | Open the item.                                      |
| `Space`             | Select the item.                                    |
| `F2`                | Rename.                                             |
| `Delete`            | Delete the selection.                               |
| `Ctrl/Cmd` + `A`    | Select all, with `multiple`.                        |
| `Ctrl/Cmd` + `C` `X` `V` | Copy, cut and paste.                           |
| `Alt` + `ArrowUp`   | Go up one folder.                                   |
| `Escape`            | Clear the selection, then forget what was copied or cut. |

## API

### Props

| Prop                | Type                                          | Default              | Description                                                      |
| ------------------- | --------------------------------------------- | -------------------- | ---------------------------------------------------------------- |
| `items`             | `FileItem[]`                                  | `[]`                 | The top level files and folders.                                 |
| `current`           | `string` `number`                             | `-`                  | The open folder (`v-model:current`). `undefined` is the top level. |
| `selected`          | `(string \| number)[]`                        | `[]`                 | Selected values (`v-model:selected`).                            |
| `view`              | `list` `grid`                                 | `list`               | How the folder is shown (`v-model:view`).                        |
| `sort`              | `{ key, direction }`                          | `name`, `asc`        | How items are ordered (`v-model:sort`).                          |
| `actions`           | `FileExplorerAction[]`                        | all                  | The built-in actions that are offered.                           |
| `multiple`          | `boolean`                                     | `false`              | Allows selecting several items.                                  |
| `searchable`        | `boolean`                                     | `true`               | Shows a search box that filters the open folder.                 |
| `showUpload`        | `boolean`                                     | `false`              | Shows the Upload button and accepts dropped files.               |
| `rootLabel`         | `string`                                      | `All files`          | Name of the top level, used by the first breadcrumb and the folder tree. |
| `searchPlaceholder` | `string`                                      | `Search this folder…` | Placeholder and accessible name of the search box.              |
| `emptyText`         | `string`                                      | `This folder is empty` | Shown in an empty folder.                                      |
| `label`             | `string`                                      | `File explorer`      | Accessible name.                                                 |
| `loadChildren`      | `(folder: FileItem) => FileItem[] \| Promise<FileItem[]>` | `-`      | Loads a folder without `children` the first time it is opened.   |
| `accept`            | `string`                                      | `-`                  | `accept` of the upload file picker, such as `image/*`.           |
| `disabled`          | `boolean`                                     | `false`              | Disables the explorer.                                           |

### FileItem

| Field         | Type                 | Description                                                              |
| ------------- | -------------------- | ------------------------------------------------------------------------ |
| `value`       | `string` `number`    | Identifies the item.                                                     |
| `label`       | `string`             | The name.                                                                |
| `type`        | `file` `folder`      | Inferred from `children` or `loadChildren`.                              |
| `description` | `string`             | Smaller text under the name.                                             |
| `icon`        | `string` `Component` | Replaces the default file or folder icon.                                |
| `size`        | `number`             | Size in bytes.                                                           |
| `modified`    | `string` `Date`      | The last modification.                                                   |
| `url`         | `string`             | Where the file can be downloaded from. Without it, only `download` is emitted. |
| `disabled`    | `boolean`            | Can't be selected or opened.                                             |
| `children`    | `FileItem[]`         | The content of a folder.                                                 |

## Theming

| Variable                  | Description                                             |
| ------------------------- | ------------------------------------------------------- |
| `--n-file-explorer-nav-w` | Width of the folder tree. Default `15rem`.              |
| `--n-file-explorer-bg`    | Background. Default `#fff`, dark `--ui-neutral-900`.    |
| `--n-file-explorer-nav-bg`| Background of the folder tree.                          |
| `--n-file-explorer-border`| Border color.                                           |
| `--n-file-explorer-fg`    | Text color.                                             |
| `--n-file-explorer-muted` | Color of sizes, dates and descriptions.                 |
| `--n-file-explorer-hover` | Background of a hovered item.                           |
| `--n-file-explorer-selected` | Background of a selected item.                       |
| `--n-file-explorer-drop`  | Highlight of a folder that accepts a drop.              |
