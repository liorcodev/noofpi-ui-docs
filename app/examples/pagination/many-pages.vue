<script setup lang="ts">
const page = ref(25);
</script>

<template>
  <NPagination v-model="page" :total="1000" show-edges :siblings="2" />
</template>
