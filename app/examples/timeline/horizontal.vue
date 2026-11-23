<script setup lang="ts">
const items = [
  { date: 'Step 1', title: 'Plan', description: 'Define the goals.' },
  { date: 'Step 2', title: 'Build', description: 'Write the code.' },
  { date: 'Step 3', title: 'Ship', description: 'Release it.' }
];
</script>

<template>
  <NTimeline :items="items" orientation="horizontal" label="Steps" />
</template>
