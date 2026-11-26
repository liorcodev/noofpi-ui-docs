<script setup lang="ts">
import type { ChatMessage, ChatParticipant } from 'noofpi-ui';

const participants: Record<string, ChatParticipant> = {
  bot: { name: 'Assistant', color: 'secondary' }
};

const messages = ref<ChatMessage[]>([
  { id: 1, sender: 'bot', text: 'Hi! Ask me anything.', time: new Date() }
]);
const typing = ref<string[]>([]);
const draft = ref('');
const busy = ref(false);

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function send(text: string) {
  busy.value = true;
  messages.value.push({
    id: messages.value.length + 1,
    sender: 'me',
    text,
    time: new Date(),
    status: 'read'
  });

  typing.value = ['bot'];
  await wait(1200);
  typing.value = [];

  messages.value.push({
    id: messages.value.length + 1,
    sender: 'bot',
    text: '',
    time: new Date(),
    streaming: true
  });
  const reply = messages.value[messages.value.length - 1]!;
  for (const word of 'You can stream the text of a message into the same entry.'.split(' ')) {
    await wait(120);
    reply.text += (reply.text ? ' ' : '') + word;
  }
  reply.streaming = false;
  busy.value = false;
}
</script>

<template>
  <div class="h-96 max-w-lg">
    <NChat
      v-model="draft"
      :messages="messages"
      :participants="participants"
      :typing="typing"
      :sending="busy"
      @send="send"
    />
  </div>
</template>
