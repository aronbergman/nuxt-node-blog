<template>
  <el-form
    :model="controls"
    :rules="rules"
    ref="form"
    @submit.native.prevent="onSubmit"
  >
    <el-form-item label="Имя" prop="name">
      <el-input v-model="controls.name"/>
    </el-form-item>
    <el-form-item label="Email" prop="email">
      <el-input v-model="controls.email"/>
    </el-form-item>
    <el-form-item label="Коротко о себе" prop="subject">
      <el-input v-model="controls.subject"/>
    </el-form-item>
    <el-form-item label="Телефон" prop="phone">
      <el-input v-model="controls.phone"/>
    </el-form-item>
    <el-form-item label="Сообщение" prop="message">
      <el-input v-model="controls.message"/>
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
    data () {
      return {
        image: null,
        previewDialog: false,
        loading: false,
        controls: {
          name: '',
          email: '',
          subject: '',
          phone: '',
          message: ''
        },
        rules: {
          name: [
            { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' }
          ],
          email: [
            { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' }
          ],
          subject: [
            { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' }
          ],
          message: [
            { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' }
          ],
        }
      }
    },
    methods: {
      onSubmit () {
        this.$refs.form.validate(async valid => {
          if (valid) {
            this.loading = true

            const formData = {
              name: this.controls.name,
              email: this.controls.email,
              subject: this.controls.subject,
              phone: this.controls.phone,
              message: this.controls.message,
            }

            try {
              await this.$store.dispatch('contact/create', formData)
              this.controls.nane = ''
              this.controls.email = ''
              this.controls.subject = ''
              this.controls.phone = ''
              this.controls.message = ''
              this.$message.success('Пост создан')
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
