<script setup lang="ts">
const levels = ['L', 'M', 'Q', 'H'] as const;
</script>

<template>
  <div class="flex flex-wrap items-end gap-6">
    <div v-for="level in levels" :key="level" class="flex flex-col items-center gap-2">
      <NQRCode
        value="https://noofpi.dev/docs/components/qr-code"
        :size="120"
        :error-correction="level"
        :label="`Error correction ${level}`"
      />
      <span class="text-sm">{{ level }}</span>
    </div>
  </div>
</template>
