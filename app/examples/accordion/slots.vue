<script setup lang="ts">
import type { AccordionItem } from 'noofpi-ui';

const items: AccordionItem[] = [
  { label: 'Shipping', value: 'shipping' },
  { label: 'Returns', value: 'returns' },
  { label: 'Warranty', value: 'warranty' }
];
</script>

<template>
  <NAccordion :items="items">
    <template #label="{ item, open }">
      <span class="flex-1 text-left">{{ item.label }}</span>
      <NBadge :label="open ? 'Open' : 'Closed'" :color="open ? 'success' : 'neutral'" size="xs" />
    </template>
    <template #shipping>
      <p class="text-sm">Ships in 2 days.</p>
    </template>
    <template #panel="{ item }">
      <p class="text-sm">Details about {{ item.label.toLowerCase() }}.</p>
    </template>
  </NAccordion>
</template>
