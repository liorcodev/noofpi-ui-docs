<script setup lang="ts">
const plan = ref('monthly');
const size = ref('m');

const plans = [
  { value: 'monthly', label: 'Monthly' },
  { value: 'yearly', label: 'Yearly' }
];

const sizes = [
  { value: 's', label: 'Small' },
  { value: 'm', label: 'Medium' },
  { value: 'l', label: 'Large' }
];
</script>

<template>
  <div class="flex flex-wrap items-start gap-6">
    <NToggleGroup v-model="plan" :items="plans" block label="Billing" class="w-64" />
    <NToggleGroup v-model="size" :items="sizes" orientation="vertical" label="Size" />
  </div>
</template>
