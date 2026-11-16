<template>
  <NDataList title="Domain" :items="items" class="w-full max-w-md">
    <div class="n-data-list-row">
      <dt class="n-data-list-label">Verified</dt>
      <dd class="n-data-list-value">
        <span class="inline-flex items-center gap-1">
          <span class="i-lucide-check size-4" />
          Yes
        </span>
      </dd>
    </div>
  </NDataList>
</template>

<script setup lang="ts">
const items = [
  { label: 'Name', value: 'example.com' },
  { label: 'Expires', value: '2027-03-01' }
];
</script>
