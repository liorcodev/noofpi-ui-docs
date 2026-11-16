<template>
  <NMarquee label="Trusted by" :items="items" />
</template>

<script setup lang="ts">
const items = [
  { label: 'Acme' },
  { label: 'Globex' },
  { label: 'Initech' },
  { label: 'Umbrella' },
  { label: 'Hooli' },
  { label: 'Stark' }
];
</script>
