<template>
  <el-table
    :data="comments"
    style="width: 100%"
  >
    <el-table-column
      prop="titlePost"
      label="Публикация"
    />
    <el-table-column
      prop="text"
      label="Комментарий"
    />
    <el-table-column
      prop="name"
      label="Автор"
    />
    <el-table-column label="Дата">
      <template slot-scope="{row: {date}}">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ new Date(date).toLocaleString() }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Действия">
      <template slot-scope="{row}">
        <el-tooltip effect="dark" content="Удалить комментарий" placement="left">
          <el-button
            icon="el-icon-delete"
            type=""
            circle
            @click="remove(row._id, row.postId)"
          />
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    layout: 'admin',
    middleware: ['admin-auth'],
    async asyncData ({ store }) {
      const comments = await store.dispatch('comment/fetchAdminComments')
      const posts = await store.dispatch('post/fetch')

      await comments.map(comment => {
        let postId = comment.postId
        let commentAndTitle = posts.find(post => post._id === postId)
        comment['titlePost'] = commentAndTitle.title
      })

      return { comments }
    },
    methods: {
      async remove (id, postId) {
        try {
          await this.$confirm('Удалить комментарий?', 'Внимание!', {
            confirmButtonText: 'Да',
            cancelButtonText: 'Отменить',
            type: 'warning'
          })
          await this.$store.dispatch('comment/removeComment', id)
          await this.$store.dispatch('comment/commentCount', postId)
          this.comments = this.comments.filter(comment => comment._id !== id)

          this.$message.success('Комментарий удален')
        } catch (e) {
        }
      }
    }
  }
</script>
