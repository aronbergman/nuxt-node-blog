<template>
  <div>
    <h1 class="mb2">Редактирование страницы «Обо мне»</h1>
    <el-form
      :model="controls"
      :rules="rules"
      ref="form"
      @submit.native.prevent="onSubmit"
    >
      <h3>Правый столбик</h3>

      <el-form-item label="Фамилия Имя Отчество" prop="name">
        <el-input
          v-model="controls.name"
        />
      </el-form-item>
      <el-form-item label="Специальность" prop="specialty">
        <el-input
          v-model="controls.specialty"
        />
      </el-form-item>

      <el-form-item label="Дата рождения" prop="dob">
        <el-input
          v-model="controls.dob"
        />
      </el-form-item>

      <el-form-item label="Цель" prop="goal">
        <el-input
          v-model="controls.goal"
        />
      </el-form-item>

      <el-form-item label="Телефон" prop="phone">
        <el-input
          v-model="controls.phone"
        />
      </el-form-item>

      <el-form-item label="Email" prop="email">
        <el-input
          v-model="controls.email"
        />
      </el-form-item>

      <el-form-item label="Адрес" prop="address">
        <el-input
          v-model="controls.address"
        />
      </el-form-item>

      <h3>Тело страницы, абзацы</h3>

      <el-form-item label="Первый заголовок" prop="titleFirst">
        <el-input
          v-model="controls.titleFirst"
        />
      </el-form-item>

      <el-form-item label="Первый абзац" prop="contentFirst">
        <el-input
          v-model="controls.contentFirst"
          type="textarea"
          :rows="5"
        />
      </el-form-item>

      <el-form-item label="Второй заголовок" prop="titleSecond">
        <el-input
          v-model="controls.titleSecond"
        />
      </el-form-item>

      <el-form-item label="Второй абзац" prop="contentSecond">
        <el-input
          v-model="controls.contentSecond"
          type="textarea"
          :rows="5"
        />
      </el-form-item>

      <el-form-item label="Третий заголовок" prop="titleThird">
        <el-input
          v-model="controls.titleThird"
        />
      </el-form-item>

      <el-form-item label="Третий абзац" prop="contentThird">
        <el-input
          v-model="controls.contentThird"
          type="textarea"
          :rows="5"
        />
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          native-type="submit"
          round
          :loading="loading"
        >
          Обновить визитку
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    layout: 'admin',
    middleware: ['admin-auth'],
    async asyncData ({ store }) {
      const about = await store.dispatch('about/fetch')
      const lastCount = await about[about.length - 1]
      return {
        controls: {
          name: lastCount ? lastCount.name : '',
          specialty: lastCount ? lastCount.specialty : '',
          dob: lastCount ? lastCount.dob : '',
          goal: lastCount ? lastCount.goal : '',
          titleFirst: lastCount ? lastCount.titleFirst : '',
          titleSecond: lastCount ? lastCount.titleSecond : '',
          titleThird: lastCount ? lastCount.titleThird : '',
          contentFirst: lastCount ? lastCount.contentFirst : '',
          contentSecond: lastCount ? lastCount.contentSecond : '',
          contentThird: lastCount ? lastCount.contentThird : '',
          phone: lastCount ? lastCount.phone : '',
          address: lastCount ? lastCount.address : '',
          email: lastCount ? lastCount.email : '',
        },
      }
    },
    data () {
      return {
        previewDialog: false,
        loading: false,
        rules: {
          text: [
            { required: true, message: 'Поле обязательно для заполнения', trigger: 'blur' }
          ],
          specialty: [
            { required: true, message: 'Поле обязательно для заполнения', trigger: 'blur' }
          ],
          dob: [
            { required: true, message: 'Поле обязательно для заполнения', trigger: 'blur' }
          ],
          goal: [
            { required: true, message: 'Поле обязательно для заполнения', trigger: 'blur' }
          ],
          titleFirst: [
            { required: true, message: 'Поле обязательно для заполнения', trigger: 'blur' }
          ],
          contentFirst: [
            { required: true, message: 'Поле обязательно для заполнения', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleImageChange (file, fileList) {
        this.image = file.raw
      },
      onSubmit () {
        this.$refs.form.validate(async valid => {
          if (valid) {
            this.loading = true

            const formData = {
              name: this.controls.name,
              specialty: this.controls.specialty,
              dob: this.controls.dob,
              goal: this.controls.goal,
              titleFirst: this.controls.titleFirst,
              titleSecond: this.controls.titleSecond,
              titleThird: this.controls.titleThird,
              contentFirst: this.controls.contentFirst,
              contentSecond: this.controls.contentSecond,
              contentThird: this.controls.contentThird,
              phone: this.controls.phone,
              email: this.controls.email,
              address: this.controls.address
            }

            try {
              await this.$store.dispatch('about/create', formData)
              this.$message.success('Страница «Обо мне» обновлена')
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
