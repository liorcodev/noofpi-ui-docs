<script setup lang="ts">
const PAGE_SIZE = 12;
const TOTAL = 60;

const items = ref<string[]>([]);
const loading = ref(false);
const finished = ref(false);

function load() {
  loading.value = true;
  setTimeout(() => {
    const start = items.value.length;
    for (let i = start + 1; i <= start + PAGE_SIZE; i++) {
      items.value.push(`Row ${i}`);
    }
    loading.value = false;
    finished.value = items.value.length >= TOTAL;
  }, 800);
}
</script>

<template>
  <div
    id="infinite-scroll-root"
    class="h-72 overflow-y-auto rounded-lg border border-neutral-200 dark:border-neutral-800"
  >
    <p class="px-4 pt-3 text-sm font-medium">Activity</p>
    <NInfiniteScroll
      root="#infinite-scroll-root"
      distance="25%"
      :loading="loading"
      :finished="finished"
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
  </div>
</template>
