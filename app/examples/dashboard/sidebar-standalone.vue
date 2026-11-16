<template>
  <div class="h-72 w-64 overflow-hidden rounded-xl border border-neutral-300">
    <NSidebar
      label="Account"
      :items="[
        { label: 'Profile', to: '#profile', icon: 'i-lucide-user', active: true },
        { label: 'Security', to: '#security', icon: 'i-lucide-shield' },
        { label: 'Billing', to: '#billing', icon: 'i-lucide-credit-card', disabled: true }
      ]"
    >
      <template #header>
        <p class="text-sm font-semibold">Account</p>
      </template>
      <template #footer>
        <NButton label="Sign out" variant="ghost" color="neutral" size="sm" block />
      </template>
    </NSidebar>
  </div>
</template>
