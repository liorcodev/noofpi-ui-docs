---
title: Installation
description: Add noofpi-ui to a noofpi project and import its styles.
---

# Installation

noofpi-ui needs a project with [noofpi](https://liorcodev.github.io/noofpi-docs) (or any Vite + Vue 3 app) and Tailwind CSS v4.

## Install the package

```bash
bun add noofpi-ui
```

## Register the Vite plugin

The plugin auto-imports every `N*` component in your templates and bundles noofpi-ui for SSR.

```ts [noofpi.config.ts]
import { defineNoofpiConfig } from "noofpi";
import { noofpiUi } from "noofpi-ui/vite";

export default defineNoofpiConfig({
  tailwind: true,
  vite: { plugins: [noofpiUi()] }
});
```

## Import the styles

Import `noofpi-ui` after Tailwind. If you use Color Theme Studio, import its exported `theme.css` before it.

```css [app/assets/main.css]
@import "tailwindcss";
@import "./theme.css"; /* your Color Theme Studio export (optional) */
@import "noofpi-ui";
```

## Use a component

That is all. Every component works anywhere with no import.

::component-example{name="theming/first-component"}
::

::callout{type="tip" title="Without the plugin"}
Import the components yourself: `import { NButton } from "noofpi-ui"`.
::

## Next steps

- [Theming](/docs/theming) to change colors, radius and sizes.
- [Icons](/docs/icons) to use Iconify icons.
- [NButton](/docs/components/button) to start with the components.
