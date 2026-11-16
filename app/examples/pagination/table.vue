<script setup lang="ts">
import type { TableColumn } from 'noofpi-ui';

const columns: TableColumn[] = [
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' }
];

const roles = ['Admin', 'Editor', 'Viewer'];
const members = Array.from({ length: 23 }, (_, index) => ({
  id: index + 1,
  name: `Member ${index + 1}`,
  role: roles[index % roles.length]
}));

const page = ref(1);
const pageSize = 5;
const rows = computed(() => members.slice((page.value - 1) * pageSize, page.value * pageSize));
</script>

<template>
  <NTable :columns="columns" :data="rows" row-key="id" caption="Team">
    <template #footer>
      <div class="flex justify-end p-3">
        <NPagination v-model="page" :total="members.length" :page-size="pageSize" />
      </div>
    </template>
  </NTable>
</template>
