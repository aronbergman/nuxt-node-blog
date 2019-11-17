<template>
  <div>
    <input type="checkbox" id="menu-toggle"/>
    <label for="menu-toggle">
      <i id="open" class="material-icons">menu</i>
      <i id="close" class="material-icons">arrow_back</i>
    </label>
    <ul id="menu">
      <li>
        <nuxt-link to="/" href="#"><i class="material-icons">format_color_fill</i>Публикации</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/" href="#"><i class="material-icons">format_color_fill</i>Тесты</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about" href="#"><i class="material-icons">mode_edit</i>Обо мне</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contacts" href="#"><i class="material-icons">insert_comment</i>Обратная связь</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
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

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    border-bottom: 1px solid #e6e6e6;
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

  #menu {
    position: absolute;
    padding: 0;
    top: 199px;
    left: 8%;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: none;
    transition: 0.6s cubic-bezier(0.19, 1, 0.22, 1);
    z-index: 1;
  }

  #menu-toggle:not(:checked) + label + #menu li {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;

  }

  #menu-toggle:checked + label + #menu li {
    opacity: 1;
    margin-left: 30px;
    padding-bottom: 10px;
    transition: .2s ease .1s;
  }

  [type="checkbox"]:not(:checked), [type="checkbox"]:checked {
    display: none;
  }
</style>

