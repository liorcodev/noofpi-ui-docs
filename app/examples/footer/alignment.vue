<script setup lang="ts">
const columns = [
  {
    title: 'Product',
    items: [
      { label: 'Features', to: '#features' },
      { label: 'Pricing', to: '#pricing' }
    ]
  },
  {
    title: 'Company',
    items: [
      { label: 'About', to: '#about' },
      { label: 'Contact', to: '#contact' }
    ]
  }
];
</script>

<template>
  <NFooter
    title="Acme"
    logo="i-lucide-zap"
    to="#"
    description="The brand sits after the columns."
    copyright="© 2026 Acme, Inc."
    brand-align="right"
    copyright-align="center"
    :columns="columns"
  />
</template>
