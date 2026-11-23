<script setup lang="ts">
const rating = ref(3);
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <NRating v-model="rating" label="Rating" />
    <span class="text-sm">{{ rating }} / 5</span>
  </div>
</template>
