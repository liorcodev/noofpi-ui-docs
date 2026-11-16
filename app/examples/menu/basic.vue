<script setup lang="ts">
import type { MenuItem } from 'noofpi-ui';

const items: MenuItem[] = [
  { label: 'Edit', icon: 'i-lucide-pencil' },
  { label: 'Duplicate', icon: 'i-lucide-copy' },
  { label: 'Archive', icon: 'i-lucide-archive' }
];
</script>

<template>
  <NMenu :items="items" label="Actions">
    <NButton
      label="Actions"
      variant="outline"
      color="neutral"
      trailing-icon="i-lucide-chevron-down"
    />
  </NMenu>
</template>
