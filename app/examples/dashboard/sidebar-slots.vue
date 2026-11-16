<template>
  <NDashboard class="h-full">
    <template #header>
      <NHeader title="Acme" logo="i-lucide-zap" to="#" :container="false" />
    </template>

    <template #sidebar>
      <NSidebar label="Workspace">
        <template #header="{ collapsed }">
          <span v-if="!collapsed" class="text-sm font-semibold">Team switcher</span>
        </template>

        <nav class="flex flex-col gap-1 p-1 text-sm" aria-label="Custom">
          <a href="#inbox" class="rounded-lg px-3 py-2 hover:bg-neutral-100">Inbox</a>
          <a href="#sent" class="rounded-lg px-3 py-2 hover:bg-neutral-100">Sent</a>
          <a href="#drafts" class="rounded-lg px-3 py-2 hover:bg-neutral-100">Drafts</a>
        </nav>
      </NSidebar>
    </template>

    <p class="text-sm text-neutral-600">The default slot of the sidebar replaces its links.</p>
  </NDashboard>
</template>
