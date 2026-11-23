---
title: NShapes
description: An automatic decorative background of small floating shapes.
---

# NShapes

`NShapes` draws a decorative background of small floating shapes. The layout is generated from a `seed`, so you get the same result every time, also on the server. It uses the colors of your theme. For soft blurred color, see [NBlobs](/docs/backgrounds/blobs).

## Placing it

`NShapes` renders a `div` with `position: relative`, `overflow: hidden` and its own stacking context. The background is a layer inside it that fills the whole box, sits behind the content and does not catch clicks. There are two ways to use it.

- **With content.** Put your content in the default slot. The component is the container and the content is above the background.
- **Alone.** Without a slot, the component has no size of its own. Put it in a `relative` parent and give it `class="absolute inset-0"`. Then put your content after it in the parent, with `relative`, so it is painted above. A component without a slot ignores pointer events.

```vue
<div class="relative overflow-hidden">
  <NShapes class="absolute inset-0" />
  <div class="relative">Content</div>
</div>
```

## Usage

Small shapes, outlined or filled, spread over the box. There are 22 shapes in `SHAPE_KINDS`, and `shapes` picks which ones to use. The default is all of them.

::component-example{name="shapes/basic"}
::

### Alone as a background

Without a slot, place it behind your content as described in [Placing it](#placing-it).

::component-example{name="shapes/background"}
::

### Kinds

`shapes` is an array of kinds from `SHAPE_KINDS`:

- Solid shapes: `circle`, `ring`, `square`, `squircle`, `triangle`, `diamond`, `pentagon`, `hexagon`, `octagon`, `star`, `sparkle`, `plus`, `semicircle`, `quarter` and `crescent`.
- Lines: `cross`, `asterisk`, `arc`, `wave`, `zigzag` and `bars`. They are always drawn as strokes.
- Dots: `dots` is always filled.

Unknown kinds are ignored. Nothing is drawn when no valid kind is left.

::component-example{name="shapes/kinds"}
::

### Variants

`variant="outline"` draws the solid shapes as outlines, `fill` fills them, and `mixed` picks one for each shape. `strokeWidth` is the thickness of the outline in px. `opacity` is from `0` to `1`. `colors` takes names of theme colors or any CSS color, and `shade` is the shade of a color name, from `50` to `950`.

::component-example{name="shapes/variants"}
::

### Animation

`animation` is `float`, `spin`, `pulse` or `none`. `duration` is the seconds of one cycle. `rotate` turns each shape to a random angle. `blur` blurs the shapes in px, for a depth-of-field look.

::component-example{name="shapes/animation"}
::

### Layout, count and seed

`layout="even"` spreads the shapes over the box, and `random` scatters them freely, so some can clump. `count` is the number of shapes, from `0` to `200`. `minSize` and `maxSize` are the size of a shape in px. Change `seed` to get a new layout.

::component-example{name="shapes/layout-seed"}
::

## Props

Native attributes such as `class` and `style` go to the root element.

| Prop          | Type                          | Default                    | Description                                                               |
| ------------- | ----------------------------- | -------------------------- | ------------------------------------------------------------------------- |
| `as`          | `string` `Component`          | `div`                      | The element or component to render.                                       |
| `shapes`      | `ShapeKind[]`                 | all of `SHAPE_KINDS`       | The shapes to pick from.                                                  |
| `count`       | `number`                      | `14`                       | The number of shapes, from `0` to `200`.                                  |
| `colors`      | `string[]`                    | `['primary', 'secondary']` | The colors the shapes cycle through: a theme color name or any CSS color. |
| `shade`       | `number`                      | `500`                      | The shade of a color name, from `50` to `950`. The nearest shade is used. |
| `minSize`     | `number`                      | `24`                       | The smallest shape, in px.                                                |
| `maxSize`     | `number`                      | `72`                       | The biggest shape, in px.                                                 |
| `variant`     | `fill` `outline` `mixed`      | `outline`                  | Filled or outlined solid shapes. `mixed` picks one for each shape.        |
| `strokeWidth` | `number`                      | `2`                        | The thickness of the outline in px.                                       |
| `opacity`     | `number`                      | `0.5`                      | From `0` to `1`. Each shape is a bit more transparent by a random amount. |
| `blur`        | `number`                      | `0`                        | The blur in px.                                                           |
| `rotate`      | `boolean`                     | `true`                     | Turns each shape to a random angle.                                       |
| `layout`      | `even` `random`               | `even`                     | Spreads the shapes over the box, or scatters them freely.                 |
| `seed`        | `number`                      | `1`                        | The same seed gives the same layout.                                      |
| `animation`   | `float` `spin` `pulse` `none` | `float`                    | How the shapes move.                                                      |
| `duration`    | `number`                      | `14`                       | The seconds of one cycle. A bigger number is slower.                      |

`ShapeKind` is one of the values of `SHAPE_KINDS`. The other lists are exported as `SHAPE_VARIANTS`, `SHAPE_ANIMATIONS` and `SHAPE_LAYOUTS`.

## Slots

| Slot      | Props | Description                                                                                               |
| --------- | ----- | --------------------------------------------------------------------------------------------------------- |
| `default` | -     | Content shown above the shapes. Without it the component is only a background and ignores pointer events. |

## Theming

The component sets its CSS variables from the props, as inline styles, so use the props to change them. The variables are there for CSS inside the component to read. The classes are for your own selectors: `.n-shapes` (the root), `.n-shapes-layer` (the background layer), `.n-shape` (one shape) and `.n-shapes-content` (the slot content).

| Variable            | Description                                                         |
| ------------------- | ------------------------------------------------------------------- |
| `--n-shapes-stroke` | The outline thickness. Set from `strokeWidth` in px, default `2px`. |
| `--n-shapes-blur`   | The blur of the shapes. Set from `blur` in px, default `0px`.       |
| `--n-shape-color`   | The color of one shape. Set from `colors` and `shade`.              |

## Accessibility

The background is decorative. The layer that holds the shapes has `aria-hidden="true"`, and each shape is an SVG with `focusable="false"`, so screen readers and the keyboard skip them. The content in the default slot is not hidden. Don't put information in the background only, and check the contrast of your text against the colors behind it. The animations are disabled with `prefers-reduced-motion`.
