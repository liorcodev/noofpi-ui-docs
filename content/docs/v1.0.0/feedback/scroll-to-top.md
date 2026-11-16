---
title: NScrollToTop
description: A floating button that scrolls back to the top.
---

# NScrollToTop

A floating button that appears once the page is scrolled and smoothly scrolls back to the top. Mount it once, for example in `app.vue`.

::component-example{name="scroll-to-top/basic"}
::

The button is fixed to the viewport. It shows after the page has scrolled past `threshold` pixels, which is `400` by default. The examples on this page use `threshold` `0`, so it appears as soon as you scroll. Scroll this page down a bit to see it in the bottom-right corner.

## Customizing

Other attributes such as `color`, `variant`, `size`, `shape` and `class` go to the underlying `NButton`. Change `icon` and `label`, which is both the accessible name and the tooltip. Here a utility class moves the button up so it doesn't cover the first one.

::component-example{name="scroll-to-top/styled"}
::

## API

### Props

| Prop        | Type                 | Default             | Description                                                    |
| ----------- | -------------------- | ------------------- | -------------------------------------------------------------- |
| `threshold` | `number`             | `400`               | The number of pixels scrolled before the button shows up.      |
| `label`     | `string`             | `Scroll to top`     | The accessible name and tooltip of the button.                 |
| `icon`      | `string` `Component` | `i-lucide-arrow-up` | The icon: an Iconify class, another class, or a component.     |
| `smooth`    | `boolean`            | `true`              | Animates the scroll instead of jumping to the top.             |

Any other attribute is passed to [NButton](/docs/components/button).

## Theming

Override the tokens after the `noofpi-ui` import.

```css
:root {
  --n-scroll-to-top-inset: 2rem;
}
```

| Variable                   | Description                                                   |
| -------------------------- | ------------------------------------------------------------- |
| `--n-scroll-to-top-inset`  | Distance from the bottom and end edges of the viewport. Default `1.5rem`. |
| `--n-scroll-to-top-z`      | `z-index` of the button. Default `50`.                        |
