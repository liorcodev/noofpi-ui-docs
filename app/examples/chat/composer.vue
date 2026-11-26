<script setup lang="ts">
import type { ChatMessage, ChatParticipant } from 'noofpi-ui';

const participants: Record<string, ChatParticipant> = {
  ana: { name: 'Ana Silva', color: 'success' }
};

const messages = ref<ChatMessage[]>([
  { id: 1, sender: 'ana', text: 'Write a few lines.', time: new Date() }
]);
const draft = ref('');
const sendOnEnter = ref(false);
const disabled = ref(false);

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
  <div class="flex max-w-lg flex-col gap-3">
    <div class="flex flex-wrap gap-4">
      <NSwitch v-model="sendOnEnter" label="Send on Enter" />
      <NSwitch v-model="disabled" label="Disabled" />
    </div>
    <div class="h-96">
      <NChat
        v-model="draft"
        :messages="messages"
        :participants="participants"
        color="neutral"
        :send-on-enter="sendOnEnter"
        :disabled="disabled"
        :maxlength="200"
        :max-rows="4"
        placeholder="Write a message"
        @send="send"
      />
    </div>
  </div>
</template>
