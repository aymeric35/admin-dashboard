<script setup lang="ts">
// https://github.com/vueuse/head
useHead({
  title: 'Admin Dashboard',
  meta: [
    { name: 'description', content: 'Admin dashboard' },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg',
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
