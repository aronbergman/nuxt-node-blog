<template>
  <el-menu
    router
    :style="{height: '100%'}"
    :default-active="$route.path"
  >
    <el-menu-item index="/admin">
      <i class="el-icon-loading"></i>
      <span>Статистика</span>
    </el-menu-item>
    <el-menu-item index="/admin/create">
      <i class="el-icon-edit-outline"></i>
      <span>Создать статью</span>
    </el-menu-item>
    <el-menu-item index="/admin/list">
      <i class="el-icon-tickets"></i>
      <span>Список всех статей</span>
    </el-menu-item>
    <el-menu-item index="/admin/user">
      <i class="el-icon-service"></i>
      <span>Дать доступ к админке</span>
    </el-menu-item>
    <el-menu-item index="/admin/logout">
      <i class="el-icon-close"></i>
      <span>Выйти из админки</span>
    </el-menu-item>
  </el-menu>
</template>
