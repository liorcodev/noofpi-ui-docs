<script setup lang="ts">
const fruit = ref('');

const fruits = [
  { label: 'Apple', value: 'apple' },
  { label: 'Apricot', value: 'apricot' },
  { label: 'Banana', value: 'banana' },
  { label: 'Blueberry', value: 'blueberry' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Grape', value: 'grape' },
  { label: 'Lemon', value: 'lemon' },
  { label: 'Mango', value: 'mango' },
  { label: 'Orange', value: 'orange' },
  { label: 'Peach', value: 'peach' }
];
</script>

<template>
  <div class="max-w-xs">
    <NCombobox v-model="fruit" :items="fruits" placeholder="Search fruit" label="Fruit" />
  </div>
</template>
