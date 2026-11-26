<template>
  <div class="flex flex-col gap-2">
    <NBanner
      color="info"
      variant="soft"
      title="Version 1.9.0 is out."
      description="See what is new."
      href="/docs/feedback/alert"
    />
    <NBanner
      color="success"
      variant="soft"
      description="Read the release notes"
      href="https://example.com/release-notes"
      target="_blank"
      link-icon="i-lucide-external-link"
    />
    <NBanner
      color="neutral"
      variant="subtle"
      title="No arrow"
      description="The whole message is still a link."
      href="/docs/feedback/alert"
      :link-icon="false"
    />
  </div>
</template>
