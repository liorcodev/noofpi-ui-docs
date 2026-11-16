<template>
  <div class="flex flex-wrap items-center gap-3">
    <NBadge variant="subtle" color="success">
      <template #leading>
        <span class="size-1.5 rounded-full bg-current" />
      </template>
      Online
    </NBadge>
    <NBadge variant="soft" color="warning"> <strong>3</strong> pending </NBadge>
    <NBadge variant="outline" color="neutral">
      v1.0
      <template #trailing>
        <span class="i-lucide-tag size-3.5" aria-hidden="true" />
      </template>
    </NBadge>
  </div>
</template>
