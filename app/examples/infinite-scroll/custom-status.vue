<script setup lang="ts">
const PAGE_SIZE = 6;
const TOTAL = 18;

const items = ref<string[]>([]);
const loading = ref(false);
const finished = ref(false);
const error = ref(false);
let failed = false;

function load() {
  error.value = false;
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    // The second page fails once, then works after a retry
    if (items.value.length === PAGE_SIZE && !failed) {
      failed = true;
      error.value = true;
      return;
    }
    const start = items.value.length;
    for (let i = start + 1; i <= start + PAGE_SIZE; i++) {
      items.value.push(`Photo ${i}`);
    }
    finished.value = items.value.length >= TOTAL;
  }, 800);
}
</script>

<template>
  <NInfiniteScroll
    :loading="loading"
    :finished="finished"
    :error="error"
    :height="288"
    class="rounded-lg border border-neutral-200 dark:border-neutral-800"
    @load="load"
  >
    <ul class="grid grid-cols-2 gap-2 p-2">
      <li
        v-for="item in items"
        :key="item"
        class="flex h-24 items-center justify-center rounded-md bg-neutral-100 text-sm dark:bg-neutral-800"
      >
        {{ item }}
      </li>
    </ul>

    <template #loading>
      <div class="grid w-full grid-cols-2 gap-2 px-2">
        <NSkeleton class="h-24" />
        <NSkeleton class="h-24" />
      </div>
    </template>

    <template #error="{ retry, message }">
      <span>{{ message }}</span>
      <NButton
        size="sm"
        variant="outline"
        icon="i-lucide-refresh-cw"
        label="Retry"
        @click="retry"
      />
    </template>

    <template #finished>
      <span class="inline-flex items-center gap-1">
        <span class="i-lucide-check" aria-hidden="true" />
        You have seen all the photos
      </span>
    </template>
  </NInfiniteScroll>
</template>
