<script setup lang="ts">
const value = ref('Not an email');
</script>

<template>
  <div class="w-full max-w-sm space-y-3">
    <NInput placeholder="Default" />
    <NInput v-model="value" invalid />
    <NInput disabled placeholder="Disabled" />
  </div>
</template>
