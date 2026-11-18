---
title: NDatePicker
description: A date or date range field that opens an accessible calendar.
---

# NDatePicker

A trigger that opens an [NCalendar](/docs/forms/calendar) below it. The value is a `YYYY-MM-DD`
string, or a `{ start, end }` range with `range`. The popover closes once a date, or a complete
range, is chosen.

::component-example{name="date-picker/basic" height="420px"}
::

## Range

::component-example{name="date-picker/range" height="420px"}
::

## Limits

`min`, `max` and `isDateDisabled` limit the selectable dates, and `weekStart` picks the first day of
the week. `format` takes `Intl.DateTimeFormat` options for the text in the trigger, and `locale` the
language.

::component-example{name="date-picker/limits" height="420px"}
::

## In a form field

Inside an `NFormField`, the trigger carries the field's `id`, `aria-invalid` and `aria-describedby`.
Use `name` to submit the value with a surrounding `form` through a hidden input; with `range` it
submits `<name>-start` and `<name>-end`.

::component-example{name="date-picker/in-field" height="480px"}
::

## Keyboard

`Enter`, `Space` or `ArrowDown` on the trigger opens the calendar and moves focus into it, which
follows the [calendar keyboard](/docs/forms/calendar#keyboard). `Escape` closes it and returns focus
to the trigger, as does tabbing away. The calendar opens upward when there is no room below.

## API

### Props

| Prop             | Type                                                               | Default                   | Description                                                     |
| ---------------- | ------------------------------------------------------------------ | ------------------------- | --------------------------------------------------------------- |
| `v-model`        | `string` `DateRange` `null`                                        | `-`                       | The date, or `{ start, end }` with `range`.                     |
| `v-model:open`   | `boolean`                                                          | `false`                   | The open state.                                                 |
| `range`          | `boolean`                                                          | `false`                   | Picks a start and an end date.                                  |
| `placeholder`    | `string`                                                           | `-`                       | Shown while no date is selected.                                |
| `name`           | `string`                                                           | `-`                       | The native `name` of the hidden input(s) that submit the value. |
| `label`          | `string`                                                           | `-`                       | The accessible name when there is no `NFormField` label.        |
| `min`            | `string`                                                           | `-`                       | Earliest selectable date.                                       |
| `max`            | `string`                                                           | `-`                       | Latest selectable date.                                         |
| `isDateDisabled` | `(date: string) => boolean`                                        | `-`                       | Marks a date as unselectable.                                   |
| `weekStart`      | `number`                                                           | `0`                       | First day of the week: `0` (Sunday) to `6`.                     |
| `locale`         | `string`                                                           | browser                   | BCP 47 tag of the formatted date and the calendar.              |
| `format`         | `Intl.DateTimeFormatOptions`                                       | `{ dateStyle: 'medium' }` | How the date is written in the trigger.                         |
| `prevLabel`      | `string`                                                           | `Previous month`          | The accessible name of the previous month button.               |
| `nextLabel`      | `string`                                                           | `Next month`              | The accessible name of the next month button.                   |
| `invalid`        | `boolean`                                                          | `false`                   | Marks the field invalid without an `NFormField` around it.      |
| `disabled`       | `boolean`                                                          | `false`                   | Disables the field.                                             |
| `color`          | `primary` `secondary` `neutral` `success` `info` `warning` `error` | `primary`                 | The color of the focus ring and the calendar.                   |

## Theming

The calendar uses the `--n-calendar-*` tokens of [NCalendar](/docs/forms/calendar#theming), and the
trigger the `--n-input-*` tokens of [NInput](/docs/forms/input).

| Variable                 | Description                                                  |
| ------------------------ | ------------------------------------------------------------ |
| `--n-date-picker-offset` | Gap between the trigger and the popover. Default `0.375rem`. |
| `--n-date-picker-z`      | `z-index` of the open picker. Default `50`.                  |
| `--n-date-picker-bg`     | Popover background. Default `#fff`, neutral 900 in dark.     |
| `--n-date-picker-border` | Popover border color.                                        |
| `--n-date-picker-shadow` | Popover shadow.                                              |
