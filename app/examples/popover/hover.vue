<template>
  <div class="flex flex-wrap items-center gap-3">
    <NPopover trigger="hover" placement="top" label="Plan details">
      <NButton label="Pro plan" variant="soft" />
      <template #content>
        <p class="font-semibold">Pro plan</p>
        <p class="text-sm text-neutral-500">Unlimited projects, priority support and audit logs.</p>
      </template>
    </NPopover>
    <NPopover trigger="hover" placement="right" :arrow="false" label="Team details">
      <NButton label="Team" variant="soft" color="info" />
      <template #content>
        <p class="text-sm">Up to 25 seats, billed monthly.</p>
      </template>
    </NPopover>
  </div>
</template>
