<template>
  <div class="flex w-full flex-col gap-2">
    <NMarquee :items="items" size="sm" />
    <NMarquee :items="items" size="md" />
    <NMarquee :items="items" size="lg" />
  </div>
</template>

<script setup lang="ts">
const items = [{ label: 'Alpha' }, { label: 'Beta' }, { label: 'Gamma' }, { label: 'Delta' }];
</script>
