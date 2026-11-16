<template>
  <NDataList title="Team" :items="items" class="w-full max-w-md">
    <template #value="{ item }">
      <NBadge v-if="item.label === 'Status'" :label="String(item.value)" color="success" />
      <template v-else>{{ item.value }}</template>
    </template>
  </NDataList>
</template>

<script setup lang="ts">
const items = [
  { label: 'Owner', value: 'Dana Levi' },
  { label: 'Members', value: 8 },
  { label: 'Status', value: 'Active' }
];
</script>
