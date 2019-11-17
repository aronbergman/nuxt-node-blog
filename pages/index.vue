<template>
  <div class="post-card-row">
    <app-post
      v-for="post in posts"
      :key="post._id"
      :post="post"
    />
  </div>
</template>

<script>
  import AppPost from '@/components/main/Post'

  export default {
    head: {
      title: 'Главная'
    },
    async asyncData ({ store }) {
      const posts = await store.dispatch('post/fetch')
      return { posts }
    },
    components: {
      AppPost
    }
  }
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Material+Icons|Roboto:400,700);

  .el-row {
    flex-wrap: wrap;
  }
</style>
