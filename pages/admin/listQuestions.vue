<template>
  <el-table
    :data="questions"
    style="width: 100%"
  >
    <el-table-column label="Вопрос">
      <template slot-scope="{row: {question}}">
        <i class="el-icon-question"></i>
        <span style="margin-left: 10px">{{ question }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Ответ">
      <template slot-scope="{row: {answer}}">
        <i class="el-icon-circle-check"></i>
        <span style="margin-left: 10px">{{ answer }}</span>
      </template>
    </el-table-column>

    <el-table-column label="Автор">
      <template slot-scope="{row: {name}}">
        <i class="el-icon-circle-check"></i>
        <span style="margin-left: 10px">{{ name }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Дата">
      <template slot-scope="{row: {date}}">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ new Date(date).toLocaleString() }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Действия">
      <template slot-scope="{row}">
        <el-tooltip effect="dark" content="Открыть пост" placement="top">
          <el-button
            icon="el-icon-edit"
            type="primary"
            circle
            @click="open(row._id)"
          />
        </el-tooltip>
        <el-tooltip effect="dark" content="Удалить вопрос" placement="top">
          <el-button
            icon="el-icon-delete"
            type="danger"
            circle
            @click="remove(row._id)"
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
      const questions = await store.dispatch('question/fetchAdmin')
      return { questions }
    },
    methods: {
      open (id) {
        this.$router.push(`/admin/question/${id}`)
      },
      async remove (id) {
        try {
          await this.$confirm('Удалить вопрос?', 'Внимание!', {
            confirmButtonText: 'Да',
            cancelButtonText: 'Отменить',
            type: 'warning'
          })
          await this.$store.dispatch('question/remove', id)
          this.questions = this.questions.filter(p => p._id !== id)

          this.$message.success('Вопрос удален')
        } catch (e) {
        }
      }
    }
  }
</script>
