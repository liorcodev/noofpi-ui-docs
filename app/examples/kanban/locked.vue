<script setup lang="ts">
import type { KanbanColumn } from 'noofpi-ui';

const readonly = ref(false);

const columns = ref<KanbanColumn[]>([
  {
    id: 'todo',
    title: 'To do',
    items: [
      { id: 1, title: 'Plan the migration' },
      { id: 2, title: 'Back up the database', disabled: true }
    ]
  },
  {
    id: 'doing',
    title: 'In progress',
    items: [{ id: 3, title: 'Write the rollback script' }]
  },
  {
    id: 'released',
    title: 'Released',
    disabled: true,
    items: [{ id: 4, title: 'Upgrade to Node 22' }]
  }
]);
</script>

<template>
  <div class="flex flex-col gap-4">
    <NSwitch v-model="readonly" label="Read-only board" />
    <NKanban v-model:columns="columns" :disabled="readonly" addable label="Migration board" />
  </div>
</template>
