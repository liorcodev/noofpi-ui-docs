<script setup lang="ts">
const value = ref(60);
</script>

<template>
  <div class="flex max-w-sm flex-col gap-4">
    <NSlider v-model="value" size="sm" />
    <NSlider v-model="value" size="md" color="success" />
    <NSlider v-model="value" size="lg" color="warning" />
    <NSlider v-model="value" color="error" disabled />
  </div>
</template>
