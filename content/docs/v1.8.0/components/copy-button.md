---
title: NCopyButton
description: A button that copies a text to the clipboard and shows a check.
---

# NCopyButton

A button that copies `text` to the clipboard. The icon turns into a check for `duration` milliseconds. It is built on [NButton](/docs/components/button), so the other props of `NButton` work too.

::component-example{name="copy-button/basic"}
::

## Label

Without a `label` the button shows only an icon. With one, the text shows next to the icon, and `copiedLabel` replaces it while copied. It is `Copied` by default.

::component-example{name="copy-button/label"}
::

## Appearance

`variant` is `ghost` by default. `color`, `size`, `shape`, `block` and `disabled` go to `NButton`.

::component-example{name="copy-button/appearance"}
::

## Icons and duration

`icon` is the icon before copying (`i-lucide-copy` by default) and `copiedIcon` the one after (`i-lucide-check`). Each accepts an Iconify class, any other class, or a Vue component. `duration` is how long the check stays, in milliseconds. It is `2000` by default.

::component-example{name="copy-button/icons-duration"}
::

## Code and API keys

Put the button next to the text, for example in a code block or a field that shows a key.

::component-example{name="copy-button/api-key"}
::

## Events

`copy` is emitted with the text once it is on the clipboard. `error` is emitted with the error when the browser refuses to copy, and the check is not shown.

::component-example{name="copy-button/events"}
::

## Clipboard support

The button uses `navigator.clipboard`, which browsers only offer on secure pages (`https` or `localhost`). When it is missing, the button falls back to selecting the text in a hidden field and calling `document.execCommand('copy')`.

To copy from your own code, call `copy()` on a template ref.

```vue
<script setup lang="ts">
const copyButton = useTemplateRef('copyButton');
</script>

<template>
  <NCopyButton ref="copyButton" text="Hello" />
  <NButton label="Copy it" @click="copyButton?.copy()" />
</template>
```

## Accessibility

It renders a real `<button>`. An icon-only button has `aria-label` and `title` set to `ariaLabel` (`Copy`), which change to `copiedLabel` while copied. With a `label` the text is the name instead. The change is not announced by a live region.

## API

Other props, such as `color`, `size`, `shape`, `block` and `disabled`, and attributes go to [NButton](/docs/components/button). `as`, `type`, `trailingIcon`, `loading` and `loadingIcon` are not available. While copied the root has a `data-copied` attribute.

### Props

| Prop          | Type                                             | Default         | Description                                                    |
| ------------- | ------------------------------------------------ | --------------- | -------------------------------------------------------------- |
| `text`        | `string`                                         | required        | The text put on the clipboard.                                 |
| `label`       | `string`                                         | `-`             | Shown next to the icon. Without it the button is icon-only.    |
| `copiedLabel` | `string`                                         | `Copied`        | The label while copied, and the name of an icon-only button.   |
| `ariaLabel`   | `string`                                         | `Copy`          | The accessible name of an icon-only button.                    |
| `variant`     | `solid` `outline` `soft` `subtle` `ghost` `link` | `ghost`         | The visual style.                                              |
| `icon`        | `string` `Component`                             | `i-lucide-copy` | The icon before copying.                                       |
| `copiedIcon`  | `string` `Component`                             | `i-lucide-check` | The icon for `duration` milliseconds after copying.           |
| `duration`    | `number`                                         | `2000`          | How long the check stays, in milliseconds.                     |

### Events

| Event   | Payload   | Description                                  |
| ------- | --------- | -------------------------------------------- |
| `copy`  | `string`  | The text was copied. The payload is the text. |
| `error` | `unknown` | The browser refused to copy.                 |

### Exposed

| Name     | Description                          |
| -------- | ------------------------------------ |
| `copy()` | Copies `text`, as a click does.      |
