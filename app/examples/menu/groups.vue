<script setup lang="ts">
import type { MenuItem } from 'noofpi-ui';

const items: MenuItem[][] = [
  [
    { label: 'New file', icon: 'i-lucide-file-plus', shortcut: 'Ctrl N' },
    { label: 'Open…', icon: 'i-lucide-folder-open', shortcut: 'Ctrl O' }
  ],
  [
    { label: 'Share', icon: 'i-lucide-share-2' },
    { label: 'Export', icon: 'i-lucide-download', shortcut: 'Ctrl E' }
  ],
  [{ label: 'Delete', icon: 'i-lucide-trash-2', color: 'error', shortcut: 'Del' }]
];
</script>

<template>
  <NMenu :items="items" label="File">
    <NButton label="File" variant="outline" color="neutral" trailing-icon="i-lucide-chevron-down" />
  </NMenu>
</template>
