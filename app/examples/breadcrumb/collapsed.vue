<script setup lang="ts">
const items = [
  { label: 'Home', to: '/' },
  { label: 'Docs', to: '/docs' },
  { label: 'Components', to: '/docs/components/button' },
  { label: 'Forms', to: '/docs/forms/form' },
  { label: 'Select' }
];
</script>

<template>
  <NBreadcrumb :items="items" :max-items="3" />
</template>
