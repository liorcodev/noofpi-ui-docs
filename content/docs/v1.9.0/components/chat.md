---
title: NChat
description: A chat thread with a composer, grouped messages and a typing indicator.
---

# NChat

A chat thread with a composer. You own the data: pass `messages` (oldest first) and `participants`,
and handle `send` to add the new message. `v-model` is the text in the composer.

The chat fills its parent (`height: 100%`), so give the parent a height. The messages scroll and the
composer stays at the bottom.

::component-example{name="chat/basic"}
::

A message is plain text. It is escaped and keeps its line breaks. For rich content use the `content`
slot. A message from the sender `self` (`me` by default) sits at the end in the color of the chat.
Other senders sit at the start with an avatar and a name. A sender that is missing from
`participants` shows its id as the name.

Text is trimmed on send, and a blank draft is not sent. The composer is cleared and focused again
after `send`.

## Grouping and dates

Messages from the same sender on the same day form a group when each is at most `group-window`
minutes after the previous one (`5` by default). A group shows the name and the avatar once, joins
its bubbles, and shows the time after the last one. A message without a `time` joins the group of
the sender before it.

Messages with a `time` also get a day separator when the day changes. It reads `Today`, `Yesterday`
or a date, in the language of `locale`. Use `today-label` and `yesterday-label` to change the first
two.

`show-names`, `show-avatars` and `show-time` turn the name, the avatar and the time off.

::component-example{name="chat/grouping"}
::

## Status and retry

A message of yours can have a `status`: `sending`, `sent`, `delivered`, `read` or `error`. It shows
as an icon after the time of the last message of a group, and always on a failed message.
`show-status` turns it off.

A message with the status `error` shows a retry button. It emits `retry` with the message. Set its
status back to `sending` and send it again. `status-labels` changes the text that screen readers
read for each status.

::component-example{name="chat/status"}
::

## Typing and streaming

`typing` shows the typing indicator. Pass `true`, or an array of participant ids to show the avatar
and name of who is typing. Your own id in the array is ignored.

For a reply that arrives in pieces, add the message with `streaming: true` and grow its `text`. It
shows a blinking caret, and three dots until the first text arrives. Set `streaming` to `false` when
it is done.

::component-example{name="chat/typing-streaming"}
::

## Older messages

The thread emits `loadMore` once when it is scrolled to the top, at `load-more-threshold` pixels
from it (`48` by default). Set `loading` while you fetch, and prepend the older messages to
`messages`. The scroll position is kept, so what the user was reading does not move. Set `has-more`
to `false` when there is no more history. `loading` shows a spinner at the top of the thread.

::component-example{name="chat/history"}
::

## Auto-scroll

The thread stays at the bottom while a new message arrives and the user is within `stick-threshold`
pixels of the bottom (`80` by default). A message of yours always scrolls to the bottom. If the user
has scrolled up, the thread does not move, and a "New messages" button appears to jump down. Call
`scrollToBottom()` on the component to scroll yourself.

## Attachments

A message can list `attachments`. An attachment with a `url` is a link that opens in a new tab. When
its `type` starts with `image/`, the `url` is shown as a thumbnail. A `size` in bytes is shown next
to the name of a file. A `url` that starts with `javascript:` or `vbscript:` is not made a link.

`attachable` shows an attach button in the composer. The picked files are staged above the input
with a button to remove each one. `attach` emits when files are picked, and `send` emits the staged
files with the text. A draft with only files can be sent. `accept` and `multiple` are passed to the
file picker.

The chat does not upload anything. Upload the files in your `send` handler, and add the message with
the resulting `attachments`.

::component-example{name="chat/attachments"}
::

## Composer

Enter sends and Shift+Enter adds a line. With `send-on-enter` set to `false`, Ctrl+Enter or
Cmd+Enter sends and Enter adds a line. The input grows up to `max-rows` lines (`6` by default) and
then scrolls. `maxlength`, `placeholder`, `disabled` and `color` do what you expect. `color` sets
the color of your messages and the send button. It takes the same colors as `NButton`, and With
`neutral` your bubble uses the inverted text color.

While `sending` is `true` the send button is disabled. `disabled` disables the whole composer.

::component-example{name="chat/composer"}
::

## Slots

`title` shows a header bar. The `header` slot replaces its content, and shows the bar even without a
`title`.

