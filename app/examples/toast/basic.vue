<script setup lang="ts">
import { toast } from 'noofpi-ui';

function save() {
  toast.add({ title: 'Saved', description: 'Your changes are live.' });
}
</script>

<template>
  <div>
    <NButton label="Show toast" @click="save" />
    <NToaster />
  </div>
</template>
