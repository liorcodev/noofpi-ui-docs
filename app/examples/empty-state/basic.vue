<template>
  <div class="rounded-xl border border-zinc-200 bg-white p-4">
    <NEmptyState
      icon="i-lucide-folder-open"
      title="No projects yet"
      description="Create your first project to organize your work and invite your team."
      :actions="[
        { label: 'Create project', icon: 'i-lucide-plus' },
        { label: 'Browse templates', variant: 'outline', color: 'neutral' }
      ]"
    />
  </div>
</template>
