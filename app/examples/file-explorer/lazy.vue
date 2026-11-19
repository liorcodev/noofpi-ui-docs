<script setup lang="ts">
import type { FileItem, TreeValue } from 'noofpi-ui';

// A folder without `children` is loaded the first time it is opened
const files = ref<FileItem[]>([
  { value: 'cloud', label: 'Cloud storage', type: 'folder', description: 'Loaded when opened' },
  { value: 'notes', label: 'notes.txt', size: 940, modified: '2026-11-19' }
]);

const current = ref<TreeValue>();
const view = ref<'list' | 'grid'>('grid');

async function loadChildren(folder: FileItem): Promise<FileItem[]> {
  await new Promise(resolve => setTimeout(resolve, 700));
  return [
    {
      value: `${folder.value}-reports`,
      label: 'reports',
      type: 'folder',
      description: 'Loaded when opened'
    },
    { value: `${folder.value}-guide`, label: 'guide.md', size: 2600, modified: '2026-11-19' }
  ];
}

// Keep what was loaded as the folder's `children`, so later changes work like anywhere else
function onLoad(folder: FileItem, children: FileItem[]) {
  const find = (list: FileItem[]): FileItem | undefined => {
    for (const item of list) {
      if (item.value === folder.value) return item;
      const nested = item.children && find(item.children);
      if (nested) return nested;
    }
  };
  const target = find(files.value);
  if (target) target.children = children;
}
</script>

<template>
  <NFileExplorer
    v-model:current="current"
    v-model:view="view"
    :items="files"
    :load-children="loadChildren"
    @load="onLoad"
  />
</template>
