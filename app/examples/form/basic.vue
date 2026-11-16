<script setup lang="ts">
import { z } from 'zod';

const schema = z.object({
  email: z.email('Enter a valid email'),
  password: z.string().min(8, 'Use at least 8 characters')
});

const state = reactive({ email: '', password: '' });
const saved = ref('');
</script>

<template>
  <div class="w-full max-w-sm space-y-3">
    <NForm :schema="schema" :state="state" @submit="saved = `Signed in as ${$event.email}`">
      <NFormField name="email" label="Email" required>
        <NInput v-model="state.email" type="email" placeholder="you@example.com" />
      </NFormField>
      <NFormField name="password" label="Password" required help="At least 8 characters">
        <NInput v-model="state.password" type="password" />
      </NFormField>
      <NButton type="submit" label="Sign in" />
    </NForm>
    <p v-if="saved" class="text-sm">{{ saved }}</p>
  </div>
</template>
