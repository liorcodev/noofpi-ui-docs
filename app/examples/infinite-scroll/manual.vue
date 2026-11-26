<script setup lang="ts">
const PAGE_SIZE = 5;
const TOTAL = 20;

const items = ref<string[]>(Array.from({ length: PAGE_SIZE }, (_, i) => `Result ${i + 1}`));
const loading = ref(false);
const finished = ref(false);

function load() {
  loading.value = true;
  setTimeout(() => {
    const start = items.value.length;
    for (let i = start + 1; i <= start + PAGE_SIZE; i++) {
      items.value.push(`Result ${i}`);
    }
    loading.value = false;
    finished.value = items.value.length >= TOTAL;
  }, 800);
}
</script>

<template>
  <NInfiniteScroll
    manual
    :loading="loading"
    :finished="finished"
    finished-label="That's all the results"
    load-more-label="Show more results"
    class="max-w-sm"
    @load="load"
  >
    <ul class="divide-y divide-neutral-200 dark:divide-neutral-800">
      <li v-for="item in items" :key="item" class="py-2 text-sm">{{ item }}</li>
    </ul>
  </NInfiniteScroll>
</template>
