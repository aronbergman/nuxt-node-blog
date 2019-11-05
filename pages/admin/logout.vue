<template>
  <h1>Выход из системы</h1>
</template>

<script>
  export default {
    layout: 'admin',
    middleware: ['admin-auth'],
    beforeCreate () {
      // У стора будем вызывать метод, который называется
      this.$store.dispatch('auth/logout')
      this.$router.push('/admin/login?message=logout')
    }
  }
</script>

<style lang="scss" scoped>

</style>
