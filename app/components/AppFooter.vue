<template>
  <footer class="border-t border-line bg-canvas py-12">
    <div
      class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6"
    >
      <div class="flex items-center gap-2.5">
        <img src="/logo.svg" class="w-7 h-7" alt="noofpi-ui" />
        <span class="text-ink text-sm font-medium">
          noofpi<span class="text-accent">-ui</span>
          <span class="ml-2 text-muted">· Tailwind components for noofpi</span>
        </span>
      </div>
      <div class="flex items-center gap-6 text-sm text-muted">
        <NuxtLink to="/docs/introduction" class="hover:text-ink transition-colors">Docs</NuxtLink>
        <NuxtLink to="/docs/installation" class="hover:text-ink transition-colors">
          Installation
        </NuxtLink>
        <NuxtLink to="/docs/components/button" class="hover:text-ink transition-colors">
          Components
        </NuxtLink>
        <a
          href="https://github.com/liorcodev/noofpi-ui"
          target="_blank"
          rel="noopener"
          class="hover:text-ink transition-colors flex items-center gap-1"
        >
          <Icon name="simple-icons:github" class="text-base" /> GitHub
        </a>
      </div>
    </div>
  </footer>
</template>
