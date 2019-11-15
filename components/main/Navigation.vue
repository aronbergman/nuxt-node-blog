<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">ПРИШЛО ВРЕМЯ, ЛЮБИТЬ...</el-menu-item>
    <el-submenu index="themes">
      <template slot="title">Темы публикаций</template>
      <el-menu-item index="2-1">Психология</el-menu-item>
      <el-menu-item index="2-2">Астрономия</el-menu-item>
      <el-menu-item index="2-3">Йога</el-menu-item>
      <el-menu-item index="2-3">Притчи</el-menu-item>
<!--      <el-submenu index="2-4">-->
<!--        <template slot="title">item four</template>-->
<!--        <el-menu-item index="2-4-1">item one</el-menu-item>-->
<!--        <el-menu-item index="2-4-2">item two</el-menu-item>-->
<!--        <el-menu-item index="2-4-3">item three</el-menu-item>-->
<!--      </el-submenu>-->
    </el-submenu>
    <el-menu-item index="about">Об авторе ресурса</el-menu-item>
    <el-menu-item index="about">Записаться на консультацию</el-menu-item>
    <el-menu-item index="admin">Вход</el-menu-item>
    <!--    <el-menu-item index="3" disabled>Info</el-menu-item>-->
    <!--    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Orders</a></el-menu-item>-->
  </el-menu>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        switch (key) {
          case 'admin':
            return this.$router.push('/admin')
          case 'about':
            return this.$router.push('/about')
          default:
            return this.$router.push('/')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-bottom: 1px solid #e6e6e6;
  }
</style>

