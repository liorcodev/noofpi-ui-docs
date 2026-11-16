<script setup lang="ts">
const selected = ref(['vue']);
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="flex flex-wrap items-center gap-2">
      <NCheckButton v-model="selected" value="vue" label="Vue" />
      <NCheckButton v-model="selected" value="nuxt" label="Nuxt" />
      <NCheckButton v-model="selected" value="vite" label="Vite" />
    </div>
    <span class="text-sm">Selected: {{ selected.join(', ') || 'none' }}</span>
  </div>
</template>
