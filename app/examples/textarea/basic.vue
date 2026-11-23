<script setup lang="ts">
const message = ref('');
</script>

<template>
  <NTextarea
    v-model="message"
    placeholder="Write a message"
    aria-label="Message"
    class="max-w-sm"
  />
</template>
