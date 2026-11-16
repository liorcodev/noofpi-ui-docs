<script setup lang="ts">
const solid = ref(true);
const soft = ref(true);
const success = ref(true);
const pill = ref(true);
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <NCheckButton v-model="solid" label="Default" />
    <NCheckButton v-model="soft" checked-variant="soft" label="Soft when checked" />
    <NCheckButton v-model="success" color="success" label="Success" />
    <NCheckButton v-model="pill" shape="pill" size="lg" label="Large pill" />
  </div>
</template>
