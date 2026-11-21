<template>
  <NHeader
    title="Acme"
    logo="i-lucide-zap"
    to="#"
    :items="[
      { label: 'Home', to: '#home' },
      { label: 'Docs', to: '#docs' },
      { label: 'Pricing', to: '#pricing' }
    ]"
  >
    <template #right>
      <NMenu
        placement="bottom-end"
        :items="[
          [{ type: 'label', label: 'Jane Doe', description: 'jane@acme.dev' }],
          [
            { label: 'Profile', icon: 'i-lucide-user' },
            { label: 'Settings', icon: 'i-lucide-settings' }
          ],
          [{ label: 'Sign out', icon: 'i-lucide-log-out', color: 'error' }]
        ]"
      >
        <NAvatar text="J" size="sm" />
      </NMenu>
    </template>
  </NHeader>
</template>
