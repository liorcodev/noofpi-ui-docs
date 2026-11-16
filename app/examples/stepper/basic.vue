<script setup lang="ts">
const step = ref(1);
const items = [
  { title: 'Account', description: 'Create your login' },
  { title: 'Profile', description: 'Tell us about you' },
  { title: 'Plan', description: 'Pick a plan' },
  { title: 'Done' }
];
</script>

<template>
  <div class="flex flex-col gap-4">
    <NStepper v-model="step" :items="items" />
    <div class="flex gap-2">
      <NButton variant="outline" :disabled="step === 0" @click="step--">Back</NButton>
      <NButton :disabled="step === items.length - 1" @click="step++">Next</NButton>
    </div>
  </div>
</template>
