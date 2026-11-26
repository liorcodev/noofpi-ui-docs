<template>
  <div class="flex flex-col gap-2">
    <NBanner
      size="sm"
      color="neutral"
      variant="subtle"
      title="Small"
      description="Tighter padding."
    />
    <NBanner size="md" color="neutral" variant="subtle" title="Medium" description="The default." />
    <NBanner size="lg" color="neutral" variant="subtle" title="Large" description="More room." />
    <NBanner
      align="start"
      color="info"
      variant="subtle"
      icon="i-lucide-info"
      title="Aligned to the start"
      description="The content sits at the start edge instead of the center."
      close
    />
  </div>
</template>
