<script setup lang="ts">
const messages = [
  {
    id: 1,
    from: 'Ava Martin',
    subject: 'Launch checklist',
    body: 'The staging build passed. Can you review the release notes before noon?'
  },
  {
    id: 2,
    from: 'Noah Kim',
    subject: 'Invoice 2041',
    body: 'Attached is the invoice for November. Let me know if anything looks off.'
  },
  {
    id: 3,
    from: 'Priya Shah',
    subject: 'Design review notes',
    body: 'Thanks for joining. The notes and the next steps are in the shared doc.'
  }
];

const open = ref(true);
const expanded = ref(false);
const selected = ref(messages[0]!);

function select(message: (typeof messages)[number]) {
  selected.value = message;
  open.value = true;
}
</script>

<template>
  <div class="flex flex-col gap-3">
    <NButton
      :label="expanded ? 'Show the list' : 'Read in full width'"
      size="sm"
      variant="outline"
      color="neutral"
      class="self-start"
      :disabled="!open"
      @click="expanded = !expanded"
    />

    <div class="h-96" style="--n-inbox-list-w: 16rem; --n-inbox-reader-min: 16rem">
      <NInbox v-model:open="open" v-model:expanded="expanded" breakpoint="sm">
        <template #list>
          <ul>
            <li v-for="message in messages" :key="message.id">
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
        </template>

        <template #reader-header>
          <h2 class="truncate text-sm font-semibold">{{ selected.subject }}</h2>
        </template>

        <div class="p-4">
          <p class="text-sm text-neutral-500">From {{ selected.from }}</p>
          <p class="mt-3 text-sm">{{ selected.body }}</p>
        </div>
      </NInbox>
    </div>
  </div>
</template>
