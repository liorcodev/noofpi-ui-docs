---
title: NCommandPalette
description: A fast, accessible command launcher with search and keyboard navigation.
---

# NCommandPalette

A modal command launcher for application actions and navigation. It filters locally, groups
commands, supports keywords and shortcuts, and keeps keyboard focus inside the dialog.

::component-example{name="command-palette/basic"}
::

## Opening and searching

Control visibility with `v-model:open`. Use `v-model:search` to own the search term, or set
`filter="false"` for server-side or asynchronous results.

An item can call `onSelect(event)` and `preventDefault()` to keep the palette open after selection.

```ts
const items = [
  {
    label: 'Open settings',
    group: 'Navigation',
    icon: 'i-lucide-settings',
    shortcut: '⌘ ,',
    keywords: ['preferences', 'account']
  }
];
```

## API

| Prop              | Type              | Default                  | Description                              |
| ----------------- | ----------------- | ------------------------ | ---------------------------------------- |
| `items`           | `CommandItem[]`   | `[]`                     | Commands to display and filter.          |
| `open`            | `boolean`         | `false`                  | Visibility (`v-model:open`).             |
| `search`          | `string`          | `""`                     | Search term (`v-model:search`).          |
| `placeholder`     | `string`          | `Search commands…`       | Search input placeholder and label.      |
| `label`           | `string`          | `Command palette`        | Dialog and listbox accessible name.      |
| `filter`          | `boolean`         | `true`                   | Enables local text and keyword filtering. |
| `emptyTitle`      | `string`          | `No commands found`      | Empty-state title.                       |
| `emptyDescription`| `string`          | `Try a different…`       | Empty-state description.                 |
| `dismissible`     | `boolean`         | `true`                   | Allows Escape and backdrop dismissal.    |

### Item fields

`value`, `label`, `description`, `group`, `icon`, `keywords`, `shortcut`, `disabled`, and `onSelect`.

### Slots

| Slot    | Props               | Description                    |
| ------- | ------------------- | ------------------------------ |
| `item`  | `item`, `active`    | Replaces a command row.        |
| `empty` | -                   | Replaces the empty-state view. |
