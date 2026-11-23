<script setup lang="ts">
const tags = ref(['a', 'a']);
</script>

<template>
  <NTagsInput v-model="tags" allow-duplicates label="Letters" class="max-w-sm" />
</template>
