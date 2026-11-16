<script setup lang="ts">
import { z } from 'zod';

const schema = z.object({
  guests: z.number({ error: 'Enter the number of guests' }).int().min(1, 'At least 1 guest')
});

const state = reactive<{ guests: number | undefined }>({ guests: undefined });
</script>

<template>
  <NForm class="w-full max-w-xs" :schema="schema" :state="state">
    <NFormField name="guests" label="Guests" required>
      <NNumberInput v-model="state.guests" :min="0" />
    </NFormField>
    <NButton type="submit" label="Book" />
  </NForm>
</template>
