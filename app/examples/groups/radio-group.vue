<script setup lang="ts">
const plan = ref('pro');

const plans = [
  { label: 'Free', value: 'free', description: 'For personal projects.' },
  { label: 'Pro', value: 'pro', description: 'For small teams.' },
  { label: 'Enterprise', value: 'enterprise', description: 'For large organizations.' }
];
</script>

<template>
  <div class="flex flex-col gap-3">
    <NRadioGroup v-model="plan" :items="plans" />
    <span class="text-sm">Plan: {{ plan }}</span>
  </div>
</template>
