<script setup lang="ts">
const open = ref(false);
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <NButton
      :label="open ? 'Hide popover' : 'Show popover'"
      variant="outline"
      color="neutral"
      @click="open = !open"
    />
    <NPopover v-model:open="open" trigger="manual" :dismissible="false" label="Tip">
      <span class="text-sm text-neutral-500">Anchored here</span>
      <template #content>
        <p class="text-sm">Opened and closed from your own state.</p>
      </template>
    </NPopover>
  </div>
</template>
