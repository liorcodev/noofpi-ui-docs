<script setup lang="ts">
import type { TabItem } from 'noofpi-ui';

const tabs: TabItem[] = [
  { label: 'Overview', value: 'overview' },
  { label: 'Analytics', value: 'analytics' },
  { label: 'Reports', value: 'reports' }
];
</script>

<template>
  <div class="flex flex-col gap-8">
    <NTabs :items="tabs" variant="line" label="Line tabs">
      <template #panel="{ item }">
        <p class="text-sm">{{ item.label }} with the line variant.</p>
      </template>
    </NTabs>
    <NTabs :items="tabs" variant="pill" label="Pill tabs">
      <template #panel="{ item }">
        <p class="text-sm">{{ item.label }} with the pill variant.</p>
      </template>
    </NTabs>
  </div>
</template>
