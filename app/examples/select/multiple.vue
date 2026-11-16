<script setup lang="ts">
const languages = ref(['ts']);

const items = [
  { label: 'TypeScript', value: 'ts' },
  { label: 'JavaScript', value: 'js' },
  { label: 'Rust', value: 'rs' },
  { label: 'Go', value: 'go' }
];
</script>

<template>
  <div class="flex max-w-xs flex-col gap-2">
    <NSelect v-model="languages" :items="items" multiple placeholder="Pick languages" />
    <span class="text-sm">Selected: {{ languages.join(', ') || 'none' }}</span>
  </div>
</template>
