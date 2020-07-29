$(function(){

    $('.banner-section__slider').slick({
        dots:true, 
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>'
    });

       /*  При клике на один из айтемов мы вырубаем обработчик стандартной посылки и убираем класс active, потому что он должен перейти к другому элементу. При нажатии на один из айтемов - все покрашилось, потому что активность убралась и вместо display:block вылез display:none  */

    $('.search__tabs-item').on('click', function(e){
        e.preventDefault();

        $('.search__tabs-item').removeClass('search__tabs-item--active');
        $('.search__content-item').removeClass('search__content-item--active');
        
        $(this).addClass('search__tabs-item--active');
        $($(this).attr('href')).addClass('search__content-item--active');
    });

});