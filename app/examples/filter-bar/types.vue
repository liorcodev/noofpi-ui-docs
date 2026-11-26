<script setup lang="ts">
const filters = [
  {
    key: 'status',
    label: 'Status',
    type: 'select',
    icon: 'i-lucide-circle-dot',
    options: [
      { label: 'Active', value: 'active', color: 'success' },
      { label: 'Pending', value: 'pending', color: 'warning' },
      { label: 'Blocked', value: 'blocked', color: 'error' }
    ]
  },
  {
    key: 'roles',
    label: 'Roles',
    type: 'multiselect',
    options: [
      { label: 'Admin', value: 'admin', icon: 'i-lucide-shield' },
      { label: 'Editor', value: 'editor', icon: 'i-lucide-pencil' },
      { label: 'Viewer', value: 'viewer', icon: 'i-lucide-eye' }
    ]
  },
  { key: 'verified', label: 'Verified', type: 'boolean' },
  { key: 'joined', label: 'Joined', type: 'date', max: '2026-12-31' },
  { key: 'active', label: 'Active between', type: 'daterange' },
  { key: 'logins', label: 'Logins', type: 'number', min: 0, placeholder: 'At least' },
  { key: 'email', label: 'Email', type: 'text', placeholder: 'Contains' }
] as const;

const value = ref({
  search: '',
  filters: { status: 'active', roles: ['admin', 'editor'], verified: true, logins: 10 },
  sort: null
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <NFilterBar v-model="value" :filters="[...filters]" />
    <pre class="overflow-x-auto rounded-lg bg-neutral-100 p-3 text-xs dark:bg-neutral-900">{{
      JSON.stringify(value, null, 2)
    }}</pre>
  </div>
</template>
