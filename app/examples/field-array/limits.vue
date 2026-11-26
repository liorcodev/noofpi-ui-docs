<script setup lang="ts">
const phones = ref(['+1 555 0100']);
</script>

<template>
  <NFieldArray
    v-model="phones"
    :min="1"
    :max="3"
    label="Phone numbers"
    item-label="Phone"
    add-label="Add phone"
    max-label="You can add up to 3 numbers"
    class="w-full max-w-sm"
  >
    <template #default="{ item, index, update }">
      <NInput
        :model-value="item"
        type="tel"
        :aria-label="`Phone ${index + 1}`"
        @update:model-value="update($event)"
      />
    </template>
  </NFieldArray>
</template>
