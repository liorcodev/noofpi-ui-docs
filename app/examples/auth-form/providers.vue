<script setup lang="ts">
const fields = [
  { name: 'email', type: 'email', label: 'Email', placeholder: 'you@example.com' },
  { name: 'password', type: 'password', label: 'Password' }
] as const;

const chosen = ref('');

const providers = [
  {
    label: 'Continue with GitHub',
    icon: 'i-lucide-github',
    onClick: () => (chosen.value = 'GitHub')
  },
  {
    label: 'Continue with Google',
    icon: 'i-lucide-chrome',
    onClick: () => (chosen.value = 'Google')
  }
];
</script>

<template>
  <div class="flex flex-col gap-4">
    <NAuthForm
      title="Sign in"
      submit-label="Sign in"
      separator="or use your email"
      :fields="fields"
      :providers="providers"
    />
    <p v-if="chosen" class="text-sm">Provider chosen: {{ chosen }}</p>
  </div>
</template>
