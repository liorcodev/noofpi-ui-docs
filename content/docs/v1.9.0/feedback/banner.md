---
title: NBanner
description: A full-width announcement bar that can link somewhere and be dismissed.
---

# NBanner

A full-width bar for site-wide announcements, like a sale, a release or a maintenance window. It
takes a `title` and a `description`, and shares the colors and variants of
[NAlert](/docs/feedback/alert). Unlike an alert, it has no icon unless you set one.

::component-example{name="banner/basic"}
::

## Colors and variants

`color` is `primary` by default. `variant` is `solid` by default. On a `solid` banner the buttons in
`actions` switch to a neutral button, so they stay readable on the colored background.

::component-example{name="banner/colors-variants"}
::

## Link

`href` turns the whole message into a link. `to` does the same and wins when both are set, which
reads better with a router link. `target="_blank"` also adds `rel="noopener noreferrer"`.

A linked message ends with an arrow. `linkIcon` takes `false` to hide it, or an icon to replace it.
`linkAs` sets the element or component of the link (`a` by default). A component gets the address as
`to`, so `linkAs` takes a router link.

::component-example{name="banner/link"}
::

## Actions and closing

`actions` renders buttons after the message. Each one takes any [NButton](/docs/components/button)
prop plus an `onClick` handler. `close` adds a dismiss button.

`v-model:open` is `true` by default. Dismissing sets it to `false`, hides the banner with a short
collapse, and emits `close`. Set it back to `true` to show the banner again.

::component-example{name="banner/actions-close"}
::

## Remember a dismissal

`persistKey` stores a dismissal in `localStorage` under `noofpi-ui:banner:<persistKey>`, so the
banner stays hidden after a reload. Use a different key for each announcement.

The banner is always open on the server and on the first client render. A stored dismissal hides it
right after mount, without the collapse animation. If storage is missing or blocked, the banner is
still dismissed for the current page view, it is just not remembered.

::component-example{name="banner/persist"}
::

## Size and alignment

`size` is `sm`, `md` or `lg`. It changes the padding and the text size. `align` is `center` by
default. `start` aligns the content to the start edge.

::component-example{name="banner/size-align"}
::

## Position

`position` is `static` by default, and the banner flows with the page. `sticky` sticks it to the
edge of its scroll container, and `fixed` sticks it to the viewport. `placement` picks the edge
(`top` or `bottom`) and the side of the divider line. It has no effect on a `static` banner, except
for the divider line.

A `fixed` banner does not take space in the page, so add space for it yourself. The stacking order
is `--n-banner-z`.

::component-example{name="banner/position"}
::

## Slots

`leading` replaces the icon. `title` and the default slot replace `title` and `description`.
`actions` replaces `actions`, and `trailing` adds content after the actions. The `close` slot
replaces the close button and gets a `dismiss` function. A banner with a `close` slot is closable
even without `close`.

::component-example{name="banner/slots"}
::

## Accessibility

The banner is a `region` landmark named by `label` (`Announcement` by default). Give each banner on
a page its own `label`. The close button is named by `closeLabel`, and the icons are hidden from
assistive technology. A linked message can be focused and shows a focus outline. The collapse and
the arrow movement are turned off with `prefers-reduced-motion`.

## API

### Props

| Prop          | Type                                                               | Default        | Description                                                             |
| ------------- | ------------------------------------------------------------------ | -------------- | ----------------------------------------------------------------------- |
| `open`        | `boolean`                                                          | `true`         | Whether the banner is shown. Use it with `v-model:open`.                |
| `title`       | `string`                                                           | `-`            | The main text. The `title` slot replaces it.                            |
| `description` | `string`                                                           | `-`            | The text after the title. The default slot replaces it.                 |
| `icon`        | `string` `Component`                                               | `-`            | The leading icon. There is none unless you set it.                      |
| `color`       | `primary` `secondary` `neutral` `success` `info` `warning` `error` | `primary`      | The accent color.                                                       |
| `variant`     | `solid` `soft` `subtle` `outline`                                  | `solid`        | The look of the banner.                                                 |
| `to`          | `string`                                                           | `-`            | Makes the message a link. Wins over `href`.                             |
| `href`        | `string`                                                           | `-`            | Makes the message a link.                                               |
| `target`      | `string`                                                           | `-`            | The link target. `_blank` also adds `rel="noopener noreferrer"`.        |
| `linkAs`      | `string` `Component`                                               | `a`            | The element or component of the link. A component gets `to`.            |
| `linkIcon`    | `boolean` `string` `Component`                                     | `true`         | The arrow after a linked message. `false` hides it, an icon replaces it. |
| `actions`     | `BannerAction[]`                                                   | `-`            | Buttons after the message: any `NButton` prop, plus `onClick`.          |
| `close`       | `boolean`                                                          | `false`        | Shows a dismiss button.                                                 |
| `closeIcon`   | `string` `Component`                                               | `i-lucide-x`   | Replaces the icon of the close button.                                  |
| `closeLabel`  | `string`                                                           | `Dismiss`      | The accessible name of the close button.                                |
| `label`       | `string`                                                           | `Announcement` | The accessible name of the banner region.                               |
| `persistKey`  | `string`                                                           | `-`            | Remembers a dismissal in `localStorage` under `noofpi-ui:banner:<key>`. |
| `position`    | `static` `sticky` `fixed`                                          | `static`       | How the banner is positioned.                                           |
| `placement`   | `top` `bottom`                                                     | `top`          | The edge `sticky` and `fixed` stick to, and the side of the divider.    |
| `align`       | `center` `start`                                                   | `center`       | The alignment of the content.                                           |
| `size`        | `sm` `md` `lg`                                                     | `md`           | The padding and the text size.                                          |

### Events

| Event         | Payload   | Description                                       |
| ------------- | --------- | ------------------------------------------------- |
| `close`       | `-`       | The banner was dismissed with its close button.   |
| `update:open` | `boolean` | `open` changed. It is `false` on a dismissal.     |

### Slots

| Slot       | Props                  | Description                                                      |
| ---------- | ---------------------- | ---------------------------------------------------------------- |
| `default`  | `-`                    | Replaces `description`.                                          |
| `title`    | `-`                    | Replaces `title`.                                                |
| `leading`  | `-`                    | Replaces the icon.                                               |
| `actions`  | `-`                    | Replaces `actions`.                                              |
| `trailing` | `-`                    | Content after the actions.                                       |
| `close`    | `{ dismiss: () => void }` | Replaces the close button. `dismiss` hides and remembers the banner. |

## Theming

The padding and the stacking order are CSS variables. Override them after the `noofpi-ui` import.

```css
:root {
  --n-banner-px: 1.5rem;
  --n-banner-z: 60;
}
```

| Variable         | Description                                                                |
| ---------------- | -------------------------------------------------------------------------- |
| `--n-banner-px`  | Horizontal padding. Defaults to `1rem`.                                    |
| `--n-banner-py`  | Vertical padding at the `md` size. Defaults to `0.625rem`.                 |
| `--n-banner-z`   | The `z-index` of a `sticky` or `fixed` banner. Defaults to `40`.           |
