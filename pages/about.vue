<template>
  <div>
    {{getContent()}}
  </div>
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
      getContent () {
        const lastCount = this.about.length - 1
        return this.about[lastCount]
      }
    }
  }
</script>

<style></style>
