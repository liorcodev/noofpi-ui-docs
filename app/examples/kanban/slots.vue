<script setup lang="ts">
import type { KanbanColumn, KanbanItem } from 'noofpi-ui';

const columns = ref<KanbanColumn[]>([
  {
    id: 'todo',
    title: 'To do',
    color: 'neutral',
    items: [
      { id: 1, title: 'Fix the login redirect', points: 3, priority: 'high' },
      { id: 2, title: 'Translate the emails', points: 5, priority: 'low' }
    ]
  },
  {
    id: 'doing',
    title: 'In progress',
    color: 'primary',
    items: [{ id: 3, title: 'Speed up the report export', points: 8, priority: 'high' }]
  },
  { id: 'done', title: 'Done', color: 'success', items: [] }
]);

function total(items: KanbanItem[]) {
  return items.reduce((sum, item) => sum + Number(item.points ?? 0), 0);
}
</script>

<template>
  <NKanban v-model:columns="columns" label="Story board">
    <template #column-header="{ column, count }">
      <h3 class="flex-1 font-semibold">{{ column.title }}</h3>
      <span class="text-xs">{{ count }} cards, {{ total(column.items) }} points</span>
    </template>

    <template #card="{ item, dragging }">
      <div class="flex w-full items-center justify-between gap-2">
        <p class="font-medium">{{ item.title }}</p>
        <NBadge
          :label="`${item.points} pts`"
          :color="item.priority === 'high' ? 'error' : 'neutral'"
          size="xs"
          variant="soft"
        />
      </div>
      <p v-if="dragging" class="text-xs">Moving...</p>
    </template>

    <template #empty="{ column }">
      <span>Nothing in {{ column.title }} yet</span>
    </template>

    <template #column-footer="{ column }">
      <p class="px-1 text-xs">{{ column.items.length }} in this column</p>
    </template>
  </NKanban>
</template>
