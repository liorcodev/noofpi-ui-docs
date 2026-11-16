<script setup lang="ts">
const range = ref({ start: '2024-06-10', end: '2024-06-14' });
</script>

<template>
  <div class="flex flex-col items-start gap-3">
    <NCalendar v-model="range" range />
    <p class="text-sm">{{ range.start }} → {{ range.end ?? '…' }}</p>
  </div>
</template>
