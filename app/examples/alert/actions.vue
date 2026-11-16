<script setup lang="ts">
const open = ref(true);
</script>

<template>
  <div class="flex flex-col items-start gap-3">
    <NAlert
      v-if="open"
      class="w-full"
      color="warning"
      title="Unsaved changes"
      description="Leaving this page discards your edits."
      close
      :actions="[
        { label: 'Save', onClick: () => (open = false) },
        { label: 'Discard', onClick: () => (open = false) }
      ]"
      @close="open = false"
    />
    <NButton v-else label="Show again" variant="outline" @click="open = true" />
  </div>
</template>
