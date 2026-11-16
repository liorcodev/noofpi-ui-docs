<script setup lang="ts">
const temperature = ref(20);
</script>

<template>
  <NSlider
    v-model="temperature"
    label="Temperature"
    :min="10"
    :max="30"
    :step="0.5"
    show-value
    class="max-w-sm"
  >
    <template #value="{ value }">{{ value }}°C</template>
  </NSlider>
</template>
