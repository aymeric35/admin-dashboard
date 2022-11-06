<script lang="ts" setup>
import type { Announcement } from '~/models/announcement'
import AnnouncementService from '~/services/AnnouncementService'

const announcements = ref<Announcement[]>([])

AnnouncementService.getAnnouncements()
  .then((response) => {
    announcements.value = response.data.posts
  })
  .catch((error) => {
    return error
  })
</script>

<template>
  <template v-if="announcements.length">
    <AnnouncementView v-for="n in 3" :key="n" :title="announcements[n].title" :description="announcements[n].body" />
  </template>
</template>
