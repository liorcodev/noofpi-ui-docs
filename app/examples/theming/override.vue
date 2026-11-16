<template>
  <div
    class="flex flex-wrap items-center gap-3"
    style="
      --ui-radius: 1.25rem;
      --ui-primary-500: #7c3aed;
      --ui-primary-600: #6d28d9;
      --ui-primary-700: #5b21b6;
    "
  >
    <NButton label="Custom primary" />
    <NButton variant="outline" label="Outline" />
    <NBadge label="Badge" />
    <NProgress class="w-40" :value="60" />
  </div>
</template>
