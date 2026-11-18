<script setup lang="ts">
import * as ui from 'noofpi-ui';

definePageMeta({ layout: 'default' });
useHead({ title: 'noofpi-ui - Tailwind components for noofpi' });

const copied = ref(false);
function copyInstall() {
  navigator.clipboard.writeText('bun add noofpi-ui');
  copied.value = true;
  setTimeout(() => (copied.value = false), 2000);
}

const setupCode = `\`\`\`ts
import { defineNoofpiConfig } from "noofpi";
import { noofpiUi } from "noofpi-ui/vite";

export default defineNoofpiConfig({
  tailwind: true,
  vite: { plugins: [noofpiUi()] }
});
\`\`\``;

const cssCode = `\`\`\`css
@import "tailwindcss";
@import "./theme.css"; /* your Color Theme Studio export */
@import "noofpi-ui";
\`\`\``;

const usageCode = `\`\`\`vue
<template>
  <NCard>
    <template #header>Billing</template>
    <NProgress label="Storage" :value="62" show-value />
    <template #footer>
      <NButton label="Upgrade" icon="i-lucide-zap" />
    </template>
  </NCard>
</template>
\`\`\``;

const features = [
  {
    icon: 'heroicons:sparkles',
    title: 'Auto-imported',
    desc: 'Add the noofpiUi() Vite plugin and every N* component works anywhere with no import.'
  },
  {
    icon: 'heroicons:swatch',
    title: 'Themed by Color Theme Studio',
    desc: 'The primary color follows your exported theme. Switch themes live, with dark mode built in.'
  },
  {
    icon: 'heroicons:adjustments-horizontal',
    title: 'Override with CSS',
    desc: 'Tune radius, colors and sizes with --ui-* and --n-* variables, or put Tailwind utilities on any element.'
  },
  {
    icon: 'heroicons:device-phone-mobile',
    title: 'Responsive props',
    desc: 'Sizes, shapes and layouts take a value per breakpoint, and everything mirrors in right-to-left pages.'
  },
  {
    icon: 'heroicons:check-badge',
    title: 'Typed forms',
    desc: 'NForm validates with Zod and plugs into useDoofpiForm, so the browser and the server share one schema.'
  },
  {
    icon: 'heroicons:hand-raised',
    title: 'Accessible',
    desc: 'Keyboard navigation and ARIA roles on tabs, select, menu, accordion, pin input and more.'
  }
];

const groups = [
  {
    title: 'Components',
    to: '/docs/components/button',
    items: [
      'Button',
      'Badge',
      'Chip',
      'Avatar',
      'User',
      'Progress',
      'Card',
      'Stat',
      'Data List',
      'Marquee'
    ]
  },
  {
    title: 'Layout',
    to: '/docs/layout/header',
    items: ['Page Header', 'Hero Page', 'Header', 'Footer', 'Dashboard', 'Sidebar']
  },
  {
    title: 'Forms',
    to: '/docs/forms/form',
    items: ['Form', 'Input', 'Number Input', 'Pin Input', 'Checkbox', 'Select', 'Auth Form']
  },
  {
    title: 'Data',
    to: '/docs/data/table',
    items: ['Table']
  },
  {
    title: 'Navigation',
    to: '/docs/navigation/menu',
    items: ['Menu', 'Tabs', 'Accordion']
  },
  {
    title: 'Feedback',
    to: '/docs/feedback/toast',
    items: ['Toast', 'Alert', 'Tooltip', 'Skeleton', 'Scroll To Top', 'Loading Indicator']
  }
];

const stats = [
  {
    value: String(Object.keys(ui).filter(name => /^N[A-Z]/.test(name)).length),
    label: 'components'
  },
  { value: String(ui.BUTTON_COLORS.length), label: 'semantic colors' },
  { value: String(ui.BUTTON_SIZES.length), label: 'button sizes' },
  { value: '0', label: 'imports to write' }
];
</script>

