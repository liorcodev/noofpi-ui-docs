<script setup lang="ts">
const shown = ref(false);
const open = ref(false);

function show() {
  shown.value = true;
  open.value = true;
}
</script>

<template>
  <div class="flex flex-col items-start gap-3">
    <NButton
      label="Show it in the bottom-right corner"
      variant="outline"
      color="neutral"
      @click="show"
    />
    <p v-if="shown" class="text-sm">Only text size, contrast and the reading guide are offered.</p>
    <NAccessibility
      v-if="shown"
      v-model:open="open"
      :features="['fontSize', 'contrast', 'readingGuide']"
      placement="bottom-end"
      statement-url="/accessibility"
      shortcut=""
      :storage-key="false"
    />
  </div>
</template>
