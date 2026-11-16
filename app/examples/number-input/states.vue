<script setup lang="ts">
const value = ref(3);
</script>

<template>
  <div class="w-full max-w-xs space-y-3">
    <NNumberInput v-model="value" invalid />
    <NNumberInput v-model="value" disabled />
  </div>
</template>
