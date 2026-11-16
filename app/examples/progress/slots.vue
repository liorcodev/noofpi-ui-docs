<template>
  <div class="flex flex-col gap-6">
    <NProgress :value="30" show-value />
    <NProgress :value="75" color="success">
      <template #label>
        <span class="inline-flex items-center gap-1.5">
          <span class="i-lucide-hard-drive" aria-hidden="true" />
          Disk usage
        </span>
      </template>
      <template #value="{ value, percent }"> {{ value }} of 100 GB ({{ percent }}%) </template>
    </NProgress>
  </div>
</template>
