<script setup lang="ts">
const message = ref('Nothing copied yet');

function onError(error: unknown) {
  message.value = error instanceof Error ? error.message : 'Could not copy';
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <NCopyButton
      text="Hello from noofpi-ui"
      label="Copy"
      @copy="text => (message = `Copied: ${text}`)"
      @error="onError"
    />
    <span class="text-sm">{{ message }}</span>
  </div>
</template>
