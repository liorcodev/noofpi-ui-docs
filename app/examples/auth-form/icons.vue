<script setup lang="ts">
const fields = [
  { name: 'email', type: 'email', label: 'Email', autocomplete: 'email', icon: 'i-lucide-mail' },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    autocomplete: 'current-password',
    icon: 'i-lucide-lock',
    revealable: true
  }
] as const;
</script>

<template>
  <NAuthForm title="Sign in" submit-label="Sign in" :fields="fields" />
</template>
