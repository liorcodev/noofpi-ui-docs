---
title: NCarousel
description: A swipeable slideshow with arrows, dots, autoplay and keyboard support.
---

# NCarousel

A slideshow of images or custom content. Visitors swipe it, scroll it, or move it with the arrows, the dots and the keyboard. `v-model` is the index of the first visible slide, starting at `0`.

::component-example{name="carousel/basic"}
::

## Items

Each item in `items` is a slide. An item can have an image `src` with its `alt` text, and a `title` and `description` that are shown as a caption over the bottom of the slide. `alt` is empty by default, so give it a text unless the image is only decoration. Images after the visible ones load lazily.

## Loop and autoplay

`loop` makes the arrows wrap around from the last slide to the first and back. Without it, the arrows are disabled at the ends. `autoplay` is the number of milliseconds between automatic slides, and `0` turns it off. After the last slide, the autoplay returns to the first one.

While it plays, a pause button is shown next to the dots. The autoplay also pauses while the carousel is hovered or focused, unless `pauseOnHover` is `false`, and while the browser tab is hidden. It does not start for users who prefer reduced motion.

::component-example{name="carousel/loop-autoplay"}
::

## Several slides

`perView` is the number of slides visible at once. There is one dot for each position, so a carousel of six slides with `perView` of `3` has four dots.

::component-example{name="carousel/per-view"}
::

## Gap and aspect

`gap` is the space between slides, any CSS length. `aspect` is the CSS `aspect-ratio` of a slide. Use `auto` to let the content decide the height.

::component-example{name="carousel/layout"}
::

## Controls and color

`arrows` and `indicators` hide the previous and next buttons and the dots. `color` is the color of the active dot and of the focus ring. The controls are also hidden when all the slides fit, so there is nothing to move.

::component-example{name="carousel/controls"}
::

## v-model

`v-model` is the index of the first visible slide. Change it to move the carousel, and it updates when the visitor moves it. The value is kept between `0` and the last position.

::component-example{name="carousel/v-model"}
::

## Slots usage

The `slide` slot replaces the content of each slide. It receives the `item`, its `index`, and `active`, which is `true` for the visible slides. Hidden slides get `aria-hidden`, but they stay focusable, so take interactive content out of the tab order when it is not `active`.

::component-example{name="carousel/slide-slot"}
::

## Labels

The texts of the controls are in English. Replace them for another language with `prevLabel`, `nextLabel`, `pauseLabel`, `playLabel`, `indicatorLabel` and `slideLabel`. The last two are functions of the position and the total.

```vue
<NCarousel
  :items="items"
  label="גלריה"
  prev-label="השקופית הקודמת"
  next-label="השקופית הבאה"
  :indicator-label="n => `מעבר לשקופית ${n}`"
  :slide-label="(n, total) => `${n} מתוך ${total}`"
/>
```

## Accessibility

The carousel is a `region` with `aria-roledescription="carousel"`, and `label` is its accessible name. Each slide is a `group` with `aria-roledescription="slide"` and a label such as `2 of 4`. Slides that are not visible have `aria-hidden="true"`.

The viewport can be focused, and when it is focused these keys work:

| Key                 | Action                                    |
| ------------------- | ----------------------------------------- |
| `ArrowRight`        | Moves to the next slide.                  |
| `ArrowLeft`         | Moves to the previous slide.              |
| `Home`              | Moves to the first slide.                 |
| `End`               | Moves to the last slide.                  |

In a right-to-left page the two arrow keys are swapped. The keys do nothing with `Alt` or `Ctrl`. The previous and next buttons and the dots are buttons with an `aria-label`, and the active dot has `aria-current`. The pause button is a button too. The scroll animation is skipped for users who prefer reduced motion.

## API

### Props

