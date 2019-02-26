
/**
 * Initiate priorityNav
 */
var wrapper = document.querySelector(".nav-wrapper");
var nav = priorityNav.init({
    mainNavWrapper: ".header-nav",
    mainNav: ".header-menu",
    navDropdownLabel: 'Ещё',
    navDropdownBreakpointLabel: "Меню",
    navDropdownClassName: "nav__dropdown",
    navDropdownToggleClassName: "nav__dropdown-toggle",
});

/* Клик по телефону в шапке - появление блока с контактами - Desktop */
$(function () {
    var header_phone_click = $('.header-phone-click');
    header_phone_click.click(function (e) {
        $(this).siblings('.header-contact').toggleClass('active');
    });
});
$(document).on('click', function(e) {
    if (!$(e.target).closest(".header-phone").length) {
        $('.header-contact').removeClass('active');
    }
    e.stopPropagation();
});

/* Клик по телефону в шапке - появление блока с контактами - Mobile */
$(function () {
    var links = $('.header-button-mob');
    links.click(function (e) {
        links.not(this).siblings('div').slideUp(300);
        $(this).siblings('div').slideToggle(300);
    });
});

/* временный скрипт для выпадения поиска */
$('.clickhint').focus(function() {
    var box = '#'+$(this).attr('id')+'_hint';
    $(box).show(0);
});
$('.clickhint').blur(function() {
    var box = '#'+$(this).attr('id')+'_hint';
    $(box).hide(0);
})
/* // временный скрипт для выпадения поиска */

/* Звездочки рейтинга */
$('#star1').starrr({
    change: function(e, value){
        if (value) {
            $('.your-choice-was').show();
            $('.choice').text(value);
        } else {
            $('.your-choice-was').hide();
        }
    }
});

