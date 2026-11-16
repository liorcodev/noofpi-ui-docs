<script setup lang="ts">
const open = ref(false);
</script>

<template>
  <div>
    <NButton label="Open dialog" @click="open = true" />
    <NDialog v-model:open="open" title="Delete project" description="This can't be undone.">
      Everything in the project will be removed permanently.
      <template #footer>
        <NButton label="Cancel" variant="ghost" color="neutral" @click="open = false" />
        <NButton label="Delete" color="error" @click="open = false" />
      </template>
    </NDialog>
  </div>
</template>
