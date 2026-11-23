<script setup lang="ts">
const color = ref<string | null>(null);
const swatches = ['#ef4444', '#f59e0b', '#22c55e', '#3b82f6', '#8b5cf6', 'hsl(330, 80%, 60%)'];
</script>

<template>
  <div class="max-w-xs">
    <NColorPicker
      v-model="color"
      :swatches="swatches"
      label="Brand color"
      placeholder="Pick a color"
    />
  </div>
</template>
