<template>
  <section>
    <h2>Your Projects</h2>
    <div class="projects">
      <TheProject />
    </div>
    <h2>Announcements</h2>
    <div class="announcements">
      <TheAnnouncement />
    </div>
    <h2>Trendings</h2>
    <div class="trendings" />
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: $neutral-200;
  padding-bottom: 10vh;

  h2 {
    font-size: $font-size-lg;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .projects, .announcements {
    margin-bottom: 5rem;
  }

  .announcements {
    @include shadow(md);
    background-color: $neutral-50;
    padding: 3rem;
    border-radius: 0.5rem;
  }
}
</style>
