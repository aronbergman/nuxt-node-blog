<template>
  <el-form
    :model="controls"
    :rules="rules"
    ref="form"
    @submit.native.prevent="onSubmit"
  >

    <h1 class="mb">Создать новую пару «Вопрос–Ответ»</h1>

    <el-form-item label="Вопрос" prop="question">
      <el-input
        v-model="controls.question"
      />
    </el-form-item>

    <el-form-item label="Ответ" prop="answer">
      <el-input
        type="textarea"
        v-model="controls.answer"
        resize="none"
        :rows="3"
      />
    </el-form-item>

       <el-form-item label="Автор (имя, возраст)" prop="name">
      <el-input
        type="textarea"
        v-model="controls.name"
        resize="none"
        :rows="3"
      />
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        native-type="submit"
        round
        :loading="loading"
      >
        Создать пост
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    layout: 'admin',
    middleware: ['admin-auth'],
    data () {
      return {
        image: null,
        previewDialog: false,
        loading: false,
        controls: {
          question: '',
          answer: '',
          name: '',
        },
        rules: {
          question: [
            { required: true, message: 'Вопрос не должен быть пустым', trigger: 'blur' }
          ],
          answer: [
            { required: true, message: 'Ответ не должен быть пустым', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      onSubmit () {
        this.$refs.form.validate(async valid => {
          if (valid) {
            this.loading = true

            const formData = {
              question: this.controls.question,
              answer: this.controls.answer,
              name: this.controls.name
            }

            try {
              await this.$store.dispatch('question/create', formData)
              this.controls.question = ''
              this.controls.qnswer = ''
              this.controls.name = ''
              this.$message.success('Ответ на вопрос создан')
            } catch (e) {
            } finally {
              this.loading = false
            }
          } else {
            this.$message.warning('Форма не валидна')
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  form {
    width: 600px;
  }
</style>
