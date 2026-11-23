<script setup lang="ts">
const notes = ref('');
const bio = ref('');
</script>

<template>
  <div class="flex max-w-sm flex-col gap-3">
    <NTextarea v-model="notes" counter placeholder="Notes" aria-label="Notes" />
    <NTextarea
      v-model="bio"
      counter
      maxlength="120"
      placeholder="Bio, up to 120 characters"
      aria-label="Bio"
    />
  </div>
</template>
