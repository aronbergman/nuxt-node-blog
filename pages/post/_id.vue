<template>
  <div class="main">
    <article class="post">
      <header class="post-header">
        <div class="post-title">
          <h1>{{post.title}}</h1>
          <nuxt-link to="/">
            <i class="el-icon-back"></i>
          </nuxt-link>
        </div>
        <div class="post-info">
          <small>
            <i class="el-icon-time"></i>
            {{ new Date(post.date).toLocaleString() }}
          </small>
          <small>
            <i class="el-icon-view"></i>
            {{post.views}}
          </small>
        </div>
        <div class="post-image">
          <img
            :src="post.imageUrl"
            alt="post image"
          >
        </div>
      </header>
      <main class="post-content">
        <vue-markdown>
          {{post.text}}
        </vue-markdown>
      </main>
      <footer>
        <app-comment-form
          v-if="canAddComment"
          @created="createCommentHandler"
          :postId="post._id"
        />

        <div class="comments" v-if="post.comments.length">
          <app-comment
            v-for="comment in post.comments"
            :key="comment._id"
            :comment="comment"
          />
        </div>
        <div class="text-center" v-else>Комментариев нет</div>
      </footer>
    </article>
    <aside class="aside-bar">
      <popular-bar
        v-for="postBar in posts"
        :key="postBar._id"
        :post="postBar"
      />
    </aside>
  </div>

</template>

<script>
  import AppComment from '@/components/main/Comment'
  import AppCommentForm from '@/components/main/CommentForm'
  import PopularBar from '@/components/main/PopularBar'

  export default {
    layout: 'post',
    validate ({ params }) {
      return Boolean(params.id)
    },
    async asyncData ({ store, params }) {
      const post = await store.dispatch('post/fetchById', params.id)
      const posts = await store.dispatch('post/fetch')
      await store.dispatch('post/addView', post)
      return {
        post: { ...post, views: ++post.views },
        posts: posts
      }
    },
    data () {
      return {
        canAddComment: true
      }
    },
    methods: {
      createCommentHandler (comment) {
        this.post.comments.unshift(comment)
        this.canAddComment = false
      }
    },
    components: { AppComment, AppCommentForm, PopularBar }
  }
</script>

<style lang="scss" scoped>
  .main {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    .aside-bar {
      width: 300px;
    }
  }

  .aside-bar {
    position: relative;
    top: 237px;
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

