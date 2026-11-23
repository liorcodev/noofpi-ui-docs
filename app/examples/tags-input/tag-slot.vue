<script setup lang="ts">
const tags = ref(['news', 'release']);

function remove(index: number) {
  tags.value = tags.value.filter((_, i) => i !== index);
}
</script>

<template>
  <NTagsInput v-model="tags" label="Topics" class="max-w-sm">
    <template #tag="{ tag, index }">
      <span class="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs">
        #{{ tag }}
        <button type="button" :aria-label="`Remove ${tag}`" @click="remove(index)">
          <NIcon name="i-lucide-x" />
        </button>
      </span>
    </template>
  </NTagsInput>
</template>
