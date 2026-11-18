<script setup lang="ts">
import type { CommandItem } from 'noofpi-ui';

const open = ref(false);
const selected = ref('Nothing selected yet');
const items: CommandItem[] = [
  {
    value: 'new',
    label: 'New project',
    description: 'Create a blank project',
    icon: 'i-lucide-plus',
    group: 'Actions',
    keywords: ['create', 'add'],
    shortcut: '⌘ N'
  },
  {
    value: 'invite',
    label: 'Invite team member',
    description: 'Send an invitation',
    icon: 'i-lucide-user-plus',
    group: 'Actions'
  },
  {
    value: 'docs',
    label: 'Open documentation',
    icon: 'i-lucide-book-open',
    group: 'Navigation',
    shortcut: '⌘ K'
  },
  {
    value: 'billing',
    label: 'Billing settings',
    icon: 'i-lucide-credit-card',
    group: 'Navigation',
    disabled: true
  }
];

function select(item: CommandItem) {
  selected.value = item.label;
}
</script>

<template>
  <div class="space-y-3">
    <NButton label="Open command palette" icon="i-lucide-command" @click="open = true" />
    <p class="text-sm text-zinc-500">{{ selected }}</p>
    <NCommandPalette v-model:open="open" :items="items" @select="select" />
  </div>
</template>
