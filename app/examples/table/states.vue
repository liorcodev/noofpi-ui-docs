<script setup lang="ts">
import type { TableColumn } from 'noofpi-ui';

const columns: TableColumn[] = [
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' }
];

const members = [
  { id: 1, name: 'Jane Cooper', role: 'Admin' },
  { id: 2, name: 'Wade Warren', role: 'Editor' }
];

const loading = ref(true);
</script>

<template>
  <div class="flex flex-col gap-6">
    <NButton
      :label="loading ? 'Stop loading' : 'Start loading'"
      variant="outline"
      size="sm"
      @click="loading = !loading"
    />
    <NTable caption="Loading, no rows" :loading="loading" :columns="columns" />
    <NTable
      caption="Loading, with rows"
      :loading="loading"
      :columns="columns"
      :data="members"
      row-key="id"
    />
    <NTable caption="Empty" empty="No members yet." :columns="columns" />
    <NTable caption="Empty slot" :columns="columns">
      <template #empty>
        <div class="flex flex-col items-center gap-2">
          <span class="i-lucide-users text-2xl" />
          <NButton label="Invite a member" icon="i-lucide-plus" size="sm" />
        </div>
      </template>
    </NTable>
  </div>
</template>
