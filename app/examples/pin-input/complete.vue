<script setup lang="ts">
const code = ref('');
const status = ref('Enter all 6 digits.');

function verify(value: string) {
  status.value = `Verifying ${value}...`;
}
</script>

<template>
  <div class="space-y-2">
    <NPinInput v-model="code" @complete="verify" />
    <p class="text-sm text-neutral-500">{{ status }}</p>
  </div>
</template>
