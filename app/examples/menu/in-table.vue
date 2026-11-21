<script setup lang="ts">
const columns = [
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' },
  { key: 'actions', label: '', align: 'end' as const, width: '4rem' }
];

const data = [
  { id: 1, name: 'Ada Lovelace', role: 'Admin' },
  { id: 2, name: 'Grace Hopper', role: 'Editor' },
  { id: 3, name: 'Alan Turing', role: 'Viewer' }
];

const items = [
  [
    { label: 'Edit', icon: 'i-lucide-pencil' },
    { label: 'Copy link', icon: 'i-lucide-link' }
  ],
  [{ label: 'Delete', icon: 'i-lucide-trash-2', color: 'error' as const }]
];
</script>

<template>
  <NCard>
    <NTable label="Users" row-key="id" :columns="columns" :data="data">
      <template #cell-actions="{ row }">
        <NMenu :items="items" placement="bottom-end" label="User actions">
          <NButton
            icon="i-lucide-ellipsis"
            variant="ghost"
            color="neutral"
            shape="circle"
            size="sm"
            :aria-label="`Actions for ${row.name}`"
          />
        </NMenu>
      </template>
    </NTable>
  </NCard>
</template>
