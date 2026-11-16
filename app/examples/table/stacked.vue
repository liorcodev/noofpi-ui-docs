<script setup lang="ts">
import type { TableColumn, TableSort } from 'noofpi-ui';

const columns: TableColumn[] = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'role', label: 'Role' },
  { key: 'email', label: 'Email' },
  { key: 'seats', label: 'Seats', sortable: true, align: 'end' }
];

const members = [
  { id: 1, name: 'Jane Cooper', role: 'Admin', email: 'jane@acme.com', seats: 12 },
  { id: 2, name: 'Wade Warren', role: 'Editor', email: 'wade@acme.com', seats: 3 },
  { id: 3, name: 'Esther Howard', role: 'Viewer', email: 'esther@acme.com', seats: 25 }
];

const sort = ref<TableSort>();
</script>

<template>
  <NTable v-model:sort="sort" stack-below="xl" :columns="columns" :data="members" row-key="id" />
</template>
