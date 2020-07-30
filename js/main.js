$(function(){

    $('.banner-section__slider').slick({
        dots:true, 
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>'
    });

       /*  При клике на один из айтемов мы вырубаем обработчик стандартной посылки и убираем класс active, потому что он должен перейти к другому элементу. При нажатии на один из айтемов - все покрашилось, потому что активность убралась и вместо display:block вылез display:none  */

        /*Здесь мы меняем search__tabs-item на tab */
    $('.tab').on('click', function(e){
        e.preventDefault();
        
        /*Здесь мы меняем search__tabs-item на tab */
        $('.tab').removeClass('tab--active');
        
        /* .search__content-item меняем на tabs-content */
        /* search__content-item--active заменяем на tabs-content--active */
        $('.search__content-item').removeClass('tabs-content--active');
        
        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });

});