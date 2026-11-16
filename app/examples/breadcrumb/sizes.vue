<script setup lang="ts">
const items = [{ label: 'Home', to: '/' }, { label: 'Docs', to: '/docs' }, { label: 'Breadcrumb' }];
</script>

<template>
  <div class="flex flex-col items-start gap-3">
    <NBreadcrumb :items="items" size="sm" />
    <NBreadcrumb :items="items" size="md" />
    <NBreadcrumb :items="items" size="lg" />
  </div>
</template>
