<script setup lang="ts">
import type { MenuItem } from 'noofpi-ui';

const items: MenuItem[] = [
  { label: 'Inbox', icon: 'i-lucide-inbox', shortcut: '12' },
  { label: 'Drafts', icon: 'i-lucide-file-pen', shortcut: '3' },
  { label: 'Spam', icon: 'i-lucide-shield-alert' }
];
</script>

<template>
  <NMenu :items="items" label="Mailboxes">
    <template #default="{ open }">
      <NButton
        label="Mailboxes"
        variant="outline"
        color="neutral"
        :trailing-icon="open ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'"
      />
    </template>
    <template #header>
      <p class="px-3 py-2 text-xs font-semibold uppercase tracking-wide opacity-60">
        jane@example.com
      </p>
    </template>
    <template #item="{ item }">
      <NIcon v-if="item.icon" :name="item.icon" />
      <span class="flex-1">{{ item.label }}</span>
      <NBadge v-if="item.shortcut" :label="item.shortcut" size="xs" />
    </template>
  </NMenu>
</template>
