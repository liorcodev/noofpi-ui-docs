<script setup lang="ts">
const value = ref<string | null>(null);

// No weekends
const isWeekend = (iso: string) => [0, 6].includes(new Date(`${iso}T00:00:00Z`).getUTCDay());
</script>

<template>
  <div class="max-w-xs">
    <NDateTimePicker
      v-model="value"
      min="2024-06-03T09:00"
      max="2024-06-28T17:00"
      :minute-step="30"
      :is-date-disabled="isWeekend"
      :week-start="1"
      placeholder="Weekdays in June, 9:00 to 17:00"
      label="Appointment"
    />
  </div>
</template>
