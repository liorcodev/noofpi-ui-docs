<script setup lang="ts">
const price = ref(9.99);
const volume = ref(50);
</script>

<template>
  <div class="w-full max-w-xs space-y-3">
    <NNumberInput v-model="price" :step="0.05" />
    <NNumberInput v-model="volume" :min="0" :max="100" :step="5" />
  </div>
</template>
