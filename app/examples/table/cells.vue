<script setup lang="ts">
import type { TableColumn } from 'noofpi-ui';

const columns: TableColumn[] = [
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' },
  { key: 'status', label: 'Status' },
  { key: 'seats', label: 'Seats', align: 'end' },
  { key: 'actions', label: '', align: 'end' }
];

const members = [
  { id: 1, name: 'Jane Cooper', role: 'Admin', status: 'Active', seats: 12 },
  { id: 2, name: 'Wade Warren', role: 'Editor', status: 'Invited', seats: 3 },
  { id: 3, name: 'Esther Howard', role: 'Viewer', status: 'Suspended', seats: 25 }
];

const colors = { Active: 'success', Invited: 'info', Suspended: 'error' } as const;
</script>

<template>
  <NTable :columns="columns" :data="members" row-key="id">
    <template #header-seats="{ column }">
      <span class="inline-flex items-center gap-1">
        <span class="i-lucide-users" />
        {{ column.label }}
      </span>
    </template>

    <template #cell-name="{ value }">
      <span class="font-medium">{{ value }}</span>
    </template>

    <template #cell-status="{ value }">
      <NBadge :label="String(value)" :color="colors[value as keyof typeof colors]" variant="soft" />
    </template>

    <template #cell-actions="{ row }">
      <NButton
        icon="i-lucide-pencil"
        variant="ghost"
        color="neutral"
        size="xs"
        :aria-label="`Edit ${row.name}`"
      />
    </template>

    <template #footer>
      <p class="text-sm">Showing 3 of 3 members</p>
    </template>
  </NTable>
</template>
