<template>
  <div class="flex flex-wrap items-center gap-8">
    <NUser
      name="Alex Morgan"
      description="Engineering"
      :avatar="{ shape: 'rounded', color: 'info', bordered: true }"
    />
    <NUser
      name="Robot"
      description="Automated account"
      :avatar="{ icon: 'i-lucide-bot', color: 'success', size: 'lg' }"
    />
  </div>
</template>
