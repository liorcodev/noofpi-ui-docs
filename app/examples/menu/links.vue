<script setup lang="ts">
import type { MenuItem } from 'noofpi-ui';

const items: MenuItem[] = [
  {
    label: 'Documentation',
    icon: 'i-lucide-book-open',
    to: 'https://vuejs.org',
    target: '_blank'
  },
  {
    label: 'Source code',
    icon: 'i-lucide-code',
    to: 'https://github.com',
    target: '_blank'
  },
  { label: 'Back to top', icon: 'i-lucide-arrow-up', to: '#' }
];
</script>

<template>
  <NMenu :items="items" label="Resources">
    <NButton
      label="Resources"
      variant="outline"
      color="neutral"
      trailing-icon="i-lucide-chevron-down"
    />
  </NMenu>
</template>
