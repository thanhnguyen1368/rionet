var isClicked = false;

function header_fixed() {
    lastScroll = 0;
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $("header").addClass("fixed-header");
            $("main").addClass("scroll-header");
            if (lastScroll - scroll > 0) {
                $("header").addClass("full-header").slideDown();
            } else {
                $("header").removeClass("full-header");
            }
        } else {
            $("header").removeClass("full-header").slideDown();
            $("header").removeClass("fixed-header");
            $("main").removeClass("scroll-header");
        }
        lastScroll = scroll;
    });
}

function open_under(elem) {
    $(elem).click(function(e) {
        e.preventDefault();
        if(!$(this).hasClass('-no-dropdown')){
            $(this).toggleClass('has_under_open');
            $(this).next().toggleClass('show');
        }
       
    });
}

function choose_item(elm) {
    $(elm).click(function(e) {
        e.preventDefault();
        $(this).toggleClass('has_under_open');
        $(this).next().toggleClass('show');

    })
}
function dn_accordion(){
    // console.log('innerWidth' + innerWidth);

    
    let $element = $('.js-accordionz');
    let $accordion_parent = '.js-accordionz';

    let button = $element.find('.bnt__collapse')
    let content = $element.find('.collapse')

    if(window.innerWidth<=768){
        
        button.addClass('collapsed').attr('aria-expanded',false)
        content.removeClass('show').attr('data-parent',$accordion_parent)

        $element.find('.card:first-child .bnt__collapse').removeClass('collapsed').attr('aria-expanded',true)
        $element.find('.card:first-child .collapse').addClass('show')
    }else{
        button.removeClass('collapsed').attr('aria-expanded',true)
        content.addClass('show').attr('data-parent','')
    }
}

function focus_text(innerWidth){
console.log(innerWidth);
    if(innerWidth >= 768){
        $('.js-focus-text').addClass('js-pc')
    }else{
        $('.js-focus-text').removeClass('js-pc')
    }

    if($('.js-focus-text').hasClass('js-pc')){
        console.log('11111111111');
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
    }
    
}

