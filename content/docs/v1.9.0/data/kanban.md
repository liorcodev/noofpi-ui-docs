---
title: NKanban
description: A board of cards in columns that you move by dragging or with the keyboard.
---

# NKanban

A kanban board. `v-model:columns` is an array of columns, each with its cards in `items`. Drag a card by pointer to another place, or move it with the keyboard. The model is updated for you when a card is dropped.

::component-example{name="kanban/basic"}
::

A plain `v-model` works the same as `v-model:columns`.

## Cards

Each column has an `id`, a `title` and its `items`. A card needs an `id` (unique across the whole board) and a `title`. All the other fields are optional.

| Field         | Type                 | Description                                                    |
| ------------- | -------------------- | -------------------------------------------------------------- |
| `description` | `string`             | A short text under the title, cut after three lines.           |
| `badge`       | `string`             | A small label shown above the title.                           |
| `color`       | `ButtonColor`        | The color of the card's edge and of its badge.                 |
| `assignee`    | `string`             | The name of a person, shown with an avatar.                    |
| `avatar`      | `string`             | The image of the `assignee`.                                   |
| `disabled`    | `boolean`            | The card stays where it is. Default `false`.                   |

A column `color` adds a dot to its header. Other fields on a card are kept as they are, so a `card` slot can use them.

::component-example{name="kanban/cards"}
::

## Column limits

`limit` is the most cards a column should hold. The header shows the count as `count/limit`, and a column over its limit turns to the error color.

By default a limit is a warning only. With `enforce-limit` a card can't be dropped into a column that has reached its limit, and the column shows a refused state while the card is over it. A card can still be reordered inside a full column.

::component-example{name="kanban/limits"}
::

## Events

`move` is emitted after a card is dropped in another place. Its payload has the `item` and its `from` and `to` positions, each a column `id` and an `index`. The model has already been updated when it is emitted. A drop in the same place does not emit it.

`addable` shows an "Add card" button under every column. It does not add a card by itself: `add` is emitted with the column, and you update the model. `add-label` changes its text, and `empty-label` changes the text of an empty column.

::component-example{name="kanban/events"}
::

## Variants, sizes and height

`variant` is `soft` (columns on a tinted surface, the default) or `outline` (columns with a border). `size` is `sm`, `md` or `lg` and changes the column width, the card padding and the text size.

The board is as tall as its tallest column. To give it a fixed height, set `--n-kanban-height`. Every column then scrolls on its own, and the board scrolls sideways when the columns don't fit.

::component-example{name="kanban/appearance"}
::

## Slots

`card` replaces the content of a card. The grip and the colored edge stay. `column-header` replaces the title and the count, `column-footer` adds content under the cards, and `empty` replaces the text of an empty column.

The `card` slot is also used for the copy of the card that follows the pointer, with `dragging` set to `true`.

::component-example{name="kanban/slots"}
::

## Disabled

`disabled` makes the whole board read-only: nothing can be moved, and the add buttons are disabled. A column with `disabled` can't give up its cards or receive any, and a card with `disabled` stays where it is. Other cards can still move around it.

::component-example{name="kanban/locked"}
::

## Accessibility

The board is a `group` named by `label`, and each column is a `group` named by its title. Cards are list items, and only one of them is in the tab order at a time. A card that can move is described with a hint, and its moves are announced to screen readers.

| Key                 | Action                                                                     |
| ------------------- | -------------------------------------------------------------------------- |
| `Space` `Enter`     | Picks up the focused card, and drops it when it is picked up.              |
| `ArrowUp`           | Focuses the card above. When picked up, moves it up.                       |
| `ArrowDown`         | Focuses the card below. When picked up, moves it down.                     |
| `ArrowLeft`         | Focuses a card in the previous column. When picked up, moves it there.     |
| `ArrowRight`        | Focuses a card in the next column. When picked up, moves it there.         |
| `Home`              | Goes to the first card of the column, or the first position when picked up. |
| `End`               | Goes to the last card of the column, or the last position when picked up.  |
| `Escape`            | Cancels the move and puts the card back.                                   |

When a card is picked up, `ArrowLeft` and `ArrowRight` skip the columns that can't receive it, and say so when the next column is full. A move is also cancelled when focus leaves the card. In a right-to-left page `ArrowLeft` and `ArrowRight` swap.

With a pointer, a card starts to drag after it moves a few pixels, and `Escape` cancels the drag. A press on a button, link or field inside a card does not start a drag, unless it starts on the grip. Near the edge of the board or of a column, the drag scrolls it. On a touch screen the rest of the card scrolls the board, so drag by the grip. `handle` is `true` by default. If you hide it, touch screens have no way to drag.

The announcements can be translated with `labels`. `{item}`, `{column}`, `{position}` and `{total}` are replaced by the card title, the column title, the position starting at 1 and the number of cards in the column.

```vue
<NKanban
  v-model:columns="columns"
  :labels="{ drop: '{item} moved to {column}, position {position} of {total}' }"
/>
```

