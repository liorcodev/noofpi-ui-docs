<script setup lang="ts">
const messages = [
  { id: 1, from: 'Ava Martin', subject: 'Launch checklist', body: 'The staging build passed.' },
  { id: 2, from: 'Noah Kim', subject: 'Invoice 2041', body: 'Attached is the November invoice.' },
  { id: 3, from: 'Priya Shah', subject: 'Design review', body: 'The notes are in the shared doc.' },
  { id: 4, from: 'Leo Fischer', subject: 'Lunch on Friday?', body: 'Are you free around one?' }
];

const query = ref('');
const open = ref(false);
const selected = ref<(typeof messages)[number] | null>(null);
const closed = ref(0);

const visible = computed(() => {
  const text = String(query.value).trim().toLowerCase();
  return messages.filter(
    message =>
      message.from.toLowerCase().includes(text) || message.subject.toLowerCase().includes(text)
  );
});

function select(message: (typeof messages)[number]) {
  selected.value = message;
  open.value = true;
}
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="h-96" style="--n-inbox-list-w: 16rem; --n-inbox-reader-min: 16rem">
      <NInbox v-model:open="open" breakpoint="sm" @close="closed++">
        <template #list-header>
          <NInput
            v-model="query"
            icon="i-lucide-search"
            placeholder="Search mail"
            aria-label="Search mail"
          />
        </template>

        <template #list>
          <ul v-if="visible.length">
            <li v-for="message in visible" :key="message.id">
              <button
                type="button"
                class="w-full border-b border-neutral-200 px-4 py-3 text-start hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
                @click="select(message)"
              >
                <span class="block truncate text-sm font-semibold">{{ message.from }}</span>
                <span class="block truncate text-sm">{{ message.subject }}</span>
              </button>
            </li>
          </ul>
          <p v-else class="p-4 text-sm text-neutral-500">No messages found.</p>
        </template>

        <template #reader-header>
          <div class="min-w-0">
            <h2 class="truncate text-sm font-semibold">{{ selected?.subject }}</h2>
            <p class="truncate text-xs text-neutral-500">{{ selected?.from }}</p>
          </div>
        </template>

        <p v-if="selected" class="p-4 text-sm">{{ selected.body }}</p>
      </NInbox>
    </div>

    <span class="text-sm">Closed: {{ closed }} times</span>
  </div>
</template>
