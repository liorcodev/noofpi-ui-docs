<script setup lang="ts">
const items = [
  { title: 'Created', date: 'Mar 2026' },
  { title: 'Reviewed', date: 'Apr 2026' },
  { title: 'Released', date: 'May 2026' }
];
</script>

<template>
  <div class="flex flex-wrap gap-12">
    <NTimeline :items="items" size="sm" color="neutral" label="Small" />
    <NTimeline :items="items" size="md" color="info" label="Medium" />
    <NTimeline :items="items" size="lg" color="success" label="Large" />
  </div>
</template>
