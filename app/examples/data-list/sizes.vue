<template>
  <div class="grid w-full gap-6 sm:grid-cols-3">
    <NDataList size="sm" :items="items" />
    <NDataList size="md" :items="items" />
    <NDataList size="lg" :items="items" />
  </div>
</template>

<script setup lang="ts">
const items = [
  { label: 'Plan', value: 'Pro' },
  { label: 'Seats', value: 12 }
];
</script>
