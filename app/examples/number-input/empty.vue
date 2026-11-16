<script setup lang="ts">
const age = ref<number | undefined>();
</script>

<template>
  <div class="w-full max-w-xs space-y-2">
    <NNumberInput v-model="age" placeholder="Age" />
    <p class="text-sm text-neutral-500">Value: {{ age === undefined ? 'undefined' : age }}</p>
  </div>
</template>
