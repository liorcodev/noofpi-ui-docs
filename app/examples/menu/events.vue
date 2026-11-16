<script setup lang="ts">
import { toast } from 'noofpi-ui';
import type { MenuItem } from 'noofpi-ui';

const open = ref(false);
const items: MenuItem[] = [
  {
    label: 'Copy link',
    icon: 'i-lucide-link',
    onSelect: () => toast.add({ title: 'Link copied', color: 'success' })
  },
  {
    label: 'Refresh (keeps the menu open)',
    icon: 'i-lucide-refresh-cw',
    onSelect: event => {
      event.preventDefault();
      toast.add({ title: 'Refreshed', duration: 1500 });
    }
  }
];
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <NMenu v-model:open="open" :items="items" label="Share">
      <NButton label="Share" variant="outline" color="neutral" />
    </NMenu>
    <NBadge
      :label="open ? 'open' : 'closed'"
      :color="open ? 'success' : 'neutral'"
      variant="soft"
    />
    <NToaster />
  </div>
</template>
