<script setup lang="ts">
const text = ref('Some text');
</script>

<template>
  <div class="flex max-w-sm flex-col gap-3">
    <NTextarea v-model="text" invalid aria-label="Invalid" />
    <NTextarea v-model="text" disabled aria-label="Disabled" />
  </div>
</template>
