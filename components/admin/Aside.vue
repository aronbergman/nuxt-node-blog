<template>
  <el-menu
    router
    :style="{height: '100%'}"
    :default-active="$route.path"
  >
    <el-menu-item index="/">
      <i class="el-icon-house"></i>
      <span>Главная страница</span>
    </el-menu-item>
    <el-menu-item index="/admin">
      <i class="el-icon-star-off"></i>
      <span>Статистика</span>
    </el-menu-item>
    <el-menu-item index="/admin/about">
      <i class="el-icon-location"></i>
      <span>Страница «Обо мне»</span>
      <hr class="hr">
    </el-menu-item>
    <el-menu-item index="/admin/create">
      <i class="el-icon-circle-plus-outline"></i>
      <span>Добавить публикацию</span>
    </el-menu-item>
    <el-menu-item index="/admin/list">
      <i class="el-icon-tickets"></i>
      <span>Все мои публикации</span>
      <hr class="hr">
    </el-menu-item>
    <el-menu-item index="/admin/createQuestion">
      <i class="el-icon-circle-plus-outline"></i>
      <span>Добавить вопрос</span>
    </el-menu-item>
    <el-menu-item index="/admin/listQuestions">
      <i class="el-icon-tickets"></i>
      <span>Все мои ответы</span>
      <hr class="hr">
    </el-menu-item>
    <el-menu-item index="/admin/contacts">
      <i class="el-icon-s-comment"></i>
      <span>Обратная связь</span>
    </el-menu-item>
    <el-menu-item index="/admin/comments">
      <i class="el-icon-s-comment"></i>
      <span>Комментарии гостей</span>
    </el-menu-item>
    <el-menu-item index="/admin/user">
      <i class="el-icon-user"></i>
      <span>Пользователи</span>
    </el-menu-item>
    <el-menu-item index="/admin/logout">
      <i class="el-icon-close"></i>
      <span>Выйти из админки</span>
    </el-menu-item>
  </el-menu>
</template>
<style lang="scss" scoped>
  .hr {
    opacity: .3;
  }
</style>
