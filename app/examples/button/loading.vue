<script setup lang="ts">
const saving = ref(false);

function save() {
  saving.value = true;
  setTimeout(() => (saving.value = false), 1500);
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <NButton :loading="saving" icon="i-lucide-save" label="Save" @click="save" />
    <NButton loading variant="outline" label="Loading" />
    <NButton disabled label="Disabled" />
  </div>
</template>
