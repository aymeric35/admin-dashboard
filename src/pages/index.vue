<template>
  <section>
    <h2>Your Projects</h2>
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
    <ProjectCard />
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: $neutral-200;

  & h2 {
    font-size: $font-size-lg;
    font-weight: 700;
    margin-bottom: 1rem;
  }
}
</style>
