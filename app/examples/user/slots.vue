<template>
  <div class="flex flex-wrap items-center gap-8">
    <NUser name="Jane Doe" description="Online" size="lg">
      <template #avatar>
        <NChip color="success">
          <NAvatar alt="Jane Doe" size="lg" />
        </NChip>
      </template>
    </NUser>
    <NUser :avatar="{ text: 'SL' }">
      <template #name>
        Sam Lee
        <NBadge label="Admin" size="xs" variant="subtle" class="ml-1" />
      </template>
      <template #description>
        <a href="#" class="underline">sam@example.com</a>
      </template>
    </NUser>
  </div>
</template>
