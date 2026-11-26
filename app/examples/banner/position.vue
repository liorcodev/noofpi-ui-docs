<script setup lang="ts">
const placement = ref<'top' | 'bottom'>('top');
</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="flex gap-2">
      <NButton
        label="Top"
        size="sm"
        :variant="placement === 'top' ? 'solid' : 'outline'"
        @click="placement = 'top'"
      />
      <NButton
        label="Bottom"
        size="sm"
        :variant="placement === 'bottom' ? 'solid' : 'outline'"
        @click="placement = 'bottom'"
      />
    </div>
    <div class="h-56 overflow-y-auto rounded-lg border border-neutral-200 dark:border-neutral-800">
      <NBanner
        position="sticky"
        :placement="placement"
        color="primary"
        variant="subtle"
        title="Sticky banner"
        description="It sticks to the edge of this scroll area."
      />
      <div class="flex flex-col gap-3 p-4 text-sm">
        <p v-for="n in 12" :key="n">Scroll this area. Paragraph {{ n }}.</p>
      </div>
    </div>
  </div>
</template>
