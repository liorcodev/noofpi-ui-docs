<template>
  <div class="flex items-center gap-3 text-sm">
    <span class="i-lucide-mouse-pointer-click size-4" aria-hidden="true" />
    <p>Scroll this page a little: the button appears in the bottom-right corner.</p>
    <NScrollToTop :threshold="0" />
  </div>
</template>
