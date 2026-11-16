<script setup lang="ts">
import { z } from 'zod';

const schema = z.object({
  volume: z.number().min(20, 'Volume must be at least 20')
});

const state = reactive({ volume: 5 });
</script>

<template>
  <NForm :schema="schema" :state="state" class="max-w-sm">
    <NFormField name="volume" label="Volume">
      <NSlider v-model="state.volume" show-value />
    </NFormField>
    <NButton type="submit" label="Save" />
  </NForm>
</template>
