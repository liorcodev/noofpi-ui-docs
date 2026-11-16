import * as ui from 'noofpi-ui';

// Several examples on one page can each mount an NToaster, which would show every toast more than
// once. Only the most recently mounted one renders.
const toasters = shallowRef<symbol[]>([]);

const DocsToaster = defineComponent({
  name: 'NToaster',
  inheritAttrs: false,
  setup(_, { attrs }) {
    const id = Symbol();
    toasters.value = [...toasters.value, id];
    onBeforeUnmount(() => {
      toasters.value = toasters.value.filter(item => item !== id);
    });
    return () => (toasters.value.at(-1) === id ? h(ui.NToaster, attrs) : null);
  }
});

export default defineNuxtPlugin(nuxtApp => {
  for (const [name, component] of Object.entries(ui)) {
    if (/^N[A-Z]/.test(name)) nuxtApp.vueApp.component(name, component as Component);
  }
  nuxtApp.vueApp.component('NToaster', DocsToaster);
});
