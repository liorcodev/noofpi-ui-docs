<script setup lang="ts">
import type { TableColumn } from 'noofpi-ui';

const columns: TableColumn[] = [
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' },
  { key: 'email', label: 'Email' }
];

const members = [
  { id: 1, name: 'Jane Cooper', role: 'Admin', email: 'jane@acme.com' },
  { id: 2, name: 'Wade Warren', role: 'Editor', email: 'wade@acme.com' },
  { id: 3, name: 'Esther Howard', role: 'Viewer', email: 'esther@acme.com' }
];
</script>

<template>
  <NTable :columns="columns" :data="members" row-key="id" caption="Team" />
</template>
