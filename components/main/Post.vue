<template>
  <div class="blog-container">
    <div v-if="post.imageUrl" class="blog-row" @click="openPost">
      <div class="blog-header">
        <div class="blog-cover"
             :style="{backgroundImage: `url('${post.imageUrl}')`}">
          <div class="blog-author">
            <h3>Ирина Макарова</h3>
          </div>
        </div>
      </div>
      <div class="blog-body">
        <div class="blog-title">
          <h1>{{post.title}}</h1>
        </div>
        <div class="blog-summary">
          <p>{{post.description}}</p>
        </div>
        <!--        <div class="blog-tags">-->
        <!--          <ul>-->
        <!--            <li><a href="#">css</a></li>-->
        <!--            <li><a href="#">web design</a></li>-->
        <!--            <li><a href="#">codepen</a></li>-->
        <!--            <li><a href="https://twitter.com/russbeye">twitter</a></li>-->
        <!--          </ul>-->
        <!--        </div>-->
      </div>
      <div class="blog-footer">
        <ul>
          <li class="published-date">{{ post.date | moment('from', 'now', true) }} назад</li>
          <li class="comments">
            <svg class="icon-bubble">
              <use xlink:href="#icon-bubble"></use>
            </svg>
            <span class="numero">{{post.commentsCount === 0 ? '...' : post.commentsCount}}</span></li>
          <li class="shares">
            <svg class="icon-star">
              <use xlink:href="#icon-star"></use>
            </svg>
            <span class="numero">{{ post.views === 0 ? '...' : post.views }}</span></li>
        </ul>
      </div>
    </div>
    <div v-else class="blog-row" @click="openPost">
      <div class="blog-header">
        <div class="blog-author--no-cover">
          <h3>Ирина Макарова</h3>
        </div>
      </div>
      <div class="blog-body">
        <div class="blog-title">
          <h1><a href="#">{{post.title}}</a></h1>
        </div>
        <div class="blog-summary">
          <p>{{post.description}}</p>
        </div>
        <div class="blog-tags">
          <ul>
            <li><a href="#">design</a></li>
            <li><a href="#">web dev</a></li>
            <li><a href="#">css</a></li>
          </ul>
        </div>
      </div>
      <div class="blog-footer">
        <ul>
          <li class="published-date">{{ post.date | date }}</li>
          <li class="comments"><a href="#">
            <svg class="icon-bubble">
              <use xlink:href="#icon-bubble"></use>
            </svg>
            <span class="numero">{{post.commentsCount}}</span></a></li>
          <li class="shares"><a href="#">
            <svg class="icon-star">
              <use xlink:href="#icon-star"></use>
            </svg>
            <span class="numero">{{ post.views }}</span></a></li>
        </ul>
      </div>
    </div>
  </div>
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
      openPost () {
        const id = this.post._id
        this.$router.push(`/post/${id}`)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .blog-container {
    @include respond-to($mobile) {
      display: flex;
      padding: 0 20px;
    }
  }

  .blog-row {
    background: #fff;
    border-radius: 5px;
    box-shadow: hsla(0, 0, 0, .2) 0 4px 2px -2px;
    font-family: "adelle-sans", sans-serif;
    font-weight: 100;
    margin: 48px auto;
    width: 20rem;
    cursor: pointer;
    transform: translateY(0);
    transition: all .3s ease;

    @include respond-to($mobile) {
      margin: 0 auto 20px;
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: hsla(0, 0, 0, .2) 0 8px 20px -2px;

    }

    @media screen and (min-width: 480px) {
      width: 28rem;
    }
    @media screen and (min-width: 767px) {
      width: 40rem;
    }
    @media screen and (min-width: 959px) {
      width: 50rem;
    }
  }

  .blog-row a {
    color: #4d4dff;
    text-decoration: none;
    transition: .25s ease;

    &:hover {
      border-color: #ff4d4d;
      color: #ff4d4d;
    }
  }

  .blog-cover {
    background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/17779/yosemite-3.jpg");
    background-size: cover;
    border-radius: 5px 5px 0 0;
    height: 15rem;
    box-shadow: inset hsla(0, 0, 0, .2) 0 64px 64px 16px;

    @include respond-to($mobile) {
      height: 150px;
    }
  }

  .blog-author,
  .blog-author--no-cover {
    display: none;
    margin: 0 auto;
    padding-top: 1.125rem;
    width: 80%;
  }

  .blog-author h3::before,
  .blog-author--no-cover h3::before {
    background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/17779/russ.jpeg");
    background-size: cover;
    border-radius: 50%;
    content: " ";
    display: inline-block;
    height: 32px;
    margin-right: .5rem;
    position: relative;
    top: 8px;
    width: 32px;
  }

  .blog-author h3 {
    color: #fff;
    font-weight: 100;
  }

  .blog-author--no-cover h3 {
    color: lighten(#333, 40%);
    font-weight: 100;
  }

  .blog-body {
    margin: 0 auto;
    width: 80%;
  }

  .video-body {
    height: 100%;
    width: 100%;
  }

  .blog-title h1 {
    color: #333;
    font-weight: 100;
    margin: 20px 0;
  }

  .blog-summary p {
    color: lighten(#333, 10%);
    margin: 10px 0;

    @include respond-to($mobile) {
      display: none;
    }
  }

  .blog-tags ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    padding-left: 0;
  }

  .blog-tags li + li {
    margin-left: .5rem;
  }

  .blog-tags a {
    border: 1px solid lighten(#333, 40%);
    border-radius: 3px;
    color: lighten(#333, 40%);
    font-size: .75rem;
    height: 1.5rem;
    line-height: 1.5rem;
    letter-spacing: 1px;
    padding: 0 .5rem;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
    width: 5rem;
  }

  .blog-footer {
    border-top: 1px solid lighten(#333, 70%);
    margin: 0 auto;
    padding: 15px 0;
    width: 80%;
  }

  .blog-footer ul {
    list-style: none;
    display: flex;
    flex: row wrap;
    justify-content: flex-end;
    padding-left: 0;
  }

  .blog-footer li:first-child {
    margin-right: auto;
  }

  .blog-footer li + li {
    margin-left: .5rem;
  }

  .blog-footer li {
    color: lighten(#333, 40%);
    font-size: .75rem;
    height: 1.5rem;
    letter-spacing: 1px;
    line-height: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    position: relative;
    white-space: nowrap;

    & a {
      color: lighten(#333, 40%);
    }
  }

  .comments {
    margin-right: 1rem;

    @include respond-to($mobile) {
      display: none;
    }
  }

  .published-date {
    border: 1px solid lighten(#333, 40%);
    border-radius: 3px;
    padding: 0 .5rem;

    @include respond-to($mobile) {
      border: 1px solid #eee;
    }
  }

  .numero {
    position: relative;
    font-size: 18px;
    top: -6px;
  }

  .icon-star,
  .icon-bubble {
    fill: lighten(#333, 40%);
    height: 24px;
    margin-right: .5rem;
    transition: .25s ease;
    width: 24px;

    &:hover {
      fill: #ff4d4d;
    }
  }

</style>


