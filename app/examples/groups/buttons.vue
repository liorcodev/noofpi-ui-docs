<script setup lang="ts">
const days = ref(['mon', 'wed']);
const view = ref('week');

const weekdays = [
  { label: 'Mon', value: 'mon' },
  { label: 'Tue', value: 'tue' },
  { label: 'Wed', value: 'wed' },
  { label: 'Thu', value: 'thu' },
  { label: 'Fri', value: 'fri' }
];
const views = [
  { label: 'Day', value: 'day' },
  { label: 'Week', value: 'week' },
  { label: 'Month', value: 'month' }
];
</script>

<template>
  <div class="flex flex-col gap-4">
    <NCheckboxGroup v-model="days" :items="weekdays" buttons orientation="horizontal" />
    <NRadioGroup
      v-model="view"
      :items="views"
      buttons
      orientation="horizontal"
      color="success"
      checked-variant="soft"
    />
  </div>
</template>
