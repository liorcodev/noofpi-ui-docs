<script setup lang="ts">
import type { KanbanColumn, KanbanMoveEvent } from 'noofpi-ui';

const columns = ref<KanbanColumn[]>([
  {
    id: 'todo',
    title: 'To do',
    items: [
      { id: 1, title: 'Plan the sprint' },
      { id: 2, title: 'Triage new issues' }
    ]
  },
  {
    id: 'doing',
    title: 'In progress',
    items: [{ id: 3, title: 'Refactor the auth module' }]
  },
  { id: 'done', title: 'Done', items: [] }
]);

const log = ref('Move a card or add one.');
let nextId = 4;

function onMove({ item, from, to }: KanbanMoveEvent) {
  log.value = `Moved "${item.title}" from ${from.column} (${from.index}) to ${to.column} (${to.index}).`;
}

function onAdd(column: KanbanColumn) {
  const target = columns.value.find(c => c.id === column.id);
  target?.items.push({ id: nextId, title: `New card ${nextId}` });
  nextId++;
  log.value = `Added a card to ${column.title}.`;
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <NKanban
      v-model:columns="columns"
      addable
      add-label="New card"
      empty-label="Drop a card here"
      label="Sprint board"
      @move="onMove"
      @add="onAdd"
    />
    <p class="text-sm">{{ log }}</p>
  </div>
</template>
