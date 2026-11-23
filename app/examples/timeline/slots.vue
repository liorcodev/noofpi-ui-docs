<script setup lang="ts">
const items = [
  { title: 'Build passed', date: '10:02', description: 'main · 3 checks', icon: 'i-lucide-hammer' },
  { title: 'Deploy started', date: '10:05', description: 'production', icon: 'i-lucide-rocket' },
  { title: 'Deploy finished', date: '10:09', description: 'production', icon: 'i-lucide-check' }
];
</script>

<template>
  <NTimeline :items="items" label="Deploys">
    <template #indicator="{ index }">
      <span class="text-xs font-semibold">{{ index + 1 }}</span>
    </template>
    <template #title="{ item }">
      <span class="font-semibold">{{ item.title }}</span>
      <NBadge size="sm" variant="soft" class="ms-2">ok</NBadge>
    </template>
    <template #description="{ item }">
      <code class="text-xs">{{ item.description }}</code>
    </template>
  </NTimeline>
</template>
