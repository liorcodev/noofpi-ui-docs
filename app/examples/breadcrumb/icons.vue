<script setup lang="ts">
const items = [
  { label: 'Home', to: '/', icon: 'i-lucide-house' },
  { label: 'Settings', to: '/settings', icon: 'i-lucide-settings' },
  { label: 'Profile', icon: 'i-lucide-user' }
];
</script>

<template>
  <NBreadcrumb :items="items" separator-icon="i-lucide-slash" />
</template>
