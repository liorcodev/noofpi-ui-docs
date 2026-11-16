<template>
  <div class="grid w-full gap-6 sm:grid-cols-2">
    <NDataList :items="items" />
    <NDataList :items="items" :divided="false" />
  </div>
</template>

<script setup lang="ts">
const items = [
  { label: 'Region', value: 'eu-west-1' },
  { label: 'Runtime', value: 'Node 22' },
  { label: 'Memory', value: '512 MB' }
];
</script>
