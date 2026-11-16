<script setup lang="ts">
const quantity = ref(1);
</script>

<template>
  <div class="w-full max-w-xs space-y-2">
    <NNumberInput v-model="quantity" :min="1" :max="10" />
    <p class="text-sm text-neutral-500">Quantity: {{ quantity }}</p>
  </div>
</template>
