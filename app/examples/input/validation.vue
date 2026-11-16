<script setup lang="ts">
import { z } from 'zod';

const schema = z.object({
  user: z.object({
    email: z.email('Enter a valid email')
  })
});

const state = reactive({ user: { email: 'nope' } });
</script>

<template>
  <NForm class="w-full max-w-sm" :schema="schema" :state="state">
    <NFormField name="user.email" label="Email">
      <NInput v-model="state.user.email" type="email" />
    </NFormField>
    <NButton type="submit" label="Validate" />
  </NForm>
</template>
