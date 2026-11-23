<template>
  <div class="grid gap-4 sm:grid-cols-3">
    <div
      class="relative h-40 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
    >
      <NBlobs class="absolute inset-0" form="circle" :blur="40" />
      <p class="relative p-3 text-sm font-medium">form="circle"</p>
    </div>
    <div
      class="relative h-40 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
    >
      <NBlobs class="absolute inset-0" gradient :blur="20" :opacity="0.8" />
      <p class="relative p-3 text-sm font-medium">gradient, less blur</p>
    </div>
    <div
      class="relative h-40 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
    >
      <NBlobs class="absolute inset-0" :count="3" :min-size="50" :max-size="90" />
      <p class="relative p-3 text-sm font-medium">3 big blobs</p>
    </div>
  </div>
</template>
