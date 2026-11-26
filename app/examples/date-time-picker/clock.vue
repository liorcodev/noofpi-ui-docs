<script setup lang="ts">
const twelve = ref<string | null>('2024-06-15T14:30');
const precise = ref<string | null>('2024-06-15T09:15:30');
</script>

<template>
  <div class="flex max-w-xs flex-col gap-4">
    <NDateTimePicker
      v-model="twelve"
      hour12
      :minute-step="15"
      placeholder="12-hour clock, every 15 minutes"
      label="Meeting start"
    />
    <NDateTimePicker
      v-model="precise"
      :hour12="false"
      seconds
      placeholder="With seconds"
      label="Timestamp"
    />
  </div>
</template>
