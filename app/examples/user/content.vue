<template>
  <div class="flex flex-wrap items-center gap-8">
    <NUser name="Jane Doe" description="Name and description" />
    <NUser name="Jane Doe" />
    <NUser description="Description only" :avatar="{ icon: 'i-lucide-users' }" />
    <NUser :avatar="{ text: 'JD' }" />
  </div>
</template>
