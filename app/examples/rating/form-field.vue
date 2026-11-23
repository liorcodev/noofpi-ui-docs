<script setup lang="ts">
import { z } from 'zod';

const schema = z.object({
  rating: z.number().min(1, 'Please give a rating')
});

const state = reactive({ rating: 0 });
</script>

<template>
  <NForm :schema="schema" :state="state" class="max-w-sm">
    <NFormField name="rating" label="Your rating">
      <NRating v-model="state.rating" label="Your rating" name="rating" />
    </NFormField>
    <NButton type="submit" label="Send" />
  </NForm>
</template>
