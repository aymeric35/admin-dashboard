<template>
  <div class="card">
    <h3>Super cool Project</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque faucibus a risus eu varius.</p>
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
    padding: 3rem 3rem 2rem 3rem;
    border-radius: 0.5rem;
    border-left: solid 0.75rem $amber-500;
    background-color: $neutral-50;
    margin-bottom: 2.5rem;

    & h3 {
        font-size: $font-size-md;
        font-weight: 700;
        margin-bottom: 0.5rem;
    }

    & p {
        margin-bottom: 1rem;
    }
    & .icons {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 1.5rem;
        height: 4rem;
    }

    & .icons button {
        height: 100%;
        width: 2.5rem;
    }
}
</style>
