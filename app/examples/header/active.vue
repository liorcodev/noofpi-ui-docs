<template>
  <NHeader
    title="Acme"
    logo="i-lucide-zap"
    to="#"
    :items="[
      { label: 'Dashboard', to: '#dashboard', icon: 'i-lucide-layout-dashboard', active: true },
      { label: 'Reports', to: '#reports', icon: 'i-lucide-chart-column' },
      { label: 'Billing', to: '#billing', icon: 'i-lucide-credit-card', disabled: true },
      { label: 'GitHub', to: 'https://github.com', icon: 'i-lucide-github', target: '_blank' }
    ]"
  />
</template>
