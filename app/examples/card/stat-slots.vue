<template>
  <NCard variant="soft" class="w-full max-w-xs">
    <NStat>
      <template #label>
        <span class="inline-flex items-center gap-1.5">
          <span class="i-lucide-hard-drive size-4" />
          Storage
        </span>
      </template>
      <span>42 GB <span class="text-base font-normal opacity-60">/ 100 GB</span></span>
      <template #description>58 GB left</template>
    </NStat>
  </NCard>
</template>
