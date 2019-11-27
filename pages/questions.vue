<template>
  <div class="blog-slider">
    <div class="blog-slider__wrp swiper-wrapper">
      <div class="blog-slider__item swiper-slide" v-for="question in questions">
        <div class="blog-slider__img">

          <img
            src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg"
            alt="">
        </div>
        <div class="blog-slider__content">
          <span class="blog-slider__code">{{question.name}}</span>
          <div class="blog-slider__title">{{question.question}}</div>
          <div class="blog-slider__text">{{question.answer}}
          </div>
        </div>
      </div>
    </div>
    <div class="blog-slider__pagination"></div>
    <nuxt-link class="blog-slider__button" to="/contact">Задать вопрос</nuxt-link>
  </div>
</template>

<script>
  import { questionsPage } from './../assets/questionsPage'

  export default {
    mounted () {
      questionsPage()
    },
    async asyncData ({ store }) {
      const questions = await store.dispatch('question/fetch')
      return { questions }
    },
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');

  .blog-slider {
    width: 95%;
    position: relative;
    max-width: 800px;
    margin: 150px auto 75px;
    background: #fff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 25px;
    border-radius: 25px;
    height: 400px;
    transition: all .3s;

    &-container {
      display: flex;
      flex-direction: column;
      margin-top: -100px;
    }

    @media screen and (max-width: 992px) {
      max-width: 680px;
      height: 400px;
    }

    @media screen and (max-width: 768px) {
      min-height: 90vh;
      height: auto;
      margin: -50px auto 0;
    }


    @media screen and (max-height: 500px) and (min-width: 992px) {
      height: 350px;
    }

    &__item {
      display: flex;
      align-items: center;

      @media screen and (max-width: 768px) {
        flex-direction: column;
      }

      &.swiper-slide-active {

        .blog-slider__img {
          img {
            opacity: 1;
            transition-delay: .3s;
          }
        }

        .blog-slider__content {

          * {
            opacity: 1;
            transform: none;

            @for $i from 0 to 15 {
              &:nth-child(#{$i + 1}) {
                transition-delay: $i * 0.1 + 0.3s;
              }
            }

          }
        }
      }

    }

    &__img {
      // width: 40%;
      width: 300px;
      flex-shrink: 0;
      height: 300px;
      background-image: linear-gradient(147deg, #A18AFF 0%, #BEA9FF 74%);
      box-shadow: 4px 13px 30px 1px rgba(161, 138, 255, 0.2);
      border-radius: 20px;
      transform: translateX(-80px);

      @include respond-to($mobile) {
        height: 100px;
      }

      overflow: hidden;

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(147deg, #A18AFF 0%, #BEA9FF 74%);
        border-radius: 20px;
        opacity: 0.8;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        opacity: 0;
        border-radius: 20px;
        transition: all .3s;
      }


      @media screen and (max-width: 992px) {
        // width: 45%;
      }
      @media screen and (max-width: 768px) {
        transform: translateY(-50%);
        width: 90%;
      }
      @media screen and (max-width: 576px) {
        width: 95%;
      }
      @media screen and (max-height: 500px) and (min-width: 992px) {
        height: 270px;
      }
    }

    &__content {
      // width: 60%;
      padding-right: 50px;

      @media screen and (max-width: 992px) {
        // width: 55%;
      }

      @media screen and (max-width: 768px) {
        margin-top: 0;
        text-align: center;
        padding: 0 30px;
      }

      @media screen and (max-width: 576px) {
        padding: 0
      }

      * {
        opacity: 0;
        transform: translateY(25px);
        transition: all .4s;


      }

    }

    &__code {
      color: #7b7992;
      margin-bottom: 15px;
      display: block;
      font-weight: 500;
    }

    &__title {
      font-size: 24px;
      font-weight: 700;
      color: #0d0925;
      margin-bottom: 20px;
      padding-right: 40px;
    }

    &__text {
      color: #4e4a67;
      margin-bottom: 30px;
      line-height: 1.5em;
    }

    &__button {
      position: absolute;
      display: inline-flex;
      background-image: linear-gradient(147deg, #A18AFF 0%, #BEA9FF 74%);
      padding: 15px 35px;
      border-radius: 50px;
      color: #fff;
      box-shadow: 0px 14px 80px rgba(161, 138, 255, 0.2);
      text-decoration: none;
      font-weight: 500;
      justify-content: center;
      text-align: center;
      letter-spacing: 1px;
      right: 30px;

      @media screen and (max-width: 576px) {
        bottom: 20px;
        width: 230px;
        left: 50%;
        transform: translate(-50%, 0);
      }

    }

    .swiper-container-horizontal > .swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
      bottom: 10px;
      left: 0;
      width: 100%;

    }

    &__pagination {
      position: absolute;
      z-index: 21;
      right: 20px;
      width: 11px !important;
      text-align: center;
      left: auto !important;
      top: 50%;
      bottom: auto !important;
      transform: translateY(-50%);

      @media screen and (max-width: 768px) {
        transform: translateX(-50%);
        left: 50% !important;
        top: 95px;
        width: 100% !important;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &.swiper-pagination-bullets .swiper-pagination-bullet {
        margin: 8px 0;

        @media screen and (max-width: 768px) {
          margin: 0 5px;
        }
      }

      .swiper-pagination-bullet {
        width: 11px;
        height: 11px;
        display: block;
        border-radius: 10px;
        background: #062744;
        opacity: 0.2;
        transition: all .3s;

        &-active {
          opacity: 1;
          background: #A18AFF;
          height: 30px;
          box-shadow: 0px 0px 20px rgba(161, 138, 255, 0.7);

          @media screen and (max-width: 768px) {
            height: 11px;
            width: 30px;
          }
        }
      }
    }
  }
</style>
