<template>
  <el-table
    :data="comments"
    style="width: 100%"
  >
    <el-table-column
      prop="postId"
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
    <el-table-column label="Спам">
        <el-tooltip effect="dark" content="Удалить комментарий" placement="left">
          <el-button
            icon="el-icon-delete"
            type=""
            circle
            @click="remove(row._id)"
          />
        </el-tooltip>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    layout: 'admin',
    middleware: ['admin-auth'],
    async asyncData ({ store }) {
      const comments = await store.dispatch('comment/fetchAdminComments')
      return { comments }
    },
    methods: {
      async remove (id) {
        try {
          await this.$confirm('Удалить комментарий?', 'Внимание!', {
            confirmButtonText: 'Да',
            cancelButtonText: 'Отменить',
            type: 'warning'
          })
          await this.$store.dispatch('comment/removeComment', id)
          this.comments = this.comments.filter(p => p._id !== id)

          this.$message.success('Комментарий удален')
        } catch (e) {
        }
      }
    }
  }
</script>
