<template>
  <section class="contact-page-section">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://demo.voidcoders.com/htmldemo/fitgear/main-files/assets/css/animate.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <div class="container">
      <!--      <div class="sec-title">-->
      <!--        <div class="title">Контакты</div>-->
      <!--        <h2>Время пообщаться!</h2>-->
      <!--      </div>-->
      <div class="inner-container">
        <div class="row clearfix">

          <!--Form Column-->
          <div class="form-column col-md-8 col-sm-12 col-xs-12">
            <div class="inner-column">

              <!--Contact Form-->
              <div class="contact-form">
                <form method="post" action="sendemail.php" id="contact-form">
                  <div class="row clearfix">
                    <div class="form-group col-md-6 col-sm-6 co-xs-12">
                      <input type="text" name="name" value="" placeholder="Ваше имя" required>
                    </div>
                    <div class="form-group col-md-6 col-sm-6 co-xs-12">
                      <input type="email" name="email" value="" placeholder="Email" required>
                    </div>
                    <div class="form-group col-md-6 col-sm-6 co-xs-12">
                      <input type="text" name="subject" value="" placeholder="Коротко о себе" required>
                    </div>
                    <div class="form-group col-md-6 col-sm-6 co-xs-12">
                      <input type="text" name="phone" value="" placeholder="Телефон" required>
                    </div>
                    <div class="form-group col-md-12 col-sm-12 co-xs-12">
                      <textarea name="message" placeholder="Сообщение"></textarea>
                    </div>
                    <div class="form-group col-md-12 col-sm-12 co-xs-12">
                      <button type="submit" class="theme-btn btn-style-one">Отправить заявку</button>
                    </div>
                  </div>
                </form>
              </div>
              <!--End Contact Form-->

            </div>
          </div>

          <!--Info Column-->
          <div class="info-column col-md-4 col-sm-12 col-xs-12">
            <div class="inner-column">
              <h2>Контакты</h2>
              <ul class="list-info">
                <li><i class="fas fa-globe"></i>Москва, ЗАО, м. Фили, ул.&nbsp;Новозаводская, 56</li>
                <li><i class="far fa-envelope"></i><a href="mailto:i.v.makarova@mail.ru">i.v.makarova@mail.ru</a></li>
                <li><i class="fas fa-phone"></i>+7 999 999 12 34</li>
              </ul>
              <ul class="social-icon-four">
                <li class="follow">Сообщество:</li>
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
                <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  li, ul {
    list-style: none;
    padding: 0;
    margin: 0
  }

  .sec-title {
    position: relative;
    padding-bottom: 40px
  }

  .sec-title .title {
    position: relative;
    color: #00b8ca;
    font-size: 18px;
    font-weight: 700;
    padding-right: 50px;
    margin-bottom: 15px;
    display: inline-block;
    text-transform: capitalize
  }

  .sec-title .title:before {
    position: absolute;
    content: '';
    right: 0;
    bottom: 7px;
    width: 40px;
    height: 1px;
    background-color: #bbb
  }

  .sec-title h2 {
    position: relative;
    color: #252525;
    font-size: 36px;
    font-weight: 700;
    line-height: 1.5em;
    display: block
  }

  .sec-title.light h2 {
    color: #fff
  }

  .contact-page-section {
    position: relative;
    padding-top: 110px;
    padding-bottom: 110px;
  }

  .contact-page-section .inner-container {
    position: relative;
    z-index: 1;
    background-color: #00b8ca;
    box-shadow: 0 0 15px 5px rgba(0, 0, 0, .1)
  }

  .contact-page-section .form-column {
    position: relative;
    padding: 0 0 0 15px
  }

  .contact-page-section .form-column .inner-column {
    position: relative;
    padding: 60px 45px 30px;
    background-color: #fff
  }

  .contact-page-section .info-column {
    position: relative
  }

  .contact-page-section .info-column .inner-column {
    position: relative;
    padding: 60px 35px
  }

  .contact-page-section .info-column h2 {
    position: relative;
    color: #fff;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.4em;
    margin-bottom: 45px
  }

  .contact-page-section .info-column .list-info {
    position: relative;
    margin-bottom: 60px
  }

  .contact-page-section .info-column .list-info li {
    position: relative;
    margin-bottom: 25px;
    font-size: 18px;
    color: #fff;
    line-height: 1.8em;
    padding-left: 45px
  }

  .contact-page-section .info-column .list-info li:last-child {
    margin-bottom: 0
  }

  .contact-page-section .info-column .list-info li i {
    position: absolute;
    left: 0;
    top: 8px;
    color: #fff;
    font-size: 30px
  }

  .contact-form {
    position: relative
  }

  .contact-form .form-group {
    position: relative;
    margin-bottom: 20px
  }

  .contact-form input[type=text], .contact-form input[type=email], .contact-form textarea {
    position: relative;
    display: block;
    width: 100%;
    height: 60px;
    color: #222;
    font-size: 14px;
    line-height: 38px;
    padding: 10px 30px;
    border: 1px solid #ddd;
    background-color: #fff;
    transition: all .3s ease;
    -ms-transition: all .3s ease;
    -webkit-transition: all .3s ease
  }

  .contact-form input[type=text]:focus, .contact-form input[type=email]:focus, .contact-form textarea:focus {
    border-color: #00b8ca
  }

  .contact-form textarea {
    height: 250px;
    resize: none
  }

  .contact-form .theme-btn {
    font-size: 16px;
    font-weight: 700;
    margin-top: 10px;
    text-transform: capitalize;
    padding: 16px 39px;
    border: 2px solid #00b8ca;
    font-family: Arimo, sans-serif;
    background: #00b8ca;
    display: inline-block;
    position: relative;
    line-height: 24px;
    cursor: pointer;
    color: #fff
  }

  .contact-form .theme-btn:hover {
    color: #00b8ca;
    border-color: #00b8ca;
    background: 0 0
  }

  .contact-form input.error, .contact-form select.error, .contact-form textarea.error {
    border-color: red !important
  }

  .contact-form label.error {
    display: block;
    line-height: 24px;
    padding: 5px 0 0;
    margin: 0;
    text-transform: uppercase;
    font-size: 12px;
    color: red;
    font-weight: 500
  }

  .social-icon-four {
    position: relative
  }

  .social-icon-four li {
    position: relative;
    margin-right: 18px;
    display: inline-block
  }

  .social-icon-four li.follow {
    color: #fff;
    font-weight: 600;
    font-size: 24px;
    display: block;
    margin-bottom: 20px
  }

  .social-icon-four li a {
    position: relative;
    font-size: 20px;
    color: #fff;
    -webkit-transition: all .3s ease;
    -ms-transition: all .3s ease;
    -o-transition: all .3s ease;
    -moz-transition: all .3s ease;
    transition: all .3s ease
  }

  .social-icon-four li a:hover {
    color: #222
  }
</style>
