<script setup lang="ts">
import type { FileItem, TreeValue } from 'noofpi-ui';

// The explorer only displays and reports: each event below is applied to this data
const files = ref<FileItem[]>([
  {
    value: 'docs',
    label: 'docs',
    type: 'folder',
    children: [
      {
        value: 'guide',
        label: 'guide.md',
        size: 2600,
        modified: '2026-11-18',
        icon: 'i-lucide-file-text'
      }
    ]
  },
  { value: 'images', label: 'images', type: 'folder', children: [] },
  {
    value: 'readme',
    label: 'README.md',
    size: 6144,
    modified: '2026-11-17',
    icon: 'i-lucide-file-text'
  },
  {
    value: 'package',
    label: 'package.json',
    size: 1820,
    modified: '2026-11-19',
    icon: 'i-lucide-braces'
  }
]);

const current = ref<TreeValue>();
const selected = ref<TreeValue[]>([]);

function locate(
  value: TreeValue,
  list = files.value
): { list: FileItem[]; index: number } | undefined {
  for (const [index, item] of list.entries()) {
    if (item.value === value) return { list, index };
    const nested = item.children && locate(value, item.children);
    if (nested) return nested;
  }
}

// The list an item lands in: the folder's `children`, or the top level
function destination(folder?: FileItem) {
  const hit = folder && locate(folder.value);
  const target = hit?.list[hit.index];
  return target ? (target.children ??= []) : files.value;
}

function rename(item: FileItem, label: string) {
  const hit = locate(item.value);
  if (hit) hit.list[hit.index]!.label = label;
}

function remove(items: FileItem[]) {
  for (const item of items) {
    const hit = locate(item.value);
    if (hit) hit.list.splice(hit.index, 1);
  }
  selected.value = [];
}

function move(items: FileItem[], folder?: FileItem) {
  const moved = items.flatMap(item => {
    const hit = locate(item.value);
    return hit ? hit.list.splice(hit.index, 1) : [];
  });
  destination(folder).push(...moved);
  selected.value = [];
}

function createFolder(name: string, parent?: FileItem) {
  destination(parent).push({
    value: `folder-${Date.now()}`,
    label: name,
    type: 'folder',
    children: []
  });
}

function upload(incoming: File[], folder?: FileItem) {
  destination(folder).push(
    ...incoming.map((file, index) => ({
      value: `upload-${Date.now()}-${index}`,
      label: file.name,
      size: file.size,
      modified: new Date()
    }))
  );
}
</script>

<template>
  <NFileExplorer
    style="--n-file-explorer-nav-w: 10rem"
    v-model:current="current"
    v-model:selected="selected"
    :items="files"
    :actions="['new-folder', 'rename', 'delete']"
    multiple
    show-upload
    @rename="rename"
    @delete="remove"
    @move="move"
    @create-folder="createFolder"
    @upload="upload"
  />
</template>
