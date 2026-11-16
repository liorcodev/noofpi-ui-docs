<template>
  <div class="flex flex-col gap-6">
    <NProgress label="Uploading" :value="62" show-value />
    <NProgress label="Storage" :value="9" :max="10" show-value color="warning" />
    <NProgress label="Loading" />
  </div>
</template>
