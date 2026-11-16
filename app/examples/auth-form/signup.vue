<script setup lang="ts">
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Enter your name.'),
  email: z.email('Enter a valid email address.'),
  password: z.string().min(8, 'Use at least 8 characters.'),
  terms: z.boolean().refine(accepted => accepted, 'Accept the terms to continue.')
});

const fields = [
  { name: 'name', label: 'Full name', placeholder: 'Ada Lovelace', autocomplete: 'name' },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    description: 'We send a confirmation link here.',
    autocomplete: 'email',
    required: true
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    help: 'At least 8 characters.',
    autocomplete: 'new-password',
    required: true
  },
  { name: 'terms', type: 'checkbox', label: 'I accept the terms of service' }
] as const;

const created = ref(false);
</script>

<template>
  <div class="flex flex-col gap-4">
    <NAuthForm
      title="Create an account"
      icon="i-lucide-user-plus"
      submit-label="Sign up"
      :fields="fields"
      :schema="schema"
      @submit="created = true"
    />
    <p v-if="created" class="text-sm">Account created.</p>
  </div>
</template>
