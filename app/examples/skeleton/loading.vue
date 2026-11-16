<script setup lang="ts">
const loading = ref(true);
</script>

<template>
  <div class="flex flex-col items-start gap-4">
    <NButton
      :label="loading ? 'Show content' : 'Show loading'"
      variant="outline"
      @click="loading = !loading"
    />
    <NCard class="w-full max-w-sm">
      <div v-if="loading" class="flex items-center gap-4">
        <NSkeleton shape="circle" :width="48" label="Loading profile" />
        <NSkeleton shape="text" :lines="2" />
      </div>
      <NUser v-else name="Ada Lovelace" description="Mathematician" />
    </NCard>
  </div>
</template>