<template>
  <div class="relative overflow-x-hidden">
    <!-- Hero -->
    <section class="relative flex flex-col items-center justify-center px-4 pt-24 pb-28 sm:pt-32">
      <div class="grid-bg absolute inset-0" />
      <div
        class="absolute -top-24 left-1/2 -translate-x-1/2 w-240 h-112 rounded-full bg-brand-400/20 blur-3xl"
      />

      <div class="relative z-10 max-w-5xl mx-auto text-center">
        <NuxtLink
          to="/docs/installation"
          class="animate-fade-up inline-flex items-center gap-2 pl-1.5 pr-4 py-1.5 rounded-full text-xs font-semibold bg-surface border border-line-strong text-body hover:border-brand-400 transition-colors shadow-sm"
        >
          <span class="px-2 py-0.5 rounded-full bg-accent-soft text-accent">v1.3.0</span>
          Made for noofpi
          <Icon name="heroicons:arrow-right" class="text-accent" />
        </NuxtLink>

        <h1
          class="animate-fade-up mt-8 text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-ink"
          style="animation-delay: 80ms"
        >
          Tailwind components for<br />
          <span class="gradient-text">noofpi apps</span>
        </h1>

        <p
          class="animate-fade-up mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed"
          style="animation-delay: 160ms"
        >
          Auto-imported N* components styled by CSS variables and themed by Color Theme Studio.
          Accessible, responsive and typed.
        </p>

        <div
          class="animate-fade-up mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center"
          style="animation-delay: 240ms"
        >
          <NuxtLink
            to="/docs/introduction"
            class="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold"
          >
            Get Started
            <Icon name="heroicons:arrow-right" class="text-lg" />
          </NuxtLink>
          <button
            class="btn-secondary inline-flex items-center gap-3 px-5 py-3.5 rounded-xl font-mono text-sm"
            @click="copyInstall"
          >
            <span class="text-muted">$</span> bun add noofpi-ui
            <Icon
              :name="copied ? 'heroicons:check' : 'heroicons:clipboard-document'"
              class="text-base"
              :class="copied ? 'text-accent' : 'text-muted'"
            />
          </button>
        </div>
      </div>

      <!-- Stats -->
      <div
        class="animate-fade-up relative z-10 mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl"
        style="animation-delay: 320ms"
      >
        <div v-for="s in stats" :key="s.label" class="card px-4 py-5 text-center">
          <p class="text-3xl font-extrabold text-ink">{{ s.value }}</p>
          <p class="mt-1 text-xs text-muted">{{ s.label }}</p>
        </div>
      </div>
    </section>

    <!-- Setup -->
    <section class="py-24 px-4 bg-subtle border-y border-line">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14 reveal">
          <span
            class="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-accent-soft text-accent border border-brand-200"
          >
            Setup
          </span>
          <h2 class="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-ink">
            Two small edits. <span class="gradient-text">Then just use it.</span>
          </h2>
          <p class="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Register the Vite plugin, import the styles, and every component is available in your
            templates.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 reveal">
          <div class="card overflow-hidden min-w-0">
            <div class="flex items-center gap-2 px-4 py-3 border-b border-line bg-canvas">
              <Icon name="heroicons:cog-6-tooth" class="text-accent" />
              <span class="text-sm font-mono font-semibold text-ink">noofpi.config.ts</span>
            </div>
            <div class="px-4 overflow-x-auto prose"><MDC :value="setupCode" /></div>
          </div>
          <div class="card overflow-hidden min-w-0">
            <div class="flex items-center gap-2 px-4 py-3 border-b border-line bg-canvas">
              <Icon name="heroicons:paint-brush" class="text-accent" />
              <span class="text-sm font-mono font-semibold text-ink">app/assets/main.css</span>
            </div>
            <div class="px-4 overflow-x-auto prose"><MDC :value="cssCode" /></div>
          </div>
          <div class="card overflow-hidden min-w-0">
            <div class="flex items-center gap-2 px-4 py-3 border-b border-line bg-canvas">
              <Icon name="heroicons:document-text" class="text-accent" />
              <span class="text-sm font-mono font-semibold text-ink">app/pages/index.vue</span>
            </div>
            <div class="px-4 overflow-x-auto prose"><MDC :value="usageCode" /></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-24 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-14 reveal">
          <span
            class="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-accent-soft text-accent border border-brand-200"
          >
            Features
          </span>
          <h2 class="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-ink">
            Built like Nuxt UI, <span class="gradient-text">for noofpi</span>
          </h2>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="(f, i) in features"
            :key="f.title"
            class="card card-hover p-6 reveal"
            :style="{ '--reveal-delay': `${(i % 3) * 80}ms` }"
          >
            <div
              class="w-11 h-11 rounded-xl bg-linear-to-br from-brand-500 to-brand-700 text-white flex items-center justify-center shadow-lg shadow-brand-600/25"
            >
              <Icon :name="f.icon" class="text-xl" />
            </div>
            <h3 class="mt-5 text-lg font-bold text-ink">{{ f.title }}</h3>
            <p class="mt-2 text-sm text-muted leading-relaxed">{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Components -->
    <section class="py-24 px-4 bg-subtle border-y border-line">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-14 reveal">
          <span
            class="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-accent-soft text-accent border border-brand-200"
          >
            Components
          </span>
          <h2 class="mt-5 text-4xl sm:text-5xl font-extrabold tracking-tight text-ink">
            Everything for <span class="gradient-text">a real app</span>
          </h2>
          <p class="mt-4 text-lg text-muted max-w-2xl mx-auto">
            From buttons and forms to tables, dashboards and toasts.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <NuxtLink
            v-for="(g, i) in groups"
            :key="g.title"
            :to="g.to"
            class="card card-hover p-6 reveal block"
            :style="{ '--reveal-delay': `${(i % 3) * 80}ms` }"
          >
            <h3 class="text-lg font-bold text-ink flex items-center justify-between">
              {{ g.title }}
              <Icon name="heroicons:arrow-right" class="text-accent" />
            </h3>
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="item in g.items"
                :key="item"
                class="px-2.5 py-1 rounded-full text-xs font-medium bg-accent-soft text-accent"
              >
                {{ item }}
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 px-4">
      <div
        class="reveal relative max-w-4xl mx-auto rounded-3xl overflow-hidden px-8 py-16 text-center text-white bg-linear-to-br from-brand-600 via-brand-700 to-brand-900 shadow-2xl shadow-brand-700/30"
      >
        <div class="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-2xl" />
        <div class="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-brand-300/20 blur-2xl" />
        <div class="relative">
          <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">Ready to build?</h2>
          <p class="mt-3 text-brand-100 max-w-xl mx-auto">
            Install noofpi-ui and theme your whole app with one color.
          </p>
          <div class="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <NuxtLink
              to="/docs/installation"
              class="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-brand-800 font-semibold hover:bg-brand-50 transition-colors"
            >
              Installation <Icon name="heroicons:arrow-right" />
            </NuxtLink>
            <a
              href="https://github.com/liorcodev/noofpi-ui"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Icon name="simple-icons:github" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
