<script setup lang="ts">
const view = ref('list');
const align = ref('left');

const views = [
  { value: 'list', icon: 'i-lucide-list', ariaLabel: 'List' },
  { value: 'grid', icon: 'i-lucide-layout-grid', ariaLabel: 'Grid' }
];

const alignments = [
  { value: 'left', icon: 'i-lucide-align-left', label: 'Left' },
  { value: 'center', icon: 'i-lucide-align-center', label: 'Center' },
  { value: 'right', icon: 'i-lucide-align-right', label: 'Right' }
];
</script>

<template>
  <div class="flex flex-wrap items-center gap-4">
    <NToggleGroup v-model="view" :items="views" label="View" />
    <NToggleGroup v-model="align" :items="alignments" label="Alignment" />
  </div>
</template>
