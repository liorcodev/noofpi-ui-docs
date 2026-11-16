<script setup lang="ts">
import type { TableColumn } from 'noofpi-ui';

const columns: TableColumn[] = [
  { key: 'id', label: '#', width: '4rem' },
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' }
];

const roles = ['Admin', 'Editor', 'Viewer'];
const members = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Member ${i + 1}`,
  role: roles[i % roles.length]
}));
</script>

<template>
  <NTable max-height="14rem" :columns="columns" :data="members" row-key="id" />
</template>
