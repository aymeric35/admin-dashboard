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

<style lang="scss" scoped>
.announce {
  h3 {
    font-weight: 700;
    font-size: $font-size-md;
    padding-bottom: 0.75rem;
  }

  p {
    color: $neutral-600;
  }
}

.announce:not(:first-child) {
  margin-top: 2rem;
}

.announce:not(:last-child) {
  border-bottom: solid 0.1rem rgba($color: $neutral-900, $alpha: 0.2);
  padding-bottom: 3rem;
}
</style>

