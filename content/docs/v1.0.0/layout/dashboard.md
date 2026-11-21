---
title: NDashboard and NSidebar
description: The app layout: header, collapsible sidebar and scrolling content.
---

# NDashboard and NSidebar

`NDashboard` is the page layout of an app: a header on top and a sidebar beside the main content, which scrolls on its own. From the `breakpoint` up the sidebar is always visible. Below it, the sidebar is a drawer opened by a button that the `NHeader` inside the dashboard shows by itself.

::component-example{name="dashboard/basic" height="480px"}
::

## Sizing

By default `NDashboard` fills the viewport: it is `100dvh` tall, and only the main content scrolls. To fit it into another box, give it a height of your own, such as `h-full` inside a parent with a fixed height. The examples on this page do that.

## Mobile drawer

Below the `breakpoint` the sidebar slides in over the content. It closes on `Esc`, a backdrop click, a link click, or when the viewport grows past the breakpoint. Bind the state with `v-model:open`. Resize the window to see it.

- Use `:container="false"` on the `NHeader` so that it spans the full width.
- On phones the sidebar button sits at the end of the header, so the logo stays in place, and the header's buttons stay in the bar instead of its menu.
- Name the sidebar button with `sidebarLabel` on the header (default `"Sidebar"`).
- A header with nothing for its menu (no `items`, `nav` or `mobile` slot) has no hamburger button at all.

## Right to left

With `dir="rtl"` on the dashboard or on `html` the sidebar moves to the right, the drawer slides in from the right, and the arrows flip.

## Collapsible sidebar

`collapsible` adds a round button on the edge of the sidebar that collapses it to a rail of icons. Collapsed, links show only their icon (or their first letter) with the label as a tooltip, and group headings become dividers. Inside an `NDashboard` the button only shows from the `breakpoint` up. Bind the state with `v-model:collapsed`.

::component-example{name="dashboard/collapsible" height="480px"}
::

## Sidebar slots

The `header`, default and `footer` slots all get `{ collapsed }` so that you can adapt to the rail. The default slot replaces `items` and `groups`, and the footer is pinned to the bottom.

::component-example{name="dashboard/sidebar-slots" height="480px"}
::

## Standalone sidebar

`NSidebar` also works on its own, outside a dashboard. It fills the height of its parent.

::component-example{name="dashboard/sidebar-standalone"}
::

## API

### NDashboard props

| Prop           | Type                | Default | Description                                                   |
| -------------- | ------------------- | ------- | ------------------------------------------------------------- |
| `breakpoint`   | `sm` `md` `lg` `xl` | `lg`    | The width from which the sidebar is always visible.           |
| `v-model:open` | `boolean`           | `false` | The state of the mobile sidebar drawer.                       |

### NDashboard slots

| Slot      | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| `header`  | The top bar, usually an `NHeader`, which gets the sidebar button.     |
| `sidebar` | The sidebar, usually an `NSidebar`.                                   |
| `default` | The main content.                                                     |

### NSidebar props

| Prop                | Type                 | Default              | Description                                                                          |
| ------------------- | -------------------- | -------------------- | ------------------------------------------------------------------------------------ |
| `items`             | `HeaderItem[]`       | `[]`                 | The links shown first, without a heading.                                            |
| `groups`            | `SidebarGroup[]`     | `[]`                 | The links under headings.                                                            |
| `border`            | `boolean`            | `true`               | Shows the end border.                                                                |
| `collapsible`       | `boolean`            | `false`              | Shows a button that collapses the sidebar to a rail of icons.                        |
| `v-model:collapsed` | `boolean`            | `false`              | The collapsed state, used with `collapsible`.                                        |
| `linkAs`            | `string` `Component` | `a`                  | The element or component of the links, such as `NoofpiLink`, which gets `to` and not `href`. |
| `label`             | `string`             | `"Sidebar"`          | The accessible name of the navigation.                                               |
| `collapseLabel`     | `string`             | `"Collapse sidebar"` | The accessible name of the collapse button.                                          |
| `expandLabel`       | `string`             | `"Expand sidebar"`   | The accessible name of the expand button.                                            |

### NSidebar slots

| Slot      | Description                                                                         |
| --------- | ----------------------------------------------------------------------------------- |
| `header`  | Above the links, such as a team switcher. Gets `{ collapsed }`.                     |
| `default` | Replaces `items` and `groups`. Gets `{ collapsed }`.                                |
| `footer`  | Below the links, pinned to the bottom, such as the user. Gets `{ collapsed }`.      |

### HeaderItem

| Field      | Type                 | Description                                                         |
| ---------- | -------------------- | ------------------------------------------------------------------- |
| `label`    | `string`             | The text of the link.                                               |
| `to`       | `string`             | The `href` of the link, or the `to` of `linkAs`.                    |
| `icon`     | `string` `Component` | The icon before the label.                                          |
| `active`   | `boolean`            | Marks the current page with `aria-current="page"`.                  |
| `disabled` | `boolean`            | Dims the link and ignores pointer events.                           |
| `target`   | `string`             | The link `target`; `_blank` also adds `rel="noopener noreferrer"`.  |

### SidebarGroup

| Field   | Type           | Description                    |
| ------- | -------------- | ------------------------------ |
| `label` | `string`       | The heading of the group.      |
| `items` | `HeaderItem[]` | The links under the heading.   |

## Theming

```css
:root {
  --n-sidebar-w: 18rem;
}
```

| Variable                  | Description                                                            |
| ------------------------- | ---------------------------------------------------------------------- |
| `--n-dashboard-p`         | Padding of the main content. Default `1.5rem`.                         |
| `--n-dashboard-bg`        | Background. Default `--ui-neutral-50`, `--ui-neutral-900` in dark mode. |
| `--n-dashboard-backdrop`  | Color of the drawer backdrop. Default `rgb(0 0 0 / 0.4)`.              |
| `--n-sidebar-w`           | Width of the sidebar. Default `16rem`.                                 |
| `--n-sidebar-collapsed-w` | Width of the collapsed rail. Default `4rem`.                           |
| `--n-sidebar-bg`          | Sidebar background. Default `#fff`, `--ui-neutral-950` in dark mode.   |
| `--n-sidebar-border`      | Sidebar border color. Default `--ui-neutral-200`, `--ui-neutral-800` in dark mode. |
