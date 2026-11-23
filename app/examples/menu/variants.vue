<script setup lang="ts">
import type { MenuItem } from 'noofpi-ui';

const items: MenuItem[] = [
  { label: 'Ghost', icon: 'i-lucide-pencil' },
  { label: 'Soft', icon: 'i-lucide-copy', variant: 'soft', color: 'primary' },
  { label: 'Subtle', icon: 'i-lucide-share-2', variant: 'subtle', color: 'primary' },
  { label: 'Outline', icon: 'i-lucide-archive', variant: 'outline', color: 'primary' },
  { label: 'Solid', icon: 'i-lucide-star', variant: 'solid', color: 'primary' },
  { label: 'Link', icon: 'i-lucide-link', variant: 'link' },
  { label: 'Delete', icon: 'i-lucide-trash-2', variant: 'solid', color: 'error' }
];
</script>

<template>
  <NMenu :items="items" label="Variants">
    <NButton
      label="Variants"
      variant="outline"
      color="neutral"
      trailing-icon="i-lucide-chevron-down"
    />
  </NMenu>
</template>
