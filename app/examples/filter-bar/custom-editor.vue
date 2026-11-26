<script setup lang="ts">
const filters = [
  { key: 'rating', label: 'Min rating', type: 'number', icon: 'i-lucide-star' }
] as const;

const value = ref({ search: '', filters: { rating: 4 }, sort: null });
</script>

<template>
  <NFilterBar v-model="value" :filters="[...filters]">
    <template #filter-rating="{ value: rating, update, close }">
      <div class="flex flex-col gap-2">
        <NRating
          :model-value="Number(rating ?? 0)"
          label="Minimum rating"
          clearable
          @update:model-value="update($event || undefined)"
        />
        <NButton label="Done" size="sm" variant="outline" color="neutral" @click="close()" />
      </div>
    </template>
  </NFilterBar>
</template>
