<script setup lang="ts">
import type { TabItem } from 'noofpi-ui';

const tabs: TabItem[] = [
  { label: 'Inbox', value: 'inbox' },
  { label: 'Sent', value: 'sent' },
  { label: 'Spam', value: 'spam' }
];
const counts: Record<string, number> = { inbox: 12, sent: 4, spam: 0 };
</script>

<template>
  <NTabs :items="tabs" label="Mailboxes">
    <template #label="{ item, selected }">
      <span>{{ item.label }}</span>
      <NBadge
        :label="counts[item.value]"
        :variant="selected ? 'solid' : 'soft'"
        color="neutral"
        size="xs"
        pill
      />
    </template>
    <template #panel="{ item }">
      <p class="text-sm">{{ counts[item.value] }} messages in {{ item.label }}.</p>
    </template>
  </NTabs>
</template>
