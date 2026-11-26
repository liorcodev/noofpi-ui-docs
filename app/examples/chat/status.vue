<script setup lang="ts">
import type { ChatMessage, ChatParticipant } from 'noofpi-ui';

const participants: Record<string, ChatParticipant> = {
  ana: { name: 'Ana Silva', color: 'success' }
};

const minutesAgo = (minutes: number) => new Date(Date.now() - minutes * 60_000);

const messages = ref<ChatMessage[]>([
  { id: 1, sender: 'me', text: 'Can you send the invoice?', time: minutesAgo(60), status: 'read' },
  { id: 2, sender: 'ana', text: 'Sure, one moment.', time: minutesAgo(50) },
  { id: 3, sender: 'me', text: 'Thanks!', time: minutesAgo(40), status: 'delivered' },
  { id: 4, sender: 'ana', text: 'Done, check your inbox.', time: minutesAgo(30) },
  { id: 5, sender: 'me', text: 'Got it.', time: minutesAgo(20), status: 'sent' },
  { id: 6, sender: 'ana', text: 'Perfect.', time: minutesAgo(10) },
  {
    id: 7,
    sender: 'me',
    text: 'Can you also add the PO number?',
    time: minutesAgo(1),
    status: 'error'
  }
]);

function retry(message: ChatMessage) {
  message.status = 'sending';
  setTimeout(() => {
    message.status = 'sent';
  }, 1000);
}
</script>

<template>
  <div class="h-96 max-w-lg">
    <NChat :messages="messages" :participants="participants" @retry="retry" />
  </div>
</template>
