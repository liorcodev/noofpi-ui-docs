<template>
  <NPopover label="Share this page">
    <NButton label="Share" icon="i-lucide-share-2" variant="outline" color="neutral" />
    <template #content="{ close }">
      <div class="space-y-3">
        <div>
          <p class="font-semibold">Share this page</p>
          <p class="text-sm text-neutral-500">Anyone with the link can view it.</p>
        </div>
        <code class="block rounded-md bg-neutral-100 px-2 py-1 text-xs dark:bg-neutral-800">
          https://noofpi.dev/share/abc123
        </code>
        <div class="flex justify-end gap-2">
          <NButton label="Close" variant="ghost" color="neutral" size="sm" @click="close()" />
          <NButton label="Copy link" icon="i-lucide-copy" size="sm" @click="close()" />
        </div>
      </div>
    </template>
  </NPopover>
</template>
