---
title: NMarquee
description: A row of logos that scrolls in an endless loop.
---

# NMarquee

A row of logos or labels that scrolls in an endless loop. It pauses on hover, fades at the edges, and stops moving for users who prefer reduced motion.

::component-example{name="marquee/basic"}
::

## Logos

An item can have an image `src`, a `label`, or both. Give an image `alt` text unless the `label` already names it. An item with `href` becomes a link, and `target` is supported.

::component-example{name="marquee/logos"}
::

## Direction

`reverse` scrolls the other way. `duration` is the time of one loop in seconds, so a bigger value is slower.

::component-example{name="marquee/direction"}
::

## Sizes

`size` sets the logo height and the gap between items.

::component-example{name="marquee/sizes"}
::

## Responsive

`size` also takes a value per Tailwind breakpoint. It is mobile first, and `base` is below `sm`. Resize the window to see this one change.

::component-example{name="marquee/responsive"}
::

## Options

`fade` fades the edges out, `pauseOnHover` pauses the animation while the marquee is hovered or focused, and `grayscale` mutes the items until they are hovered. `monochrome` shows every logo in black and white, and the color returns on hover.

::component-example{name="marquee/options"}
::

## Vertical

With `orientation="vertical"` the items scroll up. The element needs a height, such as the parent here.

::component-example{name="marquee/vertical"}
::

## Custom content

The default slot replaces `items`. The content is rendered twice for a seamless loop, and the copy is hidden from assistive technology.

::component-example{name="marquee/slot"}
::

## API

### Props

| Prop           | Type                                                      | Default      | Description                                                              |
| -------------- | --------------------------------------------------------- | ------------ | ------------------------------------------------------------------------ |
| `items`        | `MarqueeItem[]`                                           | `[]`         | The logos or labels to show. The default slot works too.                 |
| `duration`     | `number`                                                  | `40`         | The seconds for one loop. A bigger value is slower.                      |
| `reverse`      | `boolean`                                                 | `false`      | Scrolls in the other direction.                                          |
| `pauseOnHover` | `boolean`                                                 | `true`       | Pauses the animation while hovered or focused.                           |
| `fade`         | `boolean`                                                 | `true`       | Fades the edges out.                                                     |
| `grayscale`    | `boolean`                                                 | `true`       | Mutes the items until they are hovered.                                  |
| `monochrome`   | `boolean`                                                 | `false`      | Shows every logo in black and white, with the color back on hover.       |
| `size`         | `sm` `md` `lg`                                            | `md`         | The logo height and gap. Responsive.                                     |
| `orientation`  | `horizontal` `vertical`                                   | `horizontal` | The scroll axis. The vertical one needs an element with a height.        |
| `label`        | `string`                                                  | `-`          | The accessible name of the region.                                       |
| `as`           | `string` `Component`                                      | `div`        | The element or component to render.                                      |

### Slots

| Slot      | Description                                  |
| --------- | -------------------------------------------- |
| `default` | The items to scroll, instead of `items`.     |

### MarqueeItem

| Field    | Type     | Description                                                |
| -------- | -------- | ---------------------------------------------------------- |
| `src`    | `string` | The URL of the logo image.                                 |
| `alt`    | `string` | The alt text of the logo. It is empty by default.          |
| `label`  | `string` | Text shown next to the logo, or instead of it.             |
| `href`   | `string` | Turns the item into a link.                                |
| `target` | `string` | The link target. `_blank` adds `rel="noopener noreferrer"`. |

## Theming

Override the tokens on `:root` or on a single marquee after the `noofpi-ui` import. The component mirrors in right-to-left pages.

```css
.brands {
  --n-marquee-logo-h: 2.5rem;
  --n-marquee-img-filter: grayscale(1) invert(1);
}
```

| Variable                 | Description                                                                                                  |
| ------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `--n-marquee-gap`        | The gap between items. The default is `0.75rem`, set by `size`.                                              |
| `--n-marquee-logo-h`     | The logo height, and the label font size is 60% of it. The default is `2rem`, set by `size`.                 |
| `--n-marquee-fade`       | The width of the faded edges. The default is `12%`.                                                          |
| `--n-marquee-muted`      | The opacity of muted items. The default is `0.8`.                                                            |
| `--n-marquee-img-filter` | The filter of muted items. The default is `grayscale(0.5)`. Use `grayscale(1) invert(1)` for dark logos on a dark page. |
