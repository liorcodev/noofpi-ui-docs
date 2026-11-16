<script setup lang="ts">
import type { HeaderButton, HeaderItem } from 'noofpi-ui';

const items: HeaderItem[] = [
  { label: 'Home', to: '#home' },
  { label: 'Docs', to: '#docs' },
  { label: 'Pricing', to: '#pricing' }
];

const buttons: HeaderButton[] = [{ label: 'Sign in', variant: 'outline', color: 'neutral' }];
</script>

<template>
  <div class="flex flex-col gap-4">
    <NHeader title="Left" to="#" :items="items" :buttons="buttons" />
    <NHeader title="Center" to="#" nav-align="center" :items="items" :buttons="buttons" />
    <NHeader title="Right" to="#" nav-align="right" :items="items" :buttons="buttons" />
  </div>
</template>
