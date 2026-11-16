<script setup lang="ts">
const name = ref('');
</script>

<template>
  <div class="w-full max-w-sm">
    <NInput v-model="name" placeholder="Your name" />
  </div>
</template>
