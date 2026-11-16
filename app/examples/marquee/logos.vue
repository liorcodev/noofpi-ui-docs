<template>
  <NMarquee label="Partners" :items="items" />
</template>

<script setup lang="ts">
const logo = (shape: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">${shape}</svg>`
  )}`;

const items = [
  { src: logo('<circle cx="16" cy="16" r="14" fill="#6366f1"/>'), alt: 'Circle', label: 'Circle' },
  {
    src: logo('<rect x="2" y="2" width="28" height="28" rx="6" fill="#10b981"/>'),
    alt: 'Square',
    label: 'Square',
    href: 'https://example.com',
    target: '_blank'
  },
  { src: logo('<path d="M16 2 30 30H2z" fill="#f59e0b"/>'), alt: 'Triangle', label: 'Triangle' }
];
</script>
