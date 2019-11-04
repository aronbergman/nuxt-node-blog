<template>
  <el-form
    :model="controls"
    :rules="rules"
    ref="form"
    label-width="120px"
    @submit.prevent.native="onSubmit">

    <h1>Добавить комментарий</h1>

    <el-form-item label="Ваше имя" prop="name">
      <el-input v-model.trim="controls.name"/>
    </el-form-item>

    <el-form-item label="Комментарий" prop="text">
      <el-input
        type="textarea"
        v-model.trim="controls.text"
        resize="none"
        :rows="4"
      />
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        round
        native-type="submit"
        :loading="loading"
      >Добавить комментарий
      </el-button>
    </el-form-item>

  </el-form>
</template>

<script>
  export default {
    data () {
      return {
        loading: false,
        controls: {
          name: '',
          text: ''
        },
        rules: {
          name: [
            { required: true, message: 'Имя не должно быть пустым', trigger: 'blur' }
          ],
          text: [
            { required: true, message: 'Введите ваш комментарий', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      onSubmit () {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.loading = true
            const formData = {
              name: this.controls.name,
              text: this.controls.text,
              postId: ''
            }
            try {
              this.$message.success('Комментарий сохранен')
              this.$emit('created')
              console.log(formData)
            } catch (e) {
              console.log(e)
            }
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    margin-bottom: 1rem;
  }
</style>
