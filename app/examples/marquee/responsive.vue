<template>
  <NMarquee :items="items" :size="{ base: 'sm', md: 'lg' }" />
</template>

<script setup lang="ts">
const items = [{ label: 'Alpha' }, { label: 'Beta' }, { label: 'Gamma' }, { label: 'Delta' }];
</script>
