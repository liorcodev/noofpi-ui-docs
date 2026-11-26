<script setup lang="ts">
const colors = ['primary', 'neutral', 'success', 'info', 'warning', 'error'] as const;
const variants = ['solid', 'soft', 'subtle', 'outline'] as const;
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-col gap-2">
      <NBanner
        v-for="color in colors"
        :key="color"
        :color="color"
        :title="color"
        description="A short announcement."
      />
    </div>
    <div class="flex flex-col gap-2">
      <NBanner
        v-for="variant in variants"
        :key="variant"
        color="info"
        :variant="variant"
        :title="variant"
        description="A short announcement."
      />
    </div>
  </div>
</template>
