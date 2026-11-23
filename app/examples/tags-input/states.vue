<script setup lang="ts">
const tags = ref(['read', 'only']);
const invalid = ref(['oops']);
</script>

<template>
  <div class="flex max-w-sm flex-col gap-3">
    <NTagsInput v-model="tags" disabled label="Disabled" />
    <NTagsInput v-model="invalid" invalid label="Invalid" />
  </div>
</template>
