<template>
  <div class="h-56 overflow-auto rounded-xl border border-neutral-300">
    <NHeader
      title="Scroll me"
      logo="i-lucide-zap"
      to="#"
      shadow="scroll"
      sticky
      :items="[
        { label: 'Home', to: '#home' },
        { label: 'Docs', to: '#docs' }
      ]"
    />
    <div class="space-y-3 p-4 text-sm text-neutral-600">
      <p v-for="n in 12" :key="n">Row {{ n }}. The header gets its shadow once this box scrolls.</p>
    </div>
  </div>
</template>
