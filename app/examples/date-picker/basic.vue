<script setup lang="ts">
const date = ref<string | null>('2024-06-15');
</script>

<template>
  <div class="max-w-xs">
    <NDatePicker v-model="date" placeholder="Pick a date" label="Date" />
  </div>
</template>
