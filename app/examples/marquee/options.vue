<template>
  <div class="flex w-full flex-col gap-2">
    <NMarquee :items="items" :fade="false" />
    <NMarquee :items="items" :pause-on-hover="false" />
    <NMarquee :items="items" :grayscale="false" />
  </div>
</template>

<script setup lang="ts">
const items = [
  { label: 'No fade', href: '#' },
  { label: 'Keeps moving on hover', href: '#' },
  { label: 'Full color', href: '#' }
];
</script>
