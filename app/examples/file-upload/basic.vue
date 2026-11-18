<script setup lang="ts">
const files = ref<File[]>([]);
</script>

<template>
  <NFileUpload
    v-model="files"
    multiple
    accept="image/png,image/jpeg,application/pdf"
    :max-files="4"
    :max-size="5 * 1024 * 1024"
    description="PNG, JPG or PDF. Up to 4 files, 5 MB each."
  />
</template>
