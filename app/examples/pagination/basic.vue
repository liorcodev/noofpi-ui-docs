<script setup lang="ts">
const page = ref(1);
</script>

<template>
  <div class="flex flex-col items-start gap-3">
    <NPagination v-model="page" :total="100" />
    <p class="text-sm">Page {{ page }}</p>
  </div>
</template>
