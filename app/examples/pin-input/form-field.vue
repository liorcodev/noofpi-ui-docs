<script setup lang="ts">
import { z } from 'zod';

const schema = z.object({
  code: z.string().length(6, 'Enter the 6-digit code')
});

const state = reactive({ code: '' });
</script>

<template>
  <NForm :schema="schema" :state="state">
    <NFormField name="code" label="Verification code" help="We sent it to your email.">
      <NPinInput v-model="state.code" name="code" />
    </NFormField>
    <NButton type="submit" label="Verify" />
  </NForm>
</template>
