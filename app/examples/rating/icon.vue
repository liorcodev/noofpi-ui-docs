<script setup lang="ts">
const love = ref(3);
const mood = ref(4);
</script>

<template>
  <div class="flex flex-col gap-3">
    <NRating v-model="love" icon="i-lucide-heart" color="error" label="Love" />
    <NRating v-model="mood" icon="i-lucide-zap" color="primary" label="Energy" />
  </div>
</template>
