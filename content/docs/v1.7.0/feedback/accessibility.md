---
title: NAccessibility
description: A button and menu that lets visitors adjust the page to their needs.
---

# NAccessibility

A floating accessibility button that opens a menu of adjustments: text size, contrast, grayscale, link and heading highlight, a readable font, text spacing, a large cursor, a focus outline, a reading guide, no animations and hidden images. Mount it once, for example in `app.vue`.

The adjustments are applied to the whole page, as `data-n-a11y-*` attributes on `<html>` that the library's CSS reacts to, and are kept in `localStorage` between visits. The button opens with a click or with `Alt+A`, and `Escape` closes it and returns focus to the button.

::component-example{name="accessibility/basic" height="180px"}
::

::callout{type="note"}
The button is fixed to the viewport. The examples on this page show it on demand and keep nothing in `localStorage`, so they don't change the settings of this site.
::

## Choosing the adjustments

`features` is the list of adjustments to offer. It defaults to all of them: `fontSize`, `contrast`, `grayscale`, `highlightLinks`, `highlightHeadings`, `readableFont`, `textSpacing`, `largeCursor`, `highlightFocus`, `readingGuide`, `stopAnimations` and `hideImages`.

`placement` is the corner of the screen: `bottom-start`, `bottom-end`, `top-start` or `top-end`. `start` and `end` follow the text direction. `statementUrl` adds a link to your accessibility statement (הצהרת נגישות), which Israeli regulations require every website to have.

::component-example{name="accessibility/options" height="180px"}
::

## Skip link

`skipTo` adds a "skip to the main content" link, the first thing a keyboard user reaches, that moves focus to the element it points to.

```vue
<NAccessibility skip-to="#main" statement-url="/accessibility" />
<main id="main">...</main>
```

## Texts and Hebrew

The texts of the menu are in English. `labels` replaces any of them, and `ACCESSIBILITY_LABELS_HE` is a complete Hebrew set. The menu follows the direction of the page, so a Hebrew site gets it on the right side with `dir="rtl"`.

::component-example{name="accessibility/hebrew" height="180px"}
::

## Settings

Bind `v-model:settings` to read or set the adjustments from your own code, for example to preset a larger text size. Each is a field of `AccessibilitySettings`: `fontSize` (`100`, `110`, `125`, `150`, `175` or `200`, in percent), `contrast` (`none`, `dark`, `light` or `invert`), and a boolean for each of the other adjustments.

```vue
<script setup lang="ts">
import type { AccessibilitySettings } from 'noofpi-ui';

const settings = ref<AccessibilitySettings>();
</script>

<template>
  <NAccessibility v-model:settings="settings" />
</template>
```

`storageKey` is the `localStorage` key the settings are kept in (`n-accessibility` by default). Use `false` to not keep them. When storage is blocked the adjustments just don't outlive the page.

## Footer slot

The `footer` slot adds content at the bottom of the menu, such as the contact details of the accessibility coordinator.

```vue
<NAccessibility statement-url="/accessibility">
  <template #footer>
    <p>Accessibility coordinator: access@example.com</p>
  </template>
</NAccessibility>
```

## Accessibility

The menu is a `dialog` labelled by its title. The button gets `aria-haspopup`, `aria-expanded` and `aria-controls`, each adjustment is a button with `aria-pressed`, and the text size is announced as it changes. Other attributes, such as `class` or `color`, go to the button.

## API

### Props

| Prop           | Type                                                    | Default          | Description                                                                          |
| -------------- | ------------------------------------------------------- | ---------------- | ------------------------------------------------------------------------------------ |
| `features`     | `AccessibilityFeature[]`                                | all of them      | The adjustments to offer.                                                            |
| `placement`    | `bottom-start` `bottom-end` `top-start` `top-end`       | `bottom-start`   | The corner of the screen. `start` and `end` follow the text direction.               |
| `statementUrl` | `string`                                                | `-`              | Link to the accessibility statement.                                                 |
| `skipTo`       | `string`                                                | `-`              | Adds a skip link that moves focus to this selector, such as `#main`.                 |
| `shortcut`     | `string`                                                | `Alt+A`          | The key that opens and closes the menu. Use `""` for none.                           |
| `storageKey`   | `string` `false`                                        | `n-accessibility` | The `localStorage` key the settings are kept in. `false` keeps nothing.             |
| `labels`       | `Partial<AccessibilityLabels>`                          | English          | Replaces any of the texts. `ACCESSIBILITY_LABELS_HE` is Hebrew.                      |
| `open`         | `boolean`                                               | `false`          | The open state, bound with `v-model:open`.                                           |
| `settings`     | `AccessibilitySettings`                                 | no adjustments   | The current adjustments, bound with `v-model:settings`.                              |

### Slots

| Slot     | Description                                                                 |
| -------- | --------------------------------------------------------------------------- |
| `footer` | Content at the bottom of the menu, such as the accessibility coordinator.   |

## Theming

Override the tokens after the `noofpi-ui` import.

```css
:root {
  --n-accessibility-w: 24rem;
}
```

| Variable                        | Description                                                      |
| ------------------------------- | ---------------------------------------------------------------- |
| `--n-accessibility-inset`       | Distance from the edges of the window. Default `1rem`.           |
| `--n-accessibility-z`           | `z-index` of the button and menu. Default `70`.                  |
| `--n-accessibility-w`           | Width of the menu. Default `22rem`.                              |
| `--n-accessibility-bg`          | Menu background. Default `#fff`, dark `--ui-neutral-900`.        |
| `--n-accessibility-border`      | Menu border color. Default `--ui-neutral-200`, dark `--ui-neutral-800`. |
| `--n-accessibility-fg`          | Text color. Default `--ui-neutral-800`, dark `--ui-neutral-100`. |
| `--n-accessibility-muted`       | Color of secondary text. Default `--ui-neutral-500`, dark `--ui-neutral-400`. |
| `--n-accessibility-option-bg`   | Background of an adjustment. Default `--ui-neutral-50`, dark `--ui-neutral-800`. |
| `--n-accessibility-option-hover` | Background of an adjustment on hover. Default `--ui-neutral-100`, dark `--ui-neutral-700`. |
| `--n-accessibility-active-bg`   | Background of an adjustment that is on. Default `--ui-primary-700`, dark `--ui-primary-500`. |
| `--n-accessibility-active-fg`   | Text color of an adjustment that is on. Default `#fff`, dark `--ui-primary-950`. |
| `--n-accessibility-shadow`      | Menu shadow.                                                     |
| `--n-accessibility-guide`       | Color of the reading guide. Default `#ffd400`.                   |
