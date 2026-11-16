<script setup lang="ts">
const country = ref('');
const submitted = ref(false);

const countries = [
  { label: 'Canada', value: 'ca' },
  { label: 'France', value: 'fr' },
  { label: 'Germany', value: 'de' },
  { label: 'Japan', value: 'jp' },
  { label: 'United Kingdom', value: 'gb' },
  { label: 'United States', value: 'us' }
];

const error = computed(() => (submitted.value && !country.value ? 'Choose a country.' : undefined));
</script>

<template>
  <form class="flex max-w-xs flex-col gap-4" @submit.prevent="submitted = true">
    <NFormField label="Country" description="Where you live." :error="error" required>
      <NCombobox v-model="country" :items="countries" name="country" placeholder="Search country" />
    </NFormField>
    <NButton type="submit" label="Save" />
  </form>
</template>
