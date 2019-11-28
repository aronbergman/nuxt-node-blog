<template>
  <div class="main">
    <post-content
      :post="this.post"
    />
    <aside class="aside-bar">
      <section class="cards">
        <popular-bar
          v-for="postBar in posts"
          :key="postBar._id"
          :post="postBar"
        />
      </section>
    </aside>
  </div>

</template>

<script>
  import PostContent from '@/components/main/PostContent'
  import PopularBar from '@/components/main/PopularBar'

  export default {
    head () {
      return {
        title: `${this.post.title} – Авторский блог психолога`
      }
    },
    layout: 'default',
    validate ({ params }) {
      return Boolean(params.id)
    },
    async asyncData ({ store, params }) {
      const post = await store.dispatch('post/fetchById', params.id)
      let posts = await store.dispatch('post/fetch')
      await store.dispatch('post/addView', post)
      posts = posts.filter(x => x._id !== post._id)
      return {
        post: { ...post, views: ++post.views },
        posts: posts.slice(0, 2)
      }
    },
    components: { PopularBar, PostContent }
  }
</script>

<style lang="scss" scoped>
  .main {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    @include respond-to($mobile) {
      padding: 0 10px;
    }

    .aside-bar {
      width: 300px;
      margin: 0 40px;

      @include respond-to($mobile) {
        display: none;
      }
    }
  }

  .cards {
    width: 100%;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
    -webkit-justify-content: center;
    max-width: 820px;
  }

  .aside-bar {
    position: relative;
    top: 110px;
    bottom: 0;
    left: 0;
    right: 0;
    width: 300px;
  }

  .post {
    position: relative;
    max-width: 600px;
    margin: 0 auto;
    top: 237px;
  }

  .post-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .post-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .5rem;
  }

  .post-image img {
    width: 100%;
    height: auto;
  }

  .post-header {
    margin-bottom: 1.5rem;
  }

  .post-content {
    margin-bottom: 2rem;
  }
</style>

