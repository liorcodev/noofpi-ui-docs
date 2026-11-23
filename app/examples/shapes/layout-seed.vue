<script setup lang="ts">
const layout = ref<'even' | 'random'>('even');
const seed = ref(1);
const count = ref(20);
</script>

<template>
  <div class="grid gap-3">
    <div class="flex flex-wrap items-center gap-3">
      <NButton
        :label="`layout: ${layout}`"
        size="sm"
        variant="outline"
        @click="layout = layout === 'even' ? 'random' : 'even'"
      />
      <NButton label="New layout" size="sm" variant="outline" @click="seed++" />
      <NSlider v-model="count" label="Count" :min="0" :max="60" show-value class="w-48" />
    </div>
    <div
      class="relative h-56 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
    >
      <NShapes
        class="absolute inset-0"
        :layout="layout"
        :seed="seed"
        :count="count"
        animation="none"
      />
    </div>
  </div>
</template>
