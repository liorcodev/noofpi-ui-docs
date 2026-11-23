<template>
  <div class="flex flex-wrap items-center gap-3">
    <NCopyButton
      text="#3b82f6"
      icon="i-lucide-palette"
      copied-icon="i-lucide-check-check"
      color="success"
      :duration="5000"
      label="Copy color"
    />
    <NCopyButton text="Short flash" icon="i-lucide-clipboard" :duration="500" />
  </div>
</template>
