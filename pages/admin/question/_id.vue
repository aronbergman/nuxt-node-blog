<template>
  <div class="page-wrap">
    <el-breadcrumb separator="/" class="mb">
      <el-breadcrumb-item to="/admin/list">Вопросы</el-breadcrumb-item>
      <el-breadcrumb-item>{{questionFetch.question}}</el-breadcrumb-item>
    </el-breadcrumb>
    <h1>Редактирование вопроса</h1>
    <el-form
      :model="controls"
      :rules="rules"
      ref="form"
      @submit.native.prevent="onSubmit"
    >
      <el-form-item label="Вопрос" prop="question">
        <el-input
          v-model="controls.question"
        />
      </el-form-item>

      <el-form-item label="Автор (имя, возраст или город)" prop="name">
        <el-input
          v-model="controls.name"
        />
      </el-form-item>

      <el-form-item label="Ответ" prop="answer">
        <el-input
          type="textarea"
          v-model="controls.answer"
          resize="none"
          :rows="2"
        />
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
          round
          :loading="loading"
        >
          Обновить вопрос
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    layout: 'admin',
    middleware: ['admin-auth'],
    head () {
      return {
        title: `Вопрос | ${this.questionFetch.question}`
      }
    },
    validate ({ params }) {
      return Boolean(params.id)
    },
    async asyncData ({ store, params }) {
      const questionFetch = await store.dispatch('question/fetchAdminById', params.id)
      return { questionFetch }
    },
    data () {
      return {
        loading: false,
        controls: {
          question: '',
          answer: '',
          name: ''
        },
        rules: {
          answer: [
            { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' }
          ]
        }
      }
    },
    mounted () {
      this.controls.question = this.questionFetch.question
      this.controls.answer = this.questionFetch.answer
      this.controls.name = this.questionFetch.name
    },
    methods: {
      onSubmit () {
        this.$refs.form.validate(async valid => {
          if (valid) {
            this.loading = true

            const formData = {
              question: this.controls.question,
              answer: this.controls.answer,
              name: this.controls.name,
              id: this.questionFetch._id
            }

            try {
              Э
              await this.$store.dispatch('question/update', formData)
              this.$message.success('Вопрос обновлен')
              this.loading = false
            } catch (e) {
              this.loading = false
            }
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .page-wrap {
    width: 600px;
  }

  .mr {
    margin-right: 2rem;
  }
</style>
