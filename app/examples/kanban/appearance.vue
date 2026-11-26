<script setup lang="ts">
import type { KanbanColumn } from 'noofpi-ui';

const variant = ref<'soft' | 'outline'>('soft');
const size = ref<'sm' | 'md' | 'lg'>('md');

const variants = [
  { label: 'Soft', value: 'soft' },
  { label: 'Outline', value: 'outline' }
];
const sizes = [
  { label: 'Small', value: 'sm' },
  { label: 'Medium', value: 'md' },
  { label: 'Large', value: 'lg' }
];

const columns = ref<KanbanColumn[]>([
  {
    id: 'todo',
    title: 'To do',
    color: 'neutral',
    items: [
      { id: 1, title: 'Draft the launch post', badge: 'Content', assignee: 'Noa Katz' },
      { id: 2, title: 'Book the demo room' },
      { id: 3, title: 'Collect customer quotes' },
      { id: 4, title: 'Prepare the press kit' },
      { id: 5, title: 'Check the pricing page' }
    ]
  },
  {
    id: 'doing',
    title: 'In progress',
    color: 'primary',
    items: [{ id: 6, title: 'Record the product video', badge: 'Video', color: 'info' }]
  },
  {
    id: 'done',
    title: 'Done',
    color: 'success',
    items: [{ id: 7, title: 'Pick the launch date' }]
  }
]);
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-center gap-3">
      <NSelect v-model="variant" :items="variants" label="Variant" class="w-36" />
      <NSelect v-model="size" :items="sizes" label="Size" class="w-36" />
    </div>
    <NKanban
      v-model:columns="columns"
      :variant="variant"
      :size="size"
      label="Launch board"
      style="--n-kanban-height: 22rem"
    />
  </div>
</template>
