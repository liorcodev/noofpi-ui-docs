<template>
  <div class="flex w-full flex-col gap-2">
    <NMarquee :items="items" :duration="20" />
    <NMarquee :items="items" :duration="20" reverse />
  </div>
</template>

<script setup lang="ts">
const items = [
  { label: 'Fast' },
  { label: 'Accessible' },
  { label: 'Themeable' },
  { label: 'Typed' }
];
</script>
