<script setup lang="ts">
const value = ref(40);
</script>

<template>
  <div class="flex flex-col gap-4">
    <NProgress label="Progress" :value="value" show-value />
    <div class="flex gap-2">
      <NButton size="sm" variant="outline" label="-10" @click="value = Math.max(0, value - 10)" />
      <NButton size="sm" variant="outline" label="+10" @click="value = Math.min(100, value + 10)" />
    </div>
  </div>
</template>
