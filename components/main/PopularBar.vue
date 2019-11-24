<template>
  <article class="card card--1" @click="openPost(post._id)">
    <div class="card__info-hover"><i class="fas fa-eye"></i>
      {{post.views}}
      <div class="card__clock-info">
        <i class="far fa-comments"></i> {{post.commentsCount}}
      </div>

    </div>
    <div class="card__img" :style="{ backgroundImage: `url('${post.imageUrl}')` }"></div>
    <a href="#" class="card_link">
      <div class="card__img--hover" :style="{ backgroundImage: `url('${post.imageUrl}')` }"></div>
    </a>
    <div class="card__info">
      <span class="card__category">Психология</span>
      <h3 class="card__title">{{post.title}}</h3>
      <span class="card__by">
        <a href="#" class="card__author" title="author">teg, teg, teg</a>
      </span>
    </div>
  </article>
</template>

<script>
  export default {
    props: {
      post: {
        type: Object,
        required: true
      }
    },
    methods: {
      openPost (id) {
        this.$router.push(`/post/${id}`)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700');
  @import url('https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i');

  * {
    box-sizing: border-box;
  }

  .card__like {
    width: 18px;
  }

  .card__clock {
    width: 15px;
    vertical-align: middle;
    fill: #AD7D52;
  }

  .card__time {
    font-size: 12px;
    color: #AD7D52;
    vertical-align: middle;
    margin-left: 5px;
  }

  .card__clock-info {
    float: right;
  }

  .card__img {
    visibility: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 135px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

  }

  .card__info-hover {
    position: absolute;
    padding: 16px;
    width: 100%;
    opacity: 0;
    top: 0;
  }

  .card__img--hover {
    transition: 0.2s all ease-out;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    position: absolute;
    height: 135px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    top: 0;

  }

  .card {
    margin-bottom: 50px;
    transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);
    background-color: #fff;
    width: 100%;
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
  }

  .card:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.10, 1.10);
  }

  .card__info {
    z-index: 2;
    background-color: #fff;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 16px 24px 24px 24px;
    cursor: pointer;
  }

  .card__category {
    font-family: 'Raleway', sans-serif;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 2px;
    font-weight: 500;
    color: #868686;
  }

  .card__title {
    margin-top: 5px;
    margin-bottom: 10px;
    font-family: 'Roboto Slab', serif;
  }

  .card__by {
    font-size: 12px;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
  }

  .card__author {
    font-weight: 600;
    text-decoration: none;
    color: #AD7D52;
  }

  .card:hover .card__img--hover {
    height: 100%;
    opacity: 0.3;
  }

  .card:hover .card__info {
    background-color: transparent;
    position: relative;
  }

  .card:hover .card__info-hover {
    opacity: 1;
  }

</style>
