<script setup lang="ts">
import { z } from 'zod';

const schema = z.object({
  accent: z
    .string({ error: 'Pick an accent color' })
    .regex(/^#[0-9a-f]{6}$/i, 'Pick an accent color')
});

const state = reactive<{ accent: string | null }>({ accent: null });
</script>

<template>
  <NForm :schema="schema" :state="state" class="max-w-sm">
    <NFormField name="accent" label="Accent color">
      <NColorPicker v-model="state.accent" placeholder="Pick a color" />
    </NFormField>
    <NButton type="submit" label="Save" />
  </NForm>
</template>
