<script setup lang="ts">
const color = ref<string | null>('#f59e0b');
</script>

<template>
  <div class="max-w-xs">
    <NColorPicker v-model="color" label="Color" disabled />
  </div>
</template>
