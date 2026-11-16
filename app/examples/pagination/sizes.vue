<script setup lang="ts">
const page = ref(2);
</script>

<template>
  <div class="flex flex-col items-start gap-4">
    <NPagination v-model="page" :total="50" size="sm" />
    <NPagination v-model="page" :total="50" size="md" />
    <NPagination v-model="page" :total="50" size="lg" />
  </div>
</template>
