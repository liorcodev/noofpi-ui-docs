<script setup lang="ts">
const loading = ref(false);

function run() {
  loading.value = true;
  setTimeout(() => (loading.value = false), 3000);
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <NLoadingIndicator :loading="loading" />
    <NButton
      :loading="loading"
      icon="i-lucide-refresh-cw"
      label="Load for 3 seconds"
      @click="run"
    />
  </div>
</template>
