<script setup lang="ts">
const toppings = ref(['cheese']);

const items = [
  { label: 'Cheese', value: 'cheese', description: 'Mozzarella, melted.' },
  { label: 'Olives', value: 'olives', description: 'Black, pitted.' },
  { label: 'Mushrooms', value: 'mushrooms' }
];
</script>

<template>
  <div class="flex flex-col gap-3">
    <NCheckboxGroup v-model="toppings" :items="items" />
    <span class="text-sm">Selected: {{ toppings.join(', ') || 'none' }}</span>
  </div>
</template>
