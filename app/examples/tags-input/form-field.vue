<script setup lang="ts">
import { z } from 'zod';

const schema = z.object({
  skills: z.array(z.string()).min(2, 'Add at least two skills')
});

const state = reactive({ skills: ['vue'] });
</script>

<template>
  <NForm :schema="schema" :state="state" class="max-w-sm">
    <NFormField
      name="skills"
      label="Skills"
      description="Press Enter or type a comma after each one."
    >
      <NTagsInput v-model="state.skills" />
    </NFormField>
    <NButton type="submit" label="Save" />
  </NForm>
</template>
