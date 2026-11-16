<template>
  <div class="flex flex-wrap items-center gap-8">
    <NUser
      name="Jane Doe"
      description="jane@example.com"
      :avatar="{ src: 'https://i.pravatar.cc/80?img=32' }"
    />
    <NUser name="Sam Lee" description="Product designer" :avatar="{ color: 'primary' }" />
  </div>
</template>
