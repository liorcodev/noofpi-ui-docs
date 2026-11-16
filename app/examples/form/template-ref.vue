<script setup lang="ts">
import { z } from 'zod';

const schema = z.object({
  email: z.email('Enter a valid email')
});

const state = reactive({ email: '' });
const form = ref<{ validate: () => boolean; reset: () => void } | null>(null);
const valid = ref<boolean | null>(null);

function reset() {
  form.value?.reset();
  valid.value = null;
}
</script>

<template>
  <div class="w-full max-w-sm space-y-3">
    <NForm ref="form" :schema="schema" :state="state">
      <NFormField name="email" label="Email">
        <NInput v-model="state.email" type="email" />
      </NFormField>
    </NForm>
    <div class="flex items-center gap-2">
      <NButton size="sm" label="Validate" @click="valid = form?.validate() ?? null" />
      <NButton size="sm" variant="outline" color="neutral" label="Reset" @click="reset" />
      <span v-if="valid !== null" class="text-sm">{{ valid ? 'Valid' : 'Invalid' }}</span>
    </div>
  </div>
</template>
