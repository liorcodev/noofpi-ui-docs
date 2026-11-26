<script setup lang="ts">
const noon = ref<string | null>(null);
const now = ref<string | null>(null);
</script>

<template>
  <div class="flex max-w-xs flex-col gap-4">
    <NDateTimePicker
      v-model="noon"
      default-time="12:00"
      placeholder="A new date starts at 12:00"
      label="Lunch"
    />
    <NDateTimePicker
      v-model="now"
      default-time="now"
      :minute-step="5"
      placeholder="A new date starts at the current time"
      label="Reminder"
    />
  </div>
</template>
