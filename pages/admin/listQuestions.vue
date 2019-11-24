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
  </el-table>
</template>

<script>
  export default {
    layout: 'admin',
    middleware: ['admin-auth'],
    async asyncData ({ store }) {
      const questions = await store.dispatch('question/fetchAdmin')
      return { questions }
    }
  }
</script>
