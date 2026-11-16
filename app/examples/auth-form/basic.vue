<script setup lang="ts">
import { z } from 'zod';

const schema = z.object({
  email: z.email('Enter a valid email address.'),
  password: z.string().min(8, 'Use at least 8 characters.'),
  remember: z.boolean()
});

const fields = [
  { name: 'email', type: 'email', label: 'Email', autocomplete: 'email' },
  { name: 'password', type: 'password', label: 'Password', autocomplete: 'current-password' },
  { name: 'remember', type: 'checkbox', label: 'Remember me' }
] as const;

const result = ref('');
</script>

<template>
  <div class="flex flex-col gap-4">
    <NAuthForm
      title="Welcome back"
      description="Sign in to your account"
      icon="i-lucide-lock"
      submit-label="Sign in"
      :fields="fields"
      :schema="schema"
      @submit="result = JSON.stringify($event)"
    />
    <p v-if="result" class="max-w-sm break-all text-sm">Submitted: {{ result }}</p>
  </div>
</template>
