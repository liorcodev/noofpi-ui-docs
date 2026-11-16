<script setup lang="ts">
const country = ref('');

const countries = [
  { label: 'Canada', value: 'ca' },
  { label: 'France', value: 'fr' },
  { label: 'Germany', value: 'de' },
  { label: 'Japan', value: 'jp' },
  { label: 'Brazil', value: 'br', disabled: true }
];
</script>

<template>
  <div class="max-w-xs">
    <NSelect v-model="country" :items="countries" placeholder="Pick a country" />
  </div>
</template>
