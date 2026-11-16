<script setup lang="ts">
const colors = ['primary', 'neutral', 'success', 'info', 'warning', 'error'] as const;
const variants = ['solid', 'outline', 'soft', 'subtle'] as const;
</script>

<template>
  <div class="flex flex-col gap-3">
    <div v-for="variant in variants" :key="variant" class="flex flex-wrap items-center gap-3">
      <NBadge
        v-for="color in colors"
        :key="color"
        :variant="variant"
        :color="color"
        :label="color"
      />
    </div>
  </div>
</template>
