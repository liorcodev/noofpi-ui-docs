<script setup lang="ts">
const value = ref<string | null>('2024-06-15T14:30');
</script>

<template>
  <div class="flex max-w-xs flex-col gap-2">
    <NDateTimePicker
      v-model="value"
      clearable
      placeholder="Pick a date and time"
      label="Deadline"
    />
    <p class="text-sm text-neutral-500">Value: {{ value ?? 'null' }}</p>
  </div>
</template>
