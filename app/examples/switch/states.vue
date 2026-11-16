<script setup lang="ts">
const on = ref(true);
const off = ref(false);
const invalid = ref(false);
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <NSwitch v-model="on" label="Disabled on" disabled />
    <NSwitch v-model="off" label="Disabled" disabled />
    <NSwitch v-model="invalid" label="Invalid" invalid />
  </div>
</template>
