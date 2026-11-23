<script setup lang="ts">
const half = ref(3.5);
const clearable = ref(2);
const ten = ref(7);
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-wrap items-center gap-3">
      <NRating v-model="half" allow-half label="Half stars" />
      <span class="text-sm">{{ half }}</span>
    </div>
    <div class="flex flex-wrap items-center gap-3">
      <NRating v-model="clearable" clearable label="Clearable" />
      <span class="text-sm">{{ clearable }}</span>
    </div>
    <div class="flex flex-wrap items-center gap-3">
      <NRating v-model="ten" :max="10" size="sm" label="Out of ten" />
      <span class="text-sm">{{ ten }}</span>
    </div>
  </div>
</template>