| Label     | Default                                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------------------ |
| `hint`    | `Press Space or Enter to pick up this card`                                                                        |
| `lift`    | `Picked up {item}, position {position} of {total} in {column}. Use the arrow keys to move it, Space to drop it and Escape to cancel.` |
| `move`    | `{column}, position {position} of {total}`                                                                         |
| `drop`    | `Dropped {item}, position {position} of {total} in {column}`                                                       |
| `cancel`  | `Move cancelled, {item} is back in {column}, position {position} of {total}`                                       |
| `refused` | `{column} is full`                                                                                                 |

## API

Other attributes go to the root element.

### Props

| Prop           | Type                  | Default      | Description                                                                |
| -------------- | --------------------- | ------------ | -------------------------------------------------------------------------- |
| `columns`      | `KanbanColumn[]`      | `-`          | The columns and their cards. Use `v-model:columns`.                        |
| `modelValue`   | `KanbanColumn[]`      | `-`          | Same as `columns`, for a plain `v-model`.                                  |
| `variant`      | `soft` `outline`      | `soft`       | `soft` puts the columns on a tinted surface, `outline` draws a border.     |
| `size`         | `sm` `md` `lg`        | `md`         | The column width, the card padding and the text size.                      |
| `enforceLimit` | `boolean`             | `false`      | Refuses drops into a column that has reached its `limit`.                  |
| `addable`      | `boolean`             | `false`      | Shows an add button under every column, which emits `add`.                 |
| `handle`       | `boolean`             | `true`       | Shows a grip on each card. Touch screens drag by it.                       |
| `disabled`     | `boolean`             | `false`      | Makes the board read-only: nothing can be moved or added.                  |
| `label`        | `string`              | `-`          | The accessible name of the board.                                          |
| `addLabel`     | `string`              | `Add card`   | The text of the add button.                                                |
| `emptyLabel`   | `string`              | `No cards`   | Shown in a column without cards.                                           |
| `labels`       | `KanbanLabels`        | `-`          | Overrides the screen reader texts.                                         |

A `KanbanColumn` has an `id` (`string` `number`), a `title`, `items`, and the optional `color` (`ButtonColor`), `limit` (`number`) and `disabled` (`boolean`).

### Events

| Event                  | Payload                                                                       | Description                                                              |
| ---------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `update:columns`       | `KanbanColumn[]`                                                              | A card was moved. Emitted with the new columns.                          |
| `update:modelValue`    | `KanbanColumn[]`                                                              | Same as `update:columns`, when the board uses a plain `v-model`.         |
| `move`                 | `{ item: KanbanItem, from: KanbanPosition, to: KanbanPosition }`              | A card was dropped in another place. `KanbanPosition` is `{ column, index }`. |
| `add`                  | `KanbanColumn`                                                                | The add button of a column was clicked.                                  |

### Slots

| Slot            | Props                                                                       | Description                                                          |
| --------------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `card`          | `{ item: KanbanItem, column: KanbanColumn, index: number, dragging: boolean }` | The content of a card. The grip and the edge stay.                |
| `column-header` | `{ column: KanbanColumn, count: number, exceeded: boolean }`                | Replaces the title and the count of a column.                        |
| `column-footer` | `{ column: KanbanColumn }`                                                  | Content under the cards of a column, above the add button.           |
| `empty`         | `{ column: KanbanColumn }`                                                  | Shown in a column without cards.                                     |

## Theming

The board is styled with CSS variables. Override them after the `noofpi-ui` import, or on one board with `style`.

```css
:root {
  --n-kanban-column-width-md: 20rem;
}
```

| Variable                     | Description                                                                          |
| ---------------------------- | ------------------------------------------------------------------------------------ |
| `--n-kanban-height`          | The height of the board. Defaults to `auto`, a fixed height makes columns scroll.    |
| `--n-kanban-gap`             | The space between columns. Defaults to `1rem`.                                       |
| `--n-kanban-column-width-sm` | Column width of the `sm` board. Defaults to `15rem`.                                 |
| `--n-kanban-column-width-md` | Column width of the `md` board. Defaults to `18rem`.                                 |
| `--n-kanban-column-width-lg` | Column width of the `lg` board. Defaults to `22rem`.                                 |
| `--n-kanban-column-bg`       | Column background. Defaults to `--ui-neutral-100`, and `--ui-neutral-900` in dark.   |
| `--n-kanban-column-border`   | Column border. Defaults to `--ui-neutral-200`, and `--ui-neutral-800` in dark.       |
| `--n-kanban-card-bg`         | Card background. Defaults to `#fff`, and `--ui-neutral-800` in dark.                 |
| `--n-kanban-card-border`     | Card border. Defaults to `--ui-neutral-200`, and `--ui-neutral-700` in dark.         |
| `--n-kanban-accent`          | The color of the drop target, the drop indicator and the focus ring. Defaults to `--ui-primary-500`, and `--ui-primary-400` in dark. |
