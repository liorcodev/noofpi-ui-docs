---
title: Theming
description: Theme every component with Color Theme Studio or plain CSS variables.
---

# Theming

noofpi-ui is themed with CSS variables, the same idea as Nuxt UI's `--ui-*`. There is no config file: override a variable in your CSS after the `noofpi-ui` import.

## Color Theme Studio

`primary` is wired to the `--color-theme-50` to `--color-theme-950` variables of [Color Theme Studio](https://liorcodev.github.io/color-theme-studio). Dropping the exported `theme.css` into your CSS themes every component. `ColorTheme.change("ocean-blue")` (the `.theme.<name>` class on `<html>`) re-themes them live.

Without a theme file, `primary` is the noofpi brand green (`#effaf5` to `#0a2a1f`, 500 is `#31b87d`).

## Override variables

Plain CSS after the import. You can also scope it to a subtree, as in the live example.

```css
:root {
  --ui-radius: 0.75rem;
  --ui-primary-500: var(--color-brand-500);
  --ui-success-500: #16a34a;
  --n-btn-h-md: 3rem;
}
```

::component-example{name="theming/override"}
::

| Variable           | Description                                                                         |
| ------------------ | ----------------------------------------------------------------------------------- |
| `--ui-radius`      | Corner radius of rounded shapes.                                                    |
| `--ui-primary-*`   | The `primary` shades `50` to `950`. Use it for a studio export with another prefix. |
| `--ui-neutral-*`   | The `neutral` shades.                                                               |
| `--ui-success-*`   | The `success` shades. `info`, `warning` and `error` work the same way.              |
| `--n-<component>-*` | Component tokens such as sizes, colors and spacing. See each component page.       |

## Tailwind colors

The shades are also Tailwind colors, so `bg-primary-500`, `text-primary-700` and `border-primary-300` work anywhere in your app.

::component-example{name="theming/utilities"}
::

Component styles live in `@layer components`, so any Tailwind utility on the element, such as `class="rounded-full"`, wins.

## Dark mode

Dark mode follows Tailwind's `dark` variant. To use a `.dark` class, which is what Color Theme Studio's Nuxt setup uses, add:

```css
@custom-variant dark (&:where(.dark, .dark *));
```
