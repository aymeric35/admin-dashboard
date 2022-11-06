<script lang="ts" setup>
import av1 from '~/assets/images/avatar/av1.webp'
import av2 from '~/assets/images/avatar/av2.webp'
import av3 from '~/assets/images/avatar/av3.webp'
import av4 from '~/assets/images/avatar/av4.webp'

const avatars = ref<string[]>([av1, av2, av3, av4])
const tags = ['@tegan', '@morgan', '@kendall', '@alex']
const names = ['World Peace Builder', 'Super Cool Project', 'Life Changing App', 'No Traffic Maker']
</script>

<template>
  <template v-if="avatars.length">
    <TrendingView v-for="(_, i) in 4" :key="i" :avatar="avatars[i]" :tag="tags[i]" :name="names[i]" />
  </template>
</template>
