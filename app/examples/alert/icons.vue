<template>
  <div class="flex flex-col gap-3">
    <NAlert color="success" description="Description only." />
    <NAlert color="warning" icon="i-lucide-bell" title="Custom icon" />
    <NAlert title="Leading slot" description="The slot replaces the icon.">
      <template #leading>
        <NAvatar text="N" size="sm" />
      </template>
    </NAlert>
  </div>
</template>
