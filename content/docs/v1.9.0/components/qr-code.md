---
title: NQRCode
description: Show a QR code for a text or a URL, with a logo and a download button.
---

# NQRCode

A QR code made as an inline SVG by a built-in encoder, with no dependency. It stays dark on a light
plate in both themes so that it scans. Pass the text or URL as `value`.

::component-example{name="qr-code/basic"}
::

## Size, colors and margin

`size` is a number of pixels or a CSS length, and the code scales to it (`160` by default). `margin`
is the quiet zone around the code in modules (`4` by default, which is what scanners need). `radius`
rounds the corners of the plate, in modules.

`color` sets the modules and `background` sets the plate. Keep a strong contrast with dark modules
on a light plate. A transparent or dark plate can break scanning.

::component-example{name="qr-code/appearance"}
::

## Logo

`logo` is an image URL shown in the center. The modules under it are cleared and the code is at
least version 4, so it is a bit denser. `logoSize` is the width of the cleared center as a share of
the code, from `0.1` to `0.3` (`0.22` by default).

The `logo` slot does the same with any content, such as an icon.

::component-example{name="qr-code/logo"}
::

## Error correction

`errorCorrection` is how much of a damaged or covered code can still be read. `L`, `M`, `Q` and `H`
recover about 7%, 15%, 25% and 30%. Higher levels make a denser code.

It is `M` by default, or `H` when there is a logo, as the logo covers the center.

::component-example{name="qr-code/error-correction"}
::

## Download

`downloadable` shows a button under the code. It saves the code as a file in `downloadFormat`, `png`
or `svg`, named `filename` plus the extension. `downloadLabel` is the text of the button. A
`filename` that already ends with the extension is not changed.

`download` is emitted with the format and the final file name. `error` is emitted if the export
fails, for example when a `logo` image can't be loaded for a PNG.

::component-example{name="qr-code/download"}
::

The files use the colors the code is shown in, so they don't depend on your CSS. A PNG is at least
512 pixels wide, as a whole number of pixels per module. The `logo` slot is not part of the files,
and a `logo` image is linked in an SVG, not embedded.

To save from your own code, call `download()` or `toDataURL()` on a template ref.

```vue
<script setup lang="ts">
const qrCode = useTemplateRef('qrCode');
</script>

<template>
  <NQRCode ref="qrCode" value="https://noofpi.dev" />
  <NButton label="Save" @click="qrCode?.download('svg', 'site')" />
</template>
```

## Fallback

When `value` is empty or too long for a QR code, no code is drawn. `error` is emitted with an
`Error` and the `fallback` slot is shown, with the error as a prop. The root gets a `data-error`
attribute.

::component-example{name="qr-code/fallback"}
::

## Accessibility

The code is a `role="img"` and the SVG inside is hidden from assistive technology. `label` is its
accessible name. Without it the name is `QR code: ` followed by the `value`, so pass a `label` for a
long or private `value`. The download button is a real button and is reached by `Tab`.

## API

Other attributes go to the root element.

### Props

| Prop              | Type              | Default    | Description                                                                           |
| ----------------- | ----------------- | ---------- | ------------------------------------------------------------------------------------- |
| `value`           | `string`          | required   | The text or URL to encode. When it is empty or too long the `fallback` slot is shown. |
| `size`            | `number` `string` | `160`      | Width and height: a number of pixels or a CSS length. The code scales to it.          |
| `errorCorrection` | `L` `M` `Q` `H`   | `M`        | How much of the code can be damaged. It is `H` when there is a logo.                  |
| `margin`          | `number`          | `4`        | The quiet zone around the code, in modules.                                           |
| `color`           | `string`          | `-`        | The color of the modules. Defaults to the `--n-qr-code-fg` variable.                  |
| `background`      | `string`          | `-`        | The color of the plate. Defaults to the `--n-qr-code-bg` variable.                    |
| `logo`            | `string`          | `-`        | An image URL shown in the center. The modules under it are cleared.                   |
| `logoSize`        | `number`          | `0.22`     | The width of the cleared center as a share of the code, from `0.1` to `0.3`.          |
| `radius`          | `number`          | `0`        | The corner radius of the plate, in modules.                                           |
| `label`           | `string`          | `-`        | The accessible name. Defaults to `QR code: <value>`.                                  |
| `downloadable`    | `boolean`         | `false`    | Shows a button under the code that downloads it.                                      |
| `downloadLabel`   | `string`          | `Download` | The text of the download button.                                                      |
| `downloadFormat`  | `svg` `png`       | `png`      | The format of the download button.                                                    |
| `filename`        | `string`          | `qr-code`  | The name of the downloaded file, without the extension.                               |

### Events

| Event      | Payload                                      | Description                                                                     |
| ---------- | -------------------------------------------- | ------------------------------------------------------------------------------- |
| `error`    | `Error`                                      | The code could not be made (`value` is empty or too long), or an export failed. |
| `download` | `format: 'svg' \| 'png'`, `filename: string` | A file was handed to the browser. `filename` includes the extension.            |

### Slots

| Slot       | Props                           | Description                                                            |
| ---------- | ------------------------------- | ---------------------------------------------------------------------- |
| `logo`     | `-`                             | The content in the center of the code. It clears the modules under it. |
| `fallback` | `{ error: Error \| undefined }` | Shown instead of the code when the `value` can't be encoded.           |

### Exposed

| Name                             | Description                                                                                                                                  |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `toSVG(pixelSize?)`              | Returns the code as a standalone SVG string. `pixelSize` defaults to `512`. It is empty when no code is made.                                |
| `toDataURL(format?, pixelSize?)` | Returns a promise of the code as a data URL. `format` is `png` by default. `pixelSize` is the minimum width of a PNG. PNG needs the browser. |
| `download(format?, filename?)`   | Saves the code as a file and emits `download`. Both default to `downloadFormat` and `filename`.                                              |

## Theming

The colors are CSS variables. They stay the same in dark mode, since a QR code needs dark modules on
a light plate to scan. Override them after the `noofpi-ui` import. The `color` and `background`
props take precedence.

```css
:root {
  --n-qr-code-bg: #f5f5f4;
}
```

| Variable                  | Description                                                |
| ------------------------- | ---------------------------------------------------------- |
| `--n-qr-code-fg`          | The color of the modules. Defaults to `#0a0a0a`.           |
| `--n-qr-code-bg`          | The color of the plate. Defaults to `#ffffff`.             |
| `--n-qr-code-logo-radius` | The corner radius of the logo area. Defaults to `0.25rem`. |
