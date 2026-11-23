<script setup lang="ts">
import { ACCESSIBILITY_LABELS_HE } from 'noofpi-ui';

const shown = ref(false);
const open = ref(false);

function show() {
  shown.value = true;
  open.value = true;
}
</script>

<template>
  <div class="flex flex-col items-start gap-3">
    <NButton label="Show the Hebrew menu" variant="outline" color="neutral" @click="show" />
    <div v-if="shown" dir="rtl">
      <NAccessibility
        v-model:open="open"
        :labels="ACCESSIBILITY_LABELS_HE"
        statement-url="/accessibility"
        shortcut=""
        :storage-key="false"
      />
    </div>
  </div>
</template>
