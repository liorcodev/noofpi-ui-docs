<template>
  <div class="grid gap-4 sm:grid-cols-2">
    <div
      class="relative h-40 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
    >
      <NShapes class="absolute inset-0" animation="float" />
      <p class="relative p-3 text-sm font-medium">float</p>
    </div>
    <div
      class="relative h-40 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
    >
      <NShapes class="absolute inset-0" animation="spin" :duration="8" />
      <p class="relative p-3 text-sm font-medium">spin, 8 seconds</p>
    </div>
    <div
      class="relative h-40 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
    >
      <NShapes class="absolute inset-0" animation="pulse" />
      <p class="relative p-3 text-sm font-medium">pulse</p>
    </div>
    <div
      class="relative h-40 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
    >
      <NShapes class="absolute inset-0" animation="none" :rotate="false" />
      <p class="relative p-3 text-sm font-medium">none, no rotation</p>
    </div>
  </div>
</template>
