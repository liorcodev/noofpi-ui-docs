---
title: NBreadcrumb
description: A trail of links that shows where the page sits in the site.
---

# NBreadcrumb

Pass `items`. Each has a `label` and, for a link, a `to`. The last item is the current page and renders as text with `aria-current="page"`.

::component-example{name="breadcrumb/basic"}
::

## Icons and separator

`icon` on an item adds a leading icon. `separatorIcon` changes the icon between items, and the `separator` slot replaces it.

::component-example{name="breadcrumb/icons"}
::

## Collapsing

`maxItems` collapses the middle items into `…` when there are more of them. The first item and the last `maxItems - 1` stay.

::component-example{name="breadcrumb/collapsed"}
::

## Sizes

::component-example{name="breadcrumb/sizes"}
::

## Router links

Links are plain `a` elements. Set `linkAs` to `RouterLink` or `NuxtLink`, and `to` is passed on to it.

```vue
<NBreadcrumb :items="items" :link-as="NuxtLink" />
```

## Accessibility

It is a `nav` landmark labelled by `label`, with an ordered list inside. The current page has `aria-current="page"`. The separators are hidden from assistive technology, and the arrows flip in right-to-left layouts.

## API

### Props

| Prop            | Type                            | Default                   | Description                                                     |
| --------------- | ------------------------------- | ------------------------- | --------------------------------------------------------------- |
| `items`         | `BreadcrumbItem[]`              | `[]`                      | The trail. See below.                                           |
| `linkAs`        | `string` `Component`            | `a`                       | The component used for links, such as `NuxtLink`.               |
| `separatorIcon` | `string`                        | `i-lucide-chevron-right`  | The icon between items.                                         |
| `maxItems`      | `number`                        | `0`                       | Collapses the middle items above this count. `0` never collapses. |
| `size`          | `sm` `md` `lg`                  | `md`                      | The text size.                                                  |
| `label`         | `string`                        | `Breadcrumb`              | The accessible name of the navigation.                          |

### Item

| Field    | Type     | Description                                         |
| -------- | -------- | --------------------------------------------------- |
| `label`  | `string` | The text.                                           |
| `to`     | `string` | The link target. Without it the item is plain text. |
| `target` | `string` | The link `target`, such as `_blank`.                |
| `icon`   | `string` | A leading icon.                                     |

### Slots

| Slot        | Description                    |
| ----------- | ------------------------------ |
| `separator` | Replaces the separator icon.   |

## Theming

Colors are CSS variables. Override them after the `noofpi-ui` import.

```css
:root {
  --n-breadcrumb-current: var(--ui-primary-600);
}
```

| Variable                   | Description                       |
| -------------------------- | --------------------------------- |
| `--n-breadcrumb-fg`        | Color of the links.               |
| `--n-breadcrumb-hover`     | Color of a hovered link.          |
| `--n-breadcrumb-current`   | Color of the current page.        |
| `--n-breadcrumb-separator` | Color of the separators.          |
