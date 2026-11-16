<template>
  <NHeroPage
    layout="horizontal"
    eyebrow="Dashboard"
    title="See everything at once"
    description="Charts, tables and alerts in one place."
  >
    <template #actions>
      <NButton label="Try it free" />
    </template>
    <template #media>
      <div
        class="flex aspect-video w-full items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 to-pink-500 text-white"
      >
        <span class="i-lucide-layout-dashboard size-16" />
      </div>
    </template>
  </NHeroPage>
</template>
