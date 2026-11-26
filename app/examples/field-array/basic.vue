<script setup lang="ts">
const emails = ref(['ada@example.com', 'grace@example.com']);
</script>

<template>
  <div class="w-full max-w-sm space-y-3">
    <NFieldArray v-model="emails" label="Emails" item-label="Email" add-label="Add email">
      <template #default="{ item, index, update }">
        <NInput
          :model-value="item"
          type="email"
          :aria-label="`Email ${index + 1}`"
          placeholder="you@example.com"
          @update:model-value="update($event)"
        />
      </template>
    </NFieldArray>
    <p class="break-all font-mono text-xs text-neutral-500">{{ emails }}</p>
  </div>
</template>
