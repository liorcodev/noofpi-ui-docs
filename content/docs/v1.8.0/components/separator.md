---
title: NSeparator
description: A line that divides content, with an optional label.
---

# NSeparator

A thin line that divides content. It is horizontal by default and as wide as its container.

::component-example{name="separator/basic"}
::

## Label

`label` shows text in the line. The default slot does the same and can hold any content, such as an icon, so it replaces `label`. `align` moves the label to the `start`, the `center` or the `end` of the line. `start` and `end` follow the text direction in a horizontal separator.

::component-example{name="separator/label"}
::

## Variants

`variant` is the style of the line: `solid`, `dashed` or `dotted`.

::component-example{name="separator/variants"}
::

## Vertical

With `orientation="vertical"` the line is vertical and takes the height of its container. Put it in a flex row, such as the parent here, and give the row a height. It is at least `1.25rem` high. Use `decorative` for a divider that only looks good, like the ones between these links.

::component-example{name="separator/vertical"}
::

A vertical separator can have a label too. The label sits between the two parts of the line, and `align` moves it to the top or the bottom.

::component-example{name="separator/vertical-label"}
::

## Accessibility

A separator has `role="separator"`, and a vertical one has `aria-orientation="vertical"`. A horizontal separator uses the default orientation of the role. Set `decorative` when the line is only visual. It then gets `role="none"` and assistive technology ignores it.

## API

### Props

| Prop          | Type                              | Default      | Description                                                           |
| ------------- | --------------------------------- | ------------ | --------------------------------------------------------------------- |
| `orientation` | `horizontal` `vertical`           | `horizontal` | The direction of the line.                                            |
| `label`       | `string`                          | `-`          | The text shown in the line. The default slot replaces it.             |
| `align`       | `start` `center` `end`            | `center`     | Where the label sits on the line.                                     |
| `variant`     | `solid` `dashed` `dotted`         | `solid`      | The style of the line.                                                |
| `decorative`  | `boolean`                         | `false`      | Hides the separator from assistive technology.                        |

### Slots

| Slot      | Props | Description                                              |
| --------- | ----- | -------------------------------------------------------- |
| `default` | `-`   | The content in the line, instead of `label`.             |

## Theming

The colors are CSS variables. Override them after the `noofpi-ui` import.

```css
:root {
  --n-separator-color: var(--ui-neutral-400);
}
```

| Variable               | Description                                                                                         |
| ---------------------- | --------------------------------------------------------------------------------------------------- |
| `--n-separator-color`  | Color of the line. Defaults to `var(--ui-neutral-200)`, and `var(--ui-neutral-800)` in dark mode.   |
| `--n-separator-fg`     | Color of the label. Defaults to `var(--ui-neutral-500)`, and `var(--ui-neutral-400)` in dark mode.  |
