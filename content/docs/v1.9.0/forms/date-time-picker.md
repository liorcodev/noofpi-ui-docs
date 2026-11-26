---
title: NDateTimePicker
description: A date and time field that opens a calendar with a time section.
---

# NDateTimePicker

[NDatePicker](/docs/forms/date-picker) with a time section. A trigger opens an
[NCalendar](/docs/forms/calendar) with columns for the hours and minutes beside it. The value is a
`YYYY-MM-DDTHH:mm` string, or `null` while it is empty. It has no time zone: it is the wall-clock
time you see, so nothing shifts with daylight saving.

Picking a date or a time does not close the popover. Use the Done button, `Escape` or a click
outside to close it.

::component-example{name="date-time-picker/basic" height="460px"}
::

## Clock, minutes and seconds

`hour12` switches to a 12-hour clock with an AM/PM column. By default it follows `locale`, and is a
24-hour clock when that is unknown. `minuteStep` sets the distance between the minutes. It must
divide 60 (`1`, `2`, `5`, `10`, `15`, `20`, `30`), otherwise it is `1`. `seconds` adds a seconds
column, and the value then ends in `:ss`.

::component-example{name="date-time-picker/clock" height="460px"}
::

## Limits

`min` and `max` take a `YYYY-MM-DDTHH:mm` value. A plain `YYYY-MM-DD` starts that day for `min`, and
ends it for `max`. Dates and times outside the limits are dimmed and can't be picked, and a time
that falls outside them when the date changes is moved inside. `isDateDisabled` marks single dates
as unselectable, and `weekStart` picks the first day of the week.

::component-example{name="date-time-picker/limits" height="460px"}
::

## Default time

A picked date gets `defaultTime` while no time was chosen: `HH:mm`, `HH:mm:ss`, or `"now"` for the
current time rounded down to `minuteStep`. It is `00:00` by default, and is moved into `min` and
`max` when needed. A time chosen before any date is kept for the first date, until the popover
closes.

::component-example{name="date-time-picker/default-time" height="460px"}
::

## Time zone

`timeZone` takes an IANA time zone and shows its short name next to the time. It is a label only:
the value stays a wall-clock time and nothing is converted. `format` takes `Intl.DateTimeFormat`
options for the text in the trigger, and `locale` the language.

::component-example{name="date-time-picker/time-zone" height="460px"}
::

## Clearable

`clearable` adds a Clear button next to Done that sets the value back to `null`. The Now button
picks the current date and time, moved into `min` and `max`, and is disabled when that date is
unselectable.

::component-example{name="date-time-picker/clearable" height="460px"}
::

## In a form field

Inside an `NFormField`, the trigger carries the field's `id`, `aria-invalid` and `aria-describedby`,
and the field shows the schema error. See [NFormField](/docs/forms/input). Use `name` to submit the
value with a surrounding `form` through a hidden input. It is empty while there is no value.

::component-example{name="date-time-picker/in-field" height="520px"}
::

## Keyboard

