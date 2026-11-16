<script setup lang="ts">
const fields = [{ name: 'email', type: 'email', label: 'Email', autocomplete: 'email' }] as const;
</script>

<template>
  <NAuthForm :fields="fields" submit-label="Send reset link">
    <template #header>
      <div class="flex flex-col items-center gap-1 text-center">
        <NIcon name="i-lucide-key-round" class="text-3xl text-(--ui-primary-500)" />
        <h2 class="text-xl font-semibold">Forgot your password?</h2>
        <p class="text-sm opacity-70">Enter your email and we will send you a link.</p>
      </div>
    </template>
    <template #footer> Remembered it? <a href="#" class="underline">Back to sign in</a> </template>
  </NAuthForm>
</template>
