<script setup lang="ts">
const channels = ref(['email']);
const size = ref('md');

const options = [
  { label: 'Email', value: 'email' },
  { label: 'SMS', value: 'sms' },
  { label: 'Push', value: 'push' }
];
const sizes = [
  { label: 'Small', value: 'sm' },
  { label: 'Medium', value: 'md' },
  { label: 'Large', value: 'lg' }
];
</script>

<template>
  <div class="flex flex-col gap-4">
    <NCheckboxGroup v-model="channels" :items="options" orientation="horizontal" />
    <NRadioGroup v-model="size" :items="sizes" orientation="horizontal" />
  </div>
</template>
