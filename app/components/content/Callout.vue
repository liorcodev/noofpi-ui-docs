<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    type?: 'note' | 'tip' | 'warning';
    title?: string;
  }>(),
  { type: 'note' }
);

const styles = {
  note: { icon: 'heroicons:information-circle', box: 'border-brand-200 bg-accent-soft' },
  tip: { icon: 'heroicons:light-bulb', box: 'border-brand-300 bg-accent-soft' },
  warning: { icon: 'heroicons:exclamation-triangle', box: 'border-amber-300 bg-amber-50' }
} as const;

const style = computed(() => styles[props.type]);
const label = computed(() => props.title || props.type[0]!.toUpperCase() + props.type.slice(1));
</script>

<template>
  <div class="my-6 rounded-xl border px-4 py-3.5 text-sm leading-relaxed" :class="style.box">
    <p
      class="flex items-center gap-1.5 font-semibold mb-1"
      :class="type === 'warning' ? 'text-amber-700' : 'text-accent'"
    >
      <Icon :name="style.icon" class="text-base" />
      {{ label }}
    </p>
    <div class="callout-body text-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.callout-body :deep(p:last-child) {
  margin-bottom: 0;
}
.callout-body :deep(p) {
  margin-bottom: 0.5rem;
}
</style>
