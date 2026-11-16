---
title: NUser
description: An avatar with a name and a description under it.
---

# NUser

An avatar with a name and a description under it.

::component-example{name="user/basic"}
::

## Sizes

`size` sizes the avatar and the text together.

::component-example{name="user/sizes"}
::

## Content

Every part is optional. Without `avatar` no avatar is rendered, and the text block is omitted when there is no name or description.

::component-example{name="user/content"}
::

## Avatar

`avatar` takes the props of [NAvatar](/docs/components/avatar), such as `src`, `text`, `icon`, `shape`, `color` and `bordered`. Its `alt` defaults to `name`, so the initials of the name are the fallback, and its `size` defaults to the size of the user.

::component-example{name="user/avatar"}
::

## Slots usage

Use `avatar`, `name` and `description` to render custom content.

::component-example{name="user/slots"}
::

## Truncation

Long names and descriptions are truncated with an ellipsis when the container is too narrow.

::component-example{name="user/truncate"}
::

## API

### Props

| Prop          | Type                                 | Default | Description                                                     |
| ------------- | ------------------------------------ | ------- | --------------------------------------------------------------- |
| `name`        | `string`                             | `-`     | The main text.                                                  |
| `description` | `string`                             | `-`     | The text under the name, such as an email or a date.            |
| `avatar`      | `AvatarProps`                        | `-`     | The props of the avatar. Without it no avatar is rendered.      |
| `size`        | `xxs` `xs` `sm` `md` `lg` `xl` `xxl` | `md`    | The size of the avatar and the text.                            |
| `as`          | `string` `Component`                 | `div`   | The element or component to render.                             |

### Slots

| Slot          | Description                                 |
| ------------- | ------------------------------------------- |
| `avatar`      | Replaces the avatar.                        |
| `name`        | Replaces the name.                          |
| `description` | Replaces the description.                   |
