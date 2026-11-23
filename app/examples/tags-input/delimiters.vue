<script setup lang="ts">
const tags = ref<string[]>([]);
</script>

<template>
  <NTagsInput
    v-model="tags"
    :delimiters="[',', ' ', ';']"
    add-on-blur
    label="Keywords"
    placeholder="Separate with a comma, a space or a semicolon"
    class="max-w-md"
  />
</template>
