<script setup lang="ts">
import type { AccordionItem } from 'noofpi-ui';

const items: AccordionItem[] = [
  { label: 'Profile', value: 'profile', icon: 'i-lucide-user', content: 'Name, email and avatar.' },
  { label: 'Security', value: 'security', icon: 'i-lucide-shield', content: 'Password and 2FA.' },
  { label: 'Billing', value: 'billing', icon: 'i-lucide-credit-card', disabled: true }
];
</script>

<template>
  <NAccordion :items="items" />
</template>
