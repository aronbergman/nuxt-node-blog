<template>
  <el-form
      :model="controls"
      :rules="rules"
      ref="form"
      label-width="120px"
      @submit.prevent.native="onSubmit">

      <h1>Создать пользователя</h1>

      <el-form-item label="Логин" prop="login">
        <el-input v-model.trim="controls.login"/>
      </el-form-item>

      <el-form-item label="Пароль" prop="password">
        <el-input v-model.trim="controls.password" type="password"/>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          round
          native-type="submit"
          :loading="loading"
          class="submit-button"
        >Создать
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
        loading: false,
        controls: {
          login: '',
          password: ''
        },
        rules: {
          login: [
            { required: true, message: 'Введите логин', trigger: 'blur' }
          ],
          password: [
            { required: true, message: 'Введите ваш пароль', trigger: 'blur' },
            { min: 6, message: 'Пароль должен содержать не менее 6 символов', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      onSubmit () {
        this.$refs.form.validate(async (valid) => {
          if (valid) {
            this.loading = true
            try {
              const formData = {
                login: this.controls.login,
                password: this.controls.password
              }

              await this.$store.dispatch('auth/createUser', formData)
              this.$message.success('Пользователь добавлен')
              this.controls.login = ''
              this.controls.password = ''
              this.loading = false
            } catch (e) {
              this.loading = false
              console.log(e)
            }
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
