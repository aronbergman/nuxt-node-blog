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
      <el-input v-model="controls.text" type="textarea" resize="none" :rows="10" />
    </el-form-item>

    <el-button class="mb" type="success" @click="previewDialog = true">Предпросмотр</el-button>

    <el-dialog title="Предпросмотр" :visible.sync="previewDialog">
      <div :key="controls.text">
        <vue-markdown>{{controls.text}}</vue-markdown>
      </div>
    </el-dialog>

    <el-upload
      :on-change="handleImageChange"
      :auto-upload="false"
      ref="upload"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        Перетащите картинку
        <em>или назмите</em>
      </div>
      <div class="el-upload__tip" slot="tip">jpg/png файлы до 500kb</div>
    </el-upload>

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
      previewDialog: false,
      controls: {
        text: "",
        title: ""
      },
      rules: {
        text: [{ required: true, message: "Введите текст", trigger: "blur" }],
        title: [
          { required: true, message: "Введите заголовок", trigger: "blur" }
        ]
      },
      image: null
    };
  },
  methods: {
    handleImageChange(file, fileList) {
      this.image = file.raw;
    },
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid && this.image) {
          this.loading = true;

          const formData = {
            title: this.controls.title,
            text: this.controls.text,
            image: this.image
          };
          try {
            await this.$store.dispatch("post/create", formData);
            this.$message.success("Пост создан!");
            this.controls.text = "";
            this.controls.title = "";
            this.image = null;
            this.$refs.upload.clearFiles();
            this.loading = false;
          } catch (e) {
            this.loading = false;
            console.log(e);
          }
        } else {
          this.$message.warning("Не все поля былы заполнены корректно");
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
