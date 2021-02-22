

<section class="contacts" id="contacts">

<div class="contacts__bg">

    <img src="<?php echo get_template_directory_uri() ?>./assets/img/contacts.webp" alt="" class="contacts__img">

    <div class="container">

        <div class="contacts__inner">

            <div class="contacts__row">

                <div class="contacts__column">

                    <div class="contatcs__title">КОНТАКТЫ</div>

                    <div class="contacts__description">
                        Для того, чтобы записаться на консультацию, оставьте ваши контактные данные в контактной
                        форме ниже или перезвоните по указанному на сайте номеру:
                    </div>

                    <div class="contacts__block">

                        <div class="contacts__podblock">

                            <div class="podblock__row">

                                <div class="podblock__text">пластический хирург</div>

                                <div class="podblock__text">email</div>

                            </div>

                            <div class="podblock__row">

                                <div class="podblock__text bold">Андрей Пасечник</div>

                                <div class="podblock__text bold">dr.andrei.pasechnik@gmail.com</div>

                            </div>

                        </div>

                        <div class="adaptive__block">

                            <div class="adaptive__podblock">

                                <div class="podblock__text">пластический хирург</div>

                                <div class="podblock__text bold">Андрей Пасечник</div>

                            </div>

                            <div class="adaptive__podblock">

                                <div class="podblock__text">email</div>

                                <div class="podblock__text bold">dr.andrei.pasechnik@gmail.com</div>


                            </div>

                        </div>
                        <!-- /.adaptive__podblock -->

                        <div class="contacts__media">

                            <div class="podblock__column">

                                <div class="podblock__text bold">телефон</div>

                                <div class="podblock__text">+38 (098) 011 48 83</div>

                            </div>

                            <div class="podblock__media">

                                <a href="#" class="facebook">
                                    <i class="fab fa-facebook-f"></i>
                                </a>

                                <a href="#" class="instagram">
                                    <i class="fab fa-instagram"></i>
                                </a>

                            </div>

                        </div>

                    </div>
                </div>

                <div class="contacts__column">
                    <img src="<?php echo get_template_directory_uri() ?>./assets/img/pasechnick-contact.webp" alt="" class="contacts__image">
                </div>

            </div>
            <!-- /.contacts__row -->

            <div class="consultation">

                <div class="consultation__inner">

                    <div class="consultation__row">

                        <input type="text" class="consultation__input" placeholder="Имя">
                        <input type="text" class="consultation__input" placeholder="Телефон">

                        <button class="consultation__button">записаться на консультацию</button>
                    </div>

                </div>
            </div>
            <!-- /.consultation -->

            <footer class="footer">

                <div class="footer__inner">

                    <div class="container">

                        <div class="footer__row">

                            <div class="footer__column">

                                <img src="<?php echo get_template_directory_uri() ?>./assets/img/footer__logo.svg" class="footer__logo">

                                <div class="footer__copyright">© 2021 все права защищены</div>

                            </div>

                            <div class="footer__column">

                                <div class="nav__block">
                                    <nav id="footerNav">

                                        <li>
                                            <a href="#" class="footer__link">главная</a>
                                        </li>

                                        <li>
                                            <a href="#service" class="footer__link">услуги</a>
                                        </li>

                                        <li>
                                            <a href="doctor.html" class="footer__link">о докторе</a>
                                        </li>

                                        <li>
                                            <a href="after.html" class="footer__link">до/после</a>
                                        </li>

                                        <li>
                                            <a href="cost.html" class="footer__link">цены</a>
                                        </li>

                                        <li>
                                            <a href="blog.html" class="footer__link">блог</a>
                                        </li>

                                        <li>
                                            <a href="contacts.html" class="footer__link">контакты</a>
                                        </li>

                                    </nav>
                                </div>

                                <div class="info__row">

                                    <div class="footer__phone">+38 (098) 011 48 83</div>

                                    <div class="footer__mail">dr.andrei.pasechnik@gmail.com</div>

                                    <div class="podblock__media">

                                        <a href="#" class="facebook">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>

                                        <a href="#" class="instagram">
                                            <i class="fab fa-instagram"></i>
                                        </a>

                                    </div>

                                </div>

                            </div>




                        </div>



                    </div>
                    <!-- /.container -->
                </div>
                <!-- /.footer__inner -->

            </footer>
            <!-- /.footer -->

        </div>
        <!-- /.contacts__inner -->

    </div>
    <!-- /.container -->

</div>

</section>
<!-- /.contacts -->

<!------БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ------->

<div class="popupForm">

<div class="popupForm__body">

    <div class="popupForm__block">

        <div class="popupForm__text">
            Все виды пластики с применением <span>методик международного уровня и заботой</span> о вашем
            здоровье
        </div>

        <a href="#contacts">
            <button class="popupForm__button">Бесплатная консультация</button>
        </a>

    </div>
    <!-- /.popupForm__block -->

</div>
<!-- /.popupForm__body -->

</div>
<!-- /.popup__form -->

<!--BUTTON-->

<div class="consultationButton">Бесплатная консультация</div>

<!--ОКНО КОНСУЛЬТАЦИИ-->

<div class="formConsultation">

<div class="formConsultation__inner">

    <div class="form__close">
        <img src="<?php echo get_template_directory_uri() ?>./assets/img/close.svg" class="form__cross">
    </div>


    <div class="form__text">
        Пожалуйста, введите контактную информацию и мы свяжемся с вами как можно быстрее, чтобы назначить
        бесплатную консультацию!
    </div>

    <div class="form__inputs">
        <input type="text" class="formConsultation__input" placeholder="Имя">

        <input type="text" class="formConsultation__input" placeholder="Телефон">
    </div>


    <div class="formConsultation__button">записаться на консультацию</div>

</div>
<!-- /.formConsultation__inner -->

</div>
<!-- /.formConsultation -->


<!--Подключаем скрипты-->
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="js/slick.min.js"></script>
<script src="js/main.js"></script>

<?php wp_footer() ?>
</body>



</html>