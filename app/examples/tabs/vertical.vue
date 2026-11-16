<script setup lang="ts">
import type { TabItem } from 'noofpi-ui';

const tabs: TabItem[] = [
  { label: 'Profile', value: 'profile' },
  { label: 'Security', value: 'security' },
  { label: 'Teams', value: 'teams' }
];
</script>

<template>
  <div class="flex flex-col gap-8">
    <NTabs :items="tabs" orientation="vertical" label="Line">
      <template #panel="{ item }">
        <p class="text-sm">{{ item.label }} settings.</p>
      </template>
    </NTabs>
    <NTabs :items="tabs" orientation="vertical" variant="pill" label="Pill">
      <template #panel="{ item }">
        <p class="text-sm">{{ item.label }} settings.</p>
      </template>
    </NTabs>
  </div>
</template>
