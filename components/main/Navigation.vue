<template>
  <nav class="nav" :class="{ active: menuToggle }">
    <div class="burger-menu"
         :class="{ menuOpen: menuToggle }"
         @click="menuToggleHandler()">
      <div class="burger"></div>
    </div>
    <nuxt-link
      to="/"
      class="nav-item"
      active-color="red"
      exact
      @click.native="menuToggleHandler()"
    >
      Авторские публикации
    </nuxt-link>
    <nuxt-link
      to="/questions"
      class="nav-item"
      active-color="#A18AFF"
      @click.native="menuToggleHandler()"
    >
      Отвечаю на вопросы
    </nuxt-link>
    <!--    <nuxt-link to="/tests" class="nav-item" active-color="green">Тесты</nuxt-link>-->
    <nuxt-link
      to="/about"
      class="nav-item"
      active-color="#57B359"
      @click.native="menuToggleHandler()"
    >
      Обо мне
    </nuxt-link>
    <nuxt-link
      to="/contact"
      class="nav-item"
      active-color="#00b8ca"
      @click.native="menuToggleHandler()"
    >
      Контакты
    </nuxt-link>
    <span class="nav-indicator"></span>
  </nav>
</template>

<script>
  import { menuAnimation } from '@/assets/menuAnimation'

  export default {
    data () {
      return {
        menuToggle: false
      }
    },
    mounted () {
      menuAnimation()
    },
    methods: {
      menuToggleHandler: function () {
        this.menuToggle = !this.menuToggle
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=DM+Sans:500,700&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    text-align: center;
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    background-image: url("https://www.toptal.com/designers/subtlepatterns/patterns/debut_light.png");
  }

  .nav {
    display: inline-flex;
    position: relative;
    overflow: hidden;
    max-width: 100%;
    height: 61px;
    background-color: #fff;
    padding: 0 20px;
    border-radius: 40px;
    box-shadow: 0 10px 40px rgba(159, 162, 177, .8);
    top: 50px;
    left: 50%;
    transform: translate(-50%, 0);

    @include respond-to($mobile) {
      position: fixed;
      height: 50px;
      width: 50px;
      top: 10px;
      left: 50%;
      transform: translate(-50%, 0);
      padding: 0;
      z-index: 100;

      &.active {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        transform: translate(0, 0);
        border-radius: 0;

        .burger-menu {
          top: 10px;
          left: 50%;
          transform: translate(-50%, 0);
        }

        .nav-item {
          display: block;
          text-align: center;
        }
      }
    }
  }

  .nav-item {
    color: #83818c;
    padding: 20px;
    text-decoration: none;
    transition: .3s;
    margin: 0 6px;
    z-index: 1;
    font-family: 'DM Sans', sans-serif;
    line-height: 1.2;
    font-weight: 500;
    position: relative;

    @include respond-to($mobile) {
      display: none;
      font-size: 20px;
      font-weight: 800;

      &:before {
        display: none;
      }
    }

    &:before {
      content: "";
      position: absolute;
      bottom: -6px;
      left: 0;
      width: 100%;
      height: 5px;
      background-color: #dfe2ea;
      border-radius: 8px 8px 0 0;
      opacity: 0;
      transition: .3s;
    }
  }

  .nav-item:not(.is-active):hover:before {
    opacity: 1;
    bottom: 0;
  }


  .nav-item:not(.is-active):hover {
    color: #333;
  }

  .nav-indicator {
    position: absolute;
    left: 0;
    bottom: 0;
    transition: .4s;
    height: 5px;
    z-index: 1;
    border-radius: 8px 8px 0 0;

    @include respond-to($mobile) {
      display: none;
    }
  }

  @media (max-width: 580px) {
    .nav {
      overflow: auto;
    }
  }

  .burger-menu {
    display: none;
    position: absolute;
    width: 50px;
    height: 50px;
    cursor: pointer;
    top: 0;
    left: 0;

    @include respond-to($mobile) {
      display: block;
    }
  }

  .burger {
    position: absolute;
    background: rgba(111, 111, 111, 1);
    width: 22px;
    height: 4px;
    top: 50%;
    left: 50%;
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  .burger::before {
    position: absolute;
    background: rgba(111, 111, 111, 1);
    width: 22px;
    height: 4px;
    top: 7px;
    content: "";
    display: block;
  }

  .burger::after {
    position: absolute;
    background: rgba(111, 111, 111, 1);
    width: 22px;
    height: 4px;
    bottom: 7px;
    content: "";
    display: block;
  }

  .burger::after, .burger::before, .burger {
    transition: all .3s ease-in-out;
    -webkit-transition: all .3s ease-in-out;
  }

  .burger-menu.menuOpen .burger::after {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    bottom: 0px;
  }

  .burger-menu.menuOpen .burger::before {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    top: 0px;
  }

  .burger-menu.menuOpen .burger {
    background: rgba(111, 111, 111, .0);
  }

</style>