$(document).ready(function() {

    // header_fixed();
    open_under('.show-more-action>a');
    choose_item('.nav-tabs__choose');
    
    dn_accordion();
    // Check PC

    focus_text(window.innerWidth);
    
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
    /**/
     //smoothscroll
     $('.search-top__detail a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        // $('a').each(function () {
            // $(this).removeClass('active');
        // })
        // $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-80
        });
    });
    /**/
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

    $('.js-slider-list__view.-post').slick({
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

    $('.js-slider-list__view.-video').slick({
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

$('.nav-tabs .nav-link').on("click", function(e) {
    $('.nav-tabs__choose').text($(this).text())
    $('.nav-tabs').removeClass('show');
})

$('.js-sc__content').on("click",".check-input", function() {
    let $checked = $( ".check-input:checked" ).length;
    let check_all = $(this).closest('.js-sc__content').find('.js-ckeck-all')

    if ($checked > 0) {
        check_all.addClass('button-active');
    } else {
        check_all.removeClass('button-active');
    }
});

$('.js-ckeck-all').on("click", function(e) {
    e.preventDefault()
    let input_checkbox = $(this).closest('.js-sc__content').find('.check-input:checked')
    let $html = '<span>マイリスト登録済み</span>';
    if ($(this).hasClass('button-active')) {
        $(this).removeClass('button-active');
        input_checkbox.next().remove()
        input_checkbox.after($html).remove();
    }
});

// load more
$('.button-loadmore__download').on("click", function() {
    let pshow = $(this).attr('data-show')
    $(this).closest('.btn__loadmore__wrap').hide()
    for (var n = 0; n < pshow; ++n) {
        $('.row_download')[0].innerHTML += '<div class="col-md-6"> <div class="image-box"> <div class="image-box__thumb"> <div class="dnfix__thumb"><img src="./assets/images/image-box.jpg" alt="image"></div> </div> <div class="image-box__content"> <div class="content-button d-flex justify-content-between align-items-center"> <span class="button">営業ニュース</span> <label class="fake-checkbox"><input type="checkbox" class="check-input"></input><div class="square"></div></label> </div> <div class="meta"> <span>2017.11.29</span> </div> <div class="title"> <a href="#">営業ニュースNO.553</a> </div> <p class="des">「UV ソフトイヤモールド」「オーダーイヤチップ」仕様変更のご案内<br> リオネットロコ・HB-L1用イヤモール… <span class="pdf">PDF</span></p> </div> </div> </div>'
    };
});

$('.button-loadmore__movie').on("click", function() {
   let pshow = $(this).attr('data-show')
   $(this).closest('.btn__loadmore__wrap').hide()
    for (var n = 0; n < pshow; ++n) {
        $('.row_movie')[0].innerHTML += '<div class="col-md-6"> <div class="video-box"> <div class="video-box__thumb style-2"> <button class="btn_modal_video" data-toggle="modal" data-target="#modal_video"> <img src="./assets/images/video.jpg" alt="image"><span class="icon-play"></span> </button> </div> <div class="video-box__content"> <div class="content-button d-flex justify-content-between align-items-center"> <div class="meta"> <span>2017.11.29</span> </div> <input type="checkbox" class="check-input"> </div> <a href="movie-detail.html"> <div class="title"> 補聴器販売に関わる基礎知識（初級編） </div> </a> <p class="des">補聴器販売に関わる基礎知識（初心者向け）の動画です。<br>補聴器販売に関わる基礎知識（初心者向け）の動画です。</p> </div> </div> </div>'
    };
});

$('.button-loadmore__movie1').on("click", function() {
   let pshow = $(this).attr('data-show')
   $(this).closest('.btn__loadmore__wrap').hide()
    for (var n = 0; n < pshow; ++n) {
        $('.movie1 .row')[0].innerHTML += '<div class="col-md-6"> <a href="movie-detail.html"> <div class="video-box"> <div class="video-box__thumb"> <button class="btn_modal_video" data-toggle="modal" data-target="#modal_video1"> <img src="./assets/images/video.jpg" alt="image"><span class="icon-play"></span> </button> </div> <div class="video-box__content"> <div class="content-button d-flex justify-content-between align-items-center"> <div class="meta"> <span>2017.11.29</span> </div> <input type="checkbox" class="check-input"> </div> <div class="title"> 補聴器販売に関わる基礎知識（初級編） </div> <p class="des">補聴器販売に関わる基礎知識（初心者向け）の動画です。<br>補聴器販売に関わる基礎知識（初心者向け）の動画です。</p> </div> </div> </a> </div>'
    };
});

$('.button-loadmore__movie2').on("click", function() {
   let pshow = $(this).attr('data-show')
   $(this).closest('.btn__loadmore__wrap').hide()
    for (var n = 0; n < pshow; ++n) {
        $('.js-loadmore-movie2')[0].innerHTML += '<div class="col-md-6"> <div class="image-box -mb-sm"> <div class="image-box__thumb"> <div class="dnfix__thumb"><img src="./assets/images/image-box.jpg" alt="image"></div> </div> <div class="image-box__content"> <div class="content-button d-flex justify-content-between align-items-center"> <span class="button">各種ダウンロード</span> <label class="fake-checkbox"><input type="checkbox" class="check-input"></input><div class="square"></div></label> </div> <div class="meta"> <span>2017.11.29</span> </div> <div class="title"> Version.1.13.1(S) </div> <p class="des">「UV ソフトイヤモールド」「オーダーイヤチップ」仕様変更のご案内<br> リオネットロコ・HB-L1用イヤモール… <span class="pdf">PDF</span></p> </div> </div> </div>'
    };
});

$('.button-loadmore__product').on("click", function() {
   let pshow = $(this).attr('data-show')
   $(this).closest('.btn__loadmore__wrap').hide()
    for (var n = 0; n < pshow; ++n) {
        $('.row_product')[0].innerHTML += '<div class="col-md-6"> <a href="product-detail.html"> <div class="image-box style-2"> <div class="image-box__thumb"> <div class="dnfix__thumb"><img src="./assets/images/image-box.jpg" alt="image"></div> </div> <div class="image-box__content"> <div class="content-button d-flex justify-content-between align-items-center"> <span class="button">製品情報</span> <input type="checkbox" class="check-input"> </div> <div class="title"> リオネットシリーズ </div> <p class="des">マキシエンス<br> HB-A3AA </p> <div class="bottom d-flex"> <p>発売時期</p> <div class="meta"> <span>2017.11.29</span> </div> </div> </div> </div> </a> </div>'
    };
});
$('.button-loadmore__product2').on("click", function() {
    let pshow = $(this).attr('data-show')
    $(this).closest('.btn__loadmore__wrap').hide()
     for (var n = 0; n < pshow; ++n) {
         $('.row_product2')[0].innerHTML += '<div class="col-md-6 style1"> <div class="image-box"> <div class="image-box__thumb"> <div class="dnfix__thumb"><img src="./assets/images/image-box.jpg" alt="image"></div> </div> <div class="image-box__content"> <div class="content-button d-flex justify-content-between align-items-center"> <span class="button"><a href="my-list-detail.html">製品情報</a></span> <span class="button select-delete ">削除選択</span> </div> <div class="title"> <a href="#">リオネットシリーズ</a> </div> <p class="des">マキシエンス<br> HB-A3AA <div class="gr_btn"> <a href="#" class="">発売時期</a><span>2020.12.24</span> </div> </div> </div> </div>'
     };
 });


$('.button-loadmore__index1').on("click", function() {
   let pshow = $(this).attr('data-show')
   $(this).closest('.btn__loadmore__wrap').hide()
   console.log(1111111);
    for (var n = 0; n < pshow; ++n) {
        $('.loadmore_index1_content')[0].innerHTML += '<li class="list__item"> <div class="list__item__date">2020.12.24</div> <div class="list__item__type">カテゴリー1</div> <div class="list__item__title"><a href="#">サマリーテキストサマリーテキストサマリーテキストサマリーテキストテキストサマリー…</a></div> </li>'
    };
});
$('.button-loadmore__index2').on("click", function() {
    let pshow = $(this).attr('data-show')
    $(this).closest('.btn__loadmore__wrap').hide()
    console.log(1111111);
     for (var n = 0; n < pshow; ++n) {
         $('.loadmore_index2_content')[0].innerHTML += '<li class="list__item"> <div class="list__item__date">2020.12.24</div> <div class="list__item__type">カテゴリー1</div> <div class="list__item__title"><a href="#">サマリーテキストサマリーテキストサマリーテキストサマリーテキストテキストサマリー…</a></div> </li>'
     };
 });


$('.js-loadmore-mylist .button-loadmore').on("click", function() {
   let pshow = $(this).attr('data-show')
   $(this).closest('.btn__loadmore__wrap').hide()
    for (var n = 0; n < pshow; ++n) {
        $('.js-loadmore-mylist')[0].innerHTML += '<div class="col-md-6"> <div class="image-box"> <div class="image-box__thumb"> <div class="dnfix__thumb"><img src="./assets/images/image-box.jpg" alt="image"></div> </div> <div class="image-box__content"> <div class="content-button d-flex justify-content-between align-items-center"> <span class="button"><a href="my-list-detail.html">製品情報</a></span> <span class="button select-delete ">削除選択</span> </div> <div class="meta"> <span>2017.11.29</span> </div> <div class="title"> <a href="#">営業ニュースNO.553</a> </div> <p class="des">「UV ソフトイヤモールド」「オーダーイヤチップ」仕様変更のご案内<br> リオネットロコ・HB-L1用イヤモール… <span class="pdf">PDF</span></p> </div> </div> </div>'
    };
});

$('.js-loadmore-news-details .button-loadmore').on("click", function() {
   let pshow = $(this).attr('data-show')
   $(this).closest('.btn__loadmore__wrap').hide()
    for (var n = 0; n < pshow; ++n) {
        $('.js-loadmore-news-details')[0].innerHTML += '<div class="col-md-6"> <div class="image-box"> <div class="image-box__thumb"> <div class="dnfix__thumb"><img src="./assets/images/image-box.jpg" alt="image"></div> </div> <div class="image-box__content"> <div class="content-button d-flex justify-content-between align-items-center"> <span class="button">営業ニュース</span> <label class="fake-checkbox"><input type="checkbox" class="check-input"></input><div class="square"></div></label> </div> <div class="meta"> <span>2017.11.29</span> </div> <div class="title"> <a href="#">営業ニュースNO.553</a> </div> <p class="des">「UV ソフトイヤモールド」「オーダーイヤチップ」仕様変更のご案内<br> リオネットロコ・HB-L1用イヤモール… <span class="pdf">PDF</span></p> </div> </div> </div>'
    };
});


$('.js-loadmore-video .button-loadmore').on("click", function() {
   let pshow = $(this).attr('data-show')
   $(this).closest('.btn__loadmore__wrap').hide()
    for (var n = 0; n < pshow; ++n) {
        $('.js-loadmore-video')[0].innerHTML += '<div class="col-md-6"> <div class="image-box"> <div class="image-box__thumb"> <div class="dnfix__thumb"><img src="./assets/images/image-box.jpg" alt="image"></div> </div> <div class="image-box__content"> <div class="content-button d-flex justify-content-between align-items-center"> <span class="button">動画</span> <label class="fake-checkbox"><input type="checkbox" class="check-input"></input><div class="square"></div></label> </div> <div class="meta"> <span>2017.11.29</span> </div> <div class="title"> <a href="#">補聴器販売に関わる基礎知識（初級編）</a> </div> <p class="des">補聴器販売に関わる基礎知識（初心者向け）の動画です。補聴器販売に関わる基礎知識（初心者向け）の動画です。補聴器販売に… </p> </div> </div> </div>'
    };
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
    $(this).toggleClass("button-active");

    if($(this).hasClass("button-active")){
        $(".select-delete").each(function(index) {
            $(this).addClass("select-delete-active");
            $('.button-deselect-all').addClass("button-active");
        });
    }else{
        $(".select-delete").each(function(index) {
            $(this).removeClass("select-delete-active");
            $('.button-deselect-all').removeClass("button-active");
        });
    }
});

$('.-mylist__content').on("click",function(){
    let thiz = $(this)
    let allChecked = true;

    let data = $('.-mylist__content').find(".select-delete").each(function(index) {
        if(!$(this).hasClass('select-delete-active')){
            allChecked = false;
            return false; 
        }
    });
    if(!allChecked){
        $(".button-select-all").removeClass("button-active");
    }
})

$("#modal_alert .btn-del").on("click", function(e) {
    e.preventDefault();
    $("#modal_alert").modal('hide');
    $('.button-deselect-all').removeClass("button-active");
    $(".select-delete").each(function(index) {
        if ($(this).hasClass('select-delete-active')) {
            $(this).closest('.col-md-6').remove();
        }
    });
});

$('#modal_alert .btn-cancel').on("click",function(e){
    e.preventDefault();
    $("#modal_alert").modal('hide');
    $('.button-deselect-all').removeClass("button-active");
    $(".select-delete").each(function(index) {
        ($(this).removeClass('select-delete-active')) 
    });
})


$('.button-deselect-all').on("click",function(e){
    e.preventDefault()
    if($(this).hasClass('button-active')){
        $('#modal_alert').modal('toggle')
    }
})


// select delete in my-list page

// Start Accordion
var t
window.onresize = function () {
    resizing(this, this.innerWidth, this.innerHeight) //1
    if (typeof t == 'undefined') resStarted() //2
    clearTimeout(t); t = setTimeout(function() { t = undefined; resEnded(this.innerWidth) }, 500) //3
}

function resizing(target, w, h) {
    // console.log(`Youre resizing: width ${w} height ${h}`)
}    
function resStarted() { 
    // console.log('Resize Started') 
}
function resEnded(innerWidth) { 
    console.log('Resize Ended') 
    dn_accordion(innerWidth);
    focus_text(innerWidth)

}

$('.nav-tabs__choose').on("click",function(){
    $('#productSearchTab').slideToggle();
})
// End Accordion

$("#modal_video").on('hidden.bs.modal', function (e) {
    $("#modal_video iframe").attr("src", $("#modal_video iframe iframe").attr("src"));
});

$('.btn_modal_video').on('click', function(e) {
    videoURL = $(this).attr('data-videosrc');
    e.preventDefault();
    $('.modal iframe').attr('src', videoURL);
    $('.modal').toggleClass('is-visible');
});
$('.modal--video .close').on('click', function(e) {
    e.preventDefault();
    $('.modal iframe').attr('src', '');
 });