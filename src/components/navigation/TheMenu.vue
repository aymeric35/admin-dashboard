<script setup lang="ts">
const pages = {
  home: {
    icon: 'i-mdi:home',
    translation: 'navigation.home',
    to: '/',
  },
  profile: {
    icon: 'i-mdi:card-account-details',
    translation: 'navigation.profile',
    to: '/profile',
  },
  messages: {
    icon: 'i-mdi:message-reply',
    translation: 'navigation.messages',
    to: '/messages',
  },
  history: {
    icon: 'i-mdi:history',
    translation: 'navigation.history',
    to: '/history',
  },
  tasks: {
    icon: 'i-mdi:file-multiple',
    translation: 'navigation.tasks',
    to: '/tasks',
  },
  communities: {
    icon: 'i-mdi:account-group',
    translation: 'navigation.communities',
    to: '/communities',
  },
  settings: {
    icon: 'i-mdi:cog',
    translation: 'navigation.settings',
    to: '/settings',
  },
  support: {
    icon: 'i-mdi:help-circle',
    translation: 'navigation.support',
    to: '/support',
  },
  privacy: {
    icon: 'i-mdi:shield-check',
    translation: 'navigation.privacy',
    to: '/privacy',
  },
}
</script>

<template>
  <nav class="menu">
    <ul>
      <li v-for="page in pages" :key="page.icon">
        <RouterLink :to="page.to" class="links">
          <span :class="page.icon" />
          {{ $t(page.translation) }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.menu {
  margin-top: 4rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
  }

  .links {
    display: flex;
    gap: 1.25rem;
    justify-items: center;
  }

  li:nth-child(7) {
    margin-top: 4rem;
  }
}
</style>
