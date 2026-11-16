<script setup lang="ts">
import type { TabItem } from 'noofpi-ui';

const tabs: TabItem[] = [
  { label: 'Draft', value: 'draft' },
  { label: 'Preview', value: 'preview' },
  { label: 'Settings', value: 'settings' }
];
</script>

<template>
  <div class="flex flex-col gap-8">
    <div>
      <p class="mb-2 text-sm font-medium">Automatic: arrow keys select a tab</p>
      <NTabs :items="tabs" label="Automatic">
        <template #panel="{ item }">
          <p class="text-sm">{{ item.label }}</p>
        </template>
      </NTabs>
    </div>
    <div>
      <p class="mb-2 text-sm font-medium">Manual: arrow keys move focus, Enter or Space selects</p>
      <NTabs :items="tabs" activation="manual" label="Manual">
        <template #panel="{ item }">
          <p class="text-sm">{{ item.label }}</p>
        </template>
      </NTabs>
    </div>
  </div>
</template>
