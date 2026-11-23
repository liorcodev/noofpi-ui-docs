<script setup lang="ts">
const color = ref<string | null>('#ef444480');
</script>

<template>
  <div class="max-w-xs">
    <NColorPicker v-model="color" alpha label="Overlay color" />
  </div>
</template>
