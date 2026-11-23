<script setup lang="ts">
const short = ref('');
const long = ref('Type here.\nThe box grows with each line.');
</script>

<template>
  <div class="flex max-w-sm flex-col gap-3">
    <NTextarea v-model="short" :rows="6" placeholder="Six rows" aria-label="Six rows" />
    <NTextarea v-model="long" autoresize :max-rows="6" aria-label="Grows up to six rows" />
  </div>
</template>
