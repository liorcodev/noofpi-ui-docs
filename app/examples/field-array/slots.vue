<script setup lang="ts">
const tasks = ref<{ title: string; done: boolean }[]>([]);
</script>

<template>
  <NFieldArray
    v-model="tasks"
    label="Tasks"
    item-label="Task"
    :default-item="() => ({ title: '', done: false })"
    class="w-full max-w-md"
  >
    <template #header="{ count }">
      <h4 class="text-sm font-medium">Tasks ({{ count }})</h4>
    </template>

    <template #empty="{ add, disabled }">
      <p class="text-sm">
        Nothing to do yet.
        <button type="button" class="underline" :disabled="disabled" @click="add()">
          Add a task
        </button>
      </p>
    </template>

    <template #default="{ item, index }">
      <NInput v-model="item.title" :aria-label="`Task ${index + 1}`" />
    </template>

    <template #row-actions="{ item, index, update }">
      <NButton
        variant="ghost"
        color="neutral"
        size="sm"
        :icon="item.done ? 'i-lucide-circle-check' : 'i-lucide-circle'"
        :aria-label="`Mark Task ${index + 1} as ${item.done ? 'open' : 'done'}`"
        @click="update({ ...item, done: !item.done })"
      />
    </template>

    <template #add="{ add, disabled }">
      <NButton
        icon="i-lucide-list-plus"
        label="New task"
        size="sm"
        :disabled="disabled"
        @click="add()"
      />
    </template>

    <template #footer="{ count }">
      <span class="text-sm text-neutral-500">
        {{ tasks.filter(task => task.done).length }} of {{ count }} done
      </span>
    </template>
  </NFieldArray>
</template>
