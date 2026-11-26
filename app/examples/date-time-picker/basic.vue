<script setup lang="ts">
const value = ref<string | null>('2024-06-15T14:30');
</script>

<template>
  <div class="max-w-xs">
    <NDateTimePicker v-model="value" placeholder="Pick a date and time" label="Date and time" />
  </div>
</template>
