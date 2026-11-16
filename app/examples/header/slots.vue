<template>
  <NHeader to="#">
    <template #logo>
      <a href="#" class="flex items-center gap-2 font-semibold">
        <span
          class="flex size-8 items-center justify-center rounded-lg bg-neutral-900 text-sm text-white"
        >
          A
        </span>
        Acme Labs
      </a>
    </template>

    <template #nav>
      <a href="#features" class="rounded-lg px-3 py-2 text-sm font-medium">Features</a>
      <a href="#changelog" class="rounded-lg px-3 py-2 text-sm font-medium">Changelog</a>
    </template>

    <template #right>
      <NButton icon="i-lucide-search" variant="ghost" color="neutral" aria-label="Search" />
      <NButton label="Sign up" size="sm" />
    </template>
  </NHeader>
</template>
