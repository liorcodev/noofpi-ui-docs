<script setup lang="ts">
import type { KanbanColumn } from 'noofpi-ui';

const columns = ref<KanbanColumn[]>([
  {
    id: 'todo',
    title: 'To do',
    color: 'neutral',
    items: [
      {
        id: 1,
        title: 'Add dark mode to the settings page',
        description: 'Use the existing theme tokens and test both themes.',
        badge: 'Feature',
        color: 'info',
        assignee: 'Dana Levi'
      },
      {
        id: 2,
        title: 'Rotate the API keys',
        badge: 'Urgent',
        color: 'error',
        assignee: 'Omar Haddad'
      }
    ]
  },
  {
    id: 'doing',
    title: 'In progress',
    color: 'primary',
    items: [
      {
        id: 3,
        title: 'Migrate the docs to the new layout',
        description: 'Move the pages one section at a time.',
        badge: 'Docs',
        color: 'warning'
      },
      {
        id: 4,
        title: 'Waiting for the design review',
        description: 'This card is locked until the review is done.',
        disabled: true
      }
    ]
  },
  {
    id: 'done',
    title: 'Done',
    color: 'success',
    items: [
      {
        id: 5,
        title: 'Set up the CI pipeline',
        badge: 'Chore',
        color: 'success',
        assignee: 'Dana Levi'
      }
    ]
  }
]);
</script>

<template>
  <NKanban v-model:columns="columns" label="Team board" />
</template>
