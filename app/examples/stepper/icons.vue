<script setup lang="ts">
const step = ref(0);
const items = [
  { title: 'Details', icon: 'i-lucide-user' },
  { title: 'Address', icon: 'i-lucide-map-pin' },
  { title: 'Payment', icon: 'i-lucide-credit-card' }
];
</script>

<template>
  <div class="flex flex-col gap-4">
    <NStepper v-model="step" :items="items" :clickable="false" />
    <div class="flex gap-2">
      <NButton variant="outline" :disabled="step === 0" @click="step--">Back</NButton>
      <NButton :disabled="step === items.length - 1" @click="step++">Next</NButton>
    </div>
  </div>
</template>
