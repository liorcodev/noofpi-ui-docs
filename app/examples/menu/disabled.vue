<script setup lang="ts">
import type { MenuItem } from 'noofpi-ui';

const items: MenuItem[] = [
  { label: 'Rename', icon: 'i-lucide-pencil' },
  { label: 'Move', icon: 'i-lucide-folder-input', disabled: true },
  { label: 'Delete', icon: 'i-lucide-trash-2', color: 'error' }
];
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <NMenu :items="items" label="Item disabled">
      <NButton label="Disabled item" variant="outline" color="neutral" />
    </NMenu>
    <NMenu :items="items" disabled label="Menu disabled">
      <NButton label="Disabled menu" variant="outline" color="neutral" disabled />
    </NMenu>
  </div>
</template>
