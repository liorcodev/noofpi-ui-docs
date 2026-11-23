<script setup lang="ts">
const hex = ref<string | null>('#10b981');
const rgb = ref<string | null>('#10b981');
const hsl = ref<string | null>('#10b981');
</script>

<template>
  <div class="grid max-w-xs gap-3">
    <NColorPicker v-model="hex" format="hex" label="Hex" />
    <NColorPicker v-model="rgb" format="rgb" label="RGB" />
    <NColorPicker v-model="hsl" format="hsl" label="HSL" />
  </div>
</template>
