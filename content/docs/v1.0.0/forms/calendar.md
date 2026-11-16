---
title: NCalendar
description: An accessible month calendar for picking a date or a date range.
---

# NCalendar

An inline month calendar. Dates are `YYYY-MM-DD` strings, so they are safe to store, send and compare. Bind a single date with `v-model`. For a dropdown version, see [NDatePicker](/docs/forms/date-picker).

::component-example{name="calendar/basic" height="400px"}
::

## Range

With `range`, the `v-model` is a `DateRange` of `{ start, end }`. The first click sets `start` (and `end` becomes `null`), the second completes the range; picking an earlier date swaps the ends. While a range is half picked, hovering previews it.

::component-example{name="calendar/range" height="430px"}
::

## Limits

`min` and `max` bound the selectable dates, and `isDateDisabled` rules out individual ones. Disabled dates stay focusable but can't be chosen, and the month buttons stop at the limits. See the [date picker example](/docs/forms/date-picker#limits).

## Keyboard

Arrow keys move by a day or a week, `Home` and `End` go to the start and end of the week, `PageUp` and `PageDown` change the month (with `Shift`, the year), and `Enter` or `Space` selects the focused date. The grid is one tab stop.

## API

### Props

| Prop             | Type                                | Default          | Description                                                  |
| ---------------- | ----------------------------------- | ---------------- | ------------------------------------------------------------ |
| `v-model`        | `string` `DateRange` `null`         | `-`              | The date, or `{ start, end }` with `range`.                  |
| `range`          | `boolean`                           | `false`          | Selects a start and an end date.                             |
| `min`            | `string`                            | `-`              | Earliest selectable date.                                    |
| `max`            | `string`                            | `-`              | Latest selectable date.                                      |
| `isDateDisabled` | `(date: string) => boolean`         | `-`              | Marks a date as unselectable.                                |
| `weekStart`      | `number`                            | `0`              | First day of the week: `0` (Sunday) to `6`.                  |
| `locale`         | `string`                            | browser          | BCP 47 tag of month, weekday and date names.                 |
| `label`          | `string`                            | `Calendar`       | The accessible name.                                         |
| `prevLabel`      | `string`                            | `Previous month` | The accessible name of the previous month button.            |
| `nextLabel`      | `string`                            | `Next month`     | The accessible name of the next month button.                |
| `disabled`       | `boolean`                           | `false`          | Disables the calendar.                                       |

### Events

| Event    | Description                                               |
| -------- | --------------------------------------------------------- |
| `select` | A date was chosen, even if it was already selected.       |

### DateRange

| Field   | Type             | Description                                |
| ------- | ---------------- | ------------------------------------------ |
| `start` | `string` `null`  | The first date.                            |
| `end`   | `string` `null`  | The last date, `null` until it is chosen.  |

## Theming

Override the tokens after the `noofpi-ui` import.

| Variable                   | Description                                           |
| -------------------------- | ----------------------------------------------------- |
| `--n-calendar-day`         | Width and height of a day. Default `2.25rem`.         |
| `--n-calendar-fg`          | Text color.                                           |
| `--n-calendar-muted`       | Color of weekday names and days of other months.      |
| `--n-calendar-hover`       | Background of a hovered day.                          |
| `--n-calendar-range`       | Background of the range band.                         |
| `--n-calendar-selected-bg` | Background of a selected day.                         |
| `--n-calendar-selected-fg` | Text color of a selected day.                         |
