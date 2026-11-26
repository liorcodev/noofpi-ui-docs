<script setup lang="ts">
import type { FilterBarValue, FilterBarView } from 'noofpi-ui';

const filters = [
  {
    key: 'status',
    label: 'Status',
    type: 'select',
    options: [
      { label: 'Active', value: 'active' },
      { label: 'Pending', value: 'pending' }
    ]
  }
] as const;

const sortOptions = [
  { key: 'name', label: 'Name' },
  { key: 'joined', label: 'Joined' }
];

const value = ref<FilterBarValue>({ search: '', filters: {}, sort: null });
const view = ref<string | number | null>(null);

const views = ref<FilterBarView[]>([
  {
    id: 'active',
    label: 'Active users',
    value: { search: '', filters: { status: 'active' }, sort: { key: 'name', direction: 'asc' } }
  },
  {
    id: 'pending',
    label: 'Pending, newest',
    value: {
      search: '',
      filters: { status: 'pending' },
      sort: { key: 'joined', direction: 'desc' }
    }
  }
]);

function saveView(saved: FilterBarValue) {
  const id = `view-${views.value.length + 1}`;
  views.value.push({ id, label: `Saved view ${views.value.length - 1}`, value: saved });
  view.value = id;
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <NFilterBar
      v-model="value"
      v-model:view="view"
      :filters="[...filters]"
      :sort-options="sortOptions"
      :views="views"
      saveable
      @save-view="saveView"
    />
    <pre class="overflow-x-auto rounded-lg bg-neutral-100 p-3 text-xs dark:bg-neutral-900">{{
      JSON.stringify(value, null, 2)
    }}</pre>
  </div>
</template>
