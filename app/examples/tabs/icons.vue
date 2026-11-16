<script setup lang="ts">
import type { TabItem } from 'noofpi-ui';

const tabs: TabItem[] = [
  { label: 'Profile', value: 'profile', icon: 'i-lucide-user' },
  { label: 'Security', value: 'security', icon: 'i-lucide-shield' },
  { label: 'Billing', value: 'billing', icon: 'i-lucide-credit-card', disabled: true }
];
</script>

<template>
  <NTabs :items="tabs" variant="pill" label="Account">
    <template #panel="{ item }">
      <p class="text-sm">{{ item.label }} settings.</p>
    </template>
  </NTabs>
</template>
