<script setup lang="ts">
const slide = (from: string, to: string) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient></defs><rect width="640" height="360" fill="url(#g)"/></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const items = [
  {
    src: slide('#6366f1', '#ec4899'),
    alt: 'Purple and pink gradient',
    title: 'Sunrise',
    description: 'Soft colors at the start of the day'
  },
  {
    src: slide('#06b6d4', '#3b82f6'),
    alt: 'Cyan and blue gradient',
    title: 'Ocean',
    description: 'Cool colors from the water'
  },
  {
    src: slide('#f59e0b', '#ef4444'),
    alt: 'Orange and red gradient',
    title: 'Sunset',
    description: 'Warm colors at the end of the day'
  }
];
</script>

<template>
  <NCarousel :items="items" label="Gallery" class="max-w-xl" />
</template>
