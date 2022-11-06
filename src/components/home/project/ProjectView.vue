<script lang="ts" setup>
import normalizeText from '~/helpers/normalizeText'
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

const normalizedText = (length: number, prop: string) => {
  return normalizeText(length, 200, prop, 900)
}
</script>

<template>
  <div class="card">
    <div class="content">
      <h3>{{ normalizedText(25, title).value }}</h3>
      <p> {{ normalizedText(200, description).value }}</p>
    </div>
    <div class="icons">
      <button class="i-mdi:bookmark-outline" />
      <button class="i-mdi:eye-plus-outline" />
      <button class="i-mdi:source-branch" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  @include shadow(md);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem 3rem 2rem 3rem;
  border-radius: 0.5rem;
  border-left: solid 0.75rem $amber-500;
  background-color: $neutral-50;

  h3 {
    font-size: $font-size-md;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1.75rem;
  }

  .icons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.5rem;
    height: 4rem;
  }

  .icons button {
    height: 100%;
    width: 2.5rem;
  }
}
</style>
