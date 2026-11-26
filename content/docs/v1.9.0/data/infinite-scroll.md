---
title: NInfiniteScroll
description: Load more items when the end of a list scrolls into view.
---

# NInfiniteScroll

Wraps a list and emits `load` when its edge comes into view. You fetch the next page, add the items and set `loading`, `finished` and `error`. The component does not load anything and does not keep the items.

::component-example{name="infinite-scroll/basic"}
::

`height` makes the component its own scroll container. Without it, the component watches the nearest scrolling ancestor, or the page. Only one `load` is emitted for each time the edge is in view. When `loading` goes back to `false` and the edge is still in view, for example after a short page, `load` is emitted again.

## Error and retry

Set `error` when a load fails. `true` shows `errorLabel`, and a string shows that message. While `error` is set, no `load` is emitted. The status shows a retry button that emits `retry` and then `load`, so one `@load` handler is enough. Clear `error` in that handler, or by yourself, to start loading again.

::component-example{name="infinite-scroll/error"}
::

## Load more button

`manual` shows a button instead of loading by itself, and `load` is emitted when it is used. The button is also shown when the browser has no `IntersectionObserver`.

::component-example{name="infinite-scroll/manual"}
::

## Loading upwards

`direction="up"` loads at the start, for a chat history or a log. The status and the edge are above the items. When you add older items at the start, the scroll position stays on the same item. The component starts at the top, so scroll the container to the end yourself.

::component-example{name="infinite-scroll/direction-up"}
::

## Custom status

The `loading`, `finished` and `error` slots replace the status. The `error` slot gets `retry` and `message`. Call `retry` to emit `retry` and `load`.

::component-example{name="infinite-scroll/custom-status"}
::

## Scroll container and distance

`root` is the scroll container to watch: a CSS selector or an element. Use it when the component is not the scroll container and the nearest scrolling ancestor is not the right one. `height` takes the place of `root`, and `root` is ignored when it is set.

`distance` is how early to load before the edge is in view. It is a number of pixels (`200` by default), or a `px` or `%` string such as `"25%"`.

::component-example{name="infinite-scroll/root-distance"}
::

## Check again

When `loading` ends, or `finished`, `error` or `disabled` goes back to `false`, the component checks if the edge is in view and emits `load` if it is. After a change it can't see, such as a new search that clears the list, call `check()` on the component. It emits `load` if the edge is in view and nothing blocks it.

```vue
<script setup lang="ts">
const scroll = ref<{ check: () => void }>();

async function search() {
  items.value = [];
  finished.value = false;
  await nextTick();
  scroll.value?.check();
}
</script>

<template>
  <NInfiniteScroll ref="scroll" :loading="loading" :finished="finished" @load="load">
    <!-- items -->
  </NInfiniteScroll>
</template>
```

## Accessibility

The root element has `aria-busy` set to `loading`. The status is a polite live region, so the loading, error and finished messages are announced. The element that detects the edge is hidden from assistive technology.

Loading by scrolling has no control to focus, so a keyboard user gets new items by scrolling with the keys. For a list where that is a problem, use `manual`: the "Load more" button is a native button.

## API

Other attributes go to the root element.

### Props

| Prop            | Type                | Default            | Description                                                                                            |
| --------------- | ------------------- | ------------------ | ------------------------------------------------------------------------------------------------------ |
| `loading`       | `boolean`           | `false`            | Your request is in flight. Blocks `load` and shows the loading status.                                 |
| `finished`      | `boolean`           | `false`            | There is nothing more to load. Stops watching the edge and shows the finished status.                  |
| `error`         | `boolean` `string`  | `false`            | The last load failed. `true` shows `errorLabel`, a string shows that message. Stops `load`.            |
| `disabled`      | `boolean`           | `false`            | Stops loading, without a status.                                                                       |
| `direction`     | `down` `up`         | `down`             | `down` loads at the end. `up` loads at the start and keeps the scroll position.                        |
| `distance`      | `number` `string`   | `200`              | How early to load before the edge is in view: pixels, or a `px` or `%` string.                         |
| `root`          | `string` `HTMLElement` | `-`             | The scroll container to watch: a CSS selector or an element. Ignored when `height` is set.             |
| `height`        | `number` `string`   | `-`                | Makes the component a scroll container of this height. A number is pixels, a string is a CSS length.   |
| `manual`        | `boolean`           | `false`            | Shows a "Load more" button instead of loading by itself.                                               |
| `loadingLabel`  | `string`            | `Loading…`         | The loading status text.                                                                               |
| `finishedLabel` | `string`            | `No more items`    | The finished status text. An empty string hides it.                                                    |
| `errorLabel`    | `string`            | `Something went wrong` | The error text when `error` is `true`.                                                             |
| `retryLabel`    | `string`            | `Try again`        | The label of the retry button.                                                                         |
| `loadMoreLabel` | `string`            | `Load more`        | The label of the button of `manual`.                                                                   |

### Events

| Event   | Payload | Description                                                                                                |
| ------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `load`  | `-`     | The edge came into view while nothing blocks it, or the "Load more" button was used. Fetch the next page. |
| `retry` | `-`     | The retry button was used. `load` is emitted right after it.                                               |

### Slots

| Slot       | Props                                    | Description                                         |
| ---------- | ---------------------------------------- | --------------------------------------------------- |
| `default`  | `-`                                      | The items.                                          |
| `loading`  | `-`                                      | Replaces the loading status.                        |
| `finished` | `-`                                      | Replaces the finished status.                       |
| `error`    | `{ retry: () => void, message: string }` | Replaces the error status. `retry` asks for the page again. |

### Exposed

| Name      | Type         | Description                                                                                  |
| --------- | ------------ | -------------------------------------------------------------------------------------------- |
| `check()` | `() => void` | Checks if the edge is in view and emits `load` if it is and nothing blocks it.               |

## Theming

The spacing of the status is a CSS variable. Override them after the `noofpi-ui` import.

```css
:root {
  --n-infinite-scroll-status-py: 1.5rem;
}
```

| Variable                        | Description                                                           |
| ------------------------------- | --------------------------------------------------------------------- |
| `--n-infinite-scroll-status-py` | Vertical padding of the status. Defaults to `1rem`.                   |
| `--n-infinite-scroll-gap`       | Gap between the icon, the text and the button. Defaults to `0.5rem`.  |
