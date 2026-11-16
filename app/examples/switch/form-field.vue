<script setup lang="ts">
import { z } from 'zod';

const schema = z.object({
  terms: z.literal(true, { error: 'You must accept the terms' })
});

const state = reactive({ terms: false });
</script>

<template>
  <NForm :schema="schema" :state="state">
    <NFormField name="terms">
      <NSwitch v-model="state.terms" label="I accept the terms" />
    </NFormField>
    <NButton type="submit" label="Continue" />
  </NForm>
</template>
