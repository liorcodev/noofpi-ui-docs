---
title: NTagsInput
description: A field where each typed word becomes a removable tag.
---

# NTagsInput

A text field that turns what you type into tags. `v-model` is a `string[]`, one string per tag. `Enter` or a comma ends a tag, and each tag has a button to remove it.

::component-example{name="tags-input/basic"}
::

## Delimiters

Typing or pasting one of the `delimiters` ends a tag, and the default is `[',']`. `Enter` always ends one. A pasted text with several delimiters becomes several tags, and the text after the last delimiter stays in the field. `addOnBlur` also turns the text left in the field into a tag when the field loses focus.

::component-example{name="tags-input/delimiters"}
::

## Limits

`max` is the most tags there can be. `validate` receives the text of a tag and returns `false` to refuse it. A refused tag is not added and stays in the field, so it can be corrected. Tags are trimmed, and empty ones are ignored.

::component-example{name="tags-input/limits"}
::

## Duplicates

The same tag cannot be added twice by default. The text is cleared and nothing is added. `allowDuplicates` accepts it.

::component-example{name="tags-input/duplicates"}
::

## Appearance

The tags are [NBadge](/docs/components/badge) elements. `variant` is `subtle` by default and `color` is `primary`.

::component-example{name="tags-input/appearance"}
::

## States

`invalid` marks the field without an `NFormField`. `disabled` disables the text field and hides the remove buttons.

::component-example{name="tags-input/states"}
::

## Tag slot

The `tag` slot replaces a whole tag, including its remove button. Remove the tag from the array yourself.

::component-example{name="tags-input/tag-slot"}
::

## Form field

Inside an `NFormField` the field gets the `id`, `aria-invalid` and `aria-describedby`, and the field shows the schema error. The `id` is on the text field, so the label of the `NFormField` names it. See [NFormField](/docs/forms/input).

::component-example{name="tags-input/form-field"}
::

## Native forms

`name` adds one hidden `<input>` per tag with that name, so a surrounding `<form>` submits every tag. `Enter` does not submit the form while there is text in the field.

```vue
<form method="post">
  <NTagsInput v-model="skills" name="skills" />
</form>
```

## Accessibility

The field is a `group`, and the text field inside it is a native `<input type="text">`. `label` is the accessible name of both. Without a `label`, use the label of an `NFormField`.

- `Enter` turns the text into a tag. It is ignored while an input method (IME) is composing text.
- `Backspace` in an empty field removes the last tag.
- Each remove button is a native button in the tab order, with an `aria-label` of `removeLabel` followed by the tag, such as "Remove vue". Removing a tag moves focus back to the text field.
- Clicking the empty space of the field focuses the text field.

## API

Native attributes, `class` and `style` go to the wrapper around the tags and the text field.

### Props

| Prop              | Type                                                                | Default   | Description                                                            |
| ----------------- | ------------------------------------------------------------------- | --------- | ---------------------------------------------------------------------- |
| `modelValue`      | `string[]`                                                          | `[]`      | The tags, bound with `v-model`.                                        |
| `placeholder`     | `string`                                                            | `-`       | Shown while there are no tags and nothing is typed.                    |
| `name`            | `string`                                                            | `-`       | Adds one hidden input per tag, so a `<form>` submits them.             |
| `label`           | `string`                                                            | `-`       | The accessible name, when there is no `NFormField` label.              |
| `max`             | `number`                                                            | `-`       | The most tags there can be. Further ones are refused.                  |
| `delimiters`      | `string[]`                                                          | `[',']`   | Characters that end a tag when typed or pasted. `Enter` always does.   |
| `allowDuplicates` | `boolean`                                                           | `false`   | Accepts the same tag twice.                                            |
| `addOnBlur`       | `boolean`                                                           | `false`   | Turns the text left in the field into a tag when it loses focus.       |
| `validate`        | `(tag: string) => boolean`                                          | `-`       | Returns `false` to refuse a tag. A refused tag stays in the field.     |
| `variant`         | `solid` `outline` `soft` `subtle`                                   | `subtle`  | The variant of the tags.                                               |
| `color`           | `primary` `secondary` `neutral` `success` `info` `warning` `error`  | `primary` | The color of the tags.                                                 |
| `removeLabel`     | `string`                                                            | `Remove`  | The start of the accessible name of a remove button, before the tag.   |
| `invalid`         | `boolean`                                                           | `false`   | Marks the field invalid without an `NFormField`.                       |
| `disabled`        | `boolean`                                                           | `false`   | Disables the text field and hides the remove buttons.                  |

### Events

| Event               | Payload    | Description                                                          |
| ------------------- | ---------- | -------------------------------------------------------------------- |
| `update:modelValue` | `string[]` | The new list of tags, after one is added or removed. Used by `v-model`. |

### Slots

| Slot  | Props                                | Description                                              |
| ----- | ------------------------------------ | -------------------------------------------------------- |
| `tag` | `{ tag: string, index: number }`     | A whole tag, instead of the badge and its remove button. |

## Theming

The field uses the same size tokens as `NInput`. Override them after the `noofpi-ui` import.

```css
:root {
  --n-input-h: 3rem;
}
```

| Variable       | Description                                                       |
| -------------- | ----------------------------------------------------------------- |
| `--n-input-h`  | Minimum height of the field. Default `2.5rem`.                    |
| `--n-input-px` | Horizontal padding. Default `0.75rem`.                            |
| `--n-input-fs` | Font size. Default `0.875rem`.                                    |
