<script setup lang="ts">
const accepted = ref(false);
</script>

<template>
  <NCheckbox v-model="accepted">
    I accept the <a href="#" class="font-medium underline" @click.stop>terms of service</a>
  </NCheckbox>
</template>
