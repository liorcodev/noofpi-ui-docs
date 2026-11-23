<script setup lang="ts">
const value = ref(4);
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="flex flex-wrap items-center gap-4">
      <NRating v-model="value" size="sm" label="Small" />
      <NRating v-model="value" size="md" label="Medium" />
      <NRating v-model="value" size="lg" label="Large" />
    </div>
    <div class="flex flex-wrap items-center gap-4">
      <NRating v-model="value" color="primary" label="Primary" />
      <NRating v-model="value" color="success" label="Success" />
      <NRating v-model="value" color="error" label="Error" />
      <NRating v-model="value" color="neutral" label="Neutral" />
    </div>
  </div>
</template>
