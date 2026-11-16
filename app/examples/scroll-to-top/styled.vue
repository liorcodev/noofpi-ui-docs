<template>
  <div class="flex items-center gap-3 text-sm">
    <span class="i-lucide-mouse-pointer-click size-4" aria-hidden="true" />
    <p>A second button, stacked above the first one.</p>
    <NScrollToTop
      :threshold="0"
      color="neutral"
      variant="soft"
      shape="circle"
      icon="i-lucide-chevrons-up"
      label="Back to the top"
      class="bottom-20"
    />
  </div>
</template>
