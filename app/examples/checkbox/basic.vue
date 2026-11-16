<script setup lang="ts">
const remember = ref(true);
</script>

<template>
  <NCheckbox v-model="remember" label="Remember me" />
</template>
