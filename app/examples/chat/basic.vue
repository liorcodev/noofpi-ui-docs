<script setup lang="ts">
import type { ChatMessage, ChatParticipant } from 'noofpi-ui';

const participants: Record<string, ChatParticipant> = {
  ana: { name: 'Ana Silva', color: 'success' },
  me: { name: 'You' }
};

const messages = ref<ChatMessage[]>([
  { id: 1, sender: 'ana', text: 'Hi! Did the new build pass?', time: new Date() },
  { id: 2, sender: 'me', text: 'Yes, all green.', time: new Date(), status: 'read' }
]);
const draft = ref('');

function send(text: string) {
  messages.value.push({
    id: messages.value.length + 1,
    sender: 'me',
    text,
    time: new Date(),
    status: 'sent'
  });
}
</script>

<template>
  <div class="h-96 max-w-lg">
    <NChat v-model="draft" :messages="messages" :participants="participants" @send="send" />
  </div>
</template>
