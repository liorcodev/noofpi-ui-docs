---
title: NLoadingIndicator
description: A top-of-page progress bar.
---

# NLoadingIndicator

A full-width progress bar fixed to the top of the page, with a gradient, a shimmer and a glowing head. Mount it once, for example in `app.vue`. Without props it runs until the page finishes loading. Drive it yourself for route changes and fetches.

::component-example{name="loading-indicator/basic"}
::

The bar is fixed to the top of the viewport, so look at the top of this page when you press the button. `loading` set to `true` starts the bar and it trickles toward 92%. Set to `false`, it completes and fades out.

## Controlling the value

`value` sets the bar directly from `0` to `100`, for example the progress of an upload. A value of `100` completes the bar. These examples share the top of the page, so complete this one before trying another.

::component-example{name="loading-indicator/value"}
::

## Colors

`color` accepts the `primary` color of your theme and the semantic colors.

::component-example{name="loading-indicator/colors"}
::

## API

### Props

| Prop      | Type                                                   | Default        | Description                                                                          |
| --------- | ------------------------------------------------------ | -------------- | ------------------------------------------------------------------------------------ |
| `loading` | `boolean`                                              | -              | Starts the bar with `true` and completes it with `false`. Without it, the bar follows the page load. |
| `value`   | `number`                                               | -              | Sets the progress from `0` to `100`. `100` completes the bar.                        |
| `color`   | `primary` `neutral` `success` `info` `warning` `error` | `primary`      | The color of the bar.                                                                |
| `label`   | `string`                                               | `Loading page` | The accessible name of the bar.                                                      |

The bar has `role="progressbar"` with the current `aria-valuenow`. Animations are disabled with `prefers-reduced-motion`.

## Theming

Override the tokens after the `noofpi-ui` import.

```css
:root {
  --n-loading-indicator-h: 4px;
}
```

| Variable                   | Description                                       |
| -------------------------- | ------------------------------------------------- |
| `--n-loading-indicator-h`  | Thickness of the bar. Default `3px`.              |
| `--n-loading-indicator-z`  | `z-index` of the bar. Default `100`.              |
