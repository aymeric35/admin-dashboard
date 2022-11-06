<script setup lang="ts">
const isMenuOpen = ref(false)
const closeMenu = () => {
  isMenuOpen.value = false
  document.body.classList.remove('nav-open')
}
const openMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.classList.add('nav-open')
}

const { width } = useWindowSize()
const target = ref(null)
const body = ref()

onClickOutside(target, () => {
  if (width.value < 720)
    closeMenu()
})

const isMobile = () => width.value <= 430

onMounted(() => {
  body.value = document.body
  const { direction } = useSwipe(body,
    {
      onSwipe(e: TouchEvent) {
        if (width.value < 720) {
          if (direction.value === 'LEFT' && isMenuOpen.value) {
            closeMenu()
          }

          if (direction.value === 'RIGHT' && !isMenuOpen.value) {
            openMenu()
          }
        }
      },
    })
})
</script>

<template>
  <header>
    <transition name="translate">
      <TheNavigation v-if="isMenuOpen" ref="target" @close="closeMenu" />
    </transition>
    <section>
      <div>
        <button class="menu i-mdi:menu" @click="openMenu" />
      </div>
      <div>
        <button class="notifications i-mdi:bell-outline" />
        <button class="account i-mdi:account-circle" />
      </div>
    </section>
    <MobileFixedMenu v-if="isMobile()" />
    <div v-if="isMenuOpen" class="overlay" />
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

  .menu {
    width: 5rem;
    height: 5rem;
    background-color: $amber-500;
    translate: -10%;
  }

  :last-child {
    display: flex;
    gap: 1.5rem;
  }

  .notifications,
  .account {
    width: 4rem;
    height: 4rem;
  }
}

.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 300;
}

@media (min-width: $bigPhone) {
  .overlay {
    display: none;
  }

}
</style>
