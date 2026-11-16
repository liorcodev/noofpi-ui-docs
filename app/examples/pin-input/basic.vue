<script setup lang="ts">
const code = ref('');
</script>

<template>
  <div class="space-y-2">
    <NPinInput v-model="code" />
    <p class="text-sm text-neutral-500">Code: {{ code || '-' }}</p>
  </div>
</template>
