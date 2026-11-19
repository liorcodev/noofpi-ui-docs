---
title: NHeader
description: A responsive header with logo, navigation and buttons.
---

# NHeader

A header with a logo, navigation links and buttons on the right. Below the `breakpoint` the navigation and buttons move into a menu opened by a hamburger button.

::component-example{name="header/basic"}
::

## Navigation alignment

`navAlign` places the navigation next to the logo (`left`), centered between the logo and the buttons (`center`), or next to the buttons (`right`).

::component-example{name="header/nav-align"}
::

## Active links

Each item takes an `icon`, can be `disabled`, and opens in a new tab with `target`. With plain `a` links the item that matches the current URL is marked active by itself and follows `hashchange` and `popstate`. Only one item is active: a matching URL wins over `active`, so a stale `active: true` doesn't stay highlighted next to the real page. `active` is the fallback when no item matches, and `active: false` keeps an item from being marked. A router component passed to `linkAs` marks its own links.

::component-example{name="header/active"}
::

## Shadow and border

`shadow` adds elevation and `border` toggles the bottom line. `true` is the same as `md`.

::component-example{name="header/shadow"}
::

## Sticky with scroll shadow

`sticky` keeps the header at the top of the viewport. `shadow="scroll"` shows a `md` shadow only once the page, or the scrolling container around the header, is scrolled. Scroll the box below.

::component-example{name="header/sticky-scroll"}
::

## Mobile menu

Below the `breakpoint` a menu button replaces the navigation and the buttons, which move into a panel. The panel closes on `Esc`, an outside click, a link click, or when the viewport grows past the breakpoint. Bind the state with `v-model:open`. A header with nothing for the menu has no menu button. Narrow the window to see it.

::component-example{name="header/mobile-menu"}
::

## Slots

Replace the logo, the navigation or the right side with your own markup. The `nav` and `right` slots are used both in the bar and in the mobile menu, and `mobile` replaces the whole mobile menu.

::component-example{name="header/slots"}
::

## Accessibility

The navigation is a `nav` named by `navLabel`, and the menu button is named by `menuLabel` and exposes `aria-expanded` and `aria-controls`. The active link gets `aria-current="page"`. An icon-only button in `buttons` needs an `aria-label`.

## API

### Props

| Prop           | Type                                                   | Default   | Description                                                                              |
| -------------- | ------------------------------------------------------ | --------- | ---------------------------------------------------------------------------------------- |
| `title`        | `string`                                               | `-`       | The brand text next to the logo.                                                         |
| `logo`         | `string` `Component`                                   | `-`       | The logo icon: an Iconify class, another class, or a component.                          |
| `to`           | `string`                                               | `"/"`     | Where the logo links to.                                                                 |
| `items`        | `HeaderItem[]`                                         | `[]`      | The navigation links.                                                                    |
| `buttons`      | `HeaderButton[]`                                       | `[]`      | The buttons on the right, also shown at the end of the mobile menu.                      |
| `shadow`       | `boolean` `none` `sm` `md` `lg` `xl` `scroll`          | `false`   | The shadow below the header; `true` is `md` and `scroll` is `md` once scrolled.          |
| `sticky`       | `boolean`                                              | `false`   | Sticks the header to the top of the viewport.                                            |
| `border`       | `boolean`                                              | `true`    | Shows the bottom border.                                                                 |
| `container`    | `boolean`                                              | `true`    | Keeps the content within `--n-header-max-w` and centered.                                |
| `breakpoint`   | `sm` `md` `lg` `xl`                                    | `md`      | The width from which the navigation replaces the menu button.                            |
| `navAlign`     | `left` `center` `right`                                | `left`    | Where the navigation sits in the bar.                                                    |
| `linkAs`       | `string` `Component`                                   | `a`       | The element or component of the links, such as `NuxtLink`, which gets `to` and not `href`. |
| `navLabel`     | `string`                                               | `"Main"`  | The accessible name of the navigation.                                                   |
| `menuLabel`    | `string`                                               | `"Menu"`  | The accessible name of the menu button.                                                  |
| `sidebarLabel` | `string`                                               | `"Sidebar"` | The accessible name of the sidebar button shown inside an `NDashboard`.                |
| `v-model:open` | `boolean`                                              | `false`   | The state of the mobile menu.                                                            |

### Slots

| Slot     | Description                                                                |
| -------- | -------------------------------------------------------------------------- |
| `logo`   | Replaces the logo and the title.                                           |
| `nav`    | Replaces the `items` links, in the bar and in the mobile menu.             |
| `right`  | Replaces the `buttons`, in the bar and in the mobile menu.                 |
| `mobile` | Replaces everything in the mobile menu.                                    |

### HeaderItem

| Field      | Type                 | Description                                                         |
| ---------- | -------------------- | ------------------------------------------------------------------- |
| `label`    | `string`             | The text of the link.                                               |
| `to`       | `string`             | The `href` of the link, or the `to` of `linkAs`.                    |
| `icon`     | `string` `Component` | The icon before the label.                                          |
| `active`   | `boolean`            | Fallback marker for the current page (`aria-current="page"`). A link matching the URL takes priority; `false` opts out. |
| `disabled` | `boolean`            | Dims the link and ignores pointer events.                           |
| `target`   | `string`             | The link `target`; `_blank` also adds `rel="noopener noreferrer"`.  |

### HeaderButton

Any [NButton](/docs/components/button) prop, plus:

| Field        | Type                      | Description                                                    |
| ------------ | ------------------------- | -------------------------------------------------------------- |
| `to`         | `string`                  | Renders the button as `linkAs` pointing here.                  |
| `aria-label` | `string`                  | Required for an icon-only button.                              |
| `onClick`    | `(event: MouseEvent) => void` | Called when the button is clicked.                         |

## Theming

```css
:root {
  --n-header-h: 5rem;
}
```

| Variable                          | Description                                                  |
| --------------------------------- | ------------------------------------------------------------ |
| `--n-header-h`                    | Height of the bar. Default `4rem`.                           |
| `--n-header-max-w`                | Maximum content width with `container`. Default `80rem`.     |
| `--n-header-px`                   | Horizontal padding. Default `1rem`.                          |
| `--n-header-bg`                   | Background. Default `#fff`, `--ui-neutral-950` in dark mode. |
| `--n-header-border`               | Border color. Default `--ui-neutral-200`, `--ui-neutral-800` in dark mode. |
| `--n-header-shadow-{sm,md,lg,xl}` | The box shadows of each `shadow` size.                       |
