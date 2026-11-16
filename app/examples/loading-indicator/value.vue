<script setup lang="ts">
const value = ref<number>();

function set(next: number) {
  value.value = next;
}
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <NLoadingIndicator :value="value" />
    <NButton label="0%" variant="outline" color="neutral" @click="set(0)" />
    <NButton label="25%" variant="outline" color="neutral" @click="set(25)" />
    <NButton label="50%" variant="outline" color="neutral" @click="set(50)" />
    <NButton label="75%" variant="outline" color="neutral" @click="set(75)" />
    <NButton label="100%" variant="outline" color="neutral" @click="set(100)" />
  </div>
</template>
