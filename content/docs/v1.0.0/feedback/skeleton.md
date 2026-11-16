---
title: NSkeleton
description: A placeholder that holds the space of content while it loads.
---

# NSkeleton

A pulsing placeholder for content that is still loading. Size it with `width` and `height`.

::component-example{name="skeleton/basic"}
::

## Shapes

`rect` is the default. `circle` uses `width` (or `height`) as its diameter, which suits avatars. `text` renders `lines` lines of text, and the last one is shorter when there is more than one.

::component-example{name="skeleton/shapes"}
::

## While loading

Swap the placeholder for the real content when it arrives. Match the sizes to avoid the page jumping.

::component-example{name="skeleton/loading"}
::

## Animation

The pulse stops with `:animated="false"`, and with a `prefers-reduced-motion` setting.

## Accessibility

A skeleton is hidden from assistive technology with `aria-hidden`, since it carries no content. Give one `label` to announce the loading state: it gets `role="status"` and the label as its accessible name. Label a single placeholder for the whole region rather than every one.

## API

### Props

| Prop       | Type                      | Default | Description                                                          |
| ---------- | ------------------------- | ------- | -------------------------------------------------------------------- |
| `shape`    | `text` `rect` `circle`    | `rect`  | The shape of the placeholder.                                        |
| `width`    | `string` `number`         | `-`     | A CSS length, or pixels for a number. `rect` and `text` default to `100%`. |
| `height`   | `string` `number`         | `-`     | A CSS length, or pixels for a number. Defaults to `1rem` for `rect` and `0.875rem` per `text` line. |
| `lines`    | `number`                  | `1`     | The number of lines. Only for `text`.                                |
| `animated` | `boolean`                 | `true`  | Pulses the placeholder.                                              |
| `label`    | `string`                  | `-`     | Announces the loading state to assistive technology.                 |
| `as`       | `string` `Component`      | `div`   | The element or component to render.                                  |

## Theming

The color is a CSS variable. Override it after the `noofpi-ui` import.

```css
:root {
  --n-skeleton-bg: var(--ui-neutral-300);
}
```

| Variable           | Description                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------------- |
| `--n-skeleton-bg`  | Color of the placeholder. Defaults to `var(--ui-neutral-200)`, and `var(--ui-neutral-800)` in dark mode. |
