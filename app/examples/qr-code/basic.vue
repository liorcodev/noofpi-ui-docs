<script setup lang="ts">
const url = ref('https://noofpi.dev');
</script>

<template>
  <div class="flex flex-wrap items-center gap-6">
    <NQRCode :value="url" />
    <NInput v-model="url" placeholder="Text or URL" class="max-w-xs" />
  </div>
</template>
