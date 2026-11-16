<template>
  <div class="flex flex-wrap items-center gap-8">
    <NChip text="12" color="error" size="lg"><NAvatar alt="Jane Doe" /></NChip>
    <NChip text="99+" color="primary" size="lg">
      <NButton icon="i-lucide-mail" variant="outline" color="neutral" aria-label="Inbox" />
    </NChip>
    <NChip size="lg" color="success">
      <template #content>
        <span class="i-lucide-check" aria-hidden="true" />
      </template>
      <NAvatar alt="Verified User" />
    </NChip>
  </div>
</template>
