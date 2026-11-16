<script setup lang="ts">
import type { ButtonColor } from 'noofpi-ui';

const colors: ButtonColor[] = ['primary', 'neutral', 'success', 'info', 'warning', 'error'];
const color = ref<ButtonColor>('success');
const loading = ref(false);

function run(next: ButtonColor) {
  color.value = next;
  loading.value = true;
  setTimeout(() => (loading.value = false), 2500);
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <NLoadingIndicator :loading="loading" :color="color" />
    <NButton
      v-for="item in colors"
      :key="item"
      :label="item"
      :color="item"
      variant="soft"
      size="sm"
      @click="run(item)"
    />
  </div>
</template>
