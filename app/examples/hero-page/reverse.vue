<template>
  <NHeroPage
    layout="horizontal"
    reverse
    title="Media first"
    description="The media comes before the text."
  >
    <template #media>
      <div
        class="flex aspect-video w-full items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500 to-sky-500 text-white"
      >
        <span class="i-lucide-image size-16" />
      </div>
    </template>
  </NHeroPage>
</template>
