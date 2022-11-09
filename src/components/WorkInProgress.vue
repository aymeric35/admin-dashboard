<template>
  <section class="page-container">
    <h1>{{ $t('WIP.title') }}</h1>
  </section>
</template>

<style lang="scss" scoped>
section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: $amber-100;
    h1 {
        font-size: $font-size-xxl;
    }
}
</style>
