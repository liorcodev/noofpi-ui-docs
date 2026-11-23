---
title: NCollapsible
description: A single section that shows and hides its content.
---

# NCollapsible

A single section with a trigger that shows and hides its content. It is the lighter alternative to [NAccordion](/docs/navigation/accordion), for one section that stands alone. It works without `v-model`, and `v-model` is a `boolean` for the open state.

::component-example{name="collapsible/basic"}
::

## Variants

`plain` is the default and has no border. `outline` puts the trigger and the content in a bordered box.

::component-example{name="collapsible/variants"}
::

## Icon and disabled

`icon` is shown before the label. It is an Iconify class or a component. See [Icons](/docs/icons). A `disabled` collapsible can't be toggled.

::component-example{name="collapsible/icon-disabled"}
::

## v-model

Bind `v-model` to open or close the section from your own code.

::component-example{name="collapsible/v-model"}
::

## Slots

The `label` slot replaces the icon and the text of the trigger. The chevron stays. Both the `label` slot and the default slot get `{ open }`.

::component-example{name="collapsible/slots"}
::

## Accessibility

The trigger is a `button` with `aria-expanded` and `aria-controls`. The content is a `region` labelled by the trigger. A closed panel is `inert` but stays mounted. Opening and closing animate, and the animation is disabled with `prefers-reduced-motion`.

## API

`class` and other attributes go to the root element.

### Props

| Prop         | Type                | Default | Description                                                  |
| ------------ | ------------------- | ------- | ------------------------------------------------------------ |
| `modelValue` | `boolean`           | `false` | Whether the content is shown. Bound with `v-model`.          |
| `label`      | `string`            | -       | The text of the trigger.                                     |
| `icon`       | `string` `Component` | -      | Icon before the label: an Iconify class, another class, or a component. |
| `variant`    | `plain` `outline`   | `plain` | The visual style.                                            |
| `disabled`   | `boolean`           | `false` | Prevents the section from being toggled.                     |

### Events

| Event               | Payload   | Description                                |
| ------------------- | --------- | ------------------------------------------ |
| `update:modelValue` | `boolean` | Emitted when the trigger opens or closes the section. |

### Slots

| Slot      | Props               | Description                                         |
| --------- | ------------------- | --------------------------------------------------- |
| `default` | `{ open: boolean }` | The content that is shown and hidden.               |
| `label`   | `{ open: boolean }` | Replaces the icon and the text of the trigger.      |

## Theming

Override the tokens after the `noofpi-ui` import.

```css
:root {
  --n-collapsible-border: var(--ui-primary-200);
}
```

| Variable                 | Description                                                                                  |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| `--n-collapsible-border` | Border color of the `outline` variant. Default `--ui-neutral-200`, dark `--ui-neutral-800`.  |
| `--n-collapsible-fg`     | Trigger text color. Default `--ui-neutral-900`, dark `--ui-neutral-50`.                      |
| `--n-collapsible-muted`  | Color of the icon, the chevron and the content. Default `--ui-neutral-500`, dark `--ui-neutral-400`. |
| `--n-collapsible-hover`  | Trigger hover background in the `outline` variant. Default `--ui-neutral-50`, dark `--ui-neutral-800`. |
