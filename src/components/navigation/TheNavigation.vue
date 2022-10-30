<template>
  <div class="navigation">
    <span class="close i-mdi:close" @click="$emit('close')" />
    <h1>
      <span class="i-mdi:view-dashboard" />
      Dashboard
    </h1>
    <TheMenu />
    <div class="switch">
      <SelectLanguage />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
    display: flex;
    flex-direction: column;
    background-color: $sky-500;
    color: $neutral-50;
    font-weight: 700;
    gap: 3rem;
    height: 100vh;
    overflow-y: auto;
    padding: 2rem 1.5rem;
    position: fixed;
    width: 70%;
    z-index: 800;

    @media (min-width: $bigPhone) {
        width: 40%;
    }

    @media (min-width: $tablet) {
        width: 35%;
    }

    @media (min-width: $bigTablet) {
        width: 30%;
    }

    @media (min-width: $bigTablet) {
        width: 25%;
    }

    @media (min-width: $smallDesktop) {
        width: 20%;
    }

    @media (min-width: $desktop) {
        width: 18%;
    }

    & .close {
        height: 2rem;
        position: absolute;
        right: 0.25rem;
        top: 0.25rem;
        width: 2rem;
    }

    & h1 {
        display: flex;
        gap: 1.25rem;
        justify-items: center;
        font-size: $font-size-lg;
    }

    & :deep(a) {
        font-size: $font-size-md;
    }
}

.switch {
    display: flex;
    flex-direction: column;
    margin-top: 1.75rem;
    gap: 1.75rem;
    height: 100%;
    justify-content: end;

    & :deep(button:not(.modal button)) {
        display: flex;
        gap: 1.25rem;
        justify-items: center;
        font-size: $font-size-md;
    }
}
</style>
