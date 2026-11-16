<template>
  <div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
    <NCard>
      <NStat
        label="Revenue"
        value="$12,480"
        description="12% vs last month"
        trend="up"
        icon="i-lucide-dollar-sign"
      />
    </NCard>
    <NCard>
      <NStat
        label="Churn"
        value="2.4%"
        description="0.6% vs last month"
        trend="down"
        icon="i-lucide-user-minus"
        color="error"
      />
    </NCard>
    <NCard>
      <NStat
        label="Active users"
        :value="1893"
        description="No change"
        trend="neutral"
        icon="i-lucide-users"
        color="info"
      />
    </NCard>
  </div>
</template>
