<template>
  <div class="grid gap-4 sm:grid-cols-3">
    <div
      class="relative h-40 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
    >
      <NBlobs class="absolute inset-0" :blur="0" :count="4" :opacity="0.8" />
      <p class="relative p-3 text-sm font-medium">:blur="0", sharp</p>
    </div>
    <div
      class="relative h-40 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
    >
      <NBlobs class="absolute inset-0" :blur="12" :count="4" :opacity="0.8" />
      <p class="relative p-3 text-sm font-medium">:blur="12", light</p>
    </div>
    <div
      class="relative h-40 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
    >
      <NBlobs class="absolute inset-0" :count="4" :opacity="0.8" />
      <p class="relative p-3 text-sm font-medium">default, 60</p>
    </div>
  </div>
</template>
