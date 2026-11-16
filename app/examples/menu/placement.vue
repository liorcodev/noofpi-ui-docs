<script setup lang="ts">
import type { MenuItem, MenuPlacement } from 'noofpi-ui';

const items: MenuItem[] = [
  { label: 'Profile', icon: 'i-lucide-user' },
  { label: 'Settings', icon: 'i-lucide-settings' }
];

const placements: MenuPlacement[] = ['bottom-start', 'bottom', 'bottom-end'];
</script>

<template>
  <div class="flex flex-wrap items-center justify-center gap-3">
    <NMenu v-for="placement in placements" :key="placement" :items="items" :placement="placement">
      <NButton :label="placement" variant="outline" color="neutral" size="sm" />
    </NMenu>
  </div>
</template>
