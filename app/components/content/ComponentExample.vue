<script setup lang="ts">
const props = defineProps<{
  name: string;
  height?: string;
  center?: boolean;
}>();

const previews = import.meta.glob<{ default: Component }>('../../examples/**/*.vue');
const sources = import.meta.glob<string>('../../examples/**/*.vue', {
  query: '?raw',
  import: 'default'
});

const key = computed(() => `../../examples/${props.name}.vue`);

const view = ref<'preview' | 'code'>('preview');
const copied = ref(false);
const source = ref('');

const preview = computed(() => {
  const load = previews[key.value];
  return load ? defineAsyncComponent(load) : null;
});

watch(
  key,
  async () => {
    source.value = ((await sources[key.value]?.()) ?? '').trim();
  },
  { immediate: true }
);

const code = computed(() => `\`\`\`vue\n${source.value}\n\`\`\``);

function copy() {
  navigator.clipboard.writeText(source.value);
  copied.value = true;
  setTimeout(() => (copied.value = false), 2000);
}
</script>

<template>
  <div class="example my-6 rounded-2xl border border-line bg-surface shadow-(--shadow) overflow-hidden">
    <div class="flex items-center justify-between border-b border-line bg-subtle px-3 py-2">
      <div class="flex gap-1">
        <button
          v-for="tab in ['preview', 'code'] as const"
          :key="tab"
          class="px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-colors"
          :class="
            view === tab ? 'bg-surface text-accent shadow-sm' : 'text-muted hover:text-ink'
          "
          @click="view = tab"
        >
          {{ tab }}
        </button>
      </div>
      <button
        v-if="view === 'code'"
        class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors"
        :class="copied ? 'text-accent' : 'text-muted hover:text-ink'"
        @click="copy"
      >
        <Icon :name="copied ? 'heroicons:check' : 'heroicons:clipboard-document'" class="text-sm" />
        {{ copied ? 'Copied' : 'Copy' }}
      </button>
    </div>

    <div
      v-if="view === 'preview'"
      class="example-preview not-prose overflow-auto p-6"
      :class="center ? 'flex items-center justify-center' : ''"
      :style="height ? { height } : undefined"
    >
      <component :is="preview" v-if="preview" />
      <p v-else class="text-sm text-red-600">Example "{{ name }}" not found.</p>
    </div>
    <div v-else class="example-code overflow-x-auto px-4">
      <MDC :value="code" />
    </div>
  </div>
</template>

<style>
.example-preview {
  background-image: radial-gradient(var(--line-strong) 1px, transparent 1px);
  background-size: 16px 16px;
  background-color: var(--canvas);
}
/* Undo the documentation prose styles inside previews so components render exactly as in an app */
.example-preview.not-prose.not-prose.not-prose :is(*, *::before, *::after) {
  all: revert-layer;
}
.example .example-code pre {
  margin: 0;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding-left: 0;
  padding-right: 0;
  background: transparent !important;
}
</style>
