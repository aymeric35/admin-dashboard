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
  <div class="announce">
    <h3> {{ normalizedText(25, title).value }} </h3>
    <p> {{ normalizedText(200, description).value }} </p>
  </div>
</template>

  <style lang="scss" scoped>
  .announce {
    h3 {
      font-weight: 700;
      font-size: $font-size-md;
      padding-bottom: 0.75rem;
    }

    p {
      color: $neutral-600;
    }
  }

  .announce:not(:first-child) {
    margin-top: 2rem;
  }

  .announce:not(:last-child) {
    border-bottom: solid 0.1rem rgba($color: $neutral-900, $alpha: 0.2);
    padding-bottom: 3rem;
  }
  </style>
