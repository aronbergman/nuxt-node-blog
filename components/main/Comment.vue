<template>
  <el-card class="comment">
    <header class="comment-header">
      <span>Имя</span>
      <span>
        <i class="el-icon-time"></i>
        {{ new Date().toLocaleString() }}
      </span>
    </header>
    <div class="comment-text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, quo?
    </div>
  </el-card>
</template>

<script>
  export default {
    props: ['comment']
  }
</script>

<style lang="scss" scoped>
  .comment {
    margin-bottom: 1rem;

    &-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: .5rem;
      font-size: .8rem;
    }

    &-text {
      white-space: pre-line;
    }
  }
</style>
