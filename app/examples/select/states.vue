<script setup lang="ts">
const items = [
  { label: 'Small', value: 'sm' },
  { label: 'Medium', value: 'md' },
  { label: 'Large', value: 'lg' }
];
</script>

<template>
  <div class="flex max-w-xs flex-col gap-3">
    <NSelect :items="items" model-value="md" disabled label="Disabled" />
    <NSelect :items="items" invalid placeholder="Invalid" label="Invalid" />
  </div>
</template>
