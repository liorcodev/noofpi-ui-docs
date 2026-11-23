<script setup lang="ts">
const key = 'noofpi_demo_key_1234567890abcdef';
</script>

<template>
  <div
    class="flex max-w-md items-center justify-between gap-2 rounded-lg border border-neutral-200 bg-neutral-50 py-1 ps-3 pe-1 dark:border-neutral-800 dark:bg-neutral-900"
  >
    <code class="truncate text-sm">{{ key }}</code>
    <NCopyButton :text="key" size="sm" aria-label="Copy API key" />
  </div>
</template>
