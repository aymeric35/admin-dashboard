<script setup lang="ts">
defineProps({
  avatar: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="trend">
    <img :src="avatar">
    <h3><span>{{ tag }}</span> {{ name }}</h3>
  </div>
</template>

<style lang="scss" scoped>
.trend {
    display: flex;
    align-items: center;
    gap: 2rem;

    img {
        width: 8rem;
        border-radius: 50%;
    }

    span {
        color: $neutral-800;
    }

    h3 {
        display: flex;
        flex-direction: column;
        font-size: $font-size-md;
        color: $neutral-600;
    }
}

.trend:not(:first-child) {
    margin-top: 2rem;
}

.trend:not(:last-child) {
    padding-bottom: 3rem;
}
</style>
