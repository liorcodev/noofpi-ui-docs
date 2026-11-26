<script setup lang="ts">
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

const value = ref({ search: '', filters: { status: 'active' }, sort: null });
const log = ref<string[]>([]);

function add(message: string) {
  log.value = [message, ...log.value].slice(0, 4);
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <NFilterBar
      v-model="value"
      :filters="[...filters]"
      :debounce="600"
      @search="add(`search: ${JSON.stringify($event)}`)"
      @clear="add('clear')"
    >
      <template #leading>
        <NBadge label="Users" variant="soft" />
      </template>
      <template #trailing>
        <NButton label="Export" icon="i-lucide-download" variant="outline" color="neutral" />
      </template>
    </NFilterBar>

    <ul class="text-sm text-neutral-500">
      <li v-for="(entry, i) in log" :key="i">{{ entry }}</li>
    </ul>
  </div>
</template>
