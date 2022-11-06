<script lang="ts" setup>
const modules = import.meta.glob('~/assets/images/avatar/*.webp')
const modulesLength = ref<number>(0)
const avatars = ref<string[]>([])
const tags = ['@tegan', '@morgan', '@kendall', '@alex']
const names = ['World Peace Builder', 'Super Cool Project', 'Life Changing App', 'No Traffic Maker']

for (const path in modules) {
  modules[path]().then(() => {
    avatars.value.push(path)
  })
  if (modulesLength.value === 0) modulesLength.value = Object.keys(modules).length
}
</script>

<template>
  <template v-if="avatars.length === modulesLength">
    <TrendingView v-for="(_, i) in 4" :key="i" :avatar="avatars[i]" :tag="tags[i]" :name="names[i]" />
  </template>
</template>
