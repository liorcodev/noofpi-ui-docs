<script setup lang="ts">
const items = [
  { title: 'Order placed', date: '09:12', icon: 'i-lucide-shopping-cart' },
  { title: 'Packed', date: '11:40', icon: 'i-lucide-package' },
  { title: 'Shipped', date: '14:05', icon: 'i-lucide-truck', color: 'info' as const },
  { title: 'Delivered', date: '18:30', icon: 'i-lucide-check', color: 'success' as const }
];
</script>

<template>
  <NTimeline :items="items" label="Order status" />
</template>
