<script setup lang="ts">
const open = ref(false);
</script>

<template>
  <div class="grid w-full max-w-md gap-3">
    <NButton
      :label="open ? 'Close from outside' : 'Open from outside'"
      variant="outline"
      size="sm"
      @click="open = !open"
    />
    <NCollapsible v-model="open" label="Release notes" variant="outline">
      <p>Version 1.8.0 adds NCollapsible, NBlobs and NShapes.</p>
    </NCollapsible>
  </div>
</template>
