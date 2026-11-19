<script setup lang="ts">
import type { MenuItem } from 'noofpi-ui';

const choice = ref('nothing yet');

const items: MenuItem[][] = [
  [
    { label: 'Open', icon: 'i-lucide-folder-open', shortcut: 'Enter' },
    { label: 'Rename', icon: 'i-lucide-pencil', shortcut: 'F2' },
    { label: 'Download', icon: 'i-lucide-download', disabled: true }
  ],
  [{ label: 'Delete', icon: 'i-lucide-trash-2', color: 'error' }]
];
</script>

<template>
  <div class="space-y-3">
    <NContextMenu :items="items" label="File actions" @select="choice = $event.label ?? ''">
      <div
        tabindex="0"
        class="flex h-40 items-center justify-center rounded-xl border border-dashed border-neutral-300 bg-white text-sm text-neutral-500 dark:border-neutral-700 dark:bg-neutral-900"
      >
        Right click anywhere in this box
      </div>
    </NContextMenu>
    <p class="text-sm text-neutral-500">Chose: {{ choice }}</p>
  </div>
</template>
