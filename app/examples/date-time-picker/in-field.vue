<script setup lang="ts">
import { z } from 'zod';

const schema = z.object({
  publishAt: z.string({ error: 'Choose when to publish.' })
});

const state = reactive<{ publishAt: string | null }>({ publishAt: null });
</script>

<template>
  <NForm :schema="schema" :state="state" class="max-w-xs">
    <NFormField name="publishAt" label="Publish at" description="Your local time.">
      <NDateTimePicker
        v-model="state.publishAt"
        name="publishAt"
        placeholder="Pick a date and time"
      />
    </NFormField>
    <NButton type="submit" label="Schedule" />
  </NForm>
</template>
