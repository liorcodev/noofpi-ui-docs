<script setup lang="ts">
const notifications = ref(true);
</script>

<template>
  <div class="flex flex-col items-start gap-3">
    <NSwitch v-model="notifications" label="Email notifications" />
    <p class="text-sm">{{ notifications ? 'On' : 'Off' }}</p>
  </div>
</template>
