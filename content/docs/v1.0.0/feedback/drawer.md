---
title: NDrawer
description: A panel that slides in from an edge of the screen.
---

# NDrawer

A side sheet: an [NDialog](/docs/feedback/dialog) that slides in from an edge, for mobile navigation, filters and forms. It takes the same props, slots and `v-model:open`.

::component-example{name="drawer/placement" height="240px"}
::

## Placement

`placement` is `end` by default. `start` and `end` follow the text direction, so they flip in right-to-left layouts. `top` and `bottom` panels span the viewport, and `size` sets the width of the side ones.

## API

`NDrawer` accepts every prop and slot of `NDialog`, except `placement`.

| Prop        | Type                           | Default | Description                      |
| ----------- | ------------------------------ | ------- | -------------------------------- |
| `placement` | `start` `end` `top` `bottom`   | `end`   | The edge the drawer slides from. |
