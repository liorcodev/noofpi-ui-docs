<script setup lang="ts">
const color = ref<string | null>('#8b5cf6');
</script>

<template>
  <div class="flex flex-wrap items-center gap-4">
    <NColorPicker v-model="color" inline color="secondary" label="Color" />
    <div
      class="size-24 rounded-lg border border-neutral-200 dark:border-neutral-800"
      :style="{ backgroundColor: color ?? 'transparent' }"
    />
  </div>
</template>
