<script setup lang="ts">
import type { ChatMessage, ChatParticipant } from 'noofpi-ui';

const participants: Record<string, ChatParticipant> = {
  ana: { name: 'Ana Silva', color: 'success' }
};

const messages: ChatMessage[] = [
  {
    id: 1,
    sender: 'ana',
    text: 'The release notes are here:',
    link: 'https://example.com/releases/1.9.0',
    time: new Date()
  },
  { id: 2, sender: 'me', text: 'Thanks, I will read them.', time: new Date(), status: 'read' }
];
</script>

<template>
  <div class="h-96 max-w-lg">
    <NChat :messages="messages" :participants="participants" title="Release channel">
      <template #content="{ message }">
        <p class="whitespace-pre-wrap">{{ message.text }}</p>
        <a
          v-if="message.link"
          :href="String(message.link)"
          target="_blank"
          rel="noopener noreferrer"
          class="underline"
        >
          Release 1.9.0
        </a>
      </template>
      <template #empty>
        <p>Say hello to start the conversation.</p>
      </template>
    </NChat>
  </div>
</template>
