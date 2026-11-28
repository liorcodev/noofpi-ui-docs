<script setup lang="ts">
const route = useRoute();
const { currentVersion } = useDocsVersion();

const pages = computed(() =>
  DOCS_NAV.flatMap(g => g.items)
    .filter(p => isItemAvailable(p, currentVersion.value))
    .map(p => ({
      title: p.title,
      added: p.added,
      to: `/docs/${currentVersion.value}/${p.slug}`
    }))
);

const currentIndex = computed(() => pages.value.findIndex(p => p.to === route.path));
const prev = computed(() => (currentIndex.value > 0 ? pages.value[currentIndex.value - 1] : null));
const next = computed(() =>
  currentIndex.value >= 0 && currentIndex.value < pages.value.length - 1
    ? pages.value[currentIndex.value + 1]
    : null
);
</script>

<template>
  <div v-if="prev || next" class="flex gap-4 pt-8 border-t border-line">
    <NuxtLink
      v-if="prev"
      :to="prev.to"
      class="card card-hover flex-1 flex flex-col gap-1 px-5 py-4 group"
    >
      <span class="text-xs text-muted flex items-center gap-1.5">
        <Icon name="heroicons:arrow-left" class="text-sm" /> Previous
      </span>
      <span
        class="flex items-center gap-2 text-sm font-semibold text-ink group-hover:text-accent transition-colors"
      >
        {{ prev.title }}
        <NewBadge :added="prev.added" />
      </span>
    </NuxtLink>
    <div v-else class="flex-1" />
    <NuxtLink
      v-if="next"
      :to="next.to"
      class="card card-hover flex-1 flex flex-col gap-1 px-5 py-4 items-end text-right group"
    >
      <span class="text-xs text-muted flex items-center gap-1.5">
        Next <Icon name="heroicons:arrow-right" class="text-sm" />
      </span>
      <span
        class="flex items-center gap-2 text-sm font-semibold text-ink group-hover:text-accent transition-colors"
      >
        {{ next.title }}
        <NewBadge :added="next.added" />
      </span>
    </NuxtLink>
  </div>
</template>
