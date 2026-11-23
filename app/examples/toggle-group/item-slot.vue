<script setup lang="ts">
const plan = ref('pro');

const items = [
  { value: 'free', label: 'Free' },
  { value: 'pro', label: 'Pro' },
  { value: 'team', label: 'Team' }
];
</script>

<template>
  <NToggleGroup v-model="plan" :items="items" label="Plan">
    <template #item="{ item, checked }">
      <span class="flex items-center gap-1">
        <NIcon v-if="checked" name="i-lucide-check" />
        {{ item.label }}
      </span>
    </template>
  </NToggleGroup>
</template>
