<script setup lang="ts">
const open = ref(false);
const side = ref<'start' | 'end' | 'top' | 'bottom'>('end');

function show(placement: typeof side.value) {
  side.value = placement;
  open.value = true;
}
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <NButton
      v-for="placement in ['start', 'end', 'top', 'bottom'] as const"
      :key="placement"
      :label="placement"
      variant="outline"
      color="neutral"
      @click="show(placement)"
    />
    <NDrawer v-model:open="open" :placement="side" title="Filters" size="sm">
      Drawer content.
    </NDrawer>
  </div>
</template>
