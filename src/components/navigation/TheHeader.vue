<script setup lang="ts">
const isMenuOpen = ref(false);
const closeNavigation = () => isMenuOpen.value = false;

const target = ref(null);
onClickOutside(target, () => closeNavigation())

</script>

<template>
    <header>
        <transition name="translate">
            <TheNavigation v-if="isMenuOpen" @close="closeNavigation" ref="target" />
        </transition>
        <section>
            <div>
                <button @click="isMenuOpen = !isMenuOpen">
                    Menu
                </button>
            </div>
        </section>
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
</style>