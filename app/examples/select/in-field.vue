<script setup lang="ts">
const timezone = ref('');
const submitted = ref(false);

const timezones = [
  { label: 'UTC', value: 'utc' },
  { label: 'Europe/Berlin', value: 'berlin' },
  { label: 'America/New_York', value: 'new-york' },
  { label: 'Asia/Tokyo', value: 'tokyo' }
];

const error = computed(() =>
  submitted.value && !timezone.value ? 'Choose a timezone.' : undefined
);
</script>

<template>
  <form class="flex max-w-xs flex-col gap-4" @submit.prevent="submitted = true">
    <NFormField label="Timezone" description="Used for your reports." :error="error" required>
      <NSelect v-model="timezone" :items="timezones" name="timezone" placeholder="Select" />
    </NFormField>
    <NButton type="submit" label="Save" />
  </form>
</template>
