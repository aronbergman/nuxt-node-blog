<template>
  <el-menu
    router
    :default-active="$route.path"
    class="el-menu-vertical-demo">

    <el-menu-item index="/">
      <i class="el-icon-menu"></i>
      <span>Главная</span>
    </el-menu-item>

    <el-menu-item index="/admin">
      <i class="el-icon-data-analysis"></i>
      <span>Аналитика</span>
    </el-menu-item>

    <el-menu-item index="/admin/create">
      <i class="el-icon-edit"></i>
      <span>Создать</span>
    </el-menu-item>

    <el-menu-item index="/admin/list">
      <i class="el-icon-tickets"></i>
      <span>Посты</span>
    </el-menu-item>

    <el-menu-item index="/admin/user">
      <i class="el-icon-user "></i>
      <span>Пользователи</span>
    </el-menu-item>

     <el-menu-item index="/admin/settings">
      <i class="el-icon-set-up"></i>
      <span>Настройки</span>
    </el-menu-item>

    <el-menu-item index="/admin/logout">
      <i class="el-icon-close"></i>
      <span>Выйти</span>
    </el-menu-item>

  </el-menu>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .el-menu-vertical-demo {
    height: 100vh;
  }
</style>
