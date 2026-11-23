<script setup lang="ts">
const seed = ref(1);
const animate = ref(true);
</script>

<template>
  <div class="grid gap-3">
    <div class="flex flex-wrap items-center gap-3">
      <NButton label="New layout" size="sm" variant="outline" @click="seed++" />
      <NSwitch v-model="animate" label="Animate" />
      <span class="text-sm text-neutral-500">seed {{ seed }}</span>
    </div>
    <div
      class="relative h-56 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
    >
      <NBlobs class="absolute inset-0" :seed="seed" :animate="animate" :duration="12" />
    </div>
  </div>
</template>
