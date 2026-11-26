<script setup lang="ts">
import type { ChatMessage, ChatParticipant } from 'noofpi-ui';

const participants: Record<string, ChatParticipant> = {
  ana: { name: 'Ana Silva', color: 'success' },
  leo: { name: 'Leo Martin', color: 'info' }
};

const at = (daysAgo: number, hours: number, minutes: number) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  date.setHours(hours, minutes, 0, 0);
  return date;
};

const messages: ChatMessage[] = [
  { id: 1, sender: 'ana', text: 'Are we still on for the demo?', time: at(1, 16, 40) },
  { id: 2, sender: 'ana', text: 'I can share my screen.', time: at(1, 16, 41) },
  { id: 3, sender: 'me', text: 'Yes. Thursday at 10:00.', time: at(1, 16, 50), status: 'read' },
  { id: 4, sender: 'leo', text: 'Good morning!', time: at(0, 9, 0) },
  { id: 5, sender: 'leo', text: 'The slides are ready.', time: at(0, 9, 2) },
  { id: 6, sender: 'leo', text: 'One more thing, I added the pricing page.', time: at(0, 9, 30) },
  { id: 7, sender: 'me', text: 'Great, thanks.', time: at(0, 9, 31), status: 'delivered' }
];
const groupWindow = ref(5);
</script>

<template>
  <div class="flex max-w-lg flex-col gap-3">
    <NFormField label="Group window (minutes)">
      <NInput v-model="groupWindow" type="number" min="0" />
    </NFormField>
    <div class="h-96">
      <NChat
        :messages="messages"
        :participants="participants"
        :group-window="Number(groupWindow) || 0"
      />
    </div>
  </div>
</template>
