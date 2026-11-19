<script setup lang="ts">
import type { TreeItem, TreeValue } from 'noofpi-ui';

const items: TreeItem[] = [
  {
    value: 'team',
    label: 'Engineering',
    icon: 'i-lucide-building-2',
    badge: 4,
    children: [
      {
        value: 'frontend',
        label: 'Frontend',
        icon: 'i-lucide-layout-dashboard',
        children: [
          { value: 'ana', label: 'Ana', description: 'Design systems' },
          { value: 'ben', label: 'Ben', description: 'Accessibility' }
        ]
      },
      {
        value: 'backend',
        label: 'Backend',
        icon: 'i-lucide-server',
        children: [
          { value: 'carla', label: 'Carla', description: 'APIs' },
          { value: 'dan', label: 'Dan', description: 'Databases', disabled: true }
        ]
      }
    ]
  },
  {
    value: 'product',
    label: 'Product',
    icon: 'i-lucide-lightbulb',
    children: [{ value: 'fay', label: 'Fay', description: 'Roadmap' }]
  }
];

const selected = ref<TreeValue | TreeValue[] | undefined>('ana');
const expanded = ref<TreeValue[]>(['team', 'frontend']);
</script>

<template>
  <div class="max-w-sm space-y-3">
    <NTree v-model:selected="selected" v-model:expanded="expanded" :items="items" label="Teams" />
    <p class="text-sm text-neutral-500">Selected: {{ selected ?? 'nothing' }}</p>
  </div>
</template>
