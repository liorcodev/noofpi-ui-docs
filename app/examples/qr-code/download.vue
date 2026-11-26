<script setup lang="ts">
const message = ref('Nothing downloaded yet');
</script>

<template>
  <div class="flex flex-wrap items-start gap-6">
    <NQRCode
      value="https://noofpi.dev"
      downloadable
      filename="noofpi-site"
      @download="(format, name) => (message = `Saved ${name} as ${format}`)"
      @error="error => (message = error.message)"
    />
    <NQRCode
      value="https://noofpi.dev"
      downloadable
      download-format="svg"
      download-label="Save as SVG"
      filename="noofpi-site"
      @download="(format, name) => (message = `Saved ${name} as ${format}`)"
      @error="error => (message = error.message)"
    />
    <span class="text-sm">{{ message }}</span>
  </div>
</template>
