<template>
  <div class="error-layout">
    <div class="error-content">
      <h1 class="error-title">Этой страницы нет</h1>
      <nuxt-link to="/">Вернуться на главную</nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .error {

    &-layout {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    &-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 4rem;
    }

    &-title {
      color: darkred;
    }
  }
</style>
