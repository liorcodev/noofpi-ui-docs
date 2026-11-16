<template>
  <div class="flex flex-col gap-4">
    <NSkeleton shape="text" />
    <NSkeleton shape="text" :lines="3" />
    <div class="flex items-center gap-4">
      <NSkeleton shape="circle" :width="48" />
      <NSkeleton shape="rect" :width="160" :height="24" />
    </div>
    <NSkeleton shape="rect" height="8rem" />
  </div>
</template>
