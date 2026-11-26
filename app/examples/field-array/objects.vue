<script setup lang="ts">
const contacts = ref([{ name: 'Ada Lovelace', email: 'ada@example.com' }]);
</script>

<template>
  <div class="w-full max-w-lg space-y-3">
    <NFieldArray
      v-model="contacts"
      label="Contacts"
      item-label="Contact"
      add-label="Add contact"
      :default-item="() => ({ name: '', email: '' })"
    >
      <template #default="{ item }">
        <div class="grid grid-cols-2 gap-2">
          <NInput v-model="item.name" placeholder="Name" aria-label="Name" />
          <NInput v-model="item.email" type="email" placeholder="Email" aria-label="Email" />
        </div>
      </template>
    </NFieldArray>
    <p class="break-all font-mono text-xs text-neutral-500">{{ contacts }}</p>
  </div>
</template>
