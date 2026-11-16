<script setup lang="ts">
const on = ref(true);
const off = ref(false);
const invalid = ref(false);
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <NCheckbox v-model="on" label="Disabled checked" disabled />
    <NCheckbox v-model="off" label="Disabled" disabled />
    <NCheckbox v-model="invalid" label="Invalid" invalid />
  </div>
</template>
