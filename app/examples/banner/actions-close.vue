<script setup lang="ts">
const open = ref(true);
const message = ref('');
</script>

<template>
  <div class="flex flex-col items-start gap-3">
    <NBanner
      v-model:open="open"
      color="warning"
      variant="soft"
      icon="i-lucide-triangle-alert"
      title="Your trial ends in 3 days."
      close
      :actions="[
        { label: 'Upgrade', onClick: () => (message = 'Upgrade clicked') },
        { label: 'Remind me later', onClick: () => (message = 'We will remind you') }
      ]"
      @close="message = 'Dismissed'"
    />
    <NButton v-if="!open" label="Show again" variant="outline" @click="open = true" />
    <p v-if="message" class="text-sm">{{ message }}</p>
  </div>
</template>