`content` replaces what is inside a bubble, for links, markdown or cards. `bubble` replaces the
whole bubble, `avatar` the avatar, and `message` the whole row. `empty` replaces the text shown when
there are no messages, `typing` the typing indicator, and `composer` the whole composer.
`composer-start` and `composer-end` add buttons next to the input. Extra fields of a message, such
as `link` below, are available in the slots.

::component-example{name="chat/slots"}
::

## Accessibility

The thread is a `log` with `aria-live="polite"`, so a new message is read when it arrives. It can be
focused to scroll it by keyboard, and `log-label` is its accessible name. It is `aria-busy` while a
message is streaming. The typing indicator is read as `Typingâ€¦`, with the names first when `typing`
lists ids. The status icons have a text for screen readers. Dates and times use `time` elements, and
the time shows the full date as a title. The composer has `input-label` as its accessible name.

| Key             | Action                                                                  |
| --------------- | ----------------------------------------------------------------------- |
| `Enter`         | Sends the message. Adds a line when `send-on-enter` is `false`.         |
| `Shift` `Enter` | Adds a line.                                                            |
| `Ctrl` `Enter`  | Sends the message when `send-on-enter` is `false`. `Cmd` works as well. |

An `Enter` that confirms an IME candidate does not send.

The animations stop when the user prefers reduced motion.

## API

Other attributes go to the root element.

### Props

| Prop                    | Type                                                               | Default                     | Description                                                                                                  |
| ----------------------- | ------------------------------------------------------------------ | --------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `modelValue`            | `string`                                                           | `''`                        | The text in the composer.                                                                                    |
| `messages`              | `ChatMessage[]`                                                    | `[]`                        | The messages, oldest first.                                                                                  |
| `participants`          | `Record<string, ChatParticipant>`                                  | `{}`                        | The senders by id. An unknown sender shows its id.                                                           |
| `self`                  | `string`                                                           | `me`                        | The id of the current user. Their messages sit at the end.                                                   |
| `typing`                | `boolean` `string[]`                                               | `false`                     | Shows the typing indicator. An array lists the ids of who is typing.                                         |
| `title`                 | `string`                                                           | `-`                         | The title of the header bar.                                                                                 |
| `locale`                | `string`                                                           | `-`                         | The language of dates and times. It is the browser's by default.                                             |
| `color`                 | `primary` `secondary` `neutral` `success` `info` `warning` `error` | `primary`                   | The color of your messages and the send button.                                                              |
| `groupWindow`           | `number`                                                           | `5`                         | Minutes within which messages of one sender form a group.                                                    |
| `showNames`             | `boolean`                                                          | `true`                      | Shows the name above a group of messages from others.                                                        |
| `showAvatars`           | `boolean`                                                          | `true`                      | Shows the avatar of others at the start of a group.                                                          |
| `showTime`              | `boolean`                                                          | `true`                      | Shows the time under a group.                                                                                |
| `showStatus`            | `boolean`                                                          | `true`                      | Shows the delivery status of your messages.                                                                  |
| `loading`               | `boolean`                                                          | `false`                     | Shows a spinner at the top while older messages load.                                                        |
| `hasMore`               | `boolean`                                                          | `true`                      | Set to `false` when there is no older history, so `loadMore` stops.                                          |
| `loadMoreThreshold`     | `number`                                                           | `48`                        | The distance in pixels from the top at which `loadMore` emits.                                               |
| `stickThreshold`        | `number`                                                           | `80`                        | The distance in pixels from the bottom within which new messages keep the thread at the bottom.              |
| `sendOnEnter`           | `boolean`                                                          | `true`                      | Enter sends and Shift+Enter adds a line. When `false`, Ctrl or Cmd+Enter sends.                              |
| `sending`               | `boolean`                                                          | `false`                     | Disables the send button while a message is being sent.                                                      |
| `disabled`              | `boolean`                                                          | `false`                     | Disables the composer.                                                                                       |
| `attachable`            | `boolean`                                                          | `false`                     | Shows the attach button.                                                                                     |
| `accept`                | `string`                                                           | `-`                         | The `accept` of the file picker, such as `image/*`.                                                          |
| `multiple`              | `boolean`                                                          | `true`                      | Lets the picker select several files.                                                                        |
| `maxlength`             | `number`                                                           | `-`                         | Native `maxlength` of the composer.                                                                          |
| `maxRows`               | `number`                                                           | `6`                         | The lines after which the composer scrolls.                                                                  |
| `placeholder`           | `string`                                                           | `Type a messageâ€¦`           | The placeholder of the composer.                                                                             |
| `inputLabel`            | `string`                                                           | `Message`                   | The accessible name of the composer.                                                                         |
| `sendLabel`             | `string`                                                           | `Send`                      | The accessible name of the send button.                                                                      |
| `attachLabel`           | `string`                                                           | `Attach files`              | The accessible name of the attach button.                                                                    |
| `removeAttachmentLabel` | `string`                                                           | `Remove`                    | The accessible name of the remove button of a staged file, followed by the file name.                        |
| `newMessagesLabel`      | `string`                                                           | `New messages`              | The text of the button that jumps to new messages.                                                           |
| `logLabel`              | `string`                                                           | `Messages`                  | The accessible name of the thread.                                                                           |
| `typingLabel`           | `string`                                                           | `Typingâ€¦`                   | The text read for the typing indicator.                                                                      |
| `loadingLabel`          | `string`                                                           | `Loading earlier messagesâ€¦` | The text next to the spinner of `loading`.                                                                   |
| `emptyLabel`            | `string`                                                           | `No messages yet`           | The text shown when there are no messages.                                                                   |
| `retryLabel`            | `string`                                                           | `Retry`                     | The text of the retry button of a failed message.                                                            |
| `todayLabel`            | `string`                                                           | `-`                         | The day separator of today. It is the localized `Today` by default.                                          |
| `yesterdayLabel`        | `string`                                                           | `-`                         | The day separator of yesterday. It is the localized `Yesterday` by default.                                  |
| `statusLabels`          | `Partial<Record<ChatMessageStatus, string>>`                       | `{}`                        | The text read for each status. The defaults are `Sending`, `Sent`, `Delivered`, `Read` and `Failed to send`. |

