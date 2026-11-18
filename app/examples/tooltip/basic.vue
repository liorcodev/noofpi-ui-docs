<template>
  <div class="flex flex-wrap items-center gap-3">
    <NTooltip text="Save your current work" placement="top">
      <NButton icon="i-lucide-save" label="Save" />
    </NTooltip>
    <NTooltip placement="right" color="info">
      <NButton icon="i-lucide-info" label="Details" variant="soft" color="info" />
      <template #content>
        <div class="flex max-w-56 items-start gap-2">
          <span class="i-lucide-sparkles mt-0.5 size-4 shrink-0" />
          <div>
            <strong class="block font-semibold">Smart preview</strong>
            <span class="text-xs opacity-75">Your changes are saved locally.</span>
          </div>
        </div>
      </template>
    </NTooltip>
    <NTooltip text="Delete this item" placement="bottom" color="error">
      <NButton icon="i-lucide-trash-2" variant="ghost" color="error" aria-label="Delete" />
    </NTooltip>
  </div>
</template>
