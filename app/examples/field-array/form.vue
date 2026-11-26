<script setup lang="ts">
import { z } from 'zod';

const schema = z.object({
  contacts: z
    .array(
      z.object({
        name: z.string().min(1, 'Name is required'),
        email: z.email('Enter a valid email')
      })
    )
    .min(1, 'Add at least one contact')
});

const state = reactive({ contacts: [{ name: '', email: 'nope' }] });
const saved = ref('');
</script>

<template>
  <div class="w-full max-w-lg space-y-3">
    <NForm
      :schema="schema"
      :state="state"
      @submit="saved = `Saved ${$event.contacts.length} contact(s)`"
    >
      <NFieldArray
        v-model="state.contacts"
        name="contacts"
        label="Contacts"
        item-label="Contact"
        add-label="Add contact"
        variant="outline"
        :default-item="() => ({ name: '', email: '' })"
      >
        <template #default="{ item, name }">
          <div class="grid grid-cols-2 gap-2">
            <NFormField :name="`${name}.name`" label="Name">
              <NInput v-model="item.name" />
            </NFormField>
            <NFormField :name="`${name}.email`" label="Email">
              <NInput v-model="item.email" type="email" />
            </NFormField>
          </div>
        </template>
      </NFieldArray>
      <NButton type="submit" label="Save" class="mt-3" />
    </NForm>
    <p v-if="saved" class="text-sm">{{ saved }}</p>
  </div>
</template>
