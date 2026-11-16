<script setup lang="ts">
const date = ref<string | null>('2024-06-15');
</script>

<template>
  <div class="flex flex-col items-start gap-3">
    <NCalendar v-model="date" />
    <p class="text-sm">Selected: {{ date ?? 'none' }}</p>
  </div>
</template>
