<script setup lang="ts">
import type { AccordionItem } from 'noofpi-ui';

const items: AccordionItem[] = [
  { label: 'What is included?', value: 'included', content: 'Every component and all updates.' },
  { label: 'Is there a free plan?', value: 'free', content: 'Yes, with up to three projects.' }
];
</script>

<template>
  <NAccordion :items="items" variant="outline" />
</template>
