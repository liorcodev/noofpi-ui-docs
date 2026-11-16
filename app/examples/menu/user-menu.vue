<script setup lang="ts">
import type { MenuItem } from 'noofpi-ui';

const items: MenuItem[][] = [
  [{ type: 'label', label: 'Jane Doe', description: 'jane@example.com' }],
  [
    { label: 'Profile', icon: 'i-lucide-user', to: '#' },
    { label: 'Settings', icon: 'i-lucide-settings', to: '#' }
  ],
  [{ label: 'Sign out', icon: 'i-lucide-log-out', color: 'error' }]
];
</script>

<template>
  <div class="flex justify-end">
    <NMenu :items="items" placement="bottom-end" label="User menu">
      <NAvatar alt="Jane Doe" text="JD" />
    </NMenu>
  </div>
</template>
