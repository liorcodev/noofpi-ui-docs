<script setup lang="ts">
const plain = ref([{ label: 'Website', url: 'https://example.com' }]);
const cards = ref([
  { label: 'Website', url: 'https://example.com' },
  { label: 'Docs', url: 'https://example.com/docs' }
]);

const blank = () => ({ label: '', url: '' });
</script>

<template>
  <div class="w-full max-w-lg space-y-8">
    <NFieldArray v-model="plain" size="sm" label="Plain links" :default-item="blank">
      <template #default="{ item }">
        <div class="grid grid-cols-2 gap-2">
          <NInput v-model="item.label" size="sm" aria-label="Label" />
          <NInput v-model="item.url" size="sm" aria-label="URL" />
        </div>
      </template>
    </NFieldArray>

    <NFieldArray
      v-model="cards"
      variant="outline"
      align="center"
      label="Cards"
      :default-item="blank"
    >
      <template #default="{ item }">
        <div class="grid grid-cols-2 gap-2">
          <NInput v-model="item.label" aria-label="Label" />
          <NInput v-model="item.url" aria-label="URL" />
        </div>
      </template>
    </NFieldArray>
  </div>
</template>