### Events

| Event               | Payload                               | Description                                                                         |
| ------------------- | ------------------------------------- | ----------------------------------------------------------------------------------- |
| `update:modelValue` | `string`                              | The text in the composer changed.                                                   |
| `send`              | `text: string`, `attachments: File[]` | The composer was submitted. The text is trimmed, and the files are the staged ones. |
| `attach`            | `files: File[]`                       | Files were picked with the attach button.                                           |
| `loadMore`          | `-`                                   | The thread was scrolled to the top. Load older messages and prepend them.           |
| `retry`             | `message: ChatMessage`                | The retry button of a failed message was clicked.                                   |

### Slots

| Slot             | Props                                                                                                    | Description                                                                            |
| ---------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `header`         | `-`                                                                                                      | The content of the header bar, instead of the `title`.                                 |
| `empty`          | `-`                                                                                                      | The content shown when there are no messages.                                          |
| `message`        | `{ message: ChatMessage, mine: boolean, grouped: boolean, participant: ChatParticipant, last: boolean }` | The whole row of a message, instead of the avatar, bubble and time.                    |
| `avatar`         | `{ message: ChatMessage, participant: ChatParticipant, mine: boolean }`                                  | The avatar of others, instead of `NAvatar`. Only the first message of a group has one. |
| `bubble`         | `{ message: ChatMessage, mine: boolean, grouped: boolean }`                                              | The bubble, instead of the styled one.                                                 |
| `content`        | `{ message: ChatMessage, mine: boolean, grouped: boolean }`                                              | The content of the bubble, instead of the text and attachments.                        |
| `typing`         | `{ participants: (ChatParticipant & { id: string })[] }`                                                 | The typing indicator row, instead of the avatar and the dots.                          |
| `composer`       | `{ draft: string, files: File[], canSend: boolean, send: () => void, disabled: boolean }`                | The whole composer, instead of the input and the buttons.                              |
| `composer-start` | `-`                                                                                                      | Content at the start of the composer, before the attach button.                        |
| `composer-end`   | `-`                                                                                                      | Content after the input, before the send button.                                       |

### Methods

Get them with a template ref.

| Method                      | Description                                                         |
| --------------------------- | ------------------------------------------------------------------- |
| `scrollToBottom(behavior?)` | Scrolls the thread to the bottom. `behavior` is `auto` or `smooth`. |
| `focus()`                   | Focuses the composer.                                               |

### ChatMessage

