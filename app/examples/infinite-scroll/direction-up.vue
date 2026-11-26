<script setup lang="ts">
const PAGE_SIZE = 10;
const TOTAL = 40;

const box = ref<HTMLElement>();
const messages = ref<number[]>(
  Array.from({ length: PAGE_SIZE }, (_, i) => TOTAL - PAGE_SIZE + i + 1)
);
const loading = ref(false);
const finished = ref(false);

// A chat starts at the newest message, at the bottom
onMounted(() => {
  if (box.value) box.value.scrollTop = box.value.scrollHeight;
});

function load() {
  loading.value = true;
  setTimeout(() => {
    const oldest = messages.value[0] ?? TOTAL + 1;
    const older = Array.from({ length: PAGE_SIZE }, (_, i) => oldest - PAGE_SIZE + i);
    messages.value.unshift(...older.filter(n => n > 0));
    loading.value = false;
    finished.value = messages.value[0] === 1;
  }, 800);
}
</script>

<template>
  <div
    ref="box"
    class="h-72 overflow-y-auto rounded-lg border border-neutral-200 dark:border-neutral-800"
  >
    <NInfiniteScroll
      direction="up"
      :distance="50"
      :loading="loading"
      :finished="finished"
      finished-label="Start of the conversation"
      @load="load"
    >
      <div class="flex flex-col gap-2 p-3">
        <div
          v-for="n in messages"
          :key="n"
          class="max-w-[80%] rounded-lg bg-neutral-100 px-3 py-2 text-sm dark:bg-neutral-800"
        >
          Message {{ n }}
        </div>
      </div>
    </NInfiniteScroll>
  </div>
</template>
