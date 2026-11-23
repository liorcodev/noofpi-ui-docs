<script setup lang="ts">
const a = ref(['soft', 'info']);
const b = ref(['solid', 'success']);
const c = ref(['outline', 'warning']);
</script>

<template>
  <div class="flex max-w-sm flex-col gap-3">
    <NTagsInput v-model="a" variant="soft" color="info" label="Soft info" />
    <NTagsInput v-model="b" variant="solid" color="success" label="Solid success" />
    <NTagsInput v-model="c" variant="outline" color="warning" label="Outline warning" />
  </div>
</template>
