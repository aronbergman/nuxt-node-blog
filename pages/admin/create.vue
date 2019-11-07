<template>
  <el-form
    :model="controls"
    :rules="rules"
    ref="form"
    label-width="120px"
    @submit.prevent.native="onSubmit"
  >
    <h1 class="mb">Создать новый пост</h1>
    <br />

    <el-form-item label="Заголовок" prop="title">
      <el-input v-model.trim="controls.title" />
    </el-form-item>

    <el-form-item label="Текст в формате .md или .html" prop="text">
      <el-input v-model.trim="controls.text" type="textarea" resize="none" :rows="10" />
    </el-form-item>

    <el-form-item>
      <br />
      <el-button
        type="primary"
        round
        native-type="submit"
        :loading="loading"
        class="submit-button"
      >Создать пост</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  layout: "admin",
  middleware: ["admin-auth"],
  data() {
    return {
      loading: false,
      controls: {
        text: "",
        title: ""
      },
      rules: {
        text: [{ required: true, message: "Введите текст", trigger: "blur" }],
        title: [
          { required: true, message: "Введите заголовок", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true;

          const formData = {
            title: this.controls.title,
            text: this.controls.text
          };
          try {
            await this.$store.dispatch("post/create", formData);
            this.$message.success("Пост создан!");
            this.controls.text = "";
            this.controls.title = "";
            this.loading = false;
          } catch (e) {
            this.loading = false;
            console.log(e);
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  width: 600px;
}
</style>
