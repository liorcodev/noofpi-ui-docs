<template>
  <NFooter
    class="max-w-sm"
    title="Acme"
    logo="i-lucide-zap"
    to="#"
    description="Centered in one column below 28rem."
    copyright="© 2026 Acme, Inc."
    :columns="[
      {
        title: 'Product',
        items: [
          { label: 'Features', to: '#features' },
          { label: 'Pricing', to: '#pricing' }
        ]
      }
    ]"
  />
</template>
