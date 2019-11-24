<template>
  <el-table
    :data="contactsList"
    style="width: 100%"
  >
    <el-table-column label="Имя">
      <template slot-scope="{row: {name}}">
        <span style="margin-left: 10px">{{ name }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Возраст и город">
      <template slot-scope="{row: {subject}}">
        <span style="margin-left: 10px">{{ subject }}</span>
      </template>
    </el-table-column>

    <el-table-column label="Вопрос">
      <template slot-scope="{row: {message}}">
        <span style="margin-left: 10px">{{ message }}</span>
      </template>
    </el-table-column>

    <el-table-column label="Телефон">
      <template slot-scope="{row: {phone}}">
        <span style="margin-left: 10px">{{ phone }}</span>
      </template>
    </el-table-column>

    <el-table-column label="Email">
      <template slot-scope="{row: {email}}">
        <span style="margin-left: 10px">{{ email }}</span>
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
      const contactsList = await store.dispatch('contact/fetchAdmin')
      return { contactsList }
    }
  }
</script>
