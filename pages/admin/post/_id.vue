<template>
  <div class="page-wrap">
    <el-breadcrumb separator-class="el-icon-arrow-right mb">
      <el-breadcrumb-item :to="{ path: '/admin' }">Главная</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/admin/list' }">Список статей</el-breadcrumb-item>
      <el-breadcrumb-item>Статья {{post.title}}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form
      :model="controls"
      :rules="rules"
      ref="form"
      label-width="120px"
      @submit.prevent.native="onSubmit"
    >
      <el-form-item label="Текст в формате .md или .html" prop="text">
        <el-input v-model.trim="controls.text" type="textarea" resize="none" :rows="10" />
      </el-form-item>

      <small>
        <i class="el-icon-time"></i>
        <span>{{ new Date(post.date).toLocaleString() }}</span>
      </small>
      <small>
        <i class="el-icon-view"></i>
        <span>{{ post.views }}</span>
      </small>

      <el-form-item>
        <br />
        <el-button
          type="primary"
          round
          native-type="submit"
          :loading="loading"
          class="submit-button"
        >Обновить</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  layout: "admin",
  middleware: ["admin-auth"],
  head() {
    return {
      title: `Пост ${this.post.title}`
    };
  },
  validate({ params }) {
    return Boolean(params.id);
  },
  async asyncData({ store, params }) {
    const post = await store.dispatch("post/fetchAdminById", params.id);
    return { post };
  },
  data() {
    return {
      loading: false,
      controls: {
        text: ""
      },
      rules: {
        text: [{ required: true, message: "Введите текст", trigger: "blur" }]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true;

          const formData = {
            text: this.controls.text,
            id: this.post._id
          };
          try {
            await this.$store.dispatch("post/update", formData);
            this.$message.success("Пост обновлен");
            this.loading = false;
          } catch (e) {
            this.loading = false;
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.page-wrap {
  width: 600px;
}
</style>