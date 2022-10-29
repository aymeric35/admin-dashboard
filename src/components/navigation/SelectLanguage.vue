<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)

const { locale } = useI18n()
const languages = ['en', 'fr']
const changeLocale = (language: string) => {
    if (locale.value === language) return
    locale.value = language
}
</script>

<template>
    <button @click="open = true">
        <span i-mdi:translate-variant />
        {{ $t('navigation.language.switch') }}
    </button>
    <transition name="translate">
        <div v-if="open" class="modal">
            <span class="close i-mdi:close" @click="open = false" />
            <div class="container">
                <button v-for="language in languages" :key="language" @click="changeLocale(language)">
                    {{ $t(`navigation.language.${language}`) }}
                </button>
            </div>
        </div>
    </transition>
</template>

<style lang="scss" scoped>
.modal {
    background-color: rgba($color: $neutral-800, $alpha: 0.8);
    backdrop-filter: blur(1rem);
    left: 0%;
    padding: 1rem 1rem;
    position: fixed;
    top: 0%;
    width: 100vw;
    height: 100vh;
    z-index: 999;

    & .close {
        height: 4rem;
        position: absolute;
        right: 1vw;
        top: 0.25rem;
        width: 4rem;
    }

    & .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        height: 100%;
    }

    & button {
        font-size: $font-size-xl;
    }
}
</style>
