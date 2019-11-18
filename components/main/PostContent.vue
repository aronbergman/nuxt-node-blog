<template>
  <div class="wrapper">
    <header class="blogHeader">
      <div class="blogMetaData">
        {{post.commentsCount}}
        {{post.views}}
        <span>{{ new Date(post.date).toLocaleString() }}</span>
        <h1 clas="blogTItle">
          {{post.title}}
        </h1>
      </div>
    </header>
    <div class="container">
      <article>
        <vue-markdown>
          {{post.text}}
        </vue-markdown>
        <p>
          So you want to build a website? Or maybe you already have one. And instead of buying a hosting server right
          away, you want something free, easy, and convenient. Well, <a href="https://pages.github.com/">Github
          Pages</a> is for you!
        </p>
        <p>
          Let's start with the requirements. First, your website should be static, not dynamic - which means all your
          data is stored in your HTML, CSS, or javascript files.
        </p>
        <ul>
          <li><b>Static</b> - plain websites written in HTML, CSS, and Javascript.</li>
          <li><b>Dynamic</b> - websites that uses a database to fetch data.</li>
        </ul>

        <div class="divider"></div>

        <h2>Configuring your Github account and repository</h2>
        <p>
          Go to <a href="https://github.com/">Github.com</a> then register or log-in.
        </p>
        <p>Create a new repository</p>
        <p>On creating a repository:
        <ul>
          <li><b>Repository name</b> - should be <i>username</i>.github.io, where <i>username</i> is your Github
            username.
          </li>
          <li><b>Description</b> - a short description about your website.</li>
          <li><b>Public or Private</b> - choose public, private can only be chosen by paid users.</li>
          <li><b>Initialize this repository with a READ.ME</b> - check the text box since this is a requirement for a
            repositroy.
          </li>
          <li>Click <b>Create Repository</b>.</li>
        </ul>
        </p>
        <h5>Creating files for your project</h5>
        <p>
          Click create new file.
          <i>image here</i>
        </p>
        <p>
          Let's start with your index.html file.
        </p>
        <p>
          This file will serve as the Home Page or landing page of your website. Quick note: All website's home page are
          named index.html; and so, Github will look for this file and use this to display your homepage.
          <i>image here</i>
        </p>
        <p>If you already have your code, paste it in. Otherwise, let's start with:
        </p>
        <p>Once done, scroll down to the commit section area and you will see this: <i>image here.</i></p>
        <p>Add a commit title and a short description of the changes that you made. In this case, this is the first
          commit and in this commit, we created an index.html file.</p>
        <h5>Visiting your page</h5>
        <p>Congrats! You're mostly likely set now to view your website online!</p>
        <p>Go to <i>username</i>.github.io where <i>username</i> is your Github username. Mine for example, it's <a
          href="https://billcastillo.github.io">billcastillo.github.io</a> <i>image here.</i>
        </p>
        <h5>Common Errors</h5>
        <!--     <img src="https://picsum.photos/1400/800/?random" alt=""> -->
        <p>If everything was set correctly you should see your website, so make sure the file name is correct. Otherwise
          it might show you this error page. <i>image here.</i></p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
          nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
          dictum felis eu pede mollis pretium.
        </p>
        <h4>Just testing a new header</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
          nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
          dictum felis eu pede mollis pretium.
        </p>
        <h5>This should be small</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
          nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
          dictum felis eu pede mollis pretium.
        </p>
        <h6>I dont now what size this will be</h6>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
          nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
          dictum felis eu pede mollis pretium.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
          nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
          dictum felis eu pede mollis pretium.
        </p>
        <blockquote>
          Karma will come.. eventually.
        </blockquote>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
          nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
          dictum felis eu pede mollis pretium.
        </p>
        <br>
      </article>
    </div>
    <footer>
      <app-comment-form
        v-if="canAddComment"
        @created="createCommentHandler"
        :postId="post._id"
      />

      <div class="comments" v-if="post.comments.length">
        <app-comment
          v-for="comment in post.comments"
          :key="comment._id"
          :comment="comment"
        />
      </div>
      <div class="text-center" v-else>Комментариев нет</div>
    </footer>
  </div>
</template>

<script>
  import AppComment from '@/components/main/Comment'
  import AppCommentForm from '@/components/main/CommentForm'

  export default {
    props: {
      post: Object
    },
    data () {
      return {
        canAddComment: true
      }
    },
    methods: {
      createCommentHandler (comment) {
        this.post.comments.unshift(comment)
        this.canAddComment = false
      }
    },
    components: { AppComment, AppCommentForm }
  }
