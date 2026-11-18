---
title: NTooltip
description: Beautiful, accessible hints with automatic viewport-aware placement.
---

# NTooltip

Wrap a button, icon, link, or any focusable control with a concise contextual hint. Tooltips open on
hover or keyboard focus and close with `Escape`.

::component-example{name="tooltip/basic"}
::

## Variants

Use `solid` for high-contrast hints and `soft` for a lighter, color-matched treatment.

::component-example{name="tooltip/variants"}
::

## Content

Pass a short `text`, or use the `content` slot for a richer layout. Tooltips stay compact and wrap
within `maxWidth`.

```vue
<NTooltip placement="right" color="info">
  <NButton label="Details" icon="i-lucide-info" />
  <template #content>
    <strong>Smart preview</strong>
    <p>Your changes are saved locally.</p>
  </template>
</NTooltip>
```

## Behavior

- `placement` is a preference. The tooltip automatically flips to the opposite side when space is
  limited and stays inside the viewport.
- Hover uses `delay` to avoid distracting flashes. Keyboard focus opens immediately.
- Keep tooltip content brief and non-interactive. Use `NMenu` or `NDialog` for interactive content.
- `v-model:open` is available for controlled tooltips.

## API

### Props

| Prop        | Type                                                               | Default   | Description                                   |
| ----------- | ------------------------------------------------------------------ | --------- | --------------------------------------------- |
| `text`      | `string`                                                           | `-`       | Tooltip text. The `content` slot replaces it. |
| `placement` | `top` `right` `bottom` `left`                                      | `top`     | Preferred side; flips if space is limited.    |
| `variant`   | `solid` `soft`                                                     | `solid`   | Visual style.                                 |
| `color`     | `primary` `secondary` `neutral` `success` `info` `warning` `error` | `neutral` | Accent color.                                 |
| `delay`     | `number`                                                           | `350`     | Hover delay in milliseconds.                  |
| `hideDelay` | `number`                                                           | `100`     | Delay before closing after hover exit.        |
| `arrow`     | `boolean`                                                          | `true`    | Shows the directional arrow.                  |
| `disabled`  | `boolean`                                                          | `false`   | Prevents opening.                             |
| `maxWidth`  | `string`                                                           | `16rem`   | CSS maximum width.                            |
| `to`        | `string` `HTMLElement` `false`                                     | `body`    | Teleport target, or `false` to keep in place. |
| `open`      | `boolean`                                                          | `false`   | Controlled open state (`v-model:open`).       |

### Slots

| Slot      | Description                                   |
| --------- | --------------------------------------------- |
| `default` | The element or control the tooltip describes. |
| `content` | Custom tooltip content instead of `text`.     |
