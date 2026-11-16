---
title: NAccordion
description: Collapsible sections.
---

# NAccordion

Collapsible sections. `v-model` holds the `value` of the open section, and each section shows its `content` text when it opens.

::component-example{name="accordion/basic"}
::

## Multiple sections

With `type="multiple"`, any number of sections can be open, and `v-model` is an array of values.

::component-example{name="accordion/multiple"}
::

## Variants

`line` separates the sections with lines. `outline` puts them in a bordered box.

::component-example{name="accordion/variants"}
::

## Always one open

With `type="single"`, an open section can be closed again. Set `collapsible` to `false` to keep one section open at all times.

::component-example{name="accordion/collapsible"}
::

## Icons and disabled sections

A section can have an `icon`, an Iconify class or a component. See [Icons](/docs/icons). A section with `disabled` can't be toggled.

::component-example{name="accordion/icons"}
::

## Slots

The panel of a section is the slot named after its `value`, then the `panel` slot, then its `content` text. The `label` slot replaces a header and gets `{ item, open }`.

::component-example{name="accordion/slots"}
::

## Accessibility

Headers are buttons with `aria-expanded`. Arrow keys, `Home` and `End` move between enabled headers. Closed panels are `inert` but stay mounted. Opening and closing animate, and the animation is disabled with `prefers-reduced-motion`.

## API

### Props

| Prop          | Type                   | Default  | Description                                                                          |
| ------------- | ---------------------- | -------- | ------------------------------------------------------------------------------------ |
| `items`       | `AccordionItem[]`      | -        | The sections. Required.                                                              |
| `modelValue`  | `string` `number` `(string \| number)[]` | - | The open `value`, or an array of values with `type="multiple"`. Bound with `v-model`. |
| `type`        | `single` `multiple`    | `single` | Whether one section or any number of sections can be open.                           |
| `collapsible` | `boolean`              | `true`   | With `type="single"`, allows the open section to be closed again.                    |
| `variant`     | `line` `outline`       | `line`   | The visual style.                                                                    |

### AccordionItem

| Field      | Type                 | Default | Description                                                              |
| ---------- | -------------------- | ------- | ------------------------------------------------------------------------ |
| `label`    | `string`             | -       | The text of the header.                                                  |
| `value`    | `string` `number`    | -       | Identifies the section: the `v-model` value and the name of its panel slot. |
| `icon`     | `string` `Component` | -       | Leading icon: an Iconify class, another class, or a component.           |
| `content`  | `string`             | -       | The text of the panel when there is no slot for it.                      |
| `disabled` | `boolean`            | `false` | Prevents the section from being toggled.                                 |

### Slots

| Slot      | Description                                                                         |
| --------- | ----------------------------------------------------------------------------------- |
| `label`   | Replaces the content of a header. Gets `{ item, open }`.                            |
| `panel`   | The panel of every section without a slot named after its `value`. Gets `{ item }`. |
| `{value}` | The panel of the section with that `value`, for example `#shipping`. Gets `{ item }`. |

### Events

| Event               | Payload                                  | Description                              |
| ------------------- | ---------------------------------------- | ---------------------------------------- |
| `update:modelValue` | `string` `number` `(string \| number)[]` | Emitted when a section opens or closes.  |

## Theming

Override the tokens after the `noofpi-ui` import.

```css
:root {
  --n-accordion-border: var(--ui-primary-200);
}
```

| Variable               | Description                                                               |
| ---------------------- | ------------------------------------------------------------------------- |
| `--n-accordion-border` | Border color. Default `--ui-neutral-200`, dark `--ui-neutral-800`.       |
| `--n-accordion-fg`     | Header text color. Default `--ui-neutral-900`, dark `--ui-neutral-50`.   |
| `--n-accordion-muted`  | Color of icons, chevron and panel text. Default `--ui-neutral-500`, dark `--ui-neutral-400`. |
| `--n-accordion-hover`  | Header hover background. Default `--ui-neutral-50`, dark `--ui-neutral-800`. |
