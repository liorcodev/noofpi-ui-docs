<script setup lang="ts">
const picked = ref(['vue']);
</script>

<template>
  <div class="space-y-3">
    <div class="flex flex-wrap gap-4">
      <NCheckbox v-model="picked" value="vue" label="Vue" />
      <NCheckbox v-model="picked" value="nuxt" label="Nuxt" />
      <NCheckbox v-model="picked" value="vite" label="Vite" />
    </div>
    <p class="text-sm text-neutral-500">Picked: {{ picked.join(', ') || 'none' }}</p>
  </div>
</template>
