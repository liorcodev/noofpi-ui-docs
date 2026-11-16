<script setup lang="ts">
const search = ref('');
const user = ref<string>();

const people = [
  { label: 'Ada Lovelace', value: 'ada', description: 'Mathematician' },
  { label: 'Alan Turing', value: 'alan', description: 'Computer scientist' },
  { label: 'Grace Hopper', value: 'grace', description: 'Rear admiral' },
  { label: 'Linus Torvalds', value: 'linus', description: 'Kernel maintainer' },
  { label: 'Margaret Hamilton', value: 'margaret', description: 'Software engineer' }
];

// Stands in for a server search: filters by the typed text itself
const results = computed(() => {
  const term = search.value.trim().toLowerCase();
  return term ? people.filter(p => p.label.toLowerCase().includes(term)) : people;
});
</script>

<template>
  <div class="max-w-xs">
    <NCombobox
      v-model="user"
      v-model:search-term="search"
      :items="results"
      :filter="false"
      clearable
      placeholder="Search people"
      label="Person"
      empty-text="Nobody found"
    />
  </div>
</template>
