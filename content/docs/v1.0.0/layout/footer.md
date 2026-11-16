---
title: NFooter
description: A footer with a brand block, link columns and a copyright bar.
---

# NFooter

A footer with a brand block (logo, description, icon buttons), columns of links, and a bottom bar with the copyright.

::component-example{name="footer/basic"}
::

## Responsive layout

The layout follows the footer's own width, not the viewport's, so it works anywhere you place it. From `28rem` the brand sits at the start edge and the columns end at the end edge, with the same padding on both sides. Narrower, everything is centered in one column: the brand first, then the columns, then the copyright. The footer below is limited to `max-w-sm`.

::component-example{name="footer/narrow"}
::

## Alignment

`brandAlign` moves the brand to the other side of the columns, and `copyrightAlign` aligns the copyright. Both apply from `28rem` of footer width.

::component-example{name="footer/alignment"}
::

## Optional sections

Every section is optional and is only rendered when it has content. Without a `copyright` the bottom bar is omitted, and `border` removes the top line.

::component-example{name="footer/sections"}
::

## Slots

`brand`, `columns` and `bottom` replace the matching section with your own markup.

::component-example{name="footer/slots"}
::

## Accessibility

Each column is a `nav` named after its `title`. Add an `aria-label` to icon-only entries in `buttons`.

## API

### Props

| Prop             | Type                    | Default  | Description                                                                      |
| ---------------- | ----------------------- | -------- | -------------------------------------------------------------------------------- |
| `title`          | `string`                | `-`      | The brand text next to the logo.                                                 |
| `logo`           | `string` `Component`    | `-`      | The logo icon: an Iconify class, another class, or a component.                  |
| `to`             | `string`                | `"/"`    | Where the logo links to.                                                         |
| `description`    | `string`                | `-`      | A short text under the brand.                                                    |
| `columns`        | `FooterColumn[]`        | `[]`     | The columns of links.                                                            |
| `buttons`        | `FooterButton[]`        | `[]`     | Ghost icon buttons under the brand, such as social links.                        |
| `copyright`      | `string`                | `-`      | The text of the bottom bar; without it the bar is omitted.                       |
| `brandAlign`     | `left` `right`          | `left`   | The side of the columns the brand sits on, from `28rem` of footer width.         |
| `copyrightAlign` | `left` `center` `right` | `left`   | The alignment of the copyright from `28rem`; it is always centered below that.   |
| `border`         | `boolean`               | `true`   | Shows the top border.                                                            |
| `container`      | `boolean`               | `true`   | Keeps the content within `--n-footer-max-w` and centered.                        |
| `linkAs`         | `string` `Component`    | `a`      | The element or component of the links, such as `NuxtLink`, which gets `to` and not `href`. |

### Slots

| Slot      | Description                                                    |
| --------- | -------------------------------------------------------------- |
| `brand`   | Replaces the whole brand block: logo, description and buttons. |
| `columns` | Replaces the `columns`.                                        |
| `bottom`  | Replaces the `copyright` text.                                 |

### FooterColumn

| Field   | Type           | Description                                           |
| ------- | -------------- | ----------------------------------------------------- |
| `title` | `string`       | The heading of the column, also its accessible name.  |
| `items` | `HeaderItem[]` | The links of the column.                              |

### HeaderItem

| Field      | Type                 | Description                                                         |
| ---------- | -------------------- | ------------------------------------------------------------------- |
| `label`    | `string`             | The text of the link.                                               |
| `to`       | `string`             | The `href` of the link, or the `to` of `linkAs`.                    |
| `icon`     | `string` `Component` | The icon before the label.                                          |
| `active`   | `boolean`            | Marks the current page with `aria-current="page"`.                  |
| `disabled` | `boolean`            | Dims the link and ignores pointer events.                           |
| `target`   | `string`             | The link `target`; `_blank` also adds `rel="noopener noreferrer"`.  |

### FooterButton

Any [NButton](/docs/components/button) prop, plus `to` (renders the button as `linkAs`) and `onClick`. Footer buttons are `ghost` and `neutral` by default.

## Theming

```css
:root {
  --n-footer-py: 4rem;
}
```

| Variable            | Description                                                                          |
| ------------------- | ------------------------------------------------------------------------------------ |
| `--n-footer-max-w`  | Maximum content width with `container`. Default `80rem`.                             |
| `--n-footer-px`     | Distance of the brand from the start edge and of the columns from the end edge. Default `1.5rem`. |
| `--n-footer-py`     | Vertical padding of the main area. Default `3rem`.                                   |
| `--n-footer-bg`     | Background. Default `#fff`, `--ui-neutral-950` in dark mode.                         |
| `--n-footer-border` | Border color. Default `--ui-neutral-200`, `--ui-neutral-800` in dark mode.           |
