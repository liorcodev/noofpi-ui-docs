<template>
  <div class="flex flex-wrap items-center gap-3">
    <NCheckButton :model-value="false" disabled label="Unchecked" />
    <NCheckButton :model-value="true" disabled label="Checked" />
  </div>
</template>
