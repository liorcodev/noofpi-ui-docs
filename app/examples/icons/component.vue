<script setup lang="ts">
import { h } from 'vue';

const Diamond = () =>
  h('svg', { viewBox: '0 0 24 24', fill: 'currentColor' }, [
    h('path', { d: 'M12 2 22 12 12 22 2 12Z' })
  ]);
</script>

<template>
  <div class="flex flex-wrap items-center gap-4 text-2xl">
    <NIcon :name="Diamond" class="text-primary-500" />
    <NButton :icon="Diamond" label="Premium" variant="soft" />
  </div>
</template>
