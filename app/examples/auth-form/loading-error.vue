<script setup lang="ts">
const fields = [
  { name: 'email', type: 'email', label: 'Email', autocomplete: 'email' },
  { name: 'password', type: 'password', label: 'Password', autocomplete: 'current-password' }
] as const;

const loading = ref(false);
const error = ref('');

function login() {
  loading.value = true;
  error.value = '';
  setTimeout(() => {
    loading.value = false;
    error.value = 'Wrong email or password.';
  }, 1500);
}
</script>

<template>
  <NAuthForm
    title="Sign in"
    submit-label="Sign in"
    :fields="fields"
    :loading="loading"
    :error="error"
    @submit="login"
  />
</template>
