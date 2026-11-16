<script setup lang="ts">
const code = ref('1234');
</script>

<template>
  <div class="space-y-3">
    <NPinInput v-model="code" :length="4" invalid />
    <NPinInput v-model="code" :length="4" disabled />
  </div>
</template>
