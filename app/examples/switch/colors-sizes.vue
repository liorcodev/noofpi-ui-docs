<script setup lang="ts">
const on = ref(true);
</script>

<template>
  <div class="flex flex-col items-start gap-3">
    <div class="flex flex-wrap items-center gap-4">
      <NSwitch v-model="on" size="sm" label="Small" />
      <NSwitch v-model="on" size="md" label="Medium" />
      <NSwitch v-model="on" size="lg" label="Large" />
    </div>
    <div class="flex flex-wrap items-center gap-4">
      <NSwitch v-model="on" color="primary" label="Primary" />
      <NSwitch v-model="on" color="success" label="Success" />
      <NSwitch v-model="on" color="info" label="Info" />
      <NSwitch v-model="on" color="warning" label="Warning" />
      <NSwitch v-model="on" color="error" label="Error" />
    </div>
  </div>
</template>
