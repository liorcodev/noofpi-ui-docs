<template>
  <div class="flex flex-col gap-6">
    <NFooter copyright="© 2026 Acme, Inc." copyright-align="center" />

    <NFooter
      title="Acme"
      logo="i-lucide-zap"
      to="#"
      description="Only the brand block."
      :border="false"
    />

    <NFooter
      :columns="[
        {
          items: [
            { label: 'Privacy', to: '#privacy' },
            { label: 'Terms', to: '#terms' },
            { label: 'Status', to: '#status', icon: 'i-lucide-activity' }
          ]
        }
      ]"
    />
  </div>
</template>
