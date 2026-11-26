<script setup lang="ts">
const PAGE_SIZE = 10;
const TOTAL = 50;

const items = ref<string[]>([]);
const loading = ref(false);
const finished = ref(false);

function load() {
  loading.value = true;
  setTimeout(() => {
    const start = items.value.length;
    for (let i = start + 1; i <= start + PAGE_SIZE; i++) {
      items.value.push(`Item ${i}`);
    }
    loading.value = false;
    finished.value = items.value.length >= TOTAL;
  }, 800);
}
</script>

<template>
  <NInfiniteScroll
    :loading="loading"
    :finished="finished"
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
