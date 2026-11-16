<script setup lang="ts">
const date = ref<string | null>(null);
const submitted = ref(false);

const error = computed(() => (submitted.value && !date.value ? 'Choose a date.' : undefined));
</script>

<template>
  <form class="flex max-w-xs flex-col gap-4" @submit.prevent="submitted = true">
    <NFormField label="Birthday" description="We'll send you a card." :error="error" required>
      <NDatePicker v-model="date" name="birthday" placeholder="Pick a date" />
    </NFormField>
    <NButton type="submit" label="Save" />
  </form>
</template>
