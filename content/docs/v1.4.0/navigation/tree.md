---
title: NTree
description: An accessible tree with selection, checkboxes, search and lazy loading.
---

# NTree

A nested list that opens and closes. Use it for teams, categories, permissions or any data with levels. It follows the WAI-ARIA tree pattern and is fully keyboard navigable.

::component-example{name="tree/basic"}
::

## Items

A `TreeItem` has a `value` and a `label`, and optionally a `description`, an `icon`, a `badge`, `disabled` and `children`. Bind the open nodes with `v-model:expanded` and the selected node with `v-model:selected`.

## Multiple selection

With `selection="multiple"`, `v-model:selected` is an array of values and clicking a row toggles it.

```vue
<NTree v-model:selected="selected" :items="items" selection="multiple" />
```

## Checkboxes and search

`checkable` shows a checkbox on every row and keeps `v-model:checked` independent from selection. Checking a parent checks its enabled descendants, and a parent turns into a dash when only some of its children are checked. `searchable` adds a filter box; matches open their branches, and `v-model:search` binds the text.

::component-example{name="tree/checkable"}
::

## Lazy loading

Pass `loadChildren` to fetch the children of a node without `children` the first time it is expanded. A spinner shows meanwhile, and a failure emits `load-error`.

::component-example{name="tree/lazy"}
::

## Drag and drop

With `droppable`, rows accept drops. The `drop` event carries the row's item and the native event, so you decide what the drop means. Dropping on a disabled row does nothing.

## Slots

`item` replaces the label and description of a row, and `icon` replaces its icon. Both get `{ item, expanded }`; `item` also gets `selected` and `checked`.

## Accessibility

The tree is a `role="tree"` named by `label`. `ArrowUp`, `ArrowDown`, `Home` and `End` move between rows, `ArrowRight` opens a node or moves to its first child, `ArrowLeft` closes it or moves to its parent, `Enter` selects, and `Space` checks the row with `checkable`, or selects it without.

## API

### Props

| Prop                | Type                                          | Default        | Description                                                   |
| ------------------- | --------------------------------------------- | -------------- | ------------------------------------------------------------- |
| `items`             | `TreeItem[]`                                  | `[]`           | The top level nodes.                                          |
| `selection`         | `single` `multiple`                           | `single`       | Selection mode.                                               |
| `searchable`        | `boolean`                                     | `false`        | Shows a search box that filters the nodes.                    |
| `searchPlaceholder` | `string`                                      | `Search…`      | Placeholder and accessible name of the search box.            |
| `emptyText`         | `string`                                      | `No items found` | Shown when nothing matches.                                 |
| `checkable`         | `boolean`                                     | `false`        | Shows checkboxes.                                             |
| `droppable`         | `boolean`                                     | `false`        | Lets rows accept drops.                                       |
| `loadChildren`      | `(item: TreeItem) => TreeItem[] \| Promise<TreeItem[]>` | `-`  | Loads the children of a node without `children` when expanded. |
| `label`             | `string`                                      | `Tree`         | Accessible name of the tree.                                  |
| `selected`          | `string` `number` or an array of them         | `-`            | The selected value, or values with `multiple` (`v-model:selected`). |
| `expanded`          | `(string \| number)[]`                        | `[]`           | Open nodes (`v-model:expanded`).                              |
| `checked`           | `(string \| number)[]`                        | `[]`           | Checked nodes (`v-model:checked`).                            |
| `search`            | `string`                                      | `""`           | Search text (`v-model:search`).                               |

### TreeItem

| Field         | Type                 | Description                                                |
| ------------- | -------------------- | ---------------------------------------------------------- |
| `value`       | `string` `number`    | Identifies the node.                                       |
| `label`       | `string`             | The text of the node.                                      |
| `description` | `string`             | Smaller text next to the label.                            |
| `icon`        | `string` `Component` | Leading icon.                                              |
| `badge`       | `string` `number`    | A count or tag at the end of the row.                      |
| `disabled`    | `boolean`            | Can't be selected, checked or opened.                      |
| `children`    | `TreeItem[]`         | The nodes below. Without it, `loadChildren` is asked.      |

### Slots

| Slot    | Props                                      | Description                          |
| ------- | ------------------------------------------ | ------------------------------------ |
| `item`  | `item`, `expanded`, `selected`, `checked`  | Replaces the content of a row.       |
| `icon`  | `item`, `expanded`                         | Replaces the icon of a row.          |
| `empty` | -                                          | Replaces the empty text.             |

### Events

| Event        | Payload                      | Description                                  |
| ------------ | ---------------------------- | -------------------------------------------- |
| `select`     | `item`                       | A node was selected.                         |
| `check`      | `item`, `checked`            | A checkbox changed.                          |
| `dragover`   | `item`, `DragEvent`          | Something is dragged over a row.             |
| `drop`       | `item`, `DragEvent`          | Something was dropped on a row.              |
| `load-error` | `error`, `item`              | `loadChildren` failed.                       |

## Theming

| Variable             | Description                                           |
| -------------------- | ----------------------------------------------------- |
| `--n-tree-row-h`     | Height of a row. Default `2.25rem`.                   |
| `--n-tree-row-px`    | Horizontal padding of a row. Default `0.5rem`.        |
| `--n-tree-row-radius`| Corner radius of a row.                               |
| `--n-tree-indent`    | Indent per level. Default `1.25rem`.                  |
| `--n-tree-fg`        | Text color.                                           |
| `--n-tree-muted`     | Color of descriptions.                                |
| `--n-tree-border`    | Border color.                                         |
| `--n-tree-hover`     | Background of a hovered row.                          |
| `--n-tree-selected`  | Background of a selected row.                         |
| `--n-tree-selected-fg` | Text color of a selected row.                       |
