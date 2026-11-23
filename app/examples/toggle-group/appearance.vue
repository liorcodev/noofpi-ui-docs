<script setup lang="ts">
const a = ref('one');
const b = ref('one');
const c = ref('one');
const d = ref('one');
const e = ref('one');

const items = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' }
];
</script>

<template>
  <div class="flex flex-wrap items-center gap-4">
    <NToggleGroup v-model="a" :items="items" size="sm" label="Small" />
    <NToggleGroup v-model="b" :items="items" color="success" label="Success" />
    <NToggleGroup v-model="c" :items="items" shape="pill" label="Pill" />
    <NToggleGroup v-model="d" :items="items" checked-variant="soft" label="Soft" />
    <NToggleGroup
      v-model="e"
      :items="items"
      :bordered="false"
      variant="outline"
      label="Without border"
    />
  </div>
</template>
