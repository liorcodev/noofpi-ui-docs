<script setup lang="ts">
const collapsed = ref(false);
</script>

<template>
  <NDashboard class="h-full">
    <template #header>
      <NHeader title="Acme" logo="i-lucide-zap" to="#" :container="false" />
    </template>

    <template #sidebar>
      <NSidebar
        v-model:collapsed="collapsed"
        collapsible
        :items="[
          { label: 'Overview', to: '#overview', icon: 'i-lucide-layout-dashboard', active: true },
          { label: 'Projects', to: '#projects', icon: 'i-lucide-folder' },
          { label: 'Reports', to: '#reports' }
        ]"
        :groups="[
          {
            label: 'Workspace',
            items: [{ label: 'Team', to: '#team', icon: 'i-lucide-users' }]
          }
        ]"
      >
        <template #footer="{ collapsed: rail }">
          <span v-if="rail" class="i-lucide-user block text-center" />
          <span v-else>Signed in as Jane</span>
        </template>
      </NSidebar>
    </template>

    <p class="text-sm text-neutral-600">
      Sidebar is {{ collapsed ? 'collapsed to a rail' : 'expanded' }}.
    </p>
  </NDashboard>
</template>
