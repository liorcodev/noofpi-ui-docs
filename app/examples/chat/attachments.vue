<script setup lang="ts">
import type { ChatMessage, ChatParticipant } from 'noofpi-ui';

const participants: Record<string, ChatParticipant> = {
  ana: { name: 'Ana Silva', color: 'success' }
};

const messages = ref<ChatMessage[]>([
  {
    id: 1,
    sender: 'ana',
    text: 'Here is the report and the cover image.',
    time: new Date(),
    attachments: [
      { name: 'report-q3.pdf', url: '#', type: 'application/pdf', size: 482_304 },
      { name: 'cover.png', url: 'https://picsum.photos/id/1015/320/200', type: 'image/png' }
    ]
  }
]);
const draft = ref('');

function send(text: string, files: File[]) {
  messages.value.push({
    id: messages.value.length + 1,
    sender: 'me',
    text,
    time: new Date(),
    status: 'sent',
    attachments: files.map(file => ({ name: file.name, type: file.type, size: file.size }))
  });
}
</script>

<template>
  <div class="h-96 max-w-lg">
    <NChat
      v-model="draft"
      :messages="messages"
      :participants="participants"
      attachable
      accept="image/*,.pdf"
      @send="send"
    />
  </div>
</template>
