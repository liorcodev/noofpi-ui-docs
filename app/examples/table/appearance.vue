<script setup lang="ts">
import type { TableColumn } from 'noofpi-ui';

const columns: TableColumn[] = [
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' },
  { key: 'seats', label: 'Seats', align: 'end' }
];

const members = [
  { id: 1, name: 'Jane Cooper', role: 'Admin', seats: 12 },
  { id: 2, name: 'Wade Warren', role: 'Editor', seats: 3 },
  { id: 3, name: 'Esther Howard', role: 'Viewer', seats: 25 }
];
</script>

<template>
  <div class="flex flex-col gap-6">
    <NTable
      v-for="size in ['sm', 'md', 'lg'] as const"
      :key="size"
      :size="size"
      :caption="`size: ${size}`"
      :columns="columns"
      :data="members"
      row-key="id"
    />
    <NTable caption="striped" striped :columns="columns" :data="members" row-key="id" />
    <NTable caption="border: lg" border="lg" :columns="columns" :data="members" row-key="id" />
    <NTable caption="border: none" border="none" :columns="columns" :data="members" row-key="id" />
  </div>
</template>
