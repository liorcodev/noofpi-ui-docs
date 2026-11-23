<script setup lang="ts">
const items = [
  { title: 'Free', description: 'For small projects' },
  { title: 'Pro', description: 'For growing teams' },
  { title: 'Business', description: 'For larger companies' },
  { title: 'Enterprise', description: 'For custom needs' }
];
</script>

<template>
  <NCarousel :items="items" :per-view="2" aspect="auto" label="Plans" class="max-w-xl">
    <template #slide="{ item, active }">
      <div
        class="flex h-full flex-col items-start gap-1 rounded-lg border border-neutral-200 p-5 dark:border-neutral-800"
      >
        <span class="text-lg font-semibold">{{ item.title }}</span>
        <span class="text-sm text-neutral-500">{{ item.description }}</span>
        <button
          type="button"
          :tabindex="active ? 0 : -1"
          class="mt-3 rounded-md bg-neutral-900 px-3 py-1.5 text-sm text-white dark:bg-neutral-100 dark:text-neutral-900"
        >
          Choose
        </button>
      </div>
    </template>
  </NCarousel>
</template>
