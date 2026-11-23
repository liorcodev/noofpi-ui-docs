<script setup lang="ts">
import { z } from 'zod';

const schema = z.object({
  bio: z.string().min(10, 'Write at least 10 characters')
});

const state = reactive({ bio: '' });
</script>

<template>
  <NForm :schema="schema" :state="state" class="max-w-sm">
    <NFormField name="bio" label="Bio">
      <NTextarea v-model="state.bio" counter maxlength="200" />
    </NFormField>
    <NButton type="submit" label="Save" />
  </NForm>
</template>
