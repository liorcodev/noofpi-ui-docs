<script setup lang="ts">
const messages = [
  { id: 1, from: 'Ava Martin', subject: 'Launch checklist', body: 'The staging build passed.' },
  { id: 2, from: 'Noah Kim', subject: 'Invoice 2041', body: 'Attached is the November invoice.' },
  { id: 3, from: 'Priya Shah', subject: 'Design review', body: 'The notes are in the shared doc.' }
];

const open = ref(true);
const selected = ref(messages[0]!);

function select(message: (typeof messages)[number]) {
  selected.value = message;
  open.value = true;
}
</script>

<template>
  <div class="h-96 max-w-full min-w-64 resize-x overflow-hidden rounded-xl" style="width: 100%">
    <NInbox v-model:open="open" breakpoint="md" rail-breakpoint="lg">
      <template #rail>
        <p class="px-4 text-sm font-semibold">Folders</p>
      </template>

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

      <p class="p-4 text-sm">{{ selected.body }}</p>
    </NInbox>
  </div>
</template>
