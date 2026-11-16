<script setup lang="ts">
import type { TabItem } from 'noofpi-ui';

const tabs: TabItem[] = [
  { label: 'Compose', value: 'compose' },
  { label: 'Help', value: 'help' }
];
</script>

<template>
  <NTabs :items="tabs" keep-alive label="Editor">
    <template #compose>
      <textarea
        class="w-full rounded-lg border border-neutral-300 bg-transparent p-2 text-sm"
        rows="3"
        placeholder="Type here, switch tabs, and come back."
      />
    </template>
    <template #help>
      <p class="text-sm">With keep-alive, the text you typed is still there.</p>
    </template>
  </NTabs>
</template>
