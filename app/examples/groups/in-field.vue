<script setup lang="ts">
const interests = ref<string[]>([]);
const submitted = ref(false);

const items = [
  { label: 'Design', value: 'design' },
  { label: 'Engineering', value: 'engineering' },
  { label: 'Marketing', value: 'marketing' }
];

const error = computed(() =>
  submitted.value && interests.value.length === 0 ? 'Pick at least one interest.' : undefined
);
</script>

<template>
  <form class="flex max-w-sm flex-col gap-4" @submit.prevent="submitted = true">
    <NFormField
      label="Interests"
      description="Choose the topics you follow."
      :error="error"
      required
    >
      <NCheckboxGroup v-model="interests" :items="items" />
    </NFormField>
    <NButton type="submit" label="Save" />
  </form>
</template>
