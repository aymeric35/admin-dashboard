<script lang="ts" setup>
import type { Project } from '~/models/project'
import ProjectService from '~/services/projectService'

const projects = ref<Project[]>([])

ProjectService.getPosts()
  .then((response) => {
    projects.value = response.data.posts
  })
  .catch((error) => {
    return error
  })
</script>

<template>
  <template v-if="projects.length">
    <ProjectView v-for="n in 10" :key="n" :title="projects[n].title" :description="projects[n].body" />
  </template>
</template>

