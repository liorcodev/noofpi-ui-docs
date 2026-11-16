<script setup lang="ts">
const bold = ref(true);
const italic = ref(false);
const underline = ref(false);
</script>

<template>
  <div class="flex items-center gap-1">
    <NCheckButton v-model="bold" icon="i-lucide-bold" aria-label="Bold" />
    <NCheckButton v-model="italic" icon="i-lucide-italic" aria-label="Italic" />
    <NCheckButton v-model="underline" icon="i-lucide-underline" aria-label="Underline" />
  </div>
</template>
