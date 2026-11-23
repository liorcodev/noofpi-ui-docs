<script setup lang="ts">
const range = ref('week');

const items = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'year', label: 'Year' }
];
</script>

<template>
  <div class="flex flex-col items-start gap-3">
    <NToggleGroup v-model="range" :items="items" label="Range" />
    <span class="text-sm">Selected: {{ range }}</span>
  </div>
</template>