/* Выравнивание блоков по высоте */
jQuery.fn.liBlockSize = function(options){
    //Настройки по умолчанию
    var o = jQuery.extend({
        child: 'div'
    },options);
    return this.each(function(){
        type = o.type
        side = o.side
        var    el = jQuery(this).find(o.child)
        var    el_length = el.length
        var resizing = function(){
            //По максимальной высоте
            var h_block = 0;
            for(i = 0; i < el_length; i++){
                var el_i = el.slice(i)
                var h1 = el_i.height()

                if(h_block < h1) {
                    var h_block = h1;
                }
            }
            el.height(h_block)

        }
        resizing();
        $(window).on('resize',function(){
            el.height('auto');
            resizing();
        })
    });
};
$(document).ready(function () {
    $("iframe[src*='youtube.com']").wrap("<div class='videoadapt'></div>");
    $(".videoadapt").wrap("<div class='videoadapt-wrap'></div>");
    $('.mobile-menu__first-li.parent').click(function(){
        $(this).toggleClass('active');
    });
    $('.search-click').click(function(){
        $('.search-block').toggle(200).clearQueue();
        $(this).toggleClass('active');
    });
    $(function(){
        $(document).click(function(event) {
            if ($(event.target).closest(".search-wrap").length) return;
            $(".search-block").hide(200);
            $(".search-click").removeClass("active");
            event.stopPropagation();
        });
    });
    $('.reset-search').click(function () {
        $('.search-block').toggle(200).clearQueue();
        $('.search-click').removeClass('active');
    })
    $('.reset-search-mob').click(function () {
        $('.search-block-mob').toggle(200).clearQueue();
    })
    $(window).on('load', function() {
        $('.slider-and-product_day').liBlockSize({
            child: '.equally'
        });
        $('.bestsellers-owl').liBlockSize({
            child: '.product-list__name'
        });
        $('.bestsellers-owl').liBlockSize({
            child: '.product-list__item'
        });
        $('.our-clients-owl').liBlockSize({
            child: '.our-clients__item'
        });
        $('.partners-owl').liBlockSize({
            child: '.our-clients__item'
        });
    });

    /* Слайдер на главной - большой*/
    $('.slider').owlCarousel({
        loop: true,
        dots: true,
        nav: false,
        items: 1,
        autoplay: true,
        smartSpeed:1000,
        autoplayTimeout:3500,
    });

    /* Слайдер на главной - Хиты продаж - Desktop*/

    $('.bestsellers-owl').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace) return
        var owlHits = e.relatedTarget
        $('#counter-hits').text(owlHits.relative(owlHits.current()) + 1 + '/' + owlHits.items().length)
    }).owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        navText : ['<i class="icon-owl-l"></i>','<i class="icon-owl-r"></i>'],
        items: 4,
        autoplay: false,
        smartSpeed:1000,
        autoplayTimeout:3500,
        responsive:{
            0:{
                items:1,
                margin: 20
            },
            480:{
                items:2,
                margin: 20
            },
            768:{
                items:3,
                margin: 20
            },
            1024:{
                items:4,
                margin: 20
            },
            1141:{
                items:4,
                margin: 30
            }
        }
    });

    /* Слайдер на главной - Хиты продаж - Mobile*/

    $('.bestsellers-owl-mobile').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace) return
        var owlHits = e.relatedTarget
        $('#counter-hits-mobile').text(owlHits.relative(owlHits.current()) + 1 + '/' + owlHits.items().length)
    }).owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        navText : ['<i class="icon-owl-l"></i>','<i class="icon-owl-r"></i>'],
        items: 1,
        autoplay: false,
        smartSpeed:1000,
        autoplayTimeout:3500,
    });

    /* Слайдер на главной - Наши клиенты*/
    $('.our-clients-owl').owlCarousel({
        loop: true,
        dots: false,
        margin: 70,
        nav: true,
        items: 7,
        autoplay: true,
        smartSpeed:1000,
        autoplayTimeout:3500,
        responsive:{
            0:{
                items:3,
                margin: 10
            },
            540:{
                items:4,
                margin: 20
            },
            768:{
                items:5,
                margin: 40
            },
            1024:{
                items:7,
                margin: 60
            }
        }
    });

    /* Слайдер в категории - Логотипы партнеров, возможно, бренды*/
    $('.partners-owl').owlCarousel({
        loop: true,
        dots: false,
        margin: 70,
        nav: true,
        items: 4,
        autoplay: true,
        smartSpeed:1000,
        autoplayTimeout:3500,
        responsive:{
            0:{
                items:3,
                margin: 10
            },
            540:{
                items:3,
                margin: 20
            },
            768:{
                items:4,
                margin: 40
            },
            1024:{
                items:4,
                margin: 60
            }
        }
    });

    /* Слайдер в товаре - Выгодное предложение */

    $('.profit-owl').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace) return
        var owlHits = e.relatedTarget
        $('#counter-profit').text(owlHits.relative(owlHits.current()) + 1 + '/' + owlHits.items().length)
    }).owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        navText : ['<i class="icon-owl-l"></i>','<i class="icon-owl-r"></i>'],
        items: 1,
        autoplay: false,
        smartSpeed:1000,
        autoplayTimeout:3500,
    });

    /* Показать/скрыть варианты*/
    $('.show-more').click(function() {
        if ($(this).text() === 'Скрыть список')
            $(this).text('Всего 16 вариантов')
        else
            $(this).text('Скрыть список')
        $(this).parents('.show-more-chekbox').toggleClass("open");
    });

    /* Показать больше фильтров*/
    $('.show-more-filters').click(function() {
        if ($(this).text() === 'Скрыть часть параметров')
            $(this).text('Показать больше параметров')
        else
            $(this).text('Скрыть часть параметров')
        $(this).parents('.filter').toggleClass("open-all-filter");
    });

    /* Очистка фильтра */
    $('.filter-reset').click(function() {
        $(this).parents('.filter').children('input:checked').prop('checked', false);
    });

    /* Отображение каталога, выбор вида */
    $(".select-row").click(function () {
        $('.product-list').addClass('setting-row').removeClass('setting-table');
        $('.view span').removeClass('active');
        $(this).addClass('active');
        localStorage.clear();
    });
    $(".select-table").click(function () {
        $('.product-list').removeClass('setting-row').addClass('setting-table');
        $('.view span').removeClass('active');
        $(this).addClass('active');
        localStorage.setItem("list","2");
    });
    var list = localStorage.getItem("list");
    if (list == 2) {
        $('.product-list').addClass('setting-table').removeClass('setting-row');
        $('.view span.select-row').removeClass('active');
        $(".view span.select-table").addClass('active');
    }
    else {
        $('.product-list').addClass('setting-row').removeClass('setting-table');
        $('.view span').removeClass('active');
        $(".view span.select-row").addClass('active');
    }

    /* Галерея в главном фото товара */
    var galleryThumbs = new Swiper('.uk-notouch .product-top__left .gallery-thumbs', {
        slidesPerView: 5,
        freeMode: true,
        loop: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true
    });
    var galleryTop = new Swiper('.uk-notouch .product-top__left .gallery-top', {
        direction: 'vertical',
        loop: true,
        thumbs: {
            swiper: galleryThumbs
        },
        navigation: {
            nextEl: '.swiper-button-next-1',
            prevEl: '.swiper-button-prev-1',
        }
    });

    /* Галерея в главном фото товара - на сенсорных устройствах */
    var galleryMobile = new Swiper('.uk-touch .product-top__left .gallery-top', {
        pagination: {
            el: '.swiper-pagination-1',
            clickable: true,
            loop: true
        },
    });

    /* Всплывающее окно в галерее товара */
    $('[data-fancybox="product-images"]').fancybox({
        smallBtn: "true",
        toolbar: false,
        loop: true
    });

    /* Подарок у товара */
    $('[data-src="#popap-present"]').fancybox({
        baseClass: 'popap-present-wrap'
    });

    /* Галерея во всплывающем окне Подарок в товаре */
    var galleryThumbs2 = new Swiper('.uk-notouch .popap-present__left .gallery-thumbs', {
        slidesPerView: 5,
        freeMode: true,
        loop: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true
    });
    var galleryTop2 = new Swiper('.uk-notouch .popap-present__left .gallery-top', {
        direction: 'vertical',
        loop: true,
        thumbs: {
            swiper: galleryThumbs2
        },
        navigation: {
            nextEl: '.swiper-button-next-2',
            prevEl: '.swiper-button-prev-2',
        }
    });

    /* Галерея в главном фото товара - на сенсорных устройствах */
    var galleryMobile2 = new Swiper('.uk-touch .popap-present__left .gallery-top', {
        pagination: {
            el: '.swiper-pagination-2',
            clickable: true,
            loop: true
        },
    });

    /* Вкладки в товаре */
    var adaptButton = $('.adapt-button');
    adaptButton.click(function (e) {
        $(this).next('.prod-new-tab').toggleClass('active');
        $(this).toggleClass('active');
    });

    /* Вкладки в Характеристиках товара */
    var specificationsAccordeonButton = $('.specifications-accordeon__button');
    specificationsAccordeonButton.click(function (e) {
        $(this).next('.specifications-accordeon__content').toggleClass('active');
        $(this).toggleClass('active');
    });

    /* Счетчик символов в форме добавления достоинств в товаре */
    var maxCount1 = 120;
    $(".count-symbol-1").html(maxCount1);
    $(".add-review__text-1").keyup(function() {
        var revText1 = this.value.length;

        if (this.value.length > maxCount1)
        {
            this.value = this.value.substr(0, maxCount1);
        }
        var cnt = (maxCount1 - revText1);
        if(cnt <= 0){$(".count-symbol-1").html('0');}
        else {$(".count-symbol-1").html(cnt);}

    });

    /* Счетчик символов в форме добавления недостатков в товаре */
    var maxCount2 = 120;
    $(".count-symbol-2").html(maxCount2);
    $(".add-review__text-2").keyup(function() {
        var revText2 = this.value.length;

        if (this.value.length > maxCount2)
        {
            this.value = this.value.substr(0, maxCount2);
        }
        var cnt = (maxCount2 - revText2);
        if(cnt <= 0){$(".count-symbol-2").html('0');}
        else {$(".count-symbol-2").html(cnt);}
    });

    /* Полная очистка содержимого страницы Сравнение */
    $('.compare__clear').on('click', function (){
        $(this).parents('.compare').remove();
    })

    /* Все параметры / только отличия на странице Сравнения */
    $('.parameter-option-all').on('click', function (){
        $('.differences').removeClass('hide');
        $(this).addClass('active');
        $('.parameter-option-differences').removeClass('active');
    });
    $('.parameter-option-differences').on('click', function (){
        $('.differences').addClass('hide');
        $(this).addClass('active');
        $('.parameter-option-all').removeClass('active');
    });

    $('.compare__owl_name').owlCarousel({
        dots: true,
        nav: true,
        items: 1
    }).on('dragged.owl.carousel', slider_sync_jeneral);
    function slider_sync_jeneral (event) {
                   $('.compare__owl').trigger('to.owl.carousel', [event.page.index, 100])
                };
    $('.custom-next-btn').click(function() {
        $('.compare__owl_name').trigger('next.owl.carousel');
        $('.compare__owl').trigger('next.owl.carousel');
    })
    $('.custom-prev-btn').click(function() {
        $('.compare__owl_name').trigger('prev.owl.carousel');
        $('.compare__owl').trigger('prev.owl.carousel');
    })


    /* Удаление элемента из корзины */
    $('.cart-item__remove').on('click', function (){
        $(this).parents('.cart-item').remove();
    });

    /* Очистить корзину полностью */
    $('.cart-remove').on('click', function (){
        $(this).parents('.shopping-basket').remove();
    });

    /* Убираем, но не удаляем из корзины одну позицию. Делаем неактивной*/
    $('.filter-checkbox input:checkbox').change(function(){
        if($(this).is(":checked")) {
            $(this).parents('.cart-item').removeClass("cart-item__no-active");
        } else {
            $(this).parents('.cart-item').addClass("cart-item__no-active");
        }
    });

    /* изменение кол-ва товара в корзине */
    $(document).on('click', '.count-wrap .changeCount', function(e) {
        var $input = $(this).closest("div").find('input');
        var count = parseInt($input.val());

        if ($(this).hasClass("plus")) {
            count = count + 1;
        }

        if ($(this).hasClass("minus")) {
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
        }

        $input.val(count);
        $input.change();

        return false;
    });

    $('.checkout-order').on('click', function (){
        $('.order-block').addClass('active');
        $(this).addClass('noactive');
    });

});

