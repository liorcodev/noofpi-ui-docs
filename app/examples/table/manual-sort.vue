<script setup lang="ts">
import type { TableColumn, TableSort } from 'noofpi-ui';

const columns: TableColumn[] = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'role', label: 'Role' },
  { key: 'seats', label: 'Seats', sortable: true, align: 'end' }
];

const all: Record<string, string | number>[] = [
  { id: 1, name: 'Jane Cooper', role: 'Admin', seats: 12 },
  { id: 2, name: 'Wade Warren', role: 'Editor', seats: 3 },
  { id: 3, name: 'Esther Howard', role: 'Viewer', seats: 25 }
];

const sort = ref<TableSort>();

// Stands in for a request that returns rows already sorted by the server
const data = computed(() => {
  const current = sort.value;
  if (!current) return all;
  const sign = current.direction === 'asc' ? 1 : -1;
  return [...all].sort((a, b) => (a[current.key] > b[current.key] ? sign : -sign));
});
</script>

<template>
  <NTable v-model:sort="sort" manual-sort :columns="columns" :data="data" row-key="id" />
</template>
