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

    $('.login-form .form-control').on("keydown change",function()
    {
        let id = $('.js-input-id').val()
        let pwd = $('.js-input-pwd').val()
        if( id || pwd) {
            $(".login-form__submit").addClass('active');
        } else {
            $(".login-form__submit").removeClass('active');
        }
    });

    $('.focus-placeholder').mouseover(function(){
        let attr = $(this).attr('placeholder')
        let data_attr = $(this).data('placeholder')
        $(this).data('placeholder', attr); 
        $(this).attr('placeholder', data_attr); 
    }).mouseout(function(){
        let attr = $(this).attr('placeholder')
        let data_attr = $(this).data('placeholder')
        $(this).data('placeholder', attr); 
        $(this).attr('placeholder', data_attr); 
    });

    $('.js-focus-text').mouseover(function(){
        let attr = $(this).text()
        let data_attr = $(this).data('hover')
        $(this).data('hover', attr); 
        $(this).text(data_attr); 
    }).mouseout(function(){
        let attr = $(this).text()
        let data_attr = $(this).data('hover')
        $(this).data('hover', attr); 
        $(this).text(data_attr); 
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
    $(".pagetop").click(function() {
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


$('.row_product .check-input,.row_movie .check-input,.row_download .check-input').on("click", function() {
    var $checked = $( ".check-input:checked" ).length;
    if ($checked > 0) {
        $('.js-ckeck-all').addClass('button-active');
    } else {
        $('.js-ckeck-all').removeClass('button-active');
    }
});

$('.js-ckeck-all').on("click", function() {
    var $html = '<span>マイリスト登録済み</span>';
    if ($(this).hasClass('button-active')) {
        $(this).removeClass('button-active');
        $('.row_product .check-input:checked,.row_movie .check-input:checked,.row_download .check-input:checked').after($html).remove();
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
    for (var n = 0; n < 20; ++n) {
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


$('.js-loadmore-mylist .button-loadmore').on("click", function() {
    for (var n = 0; n < 20; ++n) {
        $('.js-loadmore-mylist')[0].innerHTML += `
                <div class="col-md-6">
                <div class="image-box">
                    <div class="image-box__thumb">
                        <img src="./assets/images/image-box.jpg" alt="image">
                    </div>
                    <div class="image-box__content">
                        <div class="content-button d-flex justify-content-between align-items-center">
                            <span class="button"><a href="my-list-detail.html">製品情報</a></span>
                            <span class="button select-delete ">削除選択</span>
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
    $('.btn__loadmore__wrap').hide();
});

$('.js-loadmore-news-details .button-loadmore').on("click", function() {
    for (var n = 0; n < 20; ++n) {
        $('.js-loadmore-news-details')[0].innerHTML += `
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
    $('.btn__loadmore__wrap').hide();
});

// load more

// select delete in my-list page

$(".select-delete").on("click", function() {
    $(this).toggleClass("select-delete-active");
    if ($(".select-delete").hasClass('select-delete-active')) {
        $('.button-deselect-all').addClass("button-active");
    } else {
        $('.button-deselect-all').removeClass("button-active");
    }

});

$(".button-select-all").on("click", function() {
    $(".select-delete").each(function(index) {
        if (!$(this).hasClass('select-delete-active')) {
            $(this).toggleClass("select-delete-active");
            $('.button-deselect-all').addClass("button-active");
        }
    });
});
$(".button-deselect-all").on("click", function() {
    $('.button-deselect-all').removeClass("button-active");
    $(".select-delete").each(function(index) {
        if ($(this).hasClass('select-delete-active')) {
            $(this).closest('.col-md-6').remove();
        }
    });
});
// select delete in my-list page

// Start Accordion
var t
window.onresize = () => {
    resizing(this, this.innerWidth, this.innerHeight) //1
    if (typeof t == 'undefined') resStarted() //2
    clearTimeout(t); t = setTimeout(() => { t = undefined; resEnded(this.innerWidth) }, 500) //3
}

function resizing(target, w, h) {
    // console.log(`Youre resizing: width ${w} height ${h}`)
}    
function resStarted() { 
    // console.log('Resize Started') 
}
function resEnded(innerWidth) { 
    // console.log('Resize Ended') 
    dn_accordion(innerWidth)
}
dn_accordion()
function dn_accordion(){
    // console.log('innerWidth' + innerWidth);
    let $element = $('.jd-accordionz');
    let $accordion_parent = '#accordion-s1';

    let button = $element.find('.bnt__collapse')
    let content = $element.find('.collapse')

    if(innerWidth<768){
        button.addClass('collapsed').attr('aria-expanded',false)
        content.removeClass('show').attr('data-parent',$accordion_parent)

        $element.find('.card:first-child .bnt__collapse').removeClass('collapsed').attr('aria-expanded',true)
        $element.find('.card:first-child .collapse').addClass('show')
    }else{
        button.removeClass('collapsed').attr('aria-expanded',true)
        content.addClass('show').attr('data-parent','')
    }
}
// End Accordion