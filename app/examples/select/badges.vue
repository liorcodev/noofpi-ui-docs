<script setup lang="ts">
const tags = ref(['vue', 'nuxt']);

const items = [
  { label: 'Vue', value: 'vue', icon: 'i-lucide-code' },
  { label: 'Nuxt', value: 'nuxt', icon: 'i-lucide-layers' },
  { label: 'Vite', value: 'vite', icon: 'i-lucide-zap' },
  { label: 'Pinia', value: 'pinia', icon: 'i-lucide-database' }
];
</script>

<template>
  <div class="max-w-sm">
    <NSelect
      v-model="tags"
      :items="items"
      multiple
      badges
      badge-variant="soft"
      badge-color="success"
      placeholder="Pick tags"
    />
  </div>
</template>
