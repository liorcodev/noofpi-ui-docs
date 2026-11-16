<script setup lang="ts">
const open = ref(false);
</script>

<template>
  <div class="space-y-3">
    <NHeader
      v-model:open="open"
      title="Acme"
      logo="i-lucide-zap"
      to="#"
      breakpoint="xl"
      menu-label="Open menu"
      :items="[
        { label: 'Home', to: '#home' },
        { label: 'Docs', to: '#docs' }
      ]"
      :buttons="[{ label: 'Get started', to: '#start' }]"
    />
    <p class="text-sm text-neutral-600">
      Below the <code>xl</code> breakpoint the menu is {{ open ? 'open' : 'closed' }}.
    </p>
  </div>
</template>
