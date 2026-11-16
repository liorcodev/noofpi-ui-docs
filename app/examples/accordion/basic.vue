<script setup lang="ts">
import type { AccordionItem } from 'noofpi-ui';

const open = ref('shipping');
const faq: AccordionItem[] = [
  {
    label: 'How long does shipping take?',
    value: 'shipping',
    content: 'Orders ship within 2 days and arrive in 3 to 5 business days.'
  },
  {
    label: 'Can I return an item?',
    value: 'returns',
    content: 'Yes. You have 30 days to return anything unused for a full refund.'
  },
  {
    label: 'Do you ship internationally?',
    value: 'international',
    content: 'We ship to more than 40 countries. Duties are calculated at checkout.'
  }
];
</script>

<template>
  <NAccordion v-model="open" :items="faq" />
</template>
