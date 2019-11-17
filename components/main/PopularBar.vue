<template>
  <div class="aside">__##__ {{post.title}}</div>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        required: true
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
