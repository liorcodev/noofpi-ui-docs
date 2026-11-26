<script setup lang="ts">
const PAGE_SIZE = 10;
const TOTAL = 40;

const items = ref<string[]>([]);
const loading = ref(false);
const finished = ref(false);
const error = ref('');
let failed = false;

function load() {
  error.value = '';
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    // The second page fails once, then works after a retry
    if (items.value.length === PAGE_SIZE && !failed) {
      failed = true;
      error.value = 'Could not load more items';
      return;
    }
    const start = items.value.length;
    for (let i = start + 1; i <= start + PAGE_SIZE; i++) {
      items.value.push(`Item ${i}`);
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
    <ul>
      <li
        v-for="item in items"
        :key="item"
        class="border-b border-neutral-200 px-4 py-3 text-sm last:border-b-0 dark:border-neutral-800"
      >
        {{ item }}
      </li>
    </ul>
  </NInfiniteScroll>
</template>
