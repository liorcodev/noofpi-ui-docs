<script setup lang="ts">
const value = ref<string | null>('2024-06-15T18:00');
</script>

<template>
  <div class="max-w-xs">
    <NDateTimePicker
      v-model="value"
      time-zone="Europe/Berlin"
      locale="en-GB"
      placeholder="Pick a date and time"
      label="Event start"
    />
  </div>
</template>
