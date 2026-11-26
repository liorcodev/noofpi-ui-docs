<script setup lang="ts">
const folders = [
  { label: 'Inbox', icon: 'i-lucide-inbox' },
  { label: 'Starred', icon: 'i-lucide-star' },
  { label: 'Sent', icon: 'i-lucide-send' },
  { label: 'Archive', icon: 'i-lucide-archive' },
  { label: 'Trash', icon: 'i-lucide-trash-2' }
];

const labels = ['Work', 'Family', 'Travel'];

const rail = ref(true);
const active = ref('Inbox');
</script>

<template>
  <div class="h-96">
    <NInbox
      v-model:rail="rail"
      breakpoint="sm"
      rail-breakpoint="sm"
      hide-rail-icon="i-lucide-chevron-left"
      show-rail-icon="i-lucide-chevron-right"
    >
      <template #rail-header>
        <NButton label="Compose" icon="i-lucide-pen-line" size="sm" block />
      </template>

      <template #rail>
        <ul class="flex flex-col gap-1 px-3">
          <li v-for="folder in folders" :key="folder.label">
            <button
              type="button"
              class="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
              :class="
                active === folder.label ? 'bg-neutral-100 font-semibold dark:bg-neutral-800' : ''
              "
              :aria-current="active === folder.label ? 'page' : undefined"
              @click="active = folder.label"
            >
              <span :class="folder.icon" />
              {{ folder.label }}
            </button>
          </li>
        </ul>
        <p class="mt-4 px-6 text-xs font-semibold text-neutral-500 uppercase">Labels</p>
        <ul class="mt-1 flex flex-col gap-1 px-3">
          <li v-for="label in labels" :key="label">
            <button
              type="button"
              class="w-full rounded-lg px-3 py-2 text-start text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              {{ label }}
            </button>
          </li>
        </ul>
      </template>

      <template #rail-footer>
        <div class="p-3">
          <NProgress label="Storage" :value="62" show-value size="sm" />
        </div>
      </template>

      <template #list-header>
        <p class="text-sm font-semibold">{{ active }}</p>
      </template>

      <template #list>
        <p class="p-4 text-sm text-neutral-500">No messages in {{ active }}.</p>
      </template>
    </NInbox>
  </div>
</template>
