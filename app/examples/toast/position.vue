<script setup lang="ts">
import { toast } from 'noofpi-ui';
import type { ToastPosition } from 'noofpi-ui';

const position = ref<ToastPosition>('top-center');
const positions: ToastPosition[] = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right'
];

function show(next: ToastPosition) {
  position.value = next;
  toast.add({ title: next, description: 'Toasts appear here.' });
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <NButton
      v-for="item in positions"
      :key="item"
      :label="item"
      size="sm"
      variant="outline"
      color="neutral"
      @click="show(item)"
    />
    <NToaster :position="position" />
  </div>
</template>
