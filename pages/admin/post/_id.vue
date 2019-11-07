<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/admin' }">Главная</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/admin/list' }">Список статей</el-breadcrumb-item>
      <el-breadcrumb-item>Статья {{post.title}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  layout: "admin",
  middleware: ["admin-auth"],
  async asyncData({ store }, params) {
    const post = await store.dispatch("post/fetchAdminById", params.id);
    return { post };
  }
};
</script>
