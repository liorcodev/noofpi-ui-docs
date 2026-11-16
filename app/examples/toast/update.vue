<script setup lang="ts">
import { toast } from 'noofpi-ui';

function upload() {
  const { id } = toast.add({
    title: 'Uploading…',
    description: 'Please keep this tab open.',
    icon: 'i-lucide-cloud-upload',
    duration: 0,
    close: false
  });

  setTimeout(() => {
    toast.update(id, {
      title: 'Uploaded',
      description: 'Your file is ready.',
      icon: undefined,
      color: 'success',
      close: true,
      duration: 4000
    });
  }, 2000);
}
</script>

<template>
  <div>
    <NButton label="Upload file" icon="i-lucide-upload" @click="upload" />
    <NToaster />
  </div>
</template>
