<script setup lang="ts">
const status = ref('active');

const statuses = [
  { label: 'Active', value: 'active', color: 'bg-green-500' },
  { label: 'Paused', value: 'paused', color: 'bg-amber-500' },
  { label: 'Archived', value: 'archived', color: 'bg-neutral-400' }
];
</script>

<template>
  <div class="max-w-xs">
    <NSelect v-model="status" :items="statuses" label="Status">
      <template #item="{ item, selected }">
        <span class="size-2 rounded-full" :class="item.color" />
        <span :class="{ 'font-semibold': selected }">{{ item.label }}</span>
      </template>
    </NSelect>
  </div>
</template>
