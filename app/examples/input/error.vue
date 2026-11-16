<script setup lang="ts">
const email = ref('');
</script>

<template>
  <div class="w-full max-w-sm">
    <NFormField label="Email" error="This email is already taken.">
      <NInput v-model="email" type="email" />
    </NFormField>
  </div>
</template>
