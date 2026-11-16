<script setup lang="ts">
const items = [{ title: 'One' }, { title: 'Two' }, { title: 'Three' }];
</script>

<template>
  <div class="flex flex-col gap-6">
    <NStepper :model-value="1" :items="items" size="sm" />
    <NStepper :model-value="1" :items="items" size="md" />
    <NStepper :model-value="1" :items="items" size="lg" />
  </div>
</template>
