<script setup lang="ts">
import { z } from 'zod';

const schema = z.object({
  days: z.array(z.string()).min(1, 'Pick at least one day')
});

const state = reactive({ days: [] as string[] });

const days = [
  { value: 'mon', label: 'Mon' },
  { value: 'tue', label: 'Tue' },
  { value: 'wed', label: 'Wed' },
  { value: 'thu', label: 'Thu' },
  { value: 'fri', label: 'Fri' }
];
</script>

<template>
  <NForm :schema="schema" :state="state" class="max-w-sm">
    <NFormField name="days" label="Days">
      <NToggleGroup v-model="state.days" :items="days" multiple label="Days" />
    </NFormField>
    <NButton type="submit" label="Save" />
  </NForm>
</template>
