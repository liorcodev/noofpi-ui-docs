<script setup lang="ts">
const props = defineProps<{ added?: string }>();

// Shared across badges; refreshed on the client so statically generated pages expire the badge.
const now = useState('docs-now', () => Date.now());
onMounted(() => {
  now.value = Date.now();
});

const show = computed(() => isNewItem(props.added, now.value));
</script>

<template>
  <span
    v-if="show"
    class="text-xs bg-accent-soft text-accent px-2 py-1 rounded-md font-semibold leading-none"
  >
    New
  </span>
</template>
