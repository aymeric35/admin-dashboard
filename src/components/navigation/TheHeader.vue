<script setup lang="ts">
const isMenuOpen = ref(false)
const closeNavigation = () => isMenuOpen.value = false

const target = ref(null)
onClickOutside(target, () => closeNavigation())

const { width } = useWindowSize()
const isMobile = () => width.value <= 430
</script>

<template>
  <header>
    <transition name="translate">
      <TheNavigation v-if="isMenuOpen" ref="target" @close="closeNavigation" />
    </transition>
    <section>
      <div>
        <button class="menu i-mdi:menu" @click="isMenuOpen = !isMenuOpen" />
      </div>
      <div>
        <button class="notifications i-mdi:bell-outline" />
        <button class="account i-mdi:account-circle" />
      </div>
    </section>
    <MobileFixedMenu v-if="isMobile()" />
  </header>
</template>

<style lang="scss" scoped>
:deep(.translate-enter-from),
:deep(.translate-leave-to) {
  translate: -100% 0;
}

:deep(.translate-enter-active),
:deep(.translate-leave-active) {
  transition: translate .3s ease-out;
}

section {
  @include shadow(lg);
  background-color: $neutral-100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 200;
  position: relative;

  & .menu {
    width: 5rem;
    height: 5rem;
    background-color: $amber-500;
    translate: -10%;
  }

  & :last-child {
    display: flex;
    gap: 1.5rem;
  }

  & .notifications,
  .account {
    width: 4rem;
    height: 4rem;
  }
}
</style>
