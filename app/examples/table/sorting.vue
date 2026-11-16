<script setup lang="ts">
import type { TableColumn, TableSort } from 'noofpi-ui';

const columns: TableColumn[] = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'joined', label: 'Joined', sortable: true },
  { key: 'seats', label: 'Seats', sortable: true, align: 'end' }
];

const members = [
  { id: 1, name: 'Jane Cooper', joined: '2024-03-12', seats: 12 },
  { id: 2, name: 'Wade Warren', joined: '2023-11-02', seats: 3 },
  { id: 3, name: 'Esther Howard', joined: '2025-01-20', seats: 25 },
  { id: 4, name: 'Item 10', joined: '2024-08-01', seats: 8 },
  { id: 5, name: 'Item 2', joined: '', seats: null }
];

const sort = ref<TableSort | undefined>({ key: 'name', direction: 'asc' });
</script>

<template>
  <NTable v-model:sort="sort" :columns="columns" :data="members" row-key="id" />
</template>
