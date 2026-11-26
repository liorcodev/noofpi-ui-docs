<script setup lang="ts">
import type { FilterBarFilter } from 'noofpi-ui';

const filters = [
  { key: 'price', label: 'Price', type: 'number', min: 0 },
  {
    key: 'color',
    label: 'Color',
    type: 'select',
    options: [
      { label: 'Red', value: 'red', color: 'error' },
      { label: 'Green', value: 'green', color: 'success' },
      { label: 'Blue', value: 'blue', color: 'info' }
    ]
  }
] as const;

const value = ref({ search: '', filters: { price: 40, color: 'green' }, sort: null });

function formatValue(filter: FilterBarFilter, filterValue: unknown) {
  if (filter.key === 'price') return `$${filterValue}`;
  return undefined;
}
</script>

<template>
  <NFilterBar v-model="value" :filters="[...filters]" :format-value="formatValue" locale="en-US">
    <template #value="{ filter, text }">
      <strong v-if="filter.key === 'color'">{{ text }}</strong>
      <template v-else>{{ text }}</template>
    </template>

    <template #empty>
      <span class="text-sm text-neutral-500">No filters yet. Open Filters to add some.</span>
    </template>
  </NFilterBar>
</template>
