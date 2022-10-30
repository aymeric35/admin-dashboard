<script setup lang="ts">
const buttons = ['i-mdi:magnify', 'i-mdi:plus-circle', 'i-mdi:upload', 'i-mdi:share']
</script>

<template>
  <div class="menu">
    <button v-for="button in buttons" :key="button">
      <span :class="button" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.menu {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    border-radius: 1rem;
    z-index: 500;

    & button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background-color: $neutral-900;
    }

    & button:not(:last-child) {
        border-right: solid 0.1rem $neutral-800;
    }

    & button:not(:first-child) {
        border-left: solid 0.1rem $neutral-800;
    }

    & span {
        width: 50%;
        height: 50%;
        color: $neutral-100;
    }
}
</style>