| Field         | Type                                        | Description                                                                |
| ------------- | ------------------------------------------- | -------------------------------------------------------------------------- |
| `id`          | `string` `number`                           | A unique id. It is the key of the message.                                 |
| `sender`      | `string`                                    | The id of the sender, a key of `participants`. `self` marks your messages. |
| `text`        | `string`                                    | The text, shown as plain text.                                             |
| `time`        | `string` `number` `Date`                    | Used for grouping, the day separators and the time under a group.          |
| `status`      | `sending` `sent` `delivered` `read` `error` | The delivery status. It is shown for your messages only.                   |
| `attachments` | `ChatAttachment[]`                          | Files and images shown in the bubble.                                      |
| `streaming`   | `boolean`                                   | The text is still growing. Shows a blinking caret.                         |

Any other field is kept and passed to the slots.

### ChatParticipant

| Field    | Type                                                               | Description                                                   |
| -------- | ------------------------------------------------------------------ | ------------------------------------------------------------- |
| `name`   | `string`                                                           | Shown above a group of messages and as the avatar fallback.   |
| `avatar` | `string`                                                           | The URL of the avatar image.                                  |
| `color`  | `primary` `secondary` `neutral` `success` `info` `warning` `error` | The color of the avatar fallback. It is `neutral` by default. |

### ChatAttachment

| Field  | Type     | Description                                                            |
| ------ | -------- | ---------------------------------------------------------------------- |
| `name` | `string` | The file name.                                                         |
| `url`  | `string` | Opens the file when set. For an image `type` it is also the thumbnail. |
| `type` | `string` | The MIME type, such as `image/png`.                                    |
| `size` | `number` | The size in bytes.                                                     |

## Theming

The sizes, spacing and colors are CSS variables. Override them after the `noofpi-ui` import.

```css
:root {
  --n-chat-bubble-radius: 0.75rem;
  --n-chat-other-bg: var(--ui-neutral-200);
}
```

The chat is also a container, so it adapts to its own width and not to the viewport.

| Variable                       | Description                                                                                                                         |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| `--n-chat-height`              | Height of the chat. Defaults to `100%`.                                                                                             |
| `--n-chat-px`                  | Horizontal padding of the header, thread and composer. Defaults to `1rem`.                                                          |
| `--n-chat-py`                  | Vertical padding of the thread. Defaults to `1rem`.                                                                                 |
| `--n-chat-group-gap`           | Space between groups. Defaults to `1rem`.                                                                                           |
| `--n-chat-gap`                 | Space between the messages of a group. Defaults to `0.125rem`.                                                                      |
| `--n-chat-bubble-max`          | Widest a bubble gets, as a share of the thread. Defaults to `75%`.                                                                  |
| `--n-chat-bubble-radius`       | Corner radius of a bubble. Defaults to `1.125rem`.                                                                                  |
| `--n-chat-bubble-radius-tight` | Radius of the corners where the bubbles of a group join. Defaults to `0.375rem`.                                                    |
| `--n-chat-bg`                  | Background. Defaults to `#fff`, and `var(--ui-neutral-950)` in dark mode.                                                           |
| `--n-chat-border`              | Border color. Defaults to `var(--ui-neutral-200)`, and `var(--ui-neutral-800)` in dark mode.                                        |
| `--n-chat-other-bg`            | Background of the bubbles of others. Defaults to `var(--ui-neutral-100)`, and `var(--ui-neutral-800)` in dark mode.                 |
| `--n-chat-other-fg`            | Text color of the chat and of the bubbles of others. Defaults to `var(--ui-neutral-900)`, and `var(--ui-neutral-100)` in dark mode. |
| `--n-chat-muted`               | Color of the names, times and the empty state. Defaults to `var(--ui-neutral-500)`, and `var(--ui-neutral-400)` in dark mode.       |

The colors of your messages follow the `color` prop. They are set on `.n-chat`, so override them
there and not on `:root`. Use the `color` prop when it is enough.

| Variable           | Description                                                                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `--n-chat-mine-bg` | Background of your bubbles. Defaults to the 600 shade of `color`. For `neutral` it is `var(--n-c-900)`, and `var(--n-c-100)` in dark mode. |
| `--n-chat-mine-fg` | Text color of your bubbles. Defaults to `#fff`. For `neutral` in dark mode it is `var(--n-c-900)`.                                         |
| `--n-chat-accent`  | Color of the focus ring and of the read status. Defaults to the 600 shade of `color`, and the 400 shade in dark mode.                      |
