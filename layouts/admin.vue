<template>
  <div class="admin-layout-wrap">
    <el-container>
      <el-aside width="200px">
        <app-aside/>
      </el-aside>
      <el-main>
        <nuxt/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import AppAside from '@/components/admin/Aside'

  export default {
    components: { AppAside }
  }
</script>

<style lang="scss" scoped>
  .admin-layout-wrap {
    height: 100vh;
  }
</style>
