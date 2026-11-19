<script setup lang="ts">
import type { TreeItem, TreeValue } from 'noofpi-ui';

const items: TreeItem[] = [
  {
    value: 'read',
    label: 'Read',
    children: [
      { value: 'read-projects', label: 'Projects' },
      { value: 'read-billing', label: 'Billing' }
    ]
  },
  {
    value: 'write',
    label: 'Write',
    children: [
      { value: 'write-projects', label: 'Projects' },
      { value: 'write-billing', label: 'Billing', disabled: true },
      { value: 'write-members', label: 'Members' }
    ]
  }
];

const checked = ref<TreeValue[]>(['read-projects']);
const expanded = ref<TreeValue[]>(['read', 'write']);
</script>

<template>
  <div class="max-w-sm space-y-3">
    <NTree
      v-model:checked="checked"
      v-model:expanded="expanded"
      :items="items"
      checkable
      searchable
      search-placeholder="Filter permissions…"
      label="Permissions"
    />
    <p class="text-sm text-neutral-500">Checked: {{ checked.join(', ') || 'nothing' }}</p>
  </div>
</template>