`Enter`, `Space` or `ArrowDown` on the trigger opens the popover and moves focus into the calendar,
which follows the [calendar keyboard](/docs/forms/calendar#keyboard). `Tab` moves on to the time
columns. `Escape` closes the popover and returns focus to the trigger, as does tabbing away. It
opens upward when there is no room below.

Each time column is a `listbox` with one tab stop.

| Key         | Action                                           |
| ----------- | ------------------------------------------------ |
| `ArrowDown` | Picks the next enabled option of the column.     |
| `ArrowUp`   | Picks the previous enabled option of the column. |
| `Home`      | Picks the first enabled option.                  |
| `End`       | Picks the last enabled option.                   |

## API

### Props

| Prop             | Type                                                               | Default                                       | Description                                                                           |
| ---------------- | ------------------------------------------------------------------ | --------------------------------------------- | ------------------------------------------------------------------------------------- |
| `v-model`        | `string` `null`                                                    | `-`                                           | The value: `YYYY-MM-DDTHH:mm`, or `YYYY-MM-DDTHH:mm:ss` with `seconds`. No time zone. |
| `v-model:open`   | `boolean`                                                          | `false`                                       | The open state.                                                                       |
| `placeholder`    | `string`                                                           | `-`                                           | Shown while no date and time is selected.                                             |
| `name`           | `string`                                                           | `-`                                           | The native `name` of the hidden input that submits the value.                         |
| `label`          | `string`                                                           | `-`                                           | The accessible name when there is no `NFormField` label.                              |
| `min`            | `string`                                                           | `-`                                           | Earliest selectable date and time. A plain `YYYY-MM-DD` starts that day.              |
| `max`            | `string`                                                           | `-`                                           | Latest selectable date and time. A plain `YYYY-MM-DD` ends that day.                  |
| `isDateDisabled` | `(date: string) => boolean`                                        | `-`                                           | Marks a date (`YYYY-MM-DD`) as unselectable.                                          |
| `weekStart`      | `number`                                                           | `0`                                           | First day of the week: `0` (Sunday) to `6`.                                           |
| `locale`         | `string`                                                           | browser                                       | BCP 47 tag of the formatted value and the calendar.                                   |
| `format`         | `Intl.DateTimeFormatOptions`                                       | `{ dateStyle: 'medium', timeStyle: 'short' }` | How the value is written in the trigger. `timeStyle` is `medium` with `seconds`.      |
| `hour12`         | `boolean`                                                          | from `locale`                                 | A 12-hour clock with an AM/PM column. 24-hour when `locale` doesn't say.              |
| `minuteStep`     | `number`                                                           | `1`                                           | Distance between the minutes. It must divide 60, otherwise it is `1`.                 |
| `seconds`        | `boolean`                                                          | `false`                                       | Adds a seconds column, and the value carries seconds.                                 |
| `defaultTime`    | `string`                                                           | `00:00`                                       | The time a date gets while none was chosen: `HH:mm`, `HH:mm:ss` or `now`.             |
| `timeZone`       | `string`                                                           | `-`                                           | IANA time zone whose short name is shown next to the time. Nothing is converted.      |
| `clearable`      | `boolean`                                                          | `false`                                       | Adds a button that clears the value.                                                  |
| `prevLabel`      | `string`                                                           | `Previous month`                              | The accessible name of the previous month button.                                     |
| `nextLabel`      | `string`                                                           | `Next month`                                  | The accessible name of the next month button.                                         |
| `timeLabel`      | `string`                                                           | `Time`                                        | The accessible name of the time section.                                              |
| `hourLabel`      | `string`                                                           | `Hours`                                       | The accessible name of the hours column.                                              |
| `minuteLabel`    | `string`                                                           | `Minutes`                                     | The accessible name of the minutes column.                                            |
| `secondLabel`    | `string`                                                           | `Seconds`                                     | The accessible name of the seconds column.                                            |
| `periodLabel`    | `string`                                                           | `AM/PM`                                       | The accessible name of the AM/PM column.                                              |
| `nowLabel`       | `string`                                                           | `Now`                                         | The label of the button that picks the current date and time.                         |
| `clearLabel`     | `string`                                                           | `Clear`                                       | The label of the clear button.                                                        |
| `doneLabel`      | `string`                                                           | `Done`                                        | The label of the button that closes the popover.                                      |
| `invalid`        | `boolean`                                                          | `false`                                       | Marks the field invalid without an `NFormField` around it.                            |
| `disabled`       | `boolean`                                                          | `false`                                       | Disables the field.                                                                   |
| `color`          | `primary` `secondary` `neutral` `success` `info` `warning` `error` | `primary`                                     | The color of the focus ring, the calendar and the selected time.                      |

### Events

| Event               | Payload         | Description                                          |
| ------------------- | --------------- | ---------------------------------------------------- |
| `update:modelValue` | `string` `null` | A date or time was picked, or the value was cleared. |
| `update:open`       | `boolean`       | The popover opened or closed.                        |

## Theming

The calendar uses the `--n-calendar-*` tokens of [NCalendar](/docs/forms/calendar#theming), and the
trigger the `--n-input-*` tokens of [NInput](/docs/forms/input).

```css
:root {
  --n-date-time-picker-time-h: 12rem;
}
```

| Variable                        | Description                                                            |
| ------------------------------- | ---------------------------------------------------------------------- |
| `--n-date-time-picker-offset`   | Gap between the trigger and the popover. Default `0.375rem`.           |
| `--n-date-time-picker-z`        | `z-index` of the open picker. Default `50`.                            |
| `--n-date-time-picker-bg`       | Popover background. Default `#fff`, neutral 900 in dark.               |
| `--n-date-time-picker-border`   | Popover and footer border color. Default neutral 200, 800 in dark.     |
| `--n-date-time-picker-shadow`   | Popover shadow.                                                        |
| `--n-date-time-picker-time-h`   | Height of the time columns. Default `15rem`.                           |
| `--n-date-time-picker-option-w` | Width of a time option. Default `2.75rem`.                             |
| `--n-date-time-picker-option-h` | Height of a time option. Default `2rem`.                               |
| `--n-date-time-picker-hover`    | Background of a hovered time option. Default neutral 100, 800 in dark. |
| `--n-date-time-picker-muted`    | Color of the clock icon. Default neutral 400, 600 in dark.             |
