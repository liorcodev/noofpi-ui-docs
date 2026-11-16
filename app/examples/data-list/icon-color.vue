<template>
  <div class="grid w-full gap-6 sm:grid-cols-2">
    <NDataList title="Security" icon="i-lucide-shield-check" color="success" :items="items" />
    <NDataList title="Alerts" icon="i-lucide-triangle-alert" color="warning" :items="items" />
  </div>
</template>

<script setup lang="ts">
const items = [
  { label: 'Two-factor', value: 'Enabled' },
  { label: 'Last review', value: 'Yesterday' }
];
</script>
