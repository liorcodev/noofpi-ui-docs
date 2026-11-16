<script setup lang="ts">
const features = ref(['search']);
const tier = ref('basic');
const notifications = ref(['email']);

const items = [
  { label: 'Search', value: 'search' },
  { label: 'Analytics', value: 'analytics', disabled: true },
  { label: 'Exports', value: 'exports' }
];
const tiers = [
  { label: 'Basic', value: 'basic' },
  { label: 'Premium', value: 'premium', disabled: true }
];
const channels = [
  { label: 'Email', value: 'email' },
  { label: 'SMS', value: 'sms' }
];
</script>

<template>
  <div class="flex flex-col gap-4">
    <NCheckboxGroup v-model="features" :items="items" />
    <NRadioGroup v-model="tier" :items="tiers" orientation="horizontal" />
    <NCheckboxGroup v-model="notifications" :items="channels" orientation="horizontal" disabled />
  </div>
</template>
