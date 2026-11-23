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

- [Components](/docs/components/button): `NButton`, `NCopyButton`, `NBadge`, `NChip`, `NAvatar`, `NUser`, `NProgress`, `NCard`, `NStat`, `NDataList`, `NMarquee`, `NCarousel`, `NTimeline`, `NSeparator`, `NEmptyState`.
- [Layout](/docs/layout/header): `NPageHeader`, `NHeroPage`, `NHeader`, `NFooter`, `NDashboard`, `NSidebar`, `NBlobs`, `NShapes`.
- [Data](/docs/data/table): `NTable`, `NFileExplorer`.
- [Forms](/docs/forms/form): `NForm`, `NFormField`, `NInput`, `NTextarea`, `NTagsInput`, `NNumberInput`, `NPinInput`, `NCheckbox`, `NCheckButton`, `NToggleGroup`, `NSwitch`, `NSlider`, `NRating`, `NCheckboxGroup`, `NRadioGroup`, `NSelect`, `NCombobox`, `NCalendar`, `NDatePicker`, `NColorPicker`, `NAuthForm`, `NFileUpload`.
- [Navigation](/docs/navigation/menu): `NMenu`, `NContextMenu`, `NTree`, `NTabs`, `NBreadcrumb`, `NStepper`, `NPagination`, `NAccordion`, `NCollapsible`, `NCommandPalette`.
- [Feedback](/docs/feedback/toast): `NToaster` with `toast`, `NAlert`, `NSkeleton`, `NDialog`, `NDrawer`, `NTooltip`, `NPopover`, `NScrollToTop`, `NAccessibility`, `NLoadingIndicator`.
- [Icons](/docs/icons): `NIcon`.

Start with [Installation](/docs/installation).