| Prop             | Type                                                                | Default                              | Description                                                         |
| ---------------- | ------------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------------------------- |
| `modelValue`     | `number`                                                            | `0`                                  | The index of the first visible slide. Bound with `v-model`.         |
| `items`          | `CarouselItem[]`                                                    | `[]`                                 | The slides. The `slide` slot works too.                             |
| `perView`        | `number`                                                            | `1`                                  | The number of slides visible at once.                               |
| `gap`            | `string`                                                            | `1rem`                               | The space between slides, any CSS length.                           |
| `aspect`         | `string`                                                            | `16 / 9`                             | The CSS `aspect-ratio` of a slide. `auto` lets the content decide.  |
| `loop`           | `boolean`                                                           | `false`                              | The arrows wrap around from the last slide to the first and back.   |
| `autoplay`       | `number`                                                            | `0`                                  | The milliseconds between automatic slides. `0` turns it off.        |
| `pauseOnHover`   | `boolean`                                                           | `true`                               | Pauses the autoplay while hovered or focused.                       |
| `arrows`         | `boolean`                                                           | `true`                               | Shows the previous and next buttons.                                |
| `indicators`     | `boolean`                                                           | `true`                               | Shows a dot for each position.                                      |
| `color`          | `primary` `secondary` `neutral` `success` `info` `warning` `error`  | `primary`                            | The color of the active dot and the focus ring.                     |
| `label`          | `string`                                                            | `-`                                  | The accessible name of the carousel.                                |
| `prevLabel`      | `string`                                                            | `Previous slide`                     | The accessible name of the previous button.                         |
| `nextLabel`      | `string`                                                            | `Next slide`                         | The accessible name of the next button.                             |
| `pauseLabel`     | `string`                                                            | `Pause slideshow`                    | The accessible name of the pause button.                            |
| `playLabel`      | `string`                                                            | `Start slideshow`                    | The accessible name of the pause button while it is paused.         |
| `indicatorLabel` | `(position: number, total: number) => string`                       | `` n => `Go to slide ${n}` ``        | The accessible name of a dot.                                       |
| `slideLabel`     | `(position: number, total: number) => string`                       | `` (n, total) => `${n} of ${total}` `` | The accessible name of a slide.                                   |

### Slots

| Slot    | Props                                                   | Description                                    |
| ------- | ------------------------------------------------------- | ---------------------------------------------- |
| `slide` | `{ item: CarouselItem, index: number, active: boolean }` | The content of a slide, instead of the image and caption. |

### CarouselItem

| Field         | Type     | Description                                          |
| ------------- | -------- | ---------------------------------------------------- |
| `src`         | `string` | The URL of the image.                                |
| `alt`         | `string` | The alt text of the image. It is empty by default.   |
| `title`       | `string` | The caption title, shown over the bottom of the slide. |
| `description` | `string` | The caption text, below the title.                   |

### Events

| Event               | Payload  | Description                                          |
| ------------------- | -------- | ---------------------------------------------------- |
| `update:modelValue` | `number` | The index of the first visible slide changed.        |

## Theming

The colors are CSS variables of the carousel. Override them after the `noofpi-ui` import, on a class of your own or on `.n-carousel`. `perView`, `gap` and `aspect` are set as variables on the element too, so use the props for them.

```css
.gallery {
  --n-carousel-arrow-bg: #fff;
  --n-carousel-dot: var(--ui-neutral-400);
}
```

| Variable                     | Description                                                                                         |
| ---------------------------- | --------------------------------------------------------------------------------------------------- |
| `--n-carousel-arrow-bg`      | Background of the arrows. Default `rgb(255 255 255 / 0.9)`, dark `rgb(23 23 23 / 0.85)`.            |
| `--n-carousel-arrow-fg`      | Icon color of the arrows. Default `--ui-neutral-900`, dark `--ui-neutral-50`.                       |
| `--n-carousel-dot`           | Color of the dots. Default `--ui-neutral-300`, dark `--ui-neutral-700`.                             |
| `--n-carousel-dot-hover`     | Color of a dot on hover. Default `--ui-neutral-400`, dark `--ui-neutral-500`.                       |
| `--n-carousel-control`       | Icon color of the pause button. Default `--ui-neutral-600`, dark `--ui-neutral-400`.                |
| `--n-carousel-control-hover` | Background of the pause button on hover. Default `--ui-neutral-100`, dark `--ui-neutral-800`.       |
