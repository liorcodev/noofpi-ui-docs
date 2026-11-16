<script setup lang="ts">
const open = ref(false);
</script>

<template>
  <NDashboard v-model:open="open" class="h-full">
    <template #header>
      <NHeader
        title="Acme"
        logo="i-lucide-zap"
        to="#"
        :container="false"
        :buttons="[{ label: 'Invite', icon: 'i-lucide-user-plus', size: 'sm' }]"
      />
    </template>

    <template #sidebar>
      <NSidebar
        :items="[
          { label: 'Overview', to: '#overview', icon: 'i-lucide-layout-dashboard', active: true },
          { label: 'Projects', to: '#projects', icon: 'i-lucide-folder' }
        ]"
        :groups="[
          {
            label: 'Workspace',
            items: [
              { label: 'Team', to: '#team', icon: 'i-lucide-users' },
              { label: 'Settings', to: '#settings', icon: 'i-lucide-settings' }
            ]
          }
        ]"
      >
        <template #footer>Signed in as Jane</template>
      </NSidebar>
    </template>

    <h2 class="text-xl font-semibold">Overview</h2>
    <p class="mt-2 text-sm text-neutral-600">The main content scrolls on its own.</p>
  </NDashboard>
</template>
