<template>
  <NFooter
    title="Acme"
    logo="i-lucide-zap"
    to="#"
    description="Build faster with less code."
    copyright="© 2026 Acme, Inc. All rights reserved."
    :buttons="[
      { icon: 'i-lucide-github', 'aria-label': 'GitHub', to: 'https://github.com' },
      { icon: 'i-lucide-mail', 'aria-label': 'Email', to: 'mailto:hello@example.com' }
    ]"
    :columns="[
      {
        title: 'Product',
        items: [
          { label: 'Features', to: '#features' },
          { label: 'Pricing', to: '#pricing' },
          { label: 'Changelog', to: '#changelog' }
        ]
      },
      {
        title: 'Company',
        items: [
          { label: 'About', to: '#about' },
          { label: 'Careers', to: '#careers' },
          { label: 'Contact', to: '#contact' }
        ]
      }
    ]"
  />
</template>
