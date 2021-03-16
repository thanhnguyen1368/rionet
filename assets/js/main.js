var isClicked = false;
$(document).ready(function() {
    $('.btn-menu').click(function() {
        $(this).toggleClass('active');
    });

    $('.menu-nav__button .button').click(function() {
        $('.btn-menu').removeClass('active');
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

    $('.login-form .form-control').blur(function()
    {
        if( !$(this).val() ) {
            $(".login-form__submit").removeClass('active');
        } else {
            $(".login-form__submit").addClass('active');
        }
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

    $('.slider-link').slick({
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        autoplay: false,
        dots: false,
        responsive: [{
            breakpoint: 767,
            settings: {
                // variableWidth: true,
                centerMode: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
            }
        }]
    });

    $('.slider-list__view.-post').slick({
        centerMode: false,
        slidesPerRow: 2,
        rows: 2,
        arrows: true,
        autoplay: false,
        dots: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesPerRow: 1,
                rows: 4,
                arrows: false,
                dots: false
            }
        }]
    });

    $('.slider-list__view.-video').slick({
        centerMode: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        autoplay: false,
        dots: true,
        slidesPerRow: 1,
        rows: 1,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                rows: 1,
                arrows: false,
                dots: false
            }
        }]
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
$('.nav-tabs .nav-link').on("click", function(e) {
        $('.nav-tabs__choose').text($(this).text())
        $('.nav-tabs').removeClass('show');
    })
    //Choose Item
choose_item('.nav-tabs__choose');

/**/
$('.js-ckeck-all').on("click", function() {
    $(this).toggleClass('is-click');

    if ($(this).hasClass('is-click')) {
        $(this).parents('section').find('.check-input').prop('checked', true);
    } else {
        $(this).parents('section').find('.check-input').prop('checked', false);
    }
});

// load more
$('.button-loadmore__download').on("click", function() {
    for (var n = 0; n < 20; ++n) {
        $('.row_download')[0].innerHTML += `
            <div class="col-md-6">
                <div class="image-box">
                    <div class="image-box__thumb">
                        <img src="./assets/images/image-box.jpg" alt="image">
                    </div>
                    <div class="image-box__content">
                        <div class="content-button d-flex justify-content-between align-items-center">
                            <span class="button">営業ニュース</span>
                            <input type="checkbox" class="check-input" id="">
                        </div>
                        <div class="meta">
                            <span>2017.11.29</span>
                        </div>
                        <div class="title">
                            <a href="#">営業ニュースNO.553</a>
                        </div>
                        <p class="des">「UV ソフトイヤモールド」「オーダーイヤチップ」仕様変更のご案内<br> リオネットロコ・HB-L1用イヤモール…
                            <span class="pdf">PDF</span></p>
                    </div>
                </div>
            </div>
        `

    };
    $('.loadmore1').hide();
});

$('.button-loadmore__movie').on("click", function() {
    for (var n = 0; n < 20; ++n) {
        $('.row_movie')[0].innerHTML += `
            <div class="col-md-6">
                <div class="video-box">
                    <div class="video-box__thumb style-2">
                        <button class="btn_modal_video" data-toggle="modal" data-target="#modal_video">
                            <img src="./assets/images/video.jpg" alt="image">
                        </button>
                    </div>
                    <div class="video-box__content">
                        <div class="content-button d-flex justify-content-between align-items-center">
                            <div class="meta">
                                <span>2017.11.29</span>
                            </div>
                            <input type="checkbox" class="check-input">
                        </div>
                        <a href="movie-detail.html">
                            <div class="title">
                                補聴器販売に関わる基礎知識（初級編）
                            </div>
                        </a>
                        <p class="des">補聴器販売に関わる基礎知識（初心者向け）の動画です。<br>補聴器販売に関わる基礎知識（初心者向け）の動画です。</p>
                    </div>
                </div>
            </div>
            `
    };
    $('.loadmore2').hide();
});

$('.button-loadmore__movie1').on("click", function() {
    for (var n = 0; n < 20; ++n) {
        $('.movie1 .row')[0].innerHTML += `
            <div class="col-md-6">
                <a href="movie-detail.html">
                    <div class="video-box">
                        <div class="video-box__thumb">
                        <button class="btn_modal_video" data-toggle="modal" data-target="#modal_video1">
                            <img src="./assets/images/video.jpg" alt="image">
                        </button>
                        </div>
                        <div class="video-box__content">
                            <div class="content-button d-flex justify-content-between align-items-center">
                                <div class="meta">
                                    <span>2017.11.29</span>
                                </div>
                                <input type="checkbox" class="check-input">
                            </div>
                            <div class="title">
                                補聴器販売に関わる基礎知識（初級編）
                            </div>
                            <p class="des">補聴器販売に関わる基礎知識（初心者向け）の動画です。<br>補聴器販売に関わる基礎知識（初心者向け）の動画です。</p>
                        </div>
                    </div>
                </a>
            </div>
            `
    };
    $('.loadmore3').hide();
});

$('.button-loadmore__movie2').on("click", function() {
    for (var n = 0; n < 20; ++n) {
        $('.movie2 .row')[0].innerHTML += `
            <div class="col-md-6">
                <div class="image-box">
                    <div class="image-box__thumb">
                        <img src="./assets/images/image-box.jpg" alt="image">
                    </div>
                    <div class="image-box__content">
                        <div class="content-button d-flex justify-content-between align-items-center">
                            <span class="button">各種ダウンロード</span>
                            <input type="checkbox" class="check-input" id="">
                        </div>
                        <div class="meta">
                            <span>2017.11.29</span>
                        </div>
                        <div class="title">
                            Version.1.13.1(S)
                        </div>
                        <p class="des">「UV ソフトイヤモールド」「オーダーイヤチップ」仕様変更のご案内<br> リオネットロコ・HB-L1用イヤモール…
                            <span class="pdf">PDF</span></p>
                    </div>
                </div>
            </div>
            `
    };
    $('.loadmore4').hide();
});

$('.button-loadmore__product').on("click", function() {
    for (var n = 0; n < 20; ++n) {
        $('.row_product')[0].innerHTML += `
            <div class="col-md-6">
                <a href="product-detail.html">
                    <div class="image-box style-2">
                        <div class="image-box__thumb">
                            <img src="./assets/images/image-box.jpg" alt="image">
                        </div>
                        <div class="image-box__content">
                            <div class="content-button d-flex justify-content-between align-items-center">
                                <span class="button">製品情報</span>
                                <input type="checkbox" class="check-input">
                            </div>
                            <div class="title">
                                リオネットシリーズ
                            </div>
                            <p class="des">マキシエンス<br> HB-A3AA </p>
                            <div class="bottom d-flex">
                                <p>発売時期</p>
                                <div class="meta">
                                    <span>2017.11.29</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            `
    };
    $('.loadmore5').hide();
});
$('.button-loadmore__index1').on("click", function() {
    for (var n = 0; n < 10; ++n) {
        $('.loadmore6_content')[0].innerHTML += `
        <li class="list__item">
            <div class="list__item__date">2020.12.24</div>
            <div class="list__item__type">カテゴリー1</div>
            <div class="list__item__title"><a href="#">サマリーテキストサマリーテキストサマリーテキストサマリーテキストテキストサマリー…</a></div>
        </li>
            `
    };
    $('.loadmore6').hide();
});
// load more

// select delete in my-list page

$(".select-delete").each(function(index) {
    $(this).on("click", function() {
        $(this).toggleClass("select-delete-active");
    });
});
$(".button-select-all").on("click", function() {
    $(".select-delete").each(function(index) {
        if (!$(this).hasClass('select-delete-active')) {
            $(this).toggleClass("select-delete-active");
        }
    });
});
$(".button-deselect-all").on("click", function() {
    $(".select-delete").each(function(index) {
        if ($(this).hasClass('select-delete-active')) {
            $(this).removeClass("select-delete-active");
        }
    });
});
// select delete in my-list page
