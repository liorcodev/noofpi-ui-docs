<script setup lang="ts">
const filters = [
  {
    key: 'status',
    label: 'Status',
    type: 'select',
    options: [
      { label: 'Active', value: 'active', color: 'success' },
      { label: 'Pending', value: 'pending', color: 'warning' },
      { label: 'Blocked', value: 'blocked', color: 'error' }
    ]
  },
  { key: 'verified', label: 'Verified', type: 'boolean' }
] as const;

const users = [
  { name: 'Ava Martin', status: 'active', verified: true },
  { name: 'Noah Kim', status: 'pending', verified: false },
  { name: 'Priya Shah', status: 'active', verified: false },
  { name: 'Leo Fischer', status: 'blocked', verified: true }
];

const value = ref({ search: '', filters: {}, sort: null });

const visible = computed(() => {
  const { search, filters: active } = value.value as {
    search: string;
    filters: Record<string, unknown>;
  };
  return users.filter(
    user =>
      user.name.toLowerCase().includes(search.toLowerCase()) &&
      Object.entries(active).every(([key, wanted]) => user[key as keyof typeof user] === wanted)
  );
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <NFilterBar v-model="value" :filters="[...filters]" search-placeholder="Search users" />

    <ul class="flex flex-col gap-1 text-sm">
      <li v-for="user in visible" :key="user.name">{{ user.name }} ({{ user.status }})</li>
      <li v-if="!visible.length" class="text-neutral-500">No users match.</li>
    </ul>
  </div>
</template>
