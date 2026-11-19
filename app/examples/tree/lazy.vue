<script setup lang="ts">
import type { TreeItem, TreeValue } from 'noofpi-ui';

const items: TreeItem[] = [
  { value: 'europe', label: 'Europe', icon: 'i-lucide-globe' },
  { value: 'asia', label: 'Asia', icon: 'i-lucide-globe' }
];

const selected = ref<TreeValue | TreeValue[] | undefined>();

// A node without `children` asks for them the first time it is expanded
async function loadCities(region: TreeItem): Promise<TreeItem[]> {
  await new Promise(resolve => setTimeout(resolve, 600));
  const cities: Record<string, string[]> = {
    europe: ['Berlin', 'Lisbon', 'Paris'],
    asia: ['Tokyo', 'Seoul']
  };
  return (cities[String(region.value)] ?? []).map(city => ({
    value: `${region.value}-${city}`,
    label: city,
    icon: 'i-lucide-map-pin'
  }));
}
</script>

<template>
  <div class="max-w-sm space-y-3">
    <NTree v-model:selected="selected" :items="items" :load-children="loadCities" label="Regions" />
    <p class="text-sm text-neutral-500">Selected: {{ selected ?? 'nothing' }}</p>
  </div>
</template>
