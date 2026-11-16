<script setup lang="ts">
import type { AccordionItem } from 'noofpi-ui';

const open = ref('one');
const items: AccordionItem[] = [
  { label: 'Section one', value: 'one', content: 'One section always stays open.' },
  { label: 'Section two', value: 'two', content: 'Opening this one closes the first.' }
];
</script>

<template>
  <NAccordion v-model="open" :items="items" :collapsible="false" />
</template>
