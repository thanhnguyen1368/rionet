var isClicked = false;
$(document).ready(function() {



    $('.slider-login').slick({
        centerMode: false,
        slidesToShow: 1,
    })
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

function choose_item(elm) {
    $(elm).click(function(e) {
        e.preventDefault();
		$(this).toggleClass('has_under_open');
        $(this).next().toggleClass('show');

    })
}
$('.nav-tabs .nav-link').on("click",function(e){
	$('.nav-tabs__choose').text($(this).text())
	$('.nav-tabs').removeClass('show');
})
//Choose Item
choose_item('.nav-tabs__choose');

/**/
$('.js-ckeck-all').on("click",function(){
	$(this).toggleClass('is-click');

	if($(this).hasClass('is-click')){
		$(this).parents('section').find('.check-input').prop('checked', true);
	}else{
		$(this).parents('section').find('.check-input').prop('checked', false);
	}
});

