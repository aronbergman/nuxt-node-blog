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

      <div class="about-page__aside">
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
    head: {
      title: 'Главная'
    },
    async asyncData ({ store }) {
      const aboutFetch = await store.dispatch('about/fetch')
      const lastCount = await aboutFetch.length - 1
      const about = await aboutFetch[lastCount]
      return { about }
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
      box-shadow: 0 10px 40px rgba(159, 162, 177, 0.5);

      .el-input__inner,
      .el-textarea__inner {
        border: 1px solid #57b359;
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
          color: #57b359;
          padding-left: 10px;

          &:before {
            position: absolute;
            right: 0;
          }
        }

        .el-button--primary {
          width: 100%;
          background-color: #57b359;
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
      width: 300px;
      background-color: #57b359;
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
