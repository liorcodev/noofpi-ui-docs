<script setup lang="ts">
const pin = ref('');
const serial = ref('');
</script>

<template>
  <div class="space-y-3">
    <NPinInput v-model="pin" :length="4" />
    <NPinInput v-model="serial" :length="5" type="alphanumeric" />
  </div>
</template>
