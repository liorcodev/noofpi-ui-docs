<script setup lang="ts">
import type { KanbanColumn } from 'noofpi-ui';

const enforce = ref(true);

const columns = ref<KanbanColumn[]>([
  {
    id: 'backlog',
    title: 'Backlog',
    items: [
      { id: 1, title: 'Improve the search ranking' },
      { id: 2, title: 'Add CSV export' },
      { id: 3, title: 'Support SSO login' },
      { id: 4, title: 'Redesign the invoice email' }
    ]
  },
  {
    id: 'doing',
    title: 'In progress',
    color: 'primary',
    limit: 2,
    items: [
      { id: 5, title: 'Fix the upload timeout' },
      { id: 6, title: 'Cache the dashboard queries' }
    ]
  },
  {
    id: 'review',
    title: 'In review',
    color: 'warning',
    limit: 3,
    items: [{ id: 7, title: 'Update the onboarding checklist' }]
  }
]);
</script>

<template>
  <div class="flex flex-col gap-4">
    <NSwitch v-model="enforce" label="Enforce the limits" />
    <NKanban v-model:columns="columns" :enforce-limit="enforce" label="Limited board" />
  </div>
</template>
