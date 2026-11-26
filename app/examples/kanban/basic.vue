<script setup lang="ts">
import type { KanbanColumn } from 'noofpi-ui';

const columns = ref<KanbanColumn[]>([
  {
    id: 'todo',
    title: 'To do',
    items: [
      { id: 1, title: 'Write the release notes' },
      { id: 2, title: 'Update the screenshots' },
      { id: 3, title: 'Review open pull requests' }
    ]
  },
  {
    id: 'doing',
    title: 'In progress',
    items: [{ id: 4, title: 'Fix the date picker bug' }]
  },
  {
    id: 'done',
    title: 'Done',
    items: [{ id: 5, title: 'Publish version 1.8.0' }]
  }
]);
</script>

<template>
  <NKanban v-model:columns="columns" label="Project board" />
</template>
