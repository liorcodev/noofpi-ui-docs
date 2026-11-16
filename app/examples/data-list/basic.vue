<template>
  <NCard class="w-full max-w-md">
    <NDataList
      title="Session length"
      icon="i-lucide-timer"
      :items="[
        { label: 'Users', value: '3 days' },
        { label: 'Admins', value: '7 days' },
        { label: 'Devices per user', value: 5 }
      ]"
    />
  </NCard>
</template>