/* Запуск каресели на странице Сравнения для Mobile */
$(window).bind("load", function() {
    // copy default code before carousel loaded
    var compare__owl = $('.compare__right').html();

    window_resize();

    $(window).resize(function() {
        window_resize();
    });

    function window_resize() {
        // mobile
        if ( $(window).width() < 768 ) {
            if ( !$('.compare__right').find('.owl-carousel').hasClass('owl-loaded') ) {
                $('.compare__right').find('.owl-carousel').owlCarousel({
                    items: 1,
                    loop: false,
                    nav: true,
                    dots: true
                }).on('dragged.owl.carousel', slider_sync);
            }
            function slider_sync (event) {
                   $('.compare__owl_name').trigger('to.owl.carousel', [event.page.index, 100])
                }
            $(document).on('click', '.remove-compare', function(e) {
                var slide_index = $(this).closest('.owl-item').index();
                $('.compare__right .owl-carousel').trigger('remove.owl.carousel', slide_index).trigger('refresh.owl.carousel');
                $('.compare__owl_name').trigger('remove.owl.carousel', slide_index).trigger('refresh.owl.carousel');
                var slide_length = $('.compare__owl .owl-stage').children().length;
                if (slide_length == 0) $('.compare__bottom').addClass('empty-compare');
            });
        }
        //desktop
        else {
            if ( $('.compare__right').find('.owl-carousel').hasClass('owl-loaded') ) {
                $('.compare__right').find('.owl-carousel').remove();
                $('.compare__right').append( compare__owl );
            }

            if ( !$('.compare__right').find('.owl-carousel').length ) {
                $('.compare__right').append( compare__owl );
            }

            /* Перезапуск выравнивания блоков в сравнении при ресайзе */
            $('.compare').liBlockSize({
                child: '.compare__col'
            });

            /* Удаление элемента из сравнения на странице сравнения для Desktop */
            $('.remove-compare').on('click', function (){
                $(this).parents('.compare-item__wrap').remove();
            });
        }
    }
        /* Фильтры категории для попапа и появление */
        var count_checked = function() {
        var checked = $(this).prop('checked');
        var input = '<label>'+ $(this).parent().html() + '</label>';
        var value = $(this).prop('value');
        var context = $(this);
        var filter_checked = $('.show-more-chekbox label').filter(function () {
                var query = $(this).find('input').val();
                return value == query;
        })
        var filter_show = $('.filter-checkbox__list label').filter(function () {
                var query = $(this).find('input').val();
                return value == query;
        })
        if (checked && filter_checked.length > 0) filter_checked.find('input').prop('checked',true);
        else if (!checked && filter_checked.length > 0) filter_checked.find('input').prop('checked',false);
        if (checked && filter_show.length == 0) {
            context.closest('.dropdown-filter').prev().append(input);
            $(this).closest('.dropdown-filter').prev().children('label:last').find('input[type="checkbox"]').prop('checked', true);
        }
        else if (!checked && filter_show.length > 0) filter_checked.find('input').prop('checked',false);
        else if (checked && filter_show.length > 0) filter_checked.find('input').prop('checked',true);
        };
        count_checked();
        $('.show-more-chekbox input[type="checkbox"]').on('change', count_checked );
});

