<script setup lang="ts">
import type { TableColumn } from 'noofpi-ui';

const columns: TableColumn[] = [
  { key: 'name', label: 'Name', nowrap: true },
  { key: 'role', label: 'Role', hideBelow: 'lg' },
  { key: 'email', label: 'Email', hideBelow: 'md' },
  { key: 'seats', label: 'Seats', align: 'center', width: '6rem' }
];

const members = [
  { id: 1, name: 'Jane Cooper', role: 'Admin', email: 'jane@acme.com', seats: 12 },
  { id: 2, name: 'Wade Warren', role: 'Editor', email: 'wade@acme.com', seats: 3 },
  { id: 3, name: 'Esther Howard', role: 'Viewer', email: 'esther@acme.com', seats: 25 }
];
</script>

<template>
  <NTable :columns="columns" :data="members" row-key="id" />
</template>
