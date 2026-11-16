---
title: Introduction
description: noofpi-ui is a set of Tailwind v4 Vue components for noofpi, themable with Color Theme Studio.
---

# Introduction

noofpi-ui is a set of [Tailwind](https://tailwindcss.com) v4 components for [noofpi](https://liorcodev.github.io/noofpi-docs). It works like Nuxt UI: auto-imported `N*` components, styled by CSS variables you can override, and themed by [Color Theme Studio](https://liorcodev.github.io/color-theme-studio).

::component-example{name="theming/first-component"}
::

## Features

- **Auto-imported.** Add the `noofpiUi()` Vite plugin and `<NButton>` works anywhere, with no import.
- **Themable.** One `primary` color wired to Color Theme Studio. Switch themes live, with dark mode.
- **Overridable.** Plain CSS variables (`--ui-*`, `--n-*`) and Tailwind utilities on any element.
- **Accessible.** Keyboard navigation and ARIA roles on the tabs, select, menu, accordion and more.
- **Responsive.** Size, shape and layout props take a value per breakpoint, and layouts mirror in RTL.
- **Typed forms.** `NForm` validates with Zod and plugs into noofpi's `useDoofpiForm`.
- **Built-in icons.** Iconify icons are generated into your CSS at build time.

## Components

- [Components](/docs/components/button): `NButton`, `NBadge`, `NChip`, `NAvatar`, `NUser`, `NProgress`, `NCard`, `NStat`, `NDataList`, `NMarquee`.
- [Layout](/docs/layout/header): `NPageHeader`, `NHeroPage`, `NHeader`, `NFooter`, `NDashboard`, `NSidebar`.
- [Data](/docs/data/table): `NTable`.
- [Forms](/docs/forms/form): `NForm`, `NFormField`, `NInput`, `NNumberInput`, `NPinInput`, `NCheckbox`, `NCheckButton`, `NSwitch`, `NSlider`, `NCheckboxGroup`, `NRadioGroup`, `NSelect`, `NCombobox`, `NAuthForm`.
- [Navigation](/docs/navigation/menu): `NMenu`, `NTabs`, `NPagination`, `NBreadcrumb`, `NStepper`, `NAccordion`.
- [Feedback](/docs/feedback/toast): `NToaster` with `toast`, `NAlert`, `NSkeleton`, `NScrollToTop`, `NLoadingIndicator`.
- [Icons](/docs/icons): `NIcon`.

Start with [Installation](/docs/installation).
