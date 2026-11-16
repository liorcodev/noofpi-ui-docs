<script setup lang="ts">
const online = ref(true);
</script>

<template>
  <div class="flex flex-wrap items-center gap-8">
    <NChip :show="online" color="success" size="lg">
      <NAvatar alt="Jane Doe" size="lg" />
    </NChip>
    <NButton
      variant="outline"
      color="neutral"
      :label="online ? 'Hide chip' : 'Show chip'"
      @click="online = !online"
    />
  </div>
</template>
