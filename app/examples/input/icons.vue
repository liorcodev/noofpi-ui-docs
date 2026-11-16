<script setup lang="ts">
const search = ref('');
const email = ref('');
</script>

<template>
  <div class="w-full max-w-sm space-y-3">
    <NInput v-model="search" icon="i-lucide-search" placeholder="Search" />
    <NInput
      v-model="email"
      type="email"
      icon="i-lucide-mail"
      trailing-icon="i-lucide-circle-check"
      placeholder="you@example.com"
    />
  </div>
</template>
