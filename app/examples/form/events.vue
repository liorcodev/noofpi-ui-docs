<script setup lang="ts">
import { z } from 'zod';

const schema = z.object({
  title: z.string().min(3, 'At least 3 characters'),
  tags: z.array(z.string()).min(1, 'Pick at least one tag')
});

const state = reactive({ title: '', tags: [] as string[] });
const log = ref('Submit the form to see the event.');

function onError(errors: Record<string, string[]>) {
  log.value = `error: ${JSON.stringify(errors)}`;
}
</script>

<template>
  <div class="w-full max-w-sm space-y-3">
    <NForm
      :schema="schema"
      :state="state"
      @submit="log = `submit: ${JSON.stringify($event)}`"
      @error="onError"
    >
      <NFormField name="title" label="Title">
        <NInput v-model="state.title" />
      </NFormField>
      <NFormField name="tags" label="Tags">
        <div class="flex gap-4">
          <NCheckbox v-model="state.tags" value="vue" label="Vue" />
          <NCheckbox v-model="state.tags" value="nuxt" label="Nuxt" />
        </div>
      </NFormField>
      <NButton type="submit" label="Create" />
    </NForm>
    <p class="break-all font-mono text-xs text-neutral-500">{{ log }}</p>
  </div>
</template>
