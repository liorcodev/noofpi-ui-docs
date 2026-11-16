<script setup lang="ts">
const items = [
  { label: 'Home', to: '/' },
  { label: 'Docs', to: '/docs' },
  { label: 'Navigation', to: '/docs/navigation/menu' },
  { label: 'Breadcrumb' }
];
</script>

<template>
  <NBreadcrumb :items="items" />
</template>
