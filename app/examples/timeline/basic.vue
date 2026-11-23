<script setup lang="ts">
const items = [
  { date: 'Jan 2026', title: 'Project started', description: 'The first commit.' },
  { date: 'Mar 2026', title: 'First release', description: 'Version 1.0 is public.' },
  { date: 'Jun 2026', title: 'Growing', description: 'The first contributors join.' }
];
</script>

<template>
  <NTimeline :items="items" label="Project history" />
</template>
