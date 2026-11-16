<script setup lang="ts">
import type { TableColumn, TableRow } from 'noofpi-ui';

const columns: TableColumn[] = [
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' },
  { key: 'actions', label: '', align: 'end' }
];

const members = [
  { id: 1, name: 'Jane Cooper', role: 'Admin' },
  { id: 2, name: 'Wade Warren', role: 'Editor' },
  { id: 3, name: 'Esther Howard', role: 'Viewer' }
];

const selected = ref('Nobody');

function onRowClick(row: TableRow) {
  selected.value = String(row.name);
}
</script>

<template>
  <div class="space-y-3">
    <NTable clickable :columns="columns" :data="members" row-key="id" @row-click="onRowClick">
      <template #cell-actions>
        <NButton label="Remove" variant="ghost" color="error" size="xs" />
      </template>
    </NTable>
    <p class="text-sm">Selected: {{ selected }}</p>
  </div>
</template>