</script>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }

  body {
    position: relative;
    font-family: 'PT Serif', 'Georgia', 'Helvetica', 'Arial';
    color: #363636;
    -webkit-text-size-adjust: 100%;
    font-kerning: normal;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    oveflow-x: hidden;
  }

  .wrapper {
    width: 100%;
  }

  .container {
    padding: 0 15px;
  }

  header.blogHeader {
    text-align: center;
    margin-bottom: 60px;
  }

  header .blogMetaData {
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
  }

  article {
    padding: 0;
    max-width: 650px;
    margin: 0 auto;
  }

  figure img {
    width: 100%;
    filter: brightness(3) contrast(1);
  }

  b {
    font-weight: 700;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'QuickSand', 'Georgia', serif;
    line-height: 1;
    font-weight: 700;
    letter-spacing: -0.0250em;
    margin-top: 1em;
    margin-bottom: 0.50em;
  }

  h2, h3, h4, h5, h6 {
    color: #25232a;
  }

  h1 {
    position: relative;
    font-size: 3em;
    color: #504766;
    text-transform: uppercase;
    text-shadow: -.030em .030em #FFF6E6, -.08em .08em #E7DCD7;
    top: 0.750em;
    z-index: 50;
  }

  h2 {
    font-size: 2.350em;
  }

  h3 {
    font-size: 2.074em;
  }

  h4 {
    font-size: 1.875em;
    font-weight: 400;
  }

  h5 {
    font-size: 1.528em;
  }

  h6 {
    font-size: 1.250em;
  }

  p + h2,
  p + h3,
  p + h4,
  p + h5 {
    margin-top: 2.50em;
  }

  p, ul, ol, a, span {
    font-size: 1.12em;
    letter-spacing: -0.0040em;
    line-height: 1.4;
    margin-bottom: 1em;
    margin-top: 0.250em;
    color: #363636;
  }

  a {
    color: #0095ff;
  }

  i {
    font-style: italic;
  }

  p > a {
    font-size: 1em;
  }

  ol, ul {
    padding-left: 1em;
    margin-top: -0.8125em;
    margin-bottom: 1em;
  }

  ol {
    list-style-type: decimal;
  }

  ul {
    list-style-type: disc;
  }

  p + ol,
  p + ul {
    margin-top: 1em;
  }

  li {
    margin-bottom: 0.50em;
  }

  pre {
    max-width: 768px;
    overflow: auto;
    margin-bottom: 3em;
  }

  pre > code {
    font-family: Consolas, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
    white-space: pre;
    line-height: 1.5;
    font-size: 0.750em;
    border-radius: 2px;
  }

  @media screen and (min-width: 1440px) {
    .blogImg {
      width: 100%;
      max-width: 1440px;
      margin: 0 auto;
    }
  }

  /*
   * COMPONENTS */
  .divider {
    position: relative;
    width: 100px;
    height: 4px;
    background: #ccc;
    margin: 60px auto 80px auto;
    border-radius: 50%;
  }

  blockquote {
    position: relative;
    font-size: 2em;
    font-style: italic;
    font-weight: 400;
    letter-spacing: -0.0150em;
    line-height: 1;
    text-align: center;
    color: #767676;
    max-width: 600px;
    padding: 1em 0.50em;
    margin: 1.250em auto;
  }

  blockquote::before {
    position: absolute;
    content: '';
    width: 50%;
    height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: url(http://www.herringtononthebay.com/wp-content/uploads/2016/07/blockquote-1.png) no-repeat;
    background-size: auto 100px;
    background-position: center center;
    opacity: 0.25;
    z-index: -1;
  }

  img {
    width: 100%;
    margin-bottom: 1.625em;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 3.583em;
    }

    h1, h2, h3, h4, h5, h6 {
      letter-spacing: -0.0050em;
    }

    p, ul, ol, a, span {
      font-size: 1.25em;
    }

    ol, ul {
      padding-left: 2em;
    }
  }

  /*
  Dracula Theme v1.2.0
  https://github.com/zenorocha/dracula-theme
  Copyright 2015, All rights reserved
  Code licensed under the MIT license
  http://zenorocha.mit-license.org
  @author Éverton Ribeiro <nuxlli@gmail.com>
  @author Zeno Rocha <hi@zenorocha.com>
  */
  /**
   * Syntax highlighting styles
   */
  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #282a36;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-literal,
  .hljs-section,
  .hljs-link {
    color: #8be9fd;
  }

  .hljs-function .hljs-keyword {
    color: #ff79c6;
  }

  .hljs,
  .hljs-subst {
    color: #f8f8f2;
  }

  .hljs-string,
  .hljs-title,
  .hljs-name,
  .hljs-type,
  .hljs-attribute,
  .hljs-symbol,
  .hljs-bullet,
  .hljs-addition,
  .hljs-variable,
  .hljs-template-tag,
  .hljs-template-variable {
    color: #f1fa8c;
  }

  .hljs-comment,
  .hljs-quote,
  .hljs-deletion,
  .hljs-meta {
    color: #6272a4;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-literal,
  .hljs-title,
  .hljs-section,
  .hljs-doctag,
  .hljs-type,
  .hljs-name,
  .hljs-strong {
    font-weight: bold;
  }

  .hljs-emphasis {
    font-style: italic;
  }
</style>
