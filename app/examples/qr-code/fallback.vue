<script setup lang="ts">
const text = ref('');
</script>

<template>
  <div class="flex flex-wrap items-center gap-6">
    <NQRCode :value="text">
      <template #fallback="{ error }">
        <p class="text-sm">{{ error?.message }}</p>
      </template>
    </NQRCode>
    <NInput v-model="text" placeholder="Type to make a code" class="max-w-xs" />
  </div>
</template>
