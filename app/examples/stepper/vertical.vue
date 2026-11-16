<script setup lang="ts">
const step = ref(1);
const items = [
  { title: 'Cart', description: '3 items' },
  { title: 'Shipping', description: 'Where to send it' },
  { title: 'Payment', description: 'Card or invoice' }
];
</script>

<template>
  <div class="flex flex-col items-start gap-4">
    <NStepper v-model="step" :items="items" orientation="vertical" />
    <NButton :disabled="step === items.length - 1" @click="step++">Next</NButton>
  </div>
</template>
