<script setup lang="ts">
const volume = ref(40);
</script>

<template>
  <NSlider v-model="volume" label="Volume" show-value class="max-w-sm" />
</template>
