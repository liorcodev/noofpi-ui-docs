<script setup lang="ts">
const slide = (from: string, to: string) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient></defs><rect width="640" height="360" fill="url(#g)"/></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const items = [
  { src: slide('#6366f1', '#ec4899'), title: 'One' },
  { src: slide('#06b6d4', '#3b82f6'), title: 'Two' },
  { src: slide('#f59e0b', '#ef4444'), title: 'Three' },
  { src: slide('#10b981', '#84cc16'), title: 'Four' }
];
</script>

<template>
  <NCarousel :items="items" :autoplay="3000" loop label="Autoplay" class="max-w-xl" />
</template>
