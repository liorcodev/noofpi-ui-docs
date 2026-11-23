---
title: NTimeline
description: A list of events along a line, vertical or horizontal.
---

# NTimeline

A list of events along a line. Each item can have a `date`, a `title` and a `description`. It is an ordered list, so the order of `items` is the order of the events.

::component-example{name="timeline/basic"}
::

## Icons and colors

`icon` shows an icon in a filled circle instead of a small dot. `color` on the timeline sets the color of all the indicators, and `color` on an item overrides it for that item.

::component-example{name="timeline/icons-colors"}
::

## Horizontal

With `orientation="horizontal"` the events go in a row and share the width of the timeline. The timeline needs enough width for its items.

::component-example{name="timeline/horizontal"}
::

## Sizes

`size` sets the size of the indicator and the text. It is `sm`, `md` or `lg`.

::component-example{name="timeline/sizes"}
::

## Slots usage

The `indicator`, `date`, `title` and `description` slots replace one part of every item. Each receives the `item` and its `index`. The indicator is a filled circle only when the item has an `icon`, so set one on the items when the slot shows content.

::component-example{name="timeline/slots"}
::

## Accessibility

The timeline is an ordered list (`ol`) with one `li` for each item, and `label` is its accessible name. It is `Timeline` by default, so give it a more specific name, such as `Order status`. The connector lines are hidden from assistive technology.

## API

### Props

| Prop          | Type                                                               | Default    | Description                                      |
| ------------- | ------------------------------------------------------------------ | ---------- | ------------------------------------------------ |
| `items`       | `TimelineItem[]`                                                   | `[]`       | The events to show.                              |
| `orientation` | `vertical` `horizontal`                                            | `vertical` | The direction of the line.                       |
| `size`        | `sm` `md` `lg`                                                     | `md`       | The size of the indicators and the text.         |
| `color`       | `primary` `secondary` `neutral` `success` `info` `warning` `error` | `primary`  | The color of the indicators.                     |
| `label`       | `string`                                                           | `Timeline` | The accessible name of the list.                 |

### Slots

| Slot          | Props                                | Description                                                         |
| ------------- | ------------------------------------ | ------------------------------------------------------------------- |
| `indicator`   | `{ item: TimelineItem, index: number }` | The content of the indicator, instead of the icon.               |
| `date`        | `{ item: TimelineItem, index: number }` | The date, instead of `date`.                                     |
| `title`       | `{ item: TimelineItem, index: number }` | The title, instead of `title`.                                   |
| `description` | `{ item: TimelineItem, index: number }` | The description, instead of `description`.                       |

### TimelineItem

| Field         | Type     | Description                                                              |
| ------------- | -------- | ------------------------------------------------------------------------ |
| `title`       | `string` | The title of the event.                                                  |
| `description` | `string` | The text below the title.                                                |
| `date`        | `string` | A date or time shown above the title, such as `Mar 2026`.                |
| `icon`        | `string` | An icon in the indicator, instead of a dot, such as `i-lucide-rocket`.   |
| `color`       | `primary` `secondary` `neutral` `success` `info` `warning` `error` | Overrides the `color` of the timeline for this item. |

## Theming

The size of the indicators and the colors are CSS variables. Override them after the `noofpi-ui` import.

```css
:root {
  --n-timeline-indicator-md: 2rem;
  --n-timeline-line: var(--ui-neutral-300);
}
```

| Variable                     | Description                                                                          |
| ---------------------------- | ------------------------------------------------------------------------------------ |
| `--n-timeline-indicator-sm`  | Size of the indicator of the `sm` timeline. Defaults to `1.25rem`.                   |
| `--n-timeline-indicator-md`  | Size of the indicator of the `md` timeline. Defaults to `1.75rem`.                   |
| `--n-timeline-indicator-lg`  | Size of the indicator of the `lg` timeline. Defaults to `2.25rem`.                   |
| `--n-timeline-fg`            | Text color. Defaults to `var(--ui-neutral-900)`, and `var(--ui-neutral-50)` in dark mode. |
| `--n-timeline-muted`         | Color of the date and the description. Defaults to `var(--ui-neutral-500)`, and `var(--ui-neutral-400)` in dark mode. |
| `--n-timeline-line`          | Color of the connector lines. Defaults to `var(--ui-neutral-200)`, and `var(--ui-neutral-800)` in dark mode. |
