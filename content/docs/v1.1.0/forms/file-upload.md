---
title: NFileUpload
description: Accessible drag-and-drop file selection with validation and previews.
---

# NFileUpload

Select one or more files by browsing or dropping. The component keeps the selected `File` objects in
`v-model`, validates type and limits, and displays compact removable rows.

::component-example{name="file-upload/basic"}
::

## Validation

`accept` accepts the same comma-separated MIME patterns as the native file input. `maxSize` is measured
in bytes per file, and `maxFiles` applies when `multiple` is enabled. Rejected files emit `error`.

```vue
<NFileUpload
  v-model="files"
  accept="image/png,image/jpeg"
  multiple
  :max-size="5 * 1024 * 1024"
  :max-files="4"
  @error="showError"
/>
```

## API

| Prop          | Type                   | Default                  | Description                            |
| ------------- | ---------------------- | ------------------------ | -------------------------------------- |
| `modelValue`  | `File[]`               | `[]`                     | Selected files (`v-model`).            |
| `accept`      | `string`               | `-`                      | Native MIME or extension filter.       |
| `multiple`    | `boolean`              | `false`                  | Allows selecting several files.        |
| `maxSize`     | `number`               | `-`                      | Maximum bytes per file.                |
| `maxFiles`    | `number`               | `-`                      | Maximum selected file count.           |
| `name`        | `string`               | `-`                      | Native form field name.                |
| `disabled`    | `boolean`              | `false`                  | Disables browsing, dropping and removal. |
| `invalid`     | `boolean`              | `false`                  | Applies invalid form styling.          |
| `label`       | `string`               | `Choose files`           | Accessible input label.                |
| `description` | `string`               | `-`                      | Requirements shown in the dropzone.    |
| `icon`        | `string` `Component`   | upload icon              | Dropzone icon.                         |

### Slots

| Slot       | Props                          | Description                         |
| ---------- | ------------------------------ | ----------------------------------- |
| `dropzone` | -                              | Replaces the complete drop target.  |
| `file`     | `file`, `index`, `remove`      | Replaces one selected-file row.     |
