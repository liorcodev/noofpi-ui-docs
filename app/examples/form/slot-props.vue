<script setup lang="ts">
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'At least 2 characters')
});

const state = reactive({ name: '' });
</script>

<template>
  <NForm class="w-full max-w-sm" :schema="schema" :state="state">
    <template #default="{ errors, reset }">
      <NFormField name="name" label="Name">
        <NInput v-model="state.name" />
      </NFormField>
      <p class="text-sm text-neutral-500">{{ Object.keys(errors).length }} field(s) with errors</p>
      <div class="flex gap-2">
        <NButton type="submit" label="Save" />
        <NButton variant="outline" color="neutral" label="Reset" @click="reset" />
      </div>
    </template>
  </NForm>
</template>
