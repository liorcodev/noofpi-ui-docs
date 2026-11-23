<template>
  <div class="grid gap-4 sm:grid-cols-3">
    <div
      class="relative h-40 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
    >
      <NShapes class="absolute inset-0" variant="outline" :stroke-width="3" />
      <p class="relative p-3 text-sm font-medium">outline, stroke 3</p>
    </div>
    <div
      class="relative h-40 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
    >
      <NShapes class="absolute inset-0" variant="fill" :opacity="0.4" />
      <p class="relative p-3 text-sm font-medium">fill</p>
    </div>
    <div
      class="relative h-40 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
    >
      <NShapes class="absolute inset-0" variant="mixed" :colors="['success', 'info', '#f97316']" />
      <p class="relative p-3 text-sm font-medium">mixed, 3 colors</p>
    </div>
  </div>
</template>
