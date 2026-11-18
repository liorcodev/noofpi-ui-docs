<template>
  <div class="flex flex-wrap items-center gap-3">
    <NTooltip text="Solid tooltip">
      <NButton label="Solid" />
    </NTooltip>
    <NTooltip text="Soft primary tooltip" variant="soft" color="primary">
      <NButton label="Soft primary" variant="soft" />
    </NTooltip>
    <NTooltip text="Soft success tooltip" variant="soft" color="success" placement="bottom">
      <NButton label="Soft success" variant="soft" color="success" />
    </NTooltip>
  </div>
</template>
