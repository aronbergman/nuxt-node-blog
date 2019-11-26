<template>
  <div class="contact-form__row">
    <div class="contact-form__main">
      <el-form
        :model="controls"
        :rules="rules"
        ref="form"
        class="contact-form__content"
        @submit.native.prevent="onSubmit"
      >
        <div class="contact-form__header">
          <h1 class="contact-form__header-title">Обратная связь</h1>
          <p class="contact-form__header-text">Вы можете задать интересующий Вас вопрос или оставить отзыв. А так, же
            поделиться вашими мыслями со мной.</p>
        </div>
        <el-form-item class="el-form-item" label="Имя" prop="name">
          <el-input v-model="controls.name"/>
        </el-form-item>
        <el-form-item class="el-form-item" label="Возраст, город проживания" prop="subject">
          <el-input v-model="controls.subject"/>
        </el-form-item>
        <el-form-item
          label="Ваш вопрос"
          prop="message"
          class="el-form-item-max"
        >
          <el-input type="textarea" :rows="3" v-model="controls.message"/>
        </el-form-item>
        <el-form-item class="el-form-item" label="Контакт для связи" prop="phone">
          <el-input v-model="controls.phone"/>
        </el-form-item>
        <el-form-item class="el-form-item" label="Элентронная почта" prop="email">
          <el-input v-model="controls.email"/>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            native-type="submit"
            round
            :loading="loading"
          >
            Отправить
          </el-button>
        </el-form-item>
      </el-form>
      <div class="contact-form__aside">
        <h1 class="contact-form__aside-title">Контакты</h1>
        <div class="contact-form__aside-item"><span>Кабинет расположен&nbsp;по&nbsp;адресу:</span>{{about.address}}
        </div>
        <div class="contact-form__aside-item"><span>Приём ведется по предварительной записи</span></div>
        <div class="contact-form__aside-item"><span>Контактный телефон</span>
          <a class="contact-form__aside-item__link" :href='`tel:${about.phone}`'>{{about.phone}}</a>
          <span>(с 9:00 до 21:00)</span>
        </div>
        <div class="contact-form__aside-item">
          <span>Электронная почта</span>
          <a class="contact-form__aside-item__link" :href='`mailto:${about.email}`'>{{about.email}}</a>
        </div>
        <div class="contact-form__aside-item">maps, whatsapp, viber</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData ({ store }) {
      const aboutFetch = await store.dispatch('about/fetch')
      const lastCount = await aboutFetch.length - 1
      const about = await aboutFetch[lastCount]
      return { about }
    },
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
            { required: true, message: 'Введите ваше имя', trigger: 'blur' }
          ],
          email: [
            { required: false, message: 'Введите ваш email', trigger: 'blur' }
          ],
          subject: [
            { required: false, message: 'Опишите себя', trigger: 'blur' }
          ],
          phone: [
            { required: false, message: 'Введите ваш телефон', trigger: 'blur' }
          ],
          message: [
            { required: true, message: 'Введите ваше сообщение', trigger: 'blur' }
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
              this.$message.success('Форма успешно отправлена')
            } catch (e) {
            } finally {
              this.loading = false
            }
          } else {
            this.$message.warning('Дополните форму и повторите отправку')
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .contact-form {

    &__row {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 100px auto;
      font-family: 'DM Sans', sans-serif;
    }

    &__header {
      width: 450px;
      text-align: left;
      margin-bottom: 30px;
      color: #83818c;

      &-title {
        font-size: 27px;
        margin-bottom: 10px;
      }

      &-text {
        font-size: 14px;
      }
    }

    &__main {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    &__content {
      display: flex;
      flex-wrap: wrap;
      width: 600px;
      padding: 50px;
      box-sizing: content-box;
      background-color: #fff;
      border-left: 5px solid #00b8ca;
      box-shadow: 0 10px 40px rgba(159, 162, 177, 0.5);

      .el-input__inner,
      .el-textarea__inner {
        border: 1px solid #00b8ca;
        border-radius: 20px;
      }

      .el-textarea__inner {
        border-radius: 20px 20px 5px 20px;
      }

      .el-form-item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        width: 50%;
        padding: 0 10px;

        .el-form-item__label {
          position: relative;
          color: #00b8ca;
          padding-left: 10px;

          &:before {
            position: absolute;
            right: 0;
          }
        }

        .el-button--primary {
          width: 100%;
          background-color: #00b8ca;
          border: none;
          margin-top: 25px;
        }

        &.el-form-item-max {
          width: 100%;
        }

        &__content {
          width: 100%;
        }
      }
    }

    &__aside {
      width: 310px;
      background-color: #00b8ca;
      display: flex;
      flex-direction: column;
      color: #fff;
      padding: 50px;
      border-radius: 0 30px 30px 0;

      &-title {
        font-size: 27px;
        margin-bottom: 20px;
      }

      &-item {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        font-size: 18px;
        font-weight: bold;

        span {
          margin: 5px 0;
          font-size: 14px;
          font-weight: normal;
        }

        &__link {
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }
</style>
