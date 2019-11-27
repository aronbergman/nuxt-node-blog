<template>
  <div class="about-page__row">
    <div class="about-page__main">
      <div class="about-page__content">
        <div class="about-page__item">
          <h1 class="about-page__item-title">{{about.titleFirst}}</h1>
          <p class="about-page__item-text">{{about.contentFirst}}</p>
        </div>
        <div class="about-page__item">
          <h1 class="about-page__item-title">{{about.titleSecond}}</h1>
          <p class="about-page__item-text">{{about.contentSecond}}</p>
        </div>
        <div class="about-page__item">
          <h1 class="about-page__item-title">{{about.titleThird}}</h1>
          <p class="about-page__item-text">{{about.contentThird}}</p>
        </div>
      </div>

      <div :class="{ active: mobileAside }" class="about-page__aside">
        <div :class="{ active: mobileAside }" @click="asideHandler" class="about-page__aside-label"></div>
        <h1 class="about-page__aside-title">{{about.name}}</h1>
        <div class="about-page__aside-item">{{about.specialty}}</div>
        <div class="about-page__aside-item"><span>дата рождения</span>{{about.dob}}</div>
        <div class="about-page__aside-item"><span>моя цель</span><strong>{{about.goal}}</strong>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        mobileAside: false,
      }
    },
     head: {
      title: `Обо мне – Авторский блог практикующего психолога в Москве`
    },
    async asyncData ({ store }) {
      const aboutFetch = await store.dispatch('about/fetch')
      const lastCount = await aboutFetch.length - 1
      const about = await aboutFetch[lastCount]
      return { about }
    },
    methods: {
      asideHandler () {
        this.mobileAside = !this.mobileAside
      }
    }
  }
</script>

<style lang="scss" scoped>
  .about-page {

    &__row {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 100px auto;
      font-family: 'DM Sans', sans-serif;

      @include respond-to($mobile) {
        margin: 0;
      }
    }

    &__item {
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
      border-left: 5px solid #57b359;
      box-shadow: 0 10px 40px rgba(159, 162, 177, .5);

      @include respond-to($mobile) {
        width: 90vw;
        height: 100%;
        border-left: none;
        padding: 0;
        margin: 0 15px;
        background-color: transparent;
        box-shadow: none;
      }
    }

    &__aside {
      width: 300px;
      position: relative;
      background-color: #57b359;
      display: flex;
      flex-direction: column;
      color: #fff;
      padding: 50px;
      border-radius: 0 30px 30px 0;

      @include respond-to($mobile) {
        height: 100vh;
        width: 0;
        top: 0;
        right: 0;
        padding: 0;
        border-radius: 0;

        &.active {
          width: 100vw;
          margin: 0;
          padding: 100px 50px 0;
          position: absolute;
          top: 0;
        }
      }

      &-label {
        display: none;

        @include respond-to($mobile) {
          display: flex;
          position: fixed;
          width: 70px;
          height: 45px;
          top: 50%;
          right: -35px;
          transform: translate(0, -50%);
          background-color: #57b359;
          border-radius: 40px;

          &.active {
            background-color: #fff;

            &:before {
              background-image: url("./../assets/images/icons/prev-arrow.svg");
            }
          }

          &:before {
            content: "";
            position: absolute;
            top: 50%;
            left: 10px;
            width: 20px;
            height: 20px;
            transform: translate(0, -50%);
            background-image: url("./../assets/images/icons/contact.svg");
            background-position: left;
            background-repeat: no-repeat;
            background-size: contain;
          }
        }
      }

      &-title {
        font-size: 27px;
        margin-bottom: 20px;
      }

      &-item {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        font-size: 18px;

        span {
          margin: 5px 0;
          font-size: 14px;
        }

        &__link {
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }
</style>
