<template>
  <section class="page-container">
    <div class="projects-container">
      <h2>Your Projects</h2>
      <div class="projects">
        <TheProject />
      </div>
    </div>
    <aside>
      <div>
        <h2>Announcements</h2>
        <div class="announcements">
          <TheAnnouncement />
        </div>
      </div>
      <div>
        <h2>Trendings</h2>
        <div class="trendings">
          <TheTrending />
        </div>
      </div>
    </aside>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: $neutral-200;

  h2 {
    font-size: $font-size-lg;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .projects {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .projects,
  .announcements,
  .trendings {
    margin-bottom: 5rem;
  }

  .announcements,
  .trendings {
    @include shadow(md);
    background-color: $neutral-50;
    padding: 3rem;
    border-radius: 0.5rem;
  }

  @media (min-width: $bigTablet) {
    display: flex;
    flex-direction: column;
    gap: 6rem;

    .projects {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 4rem;
      margin-bottom: 0;
    }

    .announcements,
    .trendings {
      padding: 5rem;
    }

    aside {
      display: flex;
      gap: 5rem;
      margin-bottom: 5rem;
    }

    aside>div {
      width: 100%;
    }
  }

  @media (min-width: $desktop) {
    display: flex;
    flex-direction: row;

    .projects-container {
      width: 70%;
    }

    aside {
      display: block;
      gap: 0;
      margin-bottom: 0;
      width: 30%;
    }
  }

  @media (min-width: $bigDesktop) {
    .projects-container {
      width: 75%;
    }

    aside {
      width: 25%;
    }
  }
}
</style>
