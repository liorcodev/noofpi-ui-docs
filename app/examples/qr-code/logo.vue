<script setup lang="ts">
const svg =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#2563eb"/><path d="M8 12.5l3 3 5-6" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const logo = `data:image/svg+xml,${encodeURIComponent(svg)}`;
</script>

<template>
  <div class="flex flex-wrap items-center gap-6">
    <NQRCode value="https://noofpi.dev" :size="180" :logo="logo" label="noofpi website" />
    <NQRCode value="https://noofpi.dev" :size="180" :logo-size="0.28" label="noofpi website">
      <template #logo>
        <NIcon name="i-lucide-link" class="text-2xl text-neutral-900" />
      </template>
    </NQRCode>
  </div>
</template>
