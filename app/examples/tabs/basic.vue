<script setup lang="ts">
import type { TabItem } from 'noofpi-ui';

const tab = ref('account');
const tabs: TabItem[] = [
  { label: 'Account', value: 'account' },
  { label: 'Billing', value: 'billing' },
  { label: 'Notifications', value: 'notifications' }
];
</script>

<template>
  <NTabs v-model="tab" :items="tabs" label="Settings">
    <template #account>
      <p class="text-sm">Update your name, email and password.</p>
    </template>
    <template #billing>
      <p class="text-sm">Manage your plan and payment methods.</p>
    </template>
    <template #notifications>
      <p class="text-sm">Choose what you hear about, and how.</p>
    </template>
  </NTabs>
</template>
