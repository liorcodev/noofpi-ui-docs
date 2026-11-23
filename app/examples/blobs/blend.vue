<template>
  <div class="grid gap-4 sm:grid-cols-2">
    <div
      class="relative h-40 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
    >
      <NBlobs class="absolute inset-0" :count="8" :min-size="40" :max-size="70" />
      <p class="relative p-3 text-sm font-medium">blend="normal"</p>
    </div>
    <div
      class="relative h-40 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
    >
      <NBlobs class="absolute inset-0" :count="8" :min-size="40" :max-size="70" blend="multiply" />
      <p class="relative p-3 text-sm font-medium">blend="multiply"</p>
    </div>
  </div>
</template>
