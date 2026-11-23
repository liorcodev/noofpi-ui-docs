<script setup lang="ts">
const shown = ref(false);
</script>

<template>
  <div class="flex flex-col items-start gap-3">
    <NButton
      :label="shown ? 'Remove the accessibility button' : 'Show the accessibility button'"
      variant="outline"
      color="neutral"
      @click="shown = !shown"
    />
    <p v-if="shown" class="text-sm">
      Look for the button in the bottom corner of the window, or press Alt+A.
    </p>
    <NAccessibility v-if="shown" :storage-key="false" />
  </div>
</template>
