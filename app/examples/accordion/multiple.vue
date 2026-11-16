<script setup lang="ts">
import type { AccordionItem } from 'noofpi-ui';

const open = ref(['design', 'code']);
const steps: AccordionItem[] = [
  { label: 'Design', value: 'design', content: 'Sketch the layout and pick the colors.' },
  { label: 'Code', value: 'code', content: 'Build the screens from the components.' },
  { label: 'Ship', value: 'ship', content: 'Deploy and watch the numbers.' }
];
</script>

<template>
  <NAccordion v-model="open" :items="steps" type="multiple" />
</template>
