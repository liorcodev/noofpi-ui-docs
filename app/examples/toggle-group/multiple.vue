<script setup lang="ts">
const format = ref(['bold']);

const items = [
  { value: 'bold', icon: 'i-lucide-bold', ariaLabel: 'Bold' },
  { value: 'italic', icon: 'i-lucide-italic', ariaLabel: 'Italic' },
  { value: 'underline', icon: 'i-lucide-underline', ariaLabel: 'Underline' }
];
</script>

<template>
  <div class="flex flex-col items-start gap-3">
    <NToggleGroup v-model="format" :items="items" multiple label="Text format" />
    <span class="text-sm">Selected: {{ format.join(', ') || 'none' }}</span>
  </div>
</template>
