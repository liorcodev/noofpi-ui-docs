<script setup lang="ts">
const folders = [
  { label: 'Inbox', icon: 'i-lucide-inbox', count: 3 },
  { label: 'Sent', icon: 'i-lucide-send' },
  { label: 'Drafts', icon: 'i-lucide-file-pen' },
  { label: 'Trash', icon: 'i-lucide-trash-2' }
];

const messages = [
  {
    id: 1,
    from: 'Ava Martin',
    subject: 'Launch checklist',
    time: '09:12',
    body: 'The staging build passed. Can you review the release notes before noon?'
  },
  {
    id: 2,
    from: 'Noah Kim',
    subject: 'Invoice 2041',
    time: 'Yesterday',
    body: 'Attached is the invoice for November. Let me know if anything looks off.'
  },
  {
    id: 3,
    from: 'Priya Shah',
    subject: 'Design review notes',
    time: 'Mon',
    body: 'Thanks for joining. The notes and the next steps are in the shared doc.'
  }
];

const open = ref(false);
const selected = ref<(typeof messages)[number] | null>(null);

function select(message: (typeof messages)[number]) {
  selected.value = message;
  open.value = true;
}
</script>

<template>
  <div
    class="h-120"
    style="--n-inbox-rail-w: 12rem; --n-inbox-list-w: 16rem; --n-inbox-reader-min: 16rem"
  >
    <NInbox v-model:open="open" breakpoint="sm" rail-breakpoint="md">
      <template #rail>
        <ul class="flex flex-col gap-1 px-3 pb-3">
          <li v-for="folder in folders" :key="folder.label">
            <button
              type="button"
              class="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <span :class="folder.icon" />
              <span class="flex-1 text-start">{{ folder.label }}</span>
              <NBadge v-if="folder.count" :label="folder.count" size="sm" pill />
            </button>
          </li>
        </ul>
      </template>

      <template #list>
        <ul>
          <li v-for="message in messages" :key="message.id">
            <button
              type="button"
              class="w-full border-b border-neutral-200 px-4 py-3 text-start hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
              :aria-current="open && selected?.id === message.id ? 'true' : undefined"
              @click="select(message)"
            >
              <span class="flex items-baseline justify-between gap-2">
                <span class="truncate text-sm font-semibold">{{ message.from }}</span>
                <span class="text-xs text-neutral-500">{{ message.time }}</span>
              </span>
              <span class="block truncate text-sm">{{ message.subject }}</span>
              <span class="block truncate text-xs text-neutral-500">{{ message.body }}</span>
            </button>
          </li>
        </ul>
      </template>

      <template #reader-header>
        <h2 class="truncate text-sm font-semibold">{{ selected?.subject }}</h2>
      </template>

      <div v-if="selected" class="p-4">
        <p class="text-sm text-neutral-500">From {{ selected.from }}, {{ selected.time }}</p>
        <p class="mt-3 text-sm">{{ selected.body }}</p>
      </div>
    </NInbox>
  </div>
</template>
