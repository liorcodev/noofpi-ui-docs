<script setup lang="ts">
const shadows = ['none', 'sm', 'md', 'lg', 'xl'] as const;
</script>

<template>
  <div class="flex flex-col gap-8">
    <NHeader
      v-for="shadow in shadows"
      :key="shadow"
      :title="`shadow: ${shadow}`"
      to="#"
      :shadow="shadow"
    />
    <NHeader title="border: false" to="#" shadow="sm" :border="false" />
  </div>
</template>
