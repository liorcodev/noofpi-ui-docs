<template>
  <div class="grid gap-4 sm:grid-cols-3">
    <div
      class="relative h-40 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
    >
      <NBlobs class="absolute inset-0" :colors="['success', 'info']" />
      <p class="relative p-3 text-sm font-medium">success, info</p>
    </div>
    <div
      class="relative h-40 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
    >
      <NBlobs class="absolute inset-0" :colors="['warning', 'error']" :shade="300" />
      <p class="relative p-3 text-sm font-medium">warning, error, shade 300</p>
    </div>
    <div
      class="relative h-40 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
    >
      <NBlobs class="absolute inset-0" :colors="['#ff0066', '#7c3aed', '#06b6d4']" />
      <p class="relative p-3 text-sm font-medium">CSS colors</p>
    </div>
  </div>
</template>
