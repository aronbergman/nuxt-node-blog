<template>
  <el-row type="flex" justify="center">
    <el-col :xs="24" :sm="18" :md="12" :lg="10">
      {{getContent()}}
    </el-col>
  </el-row>
</template>

<script>
  export default {
    head: {
      title: 'Главная'
    },
    async asyncData ({ store }) {
      const about = await store.dispatch('about/fetch')
      return { about }
    },
    data () {
      return {
        about: null
      }
    },
    methods: {
      getContent() {
        const lastCount = this.about.length - 1
        return this.about[lastCount]
      }
    }
  }
</script>

<style>

</style>
