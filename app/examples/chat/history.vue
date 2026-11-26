<script setup lang="ts">
import type { ChatMessage, ChatParticipant } from 'noofpi-ui';

const participants: Record<string, ChatParticipant> = {
  ana: { name: 'Ana Silva', color: 'success' },
  leo: { name: 'Leo Martin', color: 'info' }
};

const PAGES = 3;
const PAGE_SIZE = 10;

const makePage = (page: number): ChatMessage[] =>
  Array.from({ length: PAGE_SIZE }, (_, i) => {
    const number = page * PAGE_SIZE + i;
    return {
      id: number,
      sender: number % 3 === 0 ? 'me' : number % 3 === 1 ? 'ana' : 'leo',
      text: `Message ${number + 1}`,
      time: new Date(Date.now() - (PAGES * PAGE_SIZE - number) * 3_600_000)
    };
  });

const messages = ref<ChatMessage[]>(makePage(PAGES - 1));
const loadedPages = ref(1);
const loading = ref(false);

function loadMore() {
  loading.value = true;
  setTimeout(() => {
    messages.value = [...makePage(PAGES - 1 - loadedPages.value), ...messages.value];
    loadedPages.value++;
    loading.value = false;
  }, 800);
}
</script>

<template>
  <div class="h-96 max-w-lg">
    <NChat
      :messages="messages"
      :participants="participants"
      :loading="loading"
      :has-more="loadedPages < PAGES"
      @load-more="loadMore"
    />
  </div>
</template>
