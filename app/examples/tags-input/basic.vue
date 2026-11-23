<script setup lang="ts">
const tags = ref(['vue', 'nuxt']);
</script>

<template>
  <div class="flex max-w-sm flex-col gap-3">
    <NTagsInput v-model="tags" label="Skills" placeholder="Type a tag and press Enter" />
    <span class="text-sm">Tags: {{ tags.join(', ') || 'none' }}</span>
  </div>
</template>
