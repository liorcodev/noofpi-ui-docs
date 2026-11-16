<script setup lang="ts">
const notes = ref('');
</script>

<template>
  <div class="w-full max-w-sm">
    <NFormField label="Notes" error="Keep it under 20 characters.">
      <template #default="{ id, invalid, describedBy }">
        <textarea
          :id="id"
          v-model="notes"
          rows="3"
          class="w-full rounded-lg border border-neutral-300 bg-transparent p-2 text-sm"
          :aria-invalid="invalid || undefined"
          :aria-describedby="describedBy"
        />
      </template>
    </NFormField>
  </div>
</template>
