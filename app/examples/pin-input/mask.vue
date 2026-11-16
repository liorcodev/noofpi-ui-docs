<script setup lang="ts">
const pin = ref('');
</script>

<template>
  <NPinInput v-model="pin" :length="4" mask />
</template>
