<template>
  <div class="h-48">
    <NMarquee orientation="vertical" :items="items" :duration="20" />
  </div>
</template>

<script setup lang="ts">
const items = [{ label: 'Build' }, { label: 'Test' }, { label: 'Ship' }, { label: 'Repeat' }];
</script>
