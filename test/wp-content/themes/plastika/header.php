<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Название проекта
    <title>Plastica</title>

    Подключаем стили
    <link rel="stylesheet" href="css/style.css">-->

    <!--Подключаем иконки-->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-
    fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG95r" crossorigin="anonymous">

    <!--Подключаем шрифты-->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;600&display=swap" rel="stylesheet">

    <?php wp_head() ?>
</head>

<body>

    <header class="header">

        <div class="header-left">

            <div class="header-left-intro">

                <div class="adaptive__nav">

                    <button class="nav__cross">
                        <img src="<?php echo get_template_directory_uri() ?>. /assets/img/cross.svg" class="cross">
                    </button>

                    <nav id="nav">
                        <li>
                            <a href="#" class="nav__link">главная </a>
                        </li>
                        <li>
                            <a href="#service" class="nav__link">услуги</a>
                        </li>
                        <li>
                            <a href="doctor.html" class="nav__link">о докторе</a>
                        </li>
                        <li>
                            <a href="after.html" class="nav__link">до/после</a>
                        </li>
                        <li>
                            <a href="cost.html" class="nav__link">цены </a>
                        </li>
                        <li>
                            <a href="blog.html" class="nav__link">блог</a>
                        </li>
                        <li>
                            <a href="contacts.html" class="nav__link">контакты</a>
                        </li>
                    </nav>
                    <!-- /#nav -->

                    <button class="header__call">
                        <img src="<?php echo get_template_directory_uri() ?>. /assets/img/call.svg" class="header__icon">
                    </button>
                    <!-- /.header__call -->
                </div>
                <!-- /.header-right -->

                <div class="mobile__nav">

                    <button class="mobile__nav__cross">
                        <img src="<?php echo get_template_directory_uri() ?>. /assets/img/cross.svg" class="cross">
                    </button>

                    <nav id="nav">
                        <li>
                            <a href="#" class="nav__link">главная </a>
                        </li>
                        <li>
                            <a href="#service" class="nav__link">услуги</a>
                        </li>
                        <li>
                            <a href="doctor.html" class="nav__link">о докторе</a>
                        </li>
                        <li>
                            <a href="after.html" class="nav__link">до/после</a>
                        </li>
                        <li>
                            <a href="cost.html" class="nav__link">цены </a>
                        </li>
                        <li>
                            <a href="blog.html" class="nav__link">блог</a>
                        </li>
                        <li>
                            <a href="contacts.html" class="nav__link">контакты</a>
                        </li>
                    </nav>
                    <!-- /#nav -->

                    <button class="header__call">
                        <img src="<?php echo get_template_directory_uri() ?>. /assets/img/call.svg" class="header__icon">
                    </button>
                    <!-- /.header__call -->
                </div>
                <!-- /.header-right -->

                <img src="<?php echo get_template_directory_uri() ?>. /assets/img/intro.webp" class="header__img">

                <div class="header__adaptive">

                    <img src="<?php echo get_template_directory_uri() ?>. /assets/img/logo-green.svg">

                    <div class="burger" id="burger">
                        <div class="burger__line"></div>
                    </div>
                    <!-- /.burger -->

                </div>
                <!-- /.header__adaptive -->

                <div class="mobile__adaptive">

                    <img src="<?php echo get_template_directory_uri() ?>. /assets/img/logo-green.svg">

                    <div class="mobile__burger" id="mobile__burger">
                        <div class="mobile__burger__line"></div>
                    </div>
                    <!-- /.burger -->

                </div>
                <!-- /.header__adaptive -->


                <div class="header__block">

                    <img src="<?php echo get_template_directory_uri() ?>. /assets/img/logo.svg" class="header__logo">

                    <div class="header__podblock">

                        <div class="header__text">
                            Все виды пластики с применением <span>методик международного уровня и заботой</span> о вашем
                            здоровье
                        </div>

                        <a href="#contacts" class="header__button" id="consultation">
                            Бесплатная консультация
                        </a>

                    </div>


                </div>
                <!-- /.header__block -->
            </div>
            <!-- /.header-left-intro -->
        </div>
        <!-- /.header-left -->

        <div class="header-right">

            <nav id="nav">
                <li>
                    <a href="#" class="nav__link">главная </a>
                </li>
                <li>
                    <a href="#service" class="nav__link">услуги</a>
                </li>
                <li>
                    <a href="doctor.html" class="nav__link">о докторе</a>
                </li>
                <li>
                    <a href="after.html" class="nav__link">до/после</a>
                </li>
                <li>
                    <a href="cost.html" class="nav__link">цены </a>
                </li>
                <li>
                    <a href="blog.html" class="nav__link">блог</a>
                </li>
                <li>
                    <a href="contacts.html" class="nav__link">контакты</a>
                </li>
            </nav>
            <!-- /#nav -->

            <button class="header__call">
                <img src="<?php echo get_template_directory_uri() ?>. /assets/img/call.svg" class="header__icon">
            </button>
            <!-- /.header__call -->
        </div>
        <!-- /.header-right -->

    </header>
    <!-- /.header -->