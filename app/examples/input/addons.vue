<script setup lang="ts">
const site = ref('');
const price = ref('');
</script>

<template>
  <div class="w-full max-w-sm space-y-3">
    <NInput v-model="site" prepend="https://" append=".com" placeholder="example" />
    <NInput v-model="price" prepend="$" placeholder="0.00" />
  </div>
</template>
