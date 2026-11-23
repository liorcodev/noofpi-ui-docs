<template>
  <div class="grid gap-4 sm:grid-cols-3">
    <div
      class="relative h-40 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
    >
      <NShapes class="absolute inset-0" :shapes="['circle', 'square', 'triangle']" :count="8" />
      <p class="relative p-3 text-sm font-medium">circle, square, triangle</p>
    </div>
    <div
      class="relative h-40 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
    >
      <NShapes class="absolute inset-0" :shapes="['star', 'sparkle', 'plus']" :count="8" />
      <p class="relative p-3 text-sm font-medium">star, sparkle, plus</p>
    </div>
    <div
      class="relative h-40 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
    >
      <NShapes class="absolute inset-0" :shapes="['wave', 'zigzag', 'dots']" :count="8" />
      <p class="relative p-3 text-sm font-medium">wave, zigzag, dots</p>
    </div>
  </div>
</template>
