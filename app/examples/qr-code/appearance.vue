<template>
  <div class="flex flex-wrap items-end gap-6">
    <NQRCode value="https://noofpi.dev" :size="96" label="Small code" />
    <NQRCode value="https://noofpi.dev" size="10rem" :radius="3" label="Rounded plate" />
    <NQRCode
      value="https://noofpi.dev"
      color="#1e3a8a"
      background="#eff6ff"
      :margin="2"
      label="Blue code"
    />
  </div>
</template>
