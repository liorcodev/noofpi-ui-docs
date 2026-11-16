<script setup lang="ts">
import { toast } from 'noofpi-ui';
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <NButton
      label="Success"
      color="success"
      variant="soft"
      @click="toast.add({ title: 'Profile updated', color: 'success' })"
    />
    <NButton
      label="Info"
      color="info"
      variant="soft"
      @click="toast.add({ title: 'New version available', color: 'info' })"
    />
    <NButton
      label="Warning"
      color="warning"
      variant="soft"
      @click="toast.add({ title: 'Storage almost full', color: 'warning' })"
    />
    <NButton
      label="Error"
      color="error"
      variant="soft"
      @click="toast.add({ title: 'Upload failed', color: 'error' })"
    />
    <NButton
      label="Custom icon"
      color="neutral"
      variant="soft"
      @click="toast.add({ title: 'Item deleted', color: 'neutral', icon: 'i-lucide-trash-2' })"
    />
    <NToaster />
  </div>
</template>
