<template>
  <main>
    <app-navigation/>
    <section class="main-section">
      <nuxt/>
    </section>
  </main>
</template>

<script>
  import AppNavigation from '@/components/main/Navigation'

  export default {
    components: {
      AppNavigation
    }
  }
</script>

<style scoped>
.main-section {
  margin-top: 100px;
}
</style>
