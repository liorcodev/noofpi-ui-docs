<script setup lang="ts">
const steps = ref(['Preheat the oven', 'Mix the batter', 'Bake for 30 minutes']);
const log = ref('Add, remove or move a step.');
</script>

<template>
  <div class="w-full max-w-md space-y-3">
    <NFieldArray
      v-model="steps"
      sortable
      label="Steps"
      item-label="Step"
      add-label="Add step"
      @add="(item, index) => (log = `add: row ${index}`)"
      @remove="(item, index) => (log = `remove: ${item} (row ${index})`)"
      @move="(from, to) => (log = `move: row ${from} to row ${to}`)"
    >
      <template #default="{ item, index, update }">
        <NInput
          :model-value="item"
          :aria-label="`Step ${index + 1}`"
          @update:model-value="update($event)"
        />
      </template>
    </NFieldArray>
    <p class="font-mono text-xs text-neutral-500">{{ log }}</p>
  </div>
</template>
