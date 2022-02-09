$(function() {

    $('.header__btn').on('click', function() {
        $('.rightside__menu').removeClass('rightside--menu-close');
    });
    $('.rightside__menu-close').on('click', function() {
        $('.rightside__menu').addClass('rightside--menu-close');
    });
    $('.header__btn-menu').on('click', function() {
        $('.menu').toggleClass('menu--open');
    });

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoPlay: true,
    });

    $('.contact__slider-inner').slick({
        slidesToShow: 10,
        slidesToScroll: 10  ,
        dots: true,
        arrows: false
    });

    $('.blog__item-box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-left"><img src="images/blog/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrow-right"><img src="images/blog/arrow-right.svg" alt=""></button>',

    });


    let mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
    });

})
