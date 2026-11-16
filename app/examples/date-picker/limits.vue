<script setup lang="ts">
const date = ref<string | null>(null);

// No weekends
const isWeekend = (iso: string) => [0, 6].includes(new Date(`${iso}T00:00:00Z`).getUTCDay());
</script>

<template>
  <div class="max-w-xs">
    <NDatePicker
      v-model="date"
      min="2024-06-03"
      max="2024-06-28"
      :is-date-disabled="isWeekend"
      :week-start="1"
      placeholder="Weekdays in June"
      label="Delivery date"
    />
  </div>
</template>
