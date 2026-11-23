<script setup lang="ts">
const emails = ref(['ana@example.com']);

const isEmail = (tag: string) => /^\S+@\S+\.\S+$/.test(tag);
</script>

<template>
  <div class="flex max-w-sm flex-col gap-2">
    <NTagsInput
      v-model="emails"
      :max="3"
      :validate="isEmail"
      label="Invite by email"
      placeholder="Up to 3 emails"
    />
    <span class="text-sm">A tag that is not an email, or a fourth tag, stays in the field.</span>
  </div>
</template>
