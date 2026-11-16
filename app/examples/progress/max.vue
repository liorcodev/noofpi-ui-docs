<template>
  <div class="flex flex-col gap-6">
    <NProgress label="Storage" :value="45" :max="50" show-value />
    <NProgress label="Out of range is clamped" :value="150" show-value color="success" />
  </div>
</template>
