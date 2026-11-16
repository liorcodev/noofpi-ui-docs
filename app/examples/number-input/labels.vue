<script setup lang="ts">
const seats = ref(2);
</script>

<template>
  <div class="w-full max-w-xs">
    <NNumberInput
      v-model="seats"
      :min="1"
      decrement-label="Remove a seat"
      increment-label="Add a seat"
    />
  </div>
</template>
