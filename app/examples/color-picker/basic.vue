<script setup lang="ts">
const color = ref<string | null>('#3b82f6');
</script>

<template>
  <div class="max-w-xs">
    <NColorPicker v-model="color" label="Color" placeholder="Pick a color" />
  </div>
</template>
