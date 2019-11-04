<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>Post title</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
          На главную
        </nuxt-link>
      </div>
      <div class="post-info">
        <small>
          <i class="el-icon-time"></i>
          {{ new Date().toLocaleString() }}
        </small>
        <small>
          <i class="el-icon-view"></i>
          42
        </small>
      </div>
      <div class="post-image">
        <img src="https://www.tripzaza.com/ru/destinations/files/2017/09/Berlin-e1505798693967.jpg" alt="">
      </div>
    </header>
    <main class="post-content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum laborum nobis non quo sed. Aut commodi
        consequatur cupiditate deleniti, dignissimos dolorum ea, est et eveniet excepturi harum illo in ipsa ipsam iusto
        labore, magnam maxime minima modi molestias mollitia natus quasi repellat saepe sunt ullam vero voluptate! Alias
        amet error ex facilis iste modi mollitia numquam obcaecati, quod reprehenderit, sint ut. Animi aperiam
        consequatur delectus dolorem dolorum eos excepturi hic incidunt magni porro sequi veritatis, vitae? At
        consequuntur officia quidem quo. Ducimus enim eveniet fugit itaque libero neque nisi quaerat quisquam! Accusamus
        aspernatur beatae dignissimos nam odit perferendis porro quae.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum laborum nobis non quo sed. Aut commodi
        consequatur cupiditate deleniti, dignissimos dolorum ea, est et eveniet excepturi harum illo in ipsa ipsam iusto
        labore, magnam maxime minima modi molestias mollitia natus quasi repellat saepe sunt ullam vero voluptate! Alias
        amet error ex facilis iste modi mollitia numquam obcaecati, quod reprehenderit, sint ut. Animi aperiam
        consequatur delectus dolorem dolorum eos excepturi hic incidunt magni porro sequi veritatis, vitae? At
        consequuntur officia quidem quo. Ducimus enim eveniet fugit itaque libero neque nisi quaerat quisquam! Accusamus
        aspernatur beatae dignissimos nam odit perferendis porro quae.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum laborum nobis non quo sed. Aut commodi
        consequatur cupiditate deleniti, dignissimos dolorum ea, est et eveniet excepturi harum illo in ipsa ipsam iusto
        labore, magnam maxime minima modi molestias mollitia natus quasi repellat saepe sunt ullam vero voluptate! Alias
        amet error ex facilis iste modi mollitia numquam obcaecati, quod reprehenderit, sint ut. Animi aperiam
        consequatur delectus dolorem dolorum eos excepturi hic incidunt magni porro sequi veritatis, vitae? At
        consequuntur officia quidem quo. Ducimus enim eveniet fugit itaque libero neque nisi quaerat quisquam! Accusamus
        aspernatur beatae dignissimos nam odit perferendis porro quae.</p>
    </main>
    <footer>
      <app-comment-form/>
      <div class="comments" v-if="false">
        <app-comment
          v-for="comment in 4"
          :key="comment"
          :comment="comment"
        />
      </div>
      <div class="text-center" v-else>Комментариев нет</div>
    </footer>
  </article>
</template>

<script>
  import AppComment from '@/components/main/Comment'
  import AppCommentForm from '@/components/main/CommentForm'

  export default {
    validate ({ params }) {
      return Boolean(params.id)
    },
    components: {
      AppComment, AppCommentForm
    }
  }
</script>

<style lang="scss" scoped>
  .post {
    max-width: 600px;
    margin: 0 auto;

    &-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    &-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: .5rem;
    }

    &-image {

      img {
        width: 100%;
        height: auto;
      }
    }

    &-header {
      margin-bottom: 1.5rem;
    }

    &-content {
      margin-bottom: 2rem;
    }
  }
</style>
