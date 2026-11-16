<script setup lang="ts">
const password = ref('');
const query = ref('hello');
const visible = ref(false);
</script>

<template>
  <div class="w-full max-w-sm space-y-3">
    <NInput
      v-model="password"
      :type="visible ? 'text' : 'password'"
      icon="i-lucide-lock"
      placeholder="Password"
    >
      <template #trailing>
        <button
          type="button"
          class="cursor-pointer"
          :aria-label="visible ? 'Hide password' : 'Show password'"
          @click="visible = !visible"
        >
          <span :class="visible ? 'i-lucide-eye-off' : 'i-lucide-eye'" />
        </button>
      </template>
    </NInput>
    <NInput v-model="query" placeholder="Search">
      <template #trailing>
        <button
          v-if="query"
          type="button"
          class="cursor-pointer"
          aria-label="Clear"
          @click="query = ''"
        >
          <span class="i-lucide-x" />
        </button>
      </template>
    </NInput>
  </div>
</template>
