<template>
  <main>
    <svg display="none" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <symbol id="icon-bubble" viewBox="0 0 1024 1024">
          <title>bubble</title>
          <path class="path1"
                d="M512 224c8.832 0 16 7.168 16 16s-7.2 16-16 16c-170.464 0-320 89.728-320 192 0 8.832-7.168 16-16 16s-16-7.168-16-16c0-121.408 161.184-224 352-224zM512 64c-282.784 0-512 171.936-512 384 0 132.064 88.928 248.512 224.256 317.632 0 0.864-0.256 1.44-0.256 2.368 0 57.376-42.848 119.136-61.696 151.552 0.032 0 0.064 0 0.064 0-1.504 3.52-2.368 7.392-2.368 11.456 0 16 12.96 28.992 28.992 28.992 3.008 0 8.288-0.8 8.16-0.448 100-16.384 194.208-108.256 216.096-134.88 31.968 4.704 64.928 7.328 98.752 7.328 282.72 0 512-171.936 512-384s-229.248-384-512-384zM512 768c-29.344 0-59.456-2.24-89.472-6.624-3.104-0.512-6.208-0.672-9.28-0.672-19.008 0-37.216 8.448-49.472 23.36-13.696 16.672-52.672 53.888-98.72 81.248 12.48-28.64 22.24-60.736 22.912-93.824 0.192-2.048 0.288-4.128 0.288-5.888 0-24.064-13.472-46.048-34.88-56.992-118.592-60.544-189.376-157.984-189.376-260.608 0-176.448 200.96-320 448-320 246.976 0 448 143.552 448 320s-200.992 320-448 320z"></path>
        </symbol>
        <symbol id="icon-star" viewBox="0 0 1024 1024">
          <title>star</title>
          <path class="path1"
                d="M1020.192 401.824c-8.864-25.568-31.616-44.288-59.008-48.352l-266.432-39.616-115.808-240.448c-12.192-25.248-38.272-41.408-66.944-41.408s-54.752 16.16-66.944 41.408l-115.808 240.448-266.464 39.616c-27.36 4.064-50.112 22.784-58.944 48.352-8.8 25.632-2.144 53.856 17.184 73.12l195.264 194.944-45.28 270.432c-4.608 27.232 7.2 54.56 30.336 70.496 12.704 8.736 27.648 13.184 42.592 13.184 12.288 0 24.608-3.008 35.776-8.992l232.288-125.056 232.32 125.056c11.168 5.984 23.488 8.992 35.744 8.992 14.944 0 29.888-4.448 42.624-13.184 23.136-15.936 34.88-43.264 30.304-70.496l-45.312-270.432 195.328-194.944c19.296-19.296 25.92-47.52 17.184-73.12zM754.816 619.616c-16.384 16.32-23.808 39.328-20.064 61.888l45.312 270.432-232.32-124.992c-11.136-6.016-23.424-8.992-35.776-8.992-12.288 0-24.608 3.008-35.744 8.992l-232.32 124.992 45.312-270.432c3.776-22.56-3.648-45.568-20.032-61.888l-195.264-194.944 266.432-39.68c24.352-3.616 45.312-18.848 55.776-40.576l115.872-240.384 115.84 240.416c10.496 21.728 31.424 36.928 55.744 40.576l266.496 39.68-195.264 194.912z"></path>
        </symbol>
      </defs>
    </svg>
    <header>
      <!--      <div></div>-->
      <h1>Время любить...</h1>
    </header>
    <input type="checkbox" id="menu-toggle"/>
    <label for="menu-toggle">
      <i id="open" class="material-icons">menu</i>
      <i id="close" class="material-icons">arrow_back</i>
    </label>
    <app-navigation/>
      <nuxt/>
  </main>
</template>

<script>
  import AppNavigation from '@/components/main/Navigation'

  export default {
    components: {
      AppNavigation
    }
  }
</script>

<style scoped>
  main {
    background-color: #F5DFC7;
    padding-bottom: 150px;
  }

  /*@font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(../icons/MaterialIcons-Regular.eot); /* For IE6-8 *//*
    src: local('Material Icons'),
         local('MaterialIcons-Regular'),
         url(../icons/MaterialIcons-Regular.woff2) format('woff2'),
         url(../icons/MaterialIcons-Regular.woff) format('woff'),
         url(../icons/MaterialIcons-Regular.ttf) format('truetype');
  }*/
  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px; /* Preferred icon size */
    display: inline-block;
    width: 1em;
    height: 1em;
    line-height: 3;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr; /* Support for all WebKit browsers. */
    vertical-align: sub;
    -webkit-font-smoothing: antialiased; /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility; /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale; /* Support for IE. */
    font-feature-settings: 'liga';
  }

  * {
    list-style: none;
    text-decoration: none;
    outline: 0;
  }

  a {
    color: #E91E63;
    text-indent: -10px;
    font-size: 24px;
  }

  a:active, a:focus {
    color: #D81B60;
    font-weight: bold;
  }

  p {
    text-indent: 2em;
    line-height: 1.8;
  }

  h1 {
    margin-top: 75px;
    text-indent: 50px;
    line-height: 0;
    letter-spacing: 1px;
    color: #F5DFC7;
    font-size: 3.5vw;
    font-weight: 700;
  }

  header {
    position: absolute;
    top: 0;
    width: 100%;
    height: 256px;
    background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/17779/yosemite-3.jpg");
    background-size: cover;
    background-position: center center;
  }

  section {
    position: relative;
    top: 150px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 55%;
    height: auto;
    z-index: 0;
  }

  article {
    color: #757575;
    padding: 60px;
    text-align: justify;
  }

  label, label:before, label:after {
    position: absolute;
    top: 215px;
    left: 8%;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 0px 8px 0px,
    rgba(0, 0, 0, 0.239216) 0px 8px 8px 0px;
    transition: 0.6s cubic-bezier(0.19, 1, 0.22, 1);
    z-index: 2;
  }

  label #open {
    position: absolute;
    top: -31px;
    left: 16px;
    color: #F5DFC7;
    font-size: 48px !important;
    cursor: pointer;
  }

  label #close {
    opacity: 0;
    cursor: pointer;
  }

  #menu-toggle:not(:checked) + label:hover {
    box-shadow: rgba(0, 0, 0, 0.0784314) 0px 0px 12px 0px,
    rgba(0, 0, 0, 0.239216) 0px 12px 12px 0px;
  }

  #menu-toggle:checked + label {
    position: absolute;
    top: 20%;
    left: 22%;
    width: 300px;
    height: 310px;
    background-color: white;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.117647) 0px 0px 8px 0px,
    rgba(0, 0, 0, 0.239216) 0px 8px 8px 0px;
    transition: 0.6s cubic-bezier(0.19, 1, 0.22, 1);
    z-index: 1;
  }

  #menu-toggle:checked + label #open {
    opacity: 0;
    pointer-events: none;
  }

  #menu-toggle:checked + label #close {
    position: absolute;
    top: -40px;
    right: 10px;
    color: #E91E63;
    font-size: 48px !important;
    opacity: 1;
  }

  #menu-toggle:checked + label + #menu {
    position: absolute;
    margin: 0;
    top: 28%;
    left: 22%;
    width: 300px;
    height: 250px;
    border-radius: 3px;
    transition: 0.6s cubic-bezier(0.19, 1, 0.22, 1);
    z-index: 2;
  }
</style>
