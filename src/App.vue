<script setup lang="ts">
// https://github.com/vueuse/head
useHead({
  title: 'Admin Dashboard',
  meta: [
    { name: 'description', content: 'Admin dashboard' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
