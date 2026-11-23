---
title: NBlobs
description: An automatic decorative background of soft, blurred blobs of color.
---

# NBlobs

`NBlobs` draws a decorative background of soft, blurred blobs of color. The layout is generated from a `seed`, so you get the same result every time, also on the server. It uses the colors of your theme. For floating shapes, see [NShapes](/docs/backgrounds/shapes).

## Placing it

`NBlobs` renders a `div` with `position: relative`, `overflow: hidden` and its own stacking context. The background is a layer inside it that fills the whole box, sits behind the content and does not catch clicks. There are two ways to use it.

- **With content.** Put your content in the default slot. The component is the container and the content is above the background.
- **Alone.** Without a slot, the component has no size of its own. Put it in a `relative` parent and give it `class="absolute inset-0"`. Then put your content after it in the parent, with `relative`, so it is painted above. A component without a slot ignores pointer events.

```vue
<div class="relative overflow-hidden">
  <NBlobs class="absolute inset-0" />
  <div class="relative">Content</div>
</div>
```

## Usage

Blurred blobs of color drift slowly. They are good behind a hero or a card. `count` is the number of blobs, and `colors` are the colors they cycle through. Here the blobs are behind the content of the default slot.

::component-example{name="blobs/basic"}
::

### Alone as a background

Without a slot, place it behind your content as described in [Placing it](#placing-it).

::component-example{name="blobs/background"}
::

### Colors

`colors` takes names of theme colors (`primary`, `secondary`, `neutral`, `success`, `info`, `warning` and `error`) or any CSS color. The blobs take the colors in turn. `shade` is the shade of a color name, from `50` to `950`. It does not change CSS colors.

::component-example{name="blobs/colors"}
::

### Blur

The blobs are blurred by default, `blur="60"` in px. Lower it for a light blur, or use `:blur="0"` for sharp, solid shapes.

::component-example{name="blobs/blur"}
::

### Form, gradient and size

`form="circle"` makes round blobs instead of irregular ones. `gradient` fills each blob with a soft gradient. `opacity` is from `0` to `1`, and `minSize` and `maxSize` are the width of a blob as a percentage of the width of the box.

::component-example{name="blobs/look"}
::

### Blend

`blend` is the CSS `mix-blend-mode` of the blobs: `normal`, `multiply`, `screen`, `overlay`, `soft-light`, `lighten`, `color-dodge` or `plus-lighter`. It shows where blobs overlap each other and what is behind them.

::component-example{name="blobs/blend"}
::

### Seed and motion

Change `seed` to get a new layout. `animate` turns the slow drift on or off, and `duration` is the seconds of one drift, so a bigger number is slower.

::component-example{name="blobs/seed-motion"}
::

## Props

Native attributes such as `class` and `style` go to the root element.

| Prop       | Type                                                                                       | Default                    | Description                                                               |
| ---------- | ------------------------------------------------------------------------------------------ | -------------------------- | ------------------------------------------------------------------------- |
| `as`       | `string` `Component`                                                                       | `div`                      | The element or component to render.                                       |
| `count`    | `number`                                                                                   | `5`                        | The number of blobs, from `0` to `60`.                                    |
| `colors`   | `string[]`                                                                                 | `['primary', 'secondary']` | The colors the blobs cycle through: a theme color name or any CSS color.  |
| `shade`    | `number`                                                                                   | `500`                      | The shade of a color name, from `50` to `950`. The nearest shade is used. |
| `minSize`  | `number`                                                                                   | `30`                       | The smallest blob, as a percentage of the width.                          |
| `maxSize`  | `number`                                                                                   | `60`                       | The biggest blob, as a percentage of the width.                           |
| `blur`     | `number`                                                                                   | `60`                       | The blur in px.                                                           |
| `opacity`  | `number`                                                                                   | `0.6`                      | From `0` to `1`.                                                          |
| `blend`    | `normal` `multiply` `screen` `overlay` `soft-light` `lighten` `color-dodge` `plus-lighter` | `normal`                   | How the blobs mix with what is behind them (`mix-blend-mode`).            |
| `form`     | `organic` `circle`                                                                         | `organic`                  | Irregular blobs, or circles.                                              |
| `gradient` | `boolean`                                                                                  | `false`                    | Fills each blob with a soft gradient instead of a flat color.             |
| `seed`     | `number`                                                                                   | `1`                        | The same seed gives the same layout. Change it to get a new one.          |
| `animate`  | `boolean`                                                                                  | `true`                     | Lets the blobs drift slowly.                                              |
| `duration` | `number`                                                                                   | `24`                       | The seconds of one drift. A bigger number is slower.                      |

The lists of values are exported as `BLOB_BLENDS` and `BLOB_FORMS`.

## Slots

| Slot      | Props | Description                                                                                               |
| --------- | ----- | --------------------------------------------------------------------------------------------------------- |
| `default` | -     | Content shown above the blobs. Without it the component is only a background and ignores pointer events.  |

## Theming

The component sets its CSS variables from the props, as inline styles, so use the props to change them. The variables are there for CSS inside the component to read. The classes are for your own selectors: `.n-blobs` (the root), `.n-blobs-layer` (the background layer), `.n-blob` (one blob) and `.n-blobs-content` (the slot content).

```css
.my-hero .n-blobs-layer {
  opacity: 0.8;
}
```

| Variable            | Description                                                      |
| ------------------- | ---------------------------------------------------------------- |
| `--n-blobs-blur`    | The blur of the blobs. Set from `blur` in px, default `60px`.    |
| `--n-blobs-opacity` | The opacity of the blobs. Set from `opacity`, default `0.6`.     |
| `--n-blobs-blend`   | The blend mode of the blobs. Set from `blend`, default `normal`. |
| `--n-blob-color`    | The color of one blob. Set from `colors` and `shade`.            |

## Accessibility

The background is decorative. The layer that holds the blobs has `aria-hidden="true"`, so screen readers and the keyboard skip it. The content in the default slot is not hidden. Don't put information in the background only, and check the contrast of your text against the colors behind it. The animation is disabled with `prefers-reduced-motion`.
