<script setup lang="ts">
const email = ref('');
const bio = ref('');
</script>

<template>
  <div class="w-full max-w-sm space-y-4">
    <NFormField
      name="email"
      label="Email"
      description="Used for receipts and account recovery."
      help="We never share it."
      required
    >
      <NInput v-model="email" type="email" autocomplete="email" />
    </NFormField>
    <NFormField label="Bio" hint="Optional">
      <NInput v-model="bio" />
    </NFormField>
  </div>
</template>
