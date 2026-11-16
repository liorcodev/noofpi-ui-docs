<script setup lang="ts">
const dates = ref({ start: '2024-06-10', end: '2024-06-14' });
</script>

<template>
  <div class="max-w-xs">
    <NDatePicker v-model="dates" range placeholder="Pick a range" label="Stay" />
  </div>
</template>
