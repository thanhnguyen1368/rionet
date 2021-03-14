var isClicked = false;
$(document).ready(function() {



    /*----Slick slider----*/
    $('.slider-login').slick({
        centerMode: false,
        slidesToShow: 1,
    $('.btn-menu').click(function() {
        $(this).toggleClass('active');
    });
    $('.btn-menu').click(function() {
        $('body').toggleClass('show-menu');
    });
    $('.menu-nav__link li a').click(function() {
        $('.btn-menu').removeClass('active');
    });
    $('.menu-nav__button li a').click(function() {
        $('body').removeClass('show-menu');
    });
  /*----Slick slider----*/
  $('.slider-login').slick({
		centerMode: false,
		slidesToShow: 1,

        arrows: false,
        autoplay: true,
        dots: true
    });
    $('.slider-about').slick({
        centerMode: false,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        dots: true
    });


    /*----Back to Top----*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.pagetop').addClass('active');
        } else {
            $('.pagetop').removeClass('active');
        }
    });

    $(".pagetop a").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });


    $(document).click(function() {
        if (!isClicked) {
            $('.languages ul').removeClass('dropdown-languages');
        }
        isClicked = false;
    });

});

var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
});
wow.init();