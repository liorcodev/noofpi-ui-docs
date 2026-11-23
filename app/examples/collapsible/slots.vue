<template>
  <NCollapsible variant="outline" class="max-w-md">
    <template #label="{ open }">
      <span class="flex-1">Notifications</span>
      <NBadge :label="open ? 'Open' : 'Closed'" :color="open ? 'success' : 'neutral'" size="xs" />
    </template>
    <template #default="{ open }">
      <p>The content knows it is {{ open ? 'open' : 'closed' }}.</p>
    </template>
  </NCollapsible>
</template>
