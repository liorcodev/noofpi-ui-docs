<script setup lang="ts">
const range = ref('week');

const items = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month', disabled: true },
  { value: 'year', label: 'Year' }
];
</script>

<template>
  <div class="flex flex-wrap items-center gap-4">
    <NToggleGroup v-model="range" :items="items" label="One item disabled" />
    <NToggleGroup v-model="range" :items="items" disabled label="Whole group disabled" />
  </div>
</template>
