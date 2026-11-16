<template>
  <NHeroPage title="Custom slots">
    <template #eyebrow>
      <NBadge label="Beta" variant="soft" />
    </template>
    <template #description>
      Slots replace the <strong>eyebrow</strong> and the <strong>description</strong> text.
    </template>
    <template #actions>
      <NButton label="Learn more" variant="link" trailing-icon="i-lucide-arrow-right" />
    </template>
  </NHeroPage>
</template>
