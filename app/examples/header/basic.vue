<template>
  <NHeader
    title="Acme"
    logo="i-lucide-zap"
    to="#"
    :items="[
      { label: 'Home', to: '#home', icon: 'i-lucide-house' },
      { label: 'Docs', to: '#docs', icon: 'i-lucide-book-open' },
      { label: 'Pricing', to: '#pricing', icon: 'i-lucide-tag' }
    ]"
    :buttons="[
      { label: 'Sign in', variant: 'ghost', color: 'neutral', to: '#sign-in' },
      { label: 'Get started', to: '#start' }
    ]"
  />
</template>
