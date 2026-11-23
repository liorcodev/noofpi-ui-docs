<script setup lang="ts">
const slide = (from: string, to: string) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient></defs><rect width="640" height="360" fill="url(#g)"/></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const items = [
  { src: slide('#6366f1', '#ec4899') },
  { src: slide('#06b6d4', '#3b82f6') },
  { src: slide('#f59e0b', '#ef4444') },
  { src: slide('#10b981', '#84cc16') }
];
</script>

<template>
  <div class="flex max-w-xl flex-col gap-8">
    <NCarousel :items="items" :per-view="2" aspect="21 / 9" gap="2rem" label="Wide slides" />
    <NCarousel :items="items" :per-view="2" aspect="4 / 3" gap="0.25rem" label="Tall slides" />
  </div>
</template>
