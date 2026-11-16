<script setup lang="ts">
const role = ref('editor');

const roles = [
  {
    label: 'Owner',
    value: 'owner',
    icon: 'i-lucide-crown',
    description: 'Full access, including billing.'
  },
  {
    label: 'Editor',
    value: 'editor',
    icon: 'i-lucide-pencil',
    description: 'Can change content and settings.'
  },
  {
    label: 'Viewer',
    value: 'viewer',
    icon: 'i-lucide-eye',
    description: 'Read-only access.'
  }
];
</script>

<template>
  <div class="max-w-xs">
    <NSelect v-model="role" :items="roles" label="Role" />
  </div>
</template>
