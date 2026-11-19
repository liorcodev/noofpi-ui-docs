<script setup lang="ts">
definePageMeta({ layout: 'docs', middleware: ['docs-version'] });

const route = useRoute();

// Try the requested version first, then older ones, so a new version only needs the changed files.
const segments = route.path.split('/').filter(Boolean);
const requestedVersion = segments[1] ?? '';
const pageSlug = segments.slice(2).join('/');
const fallbackChain = getFallbackChain(requestedVersion);

const { data: page } = await useAsyncData('docs-' + route.path, async () => {
  for (const v of fallbackChain) {
    const result = await queryCollection('docs').path(`/docs/${v}/${pageSlug}`).first();
    if (result) return result;
  }
  return null;
});

const pageAdded = DOCS_NAV.flatMap(g => g.items).find(i => i.slug === pageSlug)?.added;

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
}

useHead({
  title: page.value?.title ? `${page.value.title} - noofpi-ui docs` : 'noofpi-ui docs'
});
</script>

<template>
  <div>
    <NewBadge :added="pageAdded" />
    <article class="prose">
      <ContentRenderer v-if="page" :value="page" />
    </article>
  </div>
</template>
