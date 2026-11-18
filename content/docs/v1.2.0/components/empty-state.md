---
title: NEmptyState
description: Polished guidance for empty, first-run, and no-result screens.
---

# NEmptyState

Give users a clear next step when a list, dashboard, or search has no content.

::component-example{name="empty-state/basic"} ::

## Content

Use `title` and `description`, or replace either with the `title` and default slots. The `media`
slot can provide an illustration instead of an icon. Add one or more `NButton` actions with
`actions`.

## API

| Prop          | Type                                                               | Default   | Description                        |
| ------------- | ------------------------------------------------------------------ | --------- | ---------------------------------- |
| `as`          | `string` `Component`                                               | `div`     | Element or component to render.    |
| `title`       | `string`                                                           | `-`       | Main heading.                      |
| `description` | `string`                                                           | `-`       | Supporting text.                   |
| `icon`        | `string` `Component`                                               | `-`       | Illustration icon.                 |
| `color`       | `primary` `secondary` `neutral` `success` `info` `warning` `error` | `primary` | Accent color.                      |
| `size`        | `sm` `md` `lg`                                                     | `md`      | Overall spacing and maximum width. |
| `actions`     | `EmptyStateAction[]`                                               | `[]`      | NButton props, plus `onClick`.     |

### Slots

| Slot      | Description                            |
| --------- | -------------------------------------- |
| `media`   | Custom illustration instead of `icon`. |
| `title`   | Custom title instead of `title` prop.  |
| `default` | Custom description content.            |
| `actions` | Custom action layout.                  |
