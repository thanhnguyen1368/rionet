var isClicked = false;
$(document).ready(function(){

  /*----header----*/
  $('.navbar .navbar-toggler').click(function() {
    $('header').toggleClass('active');
  });
	lastScroll = 0;
	$(window).on('scroll',function() {
		var scroll = $(window).scrollTop();
		if (scroll > 0) {
			$("header").addClass("sticky-header");
			if (lastScroll - scroll > 0) {
				$("header").removeClass("sticky-header");
			} else {
				$("header").addClass("full-header");
			}
		} else {
			$("header").removeClass("full-header");
		}
		lastScroll = scroll;
	});

  /*----Languages---*/
	$('.languages .languages-item').click(function() {
		$(this).next().toggleClass('dropdown-languages');
		isClicked = true;
	});

  $('.languages ul li').click(function() {
    var $liIndex = $(this).index() + 1;
    $('.languages ul li').removeClass('active');
    $('.languages ul li:nth-child('+$liIndex+')').addClass('active');
    var $getLang = $(this).html();
    $('.languages .languages-item').html($getLang);
  });

  /*----button scroll----*/
  $('.banner-scroll span').click(function() {
    var $heightHeader = $('header').height();
    $('html, body').animate({ scrollTop: $('.top-maps').offset().top - $heightHeader }, 1000);
  });

  /*----Slick slider----*/
  $('.our-products-item').slick({
		centerMode: false,
		slidesToShow: 9,
    arrows: false,
    autoplay: true,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
          dots: true,
  				centerMode: true,
  				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
          dots: true,
				  slidesToShow: 2
			  }
			},
      {
			  breakpoint: 420,
			  settings: {
          dots: true,
				  slidesToShow: 1,
          centerMode: true
			  }
			}
		]
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

var wow = new WOW(
  {
    boxClass:     'wow',
    animateClass: 'animated',
    offset:       0,
    mobile:       true,
    live:         true
  }
);
wow.init();
