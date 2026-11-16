<script setup lang="ts">
const subscribed = ref(false);
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <NCheckButton v-model="subscribed" icon="i-lucide-bell" label="Subscribe" />
    <span class="text-sm">{{ subscribed ? 'Subscribed' : 'Not subscribed' }}</span>
  </div>
</template>
