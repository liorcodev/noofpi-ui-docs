<script setup lang="ts">
const email = ref('');
</script>

<template>
  <NBanner color="neutral" variant="soft" align="start">
    <template #leading>
      <NAvatar text="N" size="sm" />
    </template>
    <template #title>Join the <strong>beta</strong></template>
    <template #actions>
      <NInput v-model="email" type="email" placeholder="you@example.com" />
      <NButton label="Join" size="xs" />
    </template>
    <template #close="{ dismiss }">
      <NButton label="Not now" variant="ghost" color="neutral" size="xs" @click="dismiss" />
    </template>
  </NBanner>
</template>
