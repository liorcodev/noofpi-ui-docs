<template>
  <NFooter>
    <template #brand>
      <a href="#" class="flex items-center gap-2 font-semibold">
        <span
          class="flex size-8 items-center justify-center rounded-lg bg-neutral-900 text-sm text-white"
        >
          A
        </span>
        Acme Labs
      </a>
      <p class="max-w-xs text-sm text-neutral-600">Made for teams that ship every day.</p>
    </template>

    <template #columns>
      <nav class="flex flex-col gap-2 text-sm text-neutral-600" aria-label="Resources">
        <p class="font-semibold text-neutral-900">Resources</p>
        <a href="#docs">Documentation</a>
        <a href="#guides">Guides</a>
      </nav>
    </template>

    <template #bottom>
      <p class="flex items-center gap-1.5 text-sm text-neutral-500">
        Built with <span class="i-lucide-heart text-red-500" /> by the Acme team
      </p>
    </template>
  </NFooter>
</template>
