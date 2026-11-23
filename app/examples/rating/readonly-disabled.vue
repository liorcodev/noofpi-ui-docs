<template>
  <div class="flex flex-col gap-3">
    <div class="flex flex-wrap items-center gap-3">
      <NRating :model-value="4.5" allow-half readonly label="Average" />
      <span class="text-sm">4.5 from 128 reviews</span>
    </div>
    <NRating :model-value="3" disabled label="Disabled" />
  </div>
</template>
