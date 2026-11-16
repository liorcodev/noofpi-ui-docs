<script setup lang="ts">
import { toast } from 'noofpi-ui';

function remove() {
  toast.add({
    title: 'Item deleted',
    description: 'The item was moved to the trash.',
    icon: 'i-lucide-trash-2',
    duration: 8000,
    actions: [
      {
        label: 'Undo',
        onClick: () => toast.add({ title: 'Item restored', color: 'success' })
      }
    ]
  });
}
</script>

<template>
  <div>
    <NButton label="Delete item" color="error" variant="outline" @click="remove" />
    <NToaster />
  </div>
</template>
